const {celebrate, Joi} =require("celebrate")
const express = require("express");
const {getWithAuth} = require("../middlewares")
const router = new express.Router();


const {createSurveyController, getSurveyController} = require('../../controllers/survey')

module.exports = (app)=> {
    app.use("/survey",router)

    router.post(
        "/create",
        getWithAuth,
    createSurveyController)

    router.get(
        "/get",
        getWithAuth,
        getSurveyController)
}