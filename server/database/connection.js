const mongoose = require('mongoose')

const connectDB = async() => {
    try{
           // mongodb connection string
           const con = await mongoose.connect(process.env.MONGO_URI, {
                   useNewUrlParser: true,
                   useUnifiedTopology: true,
           }) 

           console.log('MongoDB Connected')
    }catch(err){
           console.log(err);
           process.exit(1); // 1 => true
    }
}

module.exports = connectDB