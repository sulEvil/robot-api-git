import { Review } from "../models/model.js"

export class ReviewController {
    async create(req, res) {
        const {question, answer, robotName} = req.body
        if(!question || answer || robotName){
            res.status(400).json('Incorrect data')
        }
        const type = await Review.create({question, answer, robotName})
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Review.findAll()
        res.json(types)
    }
    async getOnes(req, res){
        
    }
}

