import {Router} from "express";
export const answerRouter = new Router()
import {AnswerController} from "../controllers/AnswerController.js";
const answerController = new AnswerController()

answerRouter.post('/', answerController.create)
answerRouter.get('/all', answerController.getAll)
answerRouter.get('/', answerController.getOnes)
answerRouter.post('/delete', answerController.deleteOne)
