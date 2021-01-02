'use strict'

const express = require('express');
const test = require('../controller/test');

const app = express();

app.get('/viajes', test.getViaje);
app.post('/viaje', test.setViaje);

module.exports = app;