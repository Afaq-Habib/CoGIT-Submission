const {Container} = require("typedi")

const dotenv = require("dotenv");
dotenv.config();

let logger = require("winston").loggers.get("UserController.js")
//Creating user in local API
exports.createProjectController = async (req, res) => {
    let projectObj = {...req.body}
    projectObj['userId'] = req.userId
    try{
        const projectService = Container.get("ProjectService")
        let project = await projectService.CreateProject(projectObj)
        if (project) return res.status(200).json({data: project});
        return res.status(201).json({data: "Failed to create project"});
    }catch(e){
        logger.error('🔥 error: '+ e);
        //return next(e);
        return res.status(400).json({
            error: "Project creation failed with Local API",
        });
    }
}


exports.processSurveyController = async (req, res) => {
    let surveyObj = {...req.body}    
    try{
        const projectService = Container.get("ProjectService")
        let project = await projectService.ProcessSurvey(surveyObj)
        if (project) return res.status(200).json({data: project});
        return res.status(201).json({data: "Failed to post survey"});
    }catch(e){
        logger.error('🔥 error: '+ e);
        //return next(e);
        return res.status(400).json({
            error: "Failed to post survey with Local API",
        });
    }
}

exports.getProjectController = async (req, res) => {
    let userdId = req.userdId 
    try{
        const projectService = Container.get("ProjectService")
        let response = await projectService.GetProject(userdId)
        if (response) return res.status(200).json({status: "ok", data: response});
        return res.status(201).json({status: "No project founded"})
    }catch(e){
        logger.error('🔥 error: '+ e);
        //return next(e);
        return res.status(400).json({
            error: "project failed with Local API",
        });
    }
}