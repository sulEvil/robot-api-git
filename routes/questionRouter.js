import {Router} from "express";
export const questionRouter = new Router()
import {QuestionController} from "../controllers/QuestionController.js";
const questionController = new QuestionController()

questionRouter.post('/', questionController.create)
questionRouter.get('/all', questionController.getAll)
questionRouter.get('/', questionController.getOnes)
questionRouter.get('/detail/:id', questionController.getOne)
questionRouter.post('/delete', questionController.deleteOne)