const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
console.log(PORT);

const app = express();

app.get('/', (req,res) =>
{
    res.send('Welcome to an Awesome Application about Breads!!!');
});

app.listen(PORT, ()=> {
    console.log('Listening on port: ', PORT);
});