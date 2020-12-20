const mongoose = require('mongoose');

const SurveyQuestionSchema = new mongoose.Schema({
    questionText: { 
        type: String, 
        required: true, 
    },
    options: { 
        type : [],
        required: true
    },
    selected: { 
        type    : String,
        required: true,
        unique: false 
    }    
})

module.exports = SurveyQuestionSchema;