import {Question} from "../models/model.js";

export class QuestionController {
    async create(req, res) {
        const {text} = req.body
        const type = await Question.create({text})
        return res.json('succesfully')
    }
    async getAll(req, res) {
        const types = await Question.findAndCountAll()
        return res.json(types)
    }
    async getOnes(req, res) {
        const {id} = req.params
        const type = await Question.findAll({
            where: {id}
        }) 
        return res.json(type)
    }
    async getOne(req, res) {
        const {id} = req.params
        const type = await Question.findOne({
            where: {id}
        })
        return res.json(type)
    }
}


 