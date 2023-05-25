import {ApiError} from "../error/ApiError.js";
import {User} from "../models/model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const apiError = new ApiError()

const generateJwt = (id, number, role) => {
    return jwt.sign({id, number, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

export class UserController {
    async registration(req, res, next) {
        const {number, password, role, name} = req.body 
        if(!number || !password){
            return res.json('Error in registration, number or password')
        }
        const candidate = await User.findOne({where: {number}})
        if(candidate){
            return res.json('Error, have been registered')
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({name, number, role, password: hashPassword})
        const token = generateJwt(user.id, user.number, user.role, user.name)
        return res.json(token)
    }
    async login(req, res) {
        const {number, password} = req.body
        const user = await User.findOne({where: {number}})
        if(!user){
            return res.status(404).json({message:"No authorization"})
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return res.status(404).json({message:"Uncorrent data for logIn"})
        }
        const token = generateJwt(user.id, user.number, user.role, user.name)
        return res.json(token)
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.number, req.user.role)
        return res.json({token})
    }
    async getAll(req, res){
        const types = await User.findAll()
        res.json(types)
    }
} 

