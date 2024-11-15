require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const rankingRoutes = require('./routes/ranking.js');

const app = express();
const server = http.createServer(app);

app.use(cors({
    // origin: ['https://coders-cup-scoreboard-frontend.vercel.app', 'https://leaderboard.acmnuceskhi.com'],
    origin: ['http://localhost:3000/'],
    credentials: true
}));

const io = socketio(server, {
    cors: {
        // origin: ['https://coders-cup-scoreboard-frontend.vercel.app', 'https://leaderboard.acmnuceskhi.com'],
        origin: ['http://localhost:3000'],
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: "Coders cup scoreboard" });
});

// Pass the io instance to the ranking routes
app.use('/api', rankingRoutes(io));

server.listen(process.env.PORT, () => {
    console.log('Connected and listening to requests on', process.env.PORT);
});
