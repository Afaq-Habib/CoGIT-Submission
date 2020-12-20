const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
        productId:{
        type: String,
        required: true,
        },
        productName:{
            type: String,
            required: true,
            unique: true
        },
        productDescription:{
            type: String,
            required: true
        },
        img: { 
            data: Buffer, 
            contentType: String 
        },
        productPrice:{
            type: String,
            required: true
        },
        productQuantity:{
            type: String,
            required: true
        }
})

module.exports = SupplierSchema;