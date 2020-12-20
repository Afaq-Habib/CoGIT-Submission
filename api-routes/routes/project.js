const express = require("express");
const {getWithAuth} = require("../middlewares")
const router = new express.Router();


const {createProjectController,processSurveyController ,getProjectController} = require('../../controllers/project')

module.exports = (app)=> {
    app.use("/project",router)

    router.post(
        "/create",
        getWithAuth,
    createProjectController)

    router.post(
        "/process_survey",
        getWithAuth,
    processSurveyController)

    router.get(
        "/get",
        getWithAuth,
        getProjectController)
}