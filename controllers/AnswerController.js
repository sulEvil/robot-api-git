import { Answer } from "../models/model.js"

export class AnswerController {
    async create(req, res) {
        const {text} = req.body
        const {questionId} = req.body
        const type = Answer.create({text, questionId})
        return res.json('succesfully')
    }
    async getAll(req, res) {
        let types
        const {robotId, page, limit} = req.query
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
        const {id} = req.params
         const type = await Answer.findAll({
             where: {id}
         , limit}) 
         return res.json(type)
    }
}

