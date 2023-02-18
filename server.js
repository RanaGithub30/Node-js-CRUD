const express = require('express')
const app = express()

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const router = express.Router();
const fs = require('node:fs');

// declare port
dotenv.config( {path: 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// load assets 
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


// routes..
const page_prexif = '/views/pages/';

app.get('/', (req, res) => {
    res.statusCode = 200;
    const data = fs.readFileSync(__dirname+page_prexif+'/home.php');
    res.end(data.toString());
})

app.get('/create', (req, res) => {
    res.statusCode = 200;
    const data = fs.readFileSync(__dirname+page_prexif+'/create.php');
    res.end(data.toString());
})

app.get('/details', (req, res) => {
    res.statusCode = 200;
    const data = fs.readFileSync(__dirname+page_prexif+'/details.php');
    res.end(data.toString());
})

app.listen(PORT, ()=>{ console.log("Server is running on port : 3000" ) })