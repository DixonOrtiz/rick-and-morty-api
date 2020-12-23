const express = require('express');
const app = express();

// Import routers
const authRouter = require('./auth.js');
const characterRouter = require('./character.js');

app.use(characterRouter, authRouter);

module.exports = app;
