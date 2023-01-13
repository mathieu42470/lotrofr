const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const classe = require('./route/classe')
const instance = require('./route/instance')
const raid = require('./route/raid')

app.use(bodyParser.json());
const corsOption ={
                origin: '*',
};

app.use(cors(corsOption));

app.use('/api/classe', classe)
app.use('/api/instance', instance)
app.use('/api/raid', raid)

module.exports = app;