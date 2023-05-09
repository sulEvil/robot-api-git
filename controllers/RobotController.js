import {Robot} from "../models/model.js";

export class RobotController {
    async create(req, res) {
        const {name} = req.body
        const {desc} = req.body
        const type = await Robot.create({name, desc})
        return res.json('succesfully')

    }
    async getAll(req, res) {
        const types = await Robot.findAll()
        res.json(types)
    }
    async getOnes(req, res) {
        const {id} = req.params
        const type = await Robot.findAll({
            where: {id}
        }) 
        return res.json(type)
    }
}

