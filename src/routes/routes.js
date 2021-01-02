'use strict'

const express = require('express');
const testRoute = require('./testRoute');

const app = express();

app.use(testRoute);

module.exports = app;