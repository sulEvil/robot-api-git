import {Router} from "express";
export const questionRouter = new Router()
import {QuestionController} from "../controllers/QuestionController.js";
const questionController = new QuestionController()

questionRouter.post('/', questionController.create)
questionRouter.get('/', questionController.getAll)
questionRouter.get('/:id', questionController.getOnes)
questionRouter.get('/detail/:id', questionController.getOne)