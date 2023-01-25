const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const classe = require('./route/classe')
const instance = require('./route/instance')
const raid = require('./route/raid')

const joueur = require('./route/joueur')

// app.use(bodyParser.json());
// const corsOption ={
//                 origin: '*',
// };

// app.use(cors(corsOption));

app.use(bodyParser.json());

app.use((req, res, next) => {
               res.setHeader('Access-Control-Allow-Origin', '*');
               res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
               res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
               next();
             });

app.use('/api/classe', classe)
app.use('/api/instance', instance)
app.use('/api/raid', raid)
app.use('/api/joueur', joueur)

module.exports = app;