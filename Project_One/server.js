const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const pageRoute =require('./routes/pageRoutes')

// environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;
// init express
const app = express();

// data manage
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// static folder
app.use('/public', express.static('public'));

// routes
app.use(pageRoute);

// server listen
app.listen(PORT,(req, res) => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});