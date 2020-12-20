const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    survey:[{
        questionText: { 
            type: String, 
            required: true, 
        },
        options: { 
        type : [],
        require:true
        }
    }],
    category:{
        type: String,
        required: true,
        unique:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Survey', SurveySchema);