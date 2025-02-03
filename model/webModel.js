//webModel.js
const mongoose = require('mongoose');
const { type } = require('os');
//Define the schema
const webSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true, //add require to make it a mandatory parameter
    },
    age:{
        type: Number, 
        require: true 
    },
    gender:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    train:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
    seats:{
        type:Number,
        require:true
    }
})

const webModel = mongoose.model('Train',webSchema);
module.exports = webModel;