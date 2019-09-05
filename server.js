const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(session({
  name: 'webauth',
  secret: 'secret_stuff',
  httpOnly: true,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 30
  }
}));

module.exports = server;