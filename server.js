const express = require('express')
const app = express()

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const router = express.Router();


// declare port
dotenv.config( {path: 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "php");

// load assets 
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, ()=>{ console.log("Server is running on port : 3000" ) })