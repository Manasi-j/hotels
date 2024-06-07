const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotel';

//Set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the default connection    
//Mongoose maintaina a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Define event  listener for database connection
db.on('connected',() =>{
    console.log("Here we are and we are now connecting to mongoDB server");
})


db.on('error',(err) =>{
    console.log('Here is mongoDB Connection error',err);
})

db.on('disconnected', () =>{
    console.log('Disconncted here we are disconnected to MongDB ');
})

//Exports the database connection
module.exports = db;