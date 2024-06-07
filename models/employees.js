//Now we are creating a blueprint or structure of table 
const mongoose = require('mongoose');

//1. Define the person schema
const empSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number,
        default:0
    },
    work:{
        type:String,
        enum:['chef','waiter','manager']
    },
    mobile:{
        type:String
    },
    email:{
        type:String,
        uniqWith:true
        },
    adds:{
        type:String
    },
    salary:{
        type:Number
    }


});


//create person model
const Emp = mongoose.model('employee',empSchema);

//Now we are going to export(Available) this module for the use
module.exports = Emp;