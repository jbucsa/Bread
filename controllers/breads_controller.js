// Dependencies
const express = require('express');

//Configuration 

const breads = express.Router();
const Bread = require('../models/bread,js')

//INDEX
breads.get('/', (req, res) =>
{
    res.send(Bread);
});


//SHOW
// localhost/breads/0
breads.get('/0', (req, res) =>
{
    res.send(Bread[0]);
});

module.exports = breads