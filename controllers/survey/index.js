const {Container} = require("typedi")

const dotenv = require("dotenv");
dotenv.config();

let logger = require("winston").loggers.get("UserController.js")
//Creating user in local API
exports.createSurveyController = async (req, res) => {
    let surveyObj = {...req.body}
    try{
        const surveyService = Container.get("SurveyService")
        let survey = await surveyService.CreateSurvey(surveyObj)
        if (survey) return res.status(200).json({data: survey});
        return res.status(201).json({data: "Failed to create survey"});
    }catch(e){
        logger.error('🔥 error: '+ e);
        //return next(e);
        return res.status(400).json({
            error: "Survey failed with Local API",
        });
    }
}

exports.getSurveyController = async (req, res) => {
    let filterCond  = {[req.query.key] : req.query.value}
    try{
        const surveyService = Container.get("SurveyService")
        let response = await surveyService.GetSurvey(filterCond)
        if (response) return res.status(200).json({status: "ok", data: response});
        return res.status(201).json({status: "No SurveyFounded"})
    }catch(e){
        logger.error('🔥 error: '+ e);
        //return next(e);
        return res.status(400).json({
            error: "Survey failed with Local API",
        });
    }
}