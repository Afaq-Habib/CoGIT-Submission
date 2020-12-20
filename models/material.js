const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    productId:{
        type : Array , 
        "default" : [],
        required: true,
        unique: true
    },
    productName:{
        type : Array , 
        "default" : [] ,
        required: true,
        unique: true
    },
    productDescription:{
        type : Array , 
        "default" : [],
        required: true
    },
    productPrice:{
        type : Array , 
        "default" : [], 
        required: true
    }
})
module.exports = MaterialSchema;