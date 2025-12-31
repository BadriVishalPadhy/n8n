import { Router } from "express";
import  authMiddleware from "../middlewares/auth"
import { prismaClient } from "@repo/db";
import {nodeCreateSchema} from "../types/type"

const nodeRouter:Router = Router();

nodeRouter.post("/", authMiddleware ,(req,res) => {
    const parsed = nodeCreateSchema.safeParse(req.body)
  prismaClient.

} )
