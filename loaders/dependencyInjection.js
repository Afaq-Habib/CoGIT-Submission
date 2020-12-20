const logger =require("winston").loggers
const UserService = require("../services/UserService")
const SurveyService = require('../services/SurveyService')
const ProjectService = require('../services/ProjectService')

const {Container} =  require('typedi')

module.exports = (data)=>{
    data.models.forEach(m => {
        Container.set(m.name, m.model);
    });
    //add other dependency that are needed

    Container.set("UserService", new UserService())
    Container.set("SurveyService", new SurveyService())
    Container.set("ProjectService", new ProjectService())
    Container.set("logger", logger)
}