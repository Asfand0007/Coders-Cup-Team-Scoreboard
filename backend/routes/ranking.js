const express = require('express');
const Authenticate = require('../middleware/auth.js');
const updateBuffer= require('../bufferController/bufferfunctions.js')

module.exports = function (io) {
    const router = express.Router();
    let score = {
        'Gunners': { '21k': 0, '22k': 0, '23k': 0, '24k': 0 },
        'Culers': { '21k': 0, '22k': 0, '23k': 0, '24k': 0 },
        'Red Devils': { '21k': 0, '22k': 0, '23k': 0, '24k': 0 },
        'Galacticos': { '21k': 0, '22k': 0, '23k': 0, '24k': 0 }
    };
    let buffer = {'Houses': score, '21k': [], '22k': [], '23k': [], '24k': []};

    io.on("connection", (socket) => {
        console.log("A user connected");
        socket.on("joinRoom", (room) => {
            if (["21k", "22k", "23k", "24k", "Houses"].includes(room)) {
                socket.join(room);
                console.log(`User joined ${room}`);
                if (buffer[room]) {
                    socket.emit("sendData", buffer[room]);
                }
            } else {
                console.log("Invalid room");
            }
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });

    router.post('/postRanking', Authenticate, async (req, res) => {
        const { data, batch } = req.body;

        if (!data) {
            console.log("No data found");
            return res.status(500).json({ error: "No data found" });
        }
        if (!batch || !["21k", "22k", "23k", "24k"].includes(batch)) {
            console.log("Invalid batch");
            return res.status(500).json({ error: "Invalid batch" });
        }

        updatedData = updateBuffer(data, batch, buffer['Houses']);
        buffer[batch]= updatedData.data;
        buffer['Houses']= updatedData.score;
        console.log(`Buffer updated for batch ${batch}...`);

        io.to(batch).emit("sendData", data);
        io.to('Houses').emit("sendData", buffer['Houses']);

        return res.status(200).json({ message: "Buffer updated" });
    });

    router.get('/getRanking', (req, res) => {
        if (buffer) {
            return res.status(200).json(buffer);
        }
    });

    return router;
};
