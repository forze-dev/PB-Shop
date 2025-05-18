import { Router } from "express";
import { register } from "../controllers/client.controller.js";

const clientRouter = new Router()

clientRouter.post("/register", register)

export default clientRouter

