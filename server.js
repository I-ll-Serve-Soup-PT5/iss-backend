const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

const authRouter = require('./routes/auth-routes');
const ingredientsRouter = require('./routes/ingredient-routes');
const unitsRouter = require('./routes/unit-routes');
const restricted = require('./middleware/restricted');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(session({
  name: 'webauth',
  secret: process.env.SECRET || 'secret_stuff',
  httpOnly: true,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 30
  }
}));

server.use('/api/auth', authRouter);
server.use('/api/ingredients', restricted, ingredientsRouter);
server.use('/api/units', restricted, unitsRouter);

module.exports = server;