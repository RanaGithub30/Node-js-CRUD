const express = require('express')
const route = express.Router()
const fs = require('node:fs');

//
const page_prexif = '/../../views/pages';

route.get('/', (req, res) => {
    res.statusCode = 200;
    const data = fs.readFileSync(__dirname+page_prexif+'/home.php');
    res.end(data.toString());
})

route.get('/create', (req, res) => {
    res.statusCode = 200;
    const data = fs.readFileSync(__dirname+page_prexif+'/create.php');
    res.end(data.toString());
})

route.get('/details', (req, res) => {
    res.statusCode = 200;
    const data = fs.readFileSync(__dirname+page_prexif+'/details.php');
    res.end(data.toString());
})

module.exports = route