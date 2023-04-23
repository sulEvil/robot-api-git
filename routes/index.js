import {Router} from "express";
import {answerRouter} from "./answerRouter.js";
import {robotRouter} from "./robotRouter.js";
import {reviewRouter} from "./reviewRouter.js";
import {questionRouter} from "./questionRouter.js";
import {userRouter} from "./userRouter.js";


export const router = new Router()
router.use('/user', userRouter)
router.use('/answer', answerRouter)
router.use('/question', questionRouter)
router.use('/robot', robotRouter)
router.use('/review', reviewRouter)

