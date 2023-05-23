import {Robot} from "../models/model.js";

export class RobotController {
    async create(req, res) {
        const {name, desc, deviceId, userId} = req.body
        if(!deviceId){
            return res.json('Error, incorrect data')
        }
        const candidate = await Robot.findOne({where: {deviceId}})
        if(candidate) {
            return res.json('Robot have been registered')
        }
        const type = await Robot.create({deviceId, userId})
        return res.json(type)

    }
    async getAll(req, res) {
        const types = await Robot.findAll()
        res.json(types)
    }
    async getOnes(req, res) {
        const {deviceId} = req.params
        const {userId} = req.params
        if(deviceId){
            const type = await Robot.findAll({
                where: {deviceId}
            })
        } else {
            const type = await Robot.findAll({
                where: {userId}
            }) 
        }
        return res.json(type)
    }
}

