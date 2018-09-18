const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
app.use(cors());

let port = process.env.PORT || 3001;

const server = http.createServer(app).listen(port);

const io = require("socket.io")(server);

export class GameEngine {
    constructor() {
        io.on("connection", function(socket: any) {
            let interval: NodeJS.Timer;
        
            socket.on("startGame", function() {
                interval = setInterval(function() {
                    socket.emit("entityUpdate", getRandomInt(1, 10));
                }, 1000);
            });
        
            socket.on("stopGame", function() {
                if (interval) clearInterval(interval);
            });
        
            // socket.emit("entityUpdate", "Welcome to Cyber Chat");
        
        });
        
        console.log(`Socket started on port: ${port}`);
    }
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

new GameEngine();