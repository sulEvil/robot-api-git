import { Review } from "../models/model.js"

export class ReviewController {
    async create(req, res) {
        const {question, answer, robotName, robotId} = req.body
        if(!question){
            res.status(400).json('None question')
        }
        if(!answer){
            res.status(400).json('None answer')
        }
        if(!robotName){
            res.status(400).json('None robotName')
        }
        if(!robotId){
            res.status(400).json('None robotId')
        }
        const type = await Review.create({question, answer, robotName, robotId})
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Review.findAll()
        res.json(types)
    }
    async getOnes(req, res){
        
    }
}

