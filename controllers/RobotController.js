import {Robot} from "../models/model.js";

export class RobotController {
    async create(req, res) {
        const {name} = req.body
        const {desc} = req.body
        const type = await Robot.create({name, desc})
        return res.json(type)

    }
    async getAll(req, res) {
        const {id} = req.query
        if(id){
            res.json(id)

        } else {
            res.json({id: '1', name: 'pudu robot', desc: 'Робот из софт-сервиса'})
        }

    }

}

