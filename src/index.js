'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

module.exports = app;