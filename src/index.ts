var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app).listen(80);
var io = require("socket.io")(server);

export class GameEngine {
    constructor() {
        io.on("connection", function(socket: any) {
            var interval: any;
        
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
        
        console.log("Starting Socket App - http://localhost:3001");
       
    }

    
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

new GameEngine();