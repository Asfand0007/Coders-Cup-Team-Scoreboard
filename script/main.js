require('dotenv').config
const puppeteer = require('puppeteer');
const userAgent = require('user-agents');
const KEY = require('./key.js');
// const backendURL= "https://coders-cup-scoreboard-2.onrender.com/api/postRanking";
const backendURL = "http://localhost:4000/api/postRanking";

const getData = async (URL) => {
    let browser = null;
    const viewportSize = { width: 1920, height: 1080 };
    try {
        browser = await puppeteer.launch({
            headless: "true",
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
            defaultViewport: viewportSize
        });
    } catch (error) {
        console.error('Error:', error);
    }
    
    const page = await browser.newPage();
    await page.setUserAgent(new userAgent().toString());
    await page.goto(URL, { waitUntil: 'networkidle0' });  // Wait for network to be idle

    try {
        await page.waitForSelector('#contest-rank-table', { timeout: 30000 });  // Wait up to 30 seconds
    } catch (e) {
        console.error('Table not found:', e);
        await page.screenshot({ path: 'error_screenshot.png' });
        console.log(await page.content());
        await browser.close();
        return { error: 'Table not found' };
    }
    
    const data = await page.evaluate(() => {
        const rows = document.querySelectorAll('#contest-rank-table tbody tr');
        const result = [];
        
        rows.forEach(row => {
            const rank = row.querySelector('td.rank')?.innerText.trim() || 'N/A';
            const teamName = row.querySelector('td.team a')?.innerText.trim() || 'N/A';
            const score = row.querySelector('td.solved span')?.innerText.trim() || 'N/A';
            const problems = [];
            const problemCells = row.querySelectorAll('td.prob');
            
            problemCells.forEach(cell => {
                const accepted = cell.classList.contains('accepted');
                const failed = cell.classList.contains('failed');
                let time = '';
                
                let problemStatus = 'Not attempted';
                if (accepted) {
                    problemStatus = 'Accepted';
                    time = cell.innerText.split('<br>')[0].trim().split('\n')[0].trim();
                } else if (failed) {
                    problemStatus = 'Failed';
                }
    
                let penalty = "";
                const spanElement = cell.querySelector('span');
                if (spanElement) {
                    penalty = spanElement.innerText.trim();
                }
                problems.push({
                    status: problemStatus,
                    time: time,
                    penalty: penalty
                });
            });
            
            result.push({ rank, teamName, score, problems });
        });
        
        return result;
    });
    
    
    await browser.close();
    return data;
};

const postData = async (data, batch) => {
    try {
        const response = await fetch(backendURL, {
            method: "POST",
            body: JSON.stringify({data, batch}),
            headers: {
                'Content-Type': 'application/json',
                'key': KEY
            }
        }); 
        
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        
        const json = await response.json();
        console.log(`Data sent to server batch(${batch}):`, json);
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
};

// Function to scrape data and send it to the server periodically
const scrapeAndSendData = async (batch, rankingURL) => {
    console.log(`Scraping data(${batch})...`);
    const data = await getData(rankingURL); // Await the data
    if (data && data.length > 0) {
        await postData(data, batch); // Send the data to the server
    } else {
        console.error("No data scraped or data is empty");
    }
};

// const rankURL ='https://vjudge.net/contest/672066#rank' ; //21k
const rankURL = ['https://vjudge.net/contest/673272#rank',
                'https://vjudge.net/contest/672067#rank'];//[test,23k]
const batch= ['22k', '23k'];

setInterval(() => scrapeAndSendData(batch[0], rankURL[0]), 20000);
setInterval(() => scrapeAndSendData(batch[1], rankURL[1]), 20000);
// Initial call to start immediately
// scrapeAndSendData('21k', rankURL[0]);
scrapeAndSendData(batch[0], rankURL[0]);
scrapeAndSendData(batch[1], rankURL[1]);