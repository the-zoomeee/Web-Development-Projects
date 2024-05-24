// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.on('setUsername', (username) => {
        socket.username = username;
        console.log(`${socket.username} connected`);
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', { username: socket.username, text: msg });
    });

    socket.on('disconnect', () => {
        console.log(`${socket.username} disconnected`);
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
