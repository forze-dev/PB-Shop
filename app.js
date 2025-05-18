import 'dotenv/config'
import express from "express"
import cors from "cors"
import http from "http"
import { serverConfig } from './constants/config.js'
import { connectMongoDB } from './services/mongoDB.service.js'
import clientRouter from './routes/client.router.js'

const app = express()

app.use(cors(serverConfig.cors))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/clients", clientRouter)

const server = http.createServer(app)

connectMongoDB()

server.listen(serverConfig.port, serverConfig.ip, () => console.log(`Server was running!`))

