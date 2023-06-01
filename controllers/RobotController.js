import {Robot} from "../models/model.js";

export class RobotController {
    async create(req, res) {
        try {
            const {name, desc, deviceId, userId} = req.body
            if(!deviceId){
                return res.json('Error, incorrect data')
            }
            if(!deviceId || !userId){
                return res.json('Error, none userId or deviceId')
            }
            const candidate = await Robot.findOne({where: {deviceId}})
            if(candidate) {
                return res.status(201).json(candidate)
            }
            
            const type = await Robot.create({deviceId, userId})
            return res.json(type)
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
        const {userId} = req.query
        const {id} = req.query
        let type
        if(deviceId){
            type = await Robot.findAll({
                where: {deviceId}
            })
        } else if(userId) {
            if(!userId){
                return res.json(req.query)
            }
            type = await Robot.findAll({
                where: {userId}
            }) 
        } else {
            if(id){
                type = await Robot.findAll({
                    where: {id}
                })  
            } else {
                return res.json('None data')
            }
        }
        return res.json(type)
    }
    async delete(req, res){
        const {id} = req.body
        if(!id){
            res.json('Error, none id')
        }
        const type = await Robot.destroy({where: {id}})
        return res.json(type)
    }
}

