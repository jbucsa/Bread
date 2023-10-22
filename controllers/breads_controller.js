// Dependencies
const expressBC = require('express');

//Configuration 

const breads = expressBC.Router();
const Bread = require('../models/bread,js')

//INDEX
breads.get('/', (req, res) =>
{
    res.send(Bread);
});


// Static Routes
// localhost/breads/0
breads.get('/0', (req, res) =>
{
    res.send(Bread[0]);
});

// Dymanic Routes
// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

module.exports = breads