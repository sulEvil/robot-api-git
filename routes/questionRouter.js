import {Router} from "express";
export const questionRouter = new Router()
import {QuestionController} from "../controllers/QuestionController.js";
const questionController = new QuestionController()

questionRouter.get('/', questionController.create)
questionRouter.get('/all/', questionController.getAll)

