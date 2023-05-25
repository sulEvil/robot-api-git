import {Question} from "../models/model.js";

export class QuestionController {
    async create(req, res) {
        const {text} = req.body
        const {robotId} = req.body
        if(!text || robotId){
            return res.json('None text or robotId')
        }
        const type = await Question.create({text, robotId})
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Question.findAndCountAll()
        return res.json(types)
    }
    async getOnes(req, res) {
        const {robotId} = req.query
        if(!robotId){
            return res.json("none robotId")
        }
        const type = await Question.findAll({
            where: {robotId}
        }) 
        return res.json(type)
    }
    async getOne(req, res) {
        const {id} = req.query
        if(!id){
            res.json('none Id')
        }
        const type = await Question.findOne({
            where: {id}
        })
        return res.json(type)
    }
}


 