const express = require('express')
const app = express()

const dotenv = require('dotenv');

// declare port
dotenv.config( {path: 'config.env'} )
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('hello world 1245')
})

app.listen(PORT, ()=>{ console.log("Server is running on port : " + PORT) })