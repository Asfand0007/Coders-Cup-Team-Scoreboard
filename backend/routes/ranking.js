const express = require('express');
const Authenticate = require('../middleware/auth.js');

module.exports = function (io) {
    const router = express.Router();
    let buffer = {'21k':[], '23k':[]};

    io.on("connection", (socket) => {
        console.log("A user connected");
        socket.on("joinRoom", (room) => {
            if (room === "21k" || room === "23k") {
                socket.join(room);
                console.log(`User joined ${room}`);
                
                if (buffer[room]) {
                    socket.emit("sendData", buffer[room]);
                }
            } else {
                console.log("Invalid room");
            }
        });
        
        if (buffer)
            socket.emit("sendData", buffer);

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });

    router.post('/postRanking', Authenticate, (req, res) => {
        const { data, room } = req.body;

        if (!data ) {
            console.log("No data found");
            return res.status(500).json({ error: "No data found" });
        }
        if(!room || (room!='21k' && room!='23k')){
            console.log("Invalid room");
            return res.status(500).json({ error: "Invalid room" });
        }

        buffer[room] = data;
        console.log(`Buffer updated for room ${room}...`);

        io.to(room).emit("sendData", data);

        return res.status(200).json({ message: "Buffer updated" });
    });

    router.get('/getRanking', (req, res) => {
        if (buffer) {
            return res.status(200).json(buffer);
        }
    });

    return router;
};
