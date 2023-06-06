import express from 'express';
import dotenv from 'dotenv';
import {User, Review, Robot, Question, Answer} from "./models/model.js";
import {db} from "./db.js";
import cors from 'cors';
import {router} from "./routes/index.js";
import {errorHandlingMiddleware} from "./middleware/ErrorHandlingMiddleware.js";
dotenv.config()

const PORT = process.env.SERVER_PORT || 8080
const app = express()


app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
  }))
app.use(express.json())
app.use('/api', router)

// обработка ошибок
app.use(errorHandlingMiddleware)



app.get('/', (req, res) => {
    res.status(200).json({message: 'Woooork'})
})

const start = async () => {
    try{
        await db.authenticate()
        await db.sync().then(() => console.log('db connected'))
        app.listen(PORT, () => {
            console.log(`server started at ${PORT} port`)
        })

    } catch (e) {
        console.log(e)
    }
}
start()


