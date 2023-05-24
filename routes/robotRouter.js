import {Router} from "express";
export const robotRouter = new Router()
import {RobotController} from "../controllers/RobotController.js"
import {checkRoleMiddleware} from "../middleware/checkRoleMiddleware.js"
const robotController = new RobotController()

robotRouter.post('/', robotController.create)
robotRouter.get('/', robotController.getAll)
robotRouter.post('/check', robotController.getOnes)

