import {Router} from "express";
import {UserController} from "../controllers/userController.js";
export const userRouter = new Router()
const userController = new UserController()

userRouter.post('/registration', userController.registration  )

userRouter.post('/login', userController.login)

userRouter.get('/auth', userController.check)
