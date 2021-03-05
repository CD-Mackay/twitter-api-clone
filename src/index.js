const express = require('express');
const socket = require('socket.io');
const { Server } = require('http');

const app = express();
const server = Server(app);
const io = socket(server);

const PORT = process.env.PORT | 3002

server.listen(PORT, () => console.log('Server listening on port: ', PORT));