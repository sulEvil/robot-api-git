import { Review } from "../models/model.js"

export class ReviewController {
    async create(req, res) {
        const {questionId} = req.body
        const {answerId} = req.body
        const type = await Review.create({questionId, answerId})
        return res.json('succesfully')
    }
    async getAll(req, res) {
        
    }
    async getOnes(req, res){
        
    }
}

