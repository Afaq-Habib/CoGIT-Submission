const {Container} = require("typedi")

module.exports = class ProjectService{
    projectModel
    constructor() {
        this.projectModel = Container.get("projectModel")
    }

    //create new project in DB
    async CreateProject(projectObj){
        console.log(projectObj)
        const newproject = new this.projectModel(projectObj);       
        const project = await this.projectModel.create(newproject)
        if(!project) throw new Error("Fail to create project")
        return project       
    }

    //create new project in DB
    async ProcessSurvey(surveyObj){
        const projectDoc = await this.projectModel.findOneAndUpdate(
            {_id: surveyObj.projectId},
            {survey: surveyObj.survey}
            )
        if (projectDoc) return projectDoc
        return null       
    }

    async GetProject(userdId){
        let projectDocs;
        projectDocs = await this.projectModel.find({userdId: userdId})      
        return projectDocs         
    }
}