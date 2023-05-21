import {Robot} from "../models/model.js";

export class RobotController {
    async create(req, res) {
        const {name, desc, deviceId, userId} = req.body

        if(!name || !desc || !deviceId){
            return res.json('Error, incorrect data')
        }
        const candidate = await Robot.findOne({where: {deviceId}})
        if(candidate) {
            return res.json('Succesfully')
        }
        const type = await Robot.create({name, desc, deviceId, userId})
        return res.json(type)

    }
    async getAll(req, res) {
        const types = await Robot.findAll()
        res.json(types)
    }
    async getOnes(req, res) {
        const {userId} = req.params
        const type = await Robot.findAll({
            where: {userId}
        }) 
        return res.json(type)
    }
}

