import { Review } from "../models/model.js"

export class ReviewController {
    async create(req, res) {
        const {question, answer, robotName, robotId, userId} = req.body
        if(!question){
            res.json('None question')
        }
        if(!answer){
            res.json('None answer')
        }
        if(!robotName){
            res.json('None robotName')
        }
        if(!robotId){
            res.json('None robotId')
        }
        if(!userId){
            res.json('None userId')
        }
        const type = await Review.create({question, answer, robotName, robotId, userId})
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Review.findAll()
        res.json(types)
    }
    async getOnes(req, res){
        const {userId} = req.query
        if(!userId){
            return res.json("none userId")
        }
        const type = await Review.findAll({
            where: {userId}
        }) 
        return res.json(type)
    }
}

