const express = require('express')
const app = express()

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const router = express.Router();
const fs = require('node:fs');


// db connection file
const connectDB = require('./server/database/connection')

// declare port
dotenv.config( {path: 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongodb connection 
connectDB();

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// load assets 
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


// load Routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>{ console.log("Server is running on port : 3000" ) })