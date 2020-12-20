const express = require("express");
const auth = require("./routes/auth");
const survey = require("./routes/survey");
const project = require("./routes/project");

module.exports =   ()=>{
    app = express.Router();
    auth(app);
    survey(app);
    project(app);
    return app  
}