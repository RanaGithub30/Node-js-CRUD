const mongoose = require('mongoose')

var schema = new mongoose.Schema({
     first_name:{
         type: String,
         required: true,
     },
     last_name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    }
})

const userDb = mongoose.model('userdb', schema);
module.exports = userDb;