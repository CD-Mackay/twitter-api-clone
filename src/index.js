const express = require('express');
const socket = require('socket.io');
const mongoose = require('mongoose');
const { Server } = require('http');

const app = express();
const server = Server(app);
const io = socket(server);

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

app.use((req, res, next) => {
  req.io = io;

  return next();
});

const PORT = process.env.PORT | 3002

server.listen(PORT, () => console.log('Server listening on port: ', PORT));