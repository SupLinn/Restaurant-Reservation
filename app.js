import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleware } from "./error/errorHandler.js"
import router from './routes/reservationRoute.js'

const app = express()

dotenv.config({path: "./config/config.env"})

app.use(
    cors({
        origin: process.env.FRONTEND_URI || "http://127.0.0.1:5173",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true
    })
)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/reservation', router)

dbConnection()
app.use(errorMiddleware)
export default app