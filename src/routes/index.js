const express = require('express');
const app = express();

const characterRouter = require('./character.js');

app.use(characterRouter);

module.exports = app;
