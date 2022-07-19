const dotenv = require('dotenv').config();
const color = require('colors')
const path = require('path')
const express = require('express');
const app = express();

// environmont variables
const port = process.env.SERVER_PORT;

// ejs setup
app.set('view engine', 'ejs');

// Static Folders
app.use('/assets', express.static(path.join(__dirname, '/assets')))


// routes
app.use('/student', require('./routes/studentRoute'))



// Server listen
app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`.bgCyan);
})