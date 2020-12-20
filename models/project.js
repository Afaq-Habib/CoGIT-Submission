const mongoose = require('mongoose');
const QuestionSchema = require('./survey_question')

const ProjectSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    survey: {
        type:[QuestionSchema],
        default:[]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', ProjectSchema);