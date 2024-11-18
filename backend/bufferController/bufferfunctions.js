const teamHouses = require("../assests/data");

const getHouse = (teamName) => {
    const match = teamName.match(/\(([^)]+)\)/);
    if (!match) return null;

    const houseName = match[1].trim().toLowerCase();
    switch (houseName.substring(0, 2)) {
        case 're':
            return 'Red Devils';
        case 'ga':
            return 'Galacticos';
        case 'gu':
            return 'Gunners';
        case 'cu':
            return 'Culers';
        default:
            return null;
    }
};

updateBuffer= (data, batch,score)=>{
    let count=0;
    let tempScore = {
        'Gunners': 0,
        'Culers': 0,
        'Red Devils': 0,
        'Galacticos': 0
    };

    for (let team of data) {
        //temp condition for top 16 only
        if(count>=16) break;
        count++

        console.log(getHouse(team.teamName));
        const house= getHouse(team.teamName);
        // const house= teamHouses[batch][team.teamName];
        tempScore[house]+=Number(team.score);
    }

    for(let key in tempScore)
        score[key][batch]= tempScore[key];
    
    console.log(score);
    return {data, score};
};

module.exports= updateBuffer;