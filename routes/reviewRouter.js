import {Router} from "express";
export const reviewRouter = new Router()
import {ReviewController} from "../controllers/ReviewController.js";
const reviewController = new ReviewController()

reviewRouter.post('/', reviewController.create)
reviewRouter.get('/all', reviewController.getAll)
reviewRouter.get('/', reviewController.getOnes)
