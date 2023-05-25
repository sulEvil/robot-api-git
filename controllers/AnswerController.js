import { Answer } from "../models/model.js"

export class AnswerController {
    async create(req, res) {
        const {text} = req.body
        const {questionId} = req.body
        if(!text){
            return res.json('None text')
         }
         if(!questionId){
             return res.json('None questionId')
         }
        const type = Answer.create({text, questionId})
        return res.json('succesfully')
    }
    async getAll(req, res) {
        let types
        const {robotId, page, limit} = req.query
        if(!robotId){
            return res.json('none robotId')
        }
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        if(robotId){
            types = await Answer.findAndCountAll({where: {robotId}, limit, offset})
        } else {
            types = await Answer.findAndCountAll({limit, offset})
        }
        return res.json(types)
    }
    async getOnes(req, res) {
        let limit = 4
        const {questionId} = req.query
        if(!questionId){
            return res.json('None questionId')
        }
         const type = await Answer.findAll({
             where: {questionId}
         , limit}) 
         return res.json(type) 
    }
}

