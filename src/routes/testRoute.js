'use strict'

const express = require('express');
const test = require('../controller/test');

const app = express();

app.get('/test', test.getTest);

module.exports = app;