const {Container} = require("typedi")

module.exports = class SurveyService{
    surveyModel
    constructor() {
        this.surveyModel = Container.get("surveyModel")
    }

    //create new survey in DB
    async CreateSurvey(surveyObj){
        const surveyDoc = await this.surveyModel.findOne({category: surveyObj.category})
        if (surveyDoc) {
            return false
        } else {
            const newsurvey = new this.surveyModel(surveyObj);       
            const survey = await this.surveyModel.create(newsurvey)
            if(!survey) throw new Error("Fail to create Survey")
            return survey
        }        
    }

    async GetSurvey(filterCond){
        let surveyDocs;
        if(filterCond){
            surveyDocs = await this.surveyModel.find(filterCond)
            
        }else {
            surveyDocs = await this.surveyModel.find()
        }        
        return surveyDocs
            /*
            let surveyObject = surveyDocs.toObject()
                Reflect.deleteProperty(surveyObject, 'createdAt');
                Reflect.deleteProperty(surveyObject, 'updatedAt');
                Reflect.deleteProperty(surveyObject, '__v');
                return surveyObject
                */               
    }
}