import {Robot} from "../models/model.js";

export class RobotController {
    async create(req, res) {
        try {
            const {name, desc, deviceId, userId} = req.body
            if(!deviceId){
                return res.json('Error, incorrect data')
            }
            const candidate = await Robot.findOne({where: {deviceId}})
            if(candidate) {
                return res.status(201).json(candidate)
            }
            const type = await Robot.create({deviceId, userId})
            return res.status(200).json(type)
        } catch(e){
            return res.status(404).json('Непредвиденная ошибка')
        }
       
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
    }r
}

