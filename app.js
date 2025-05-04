import 'dotenv/config'
import express from "express"
import cors from "cors"
import http from "http"
import { serverConfig } from './constants/config.js'
import { connectMongoDB } from './services/mongoDB.service.js'

const app = express()

app.use(cors(serverConfig.cors))

app.use(express.json())

const server = http.createServer(app)

connectMongoDB()

server.listen(serverConfig.port, serverConfig.ip, () => console.log(`Server was running!`))

