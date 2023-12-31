// Dependencies
const express = require('express');

//Configuration 
require('dotenv').config();

const PORT = process.env.PORT;
console.log(PORT);

const app = express();

//Middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  });
  
  // Breads
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);
  





app.listen(PORT, ()=> {
    console.log('Listening on port: ', PORT);
});

