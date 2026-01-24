import { prismaClient } from "@repo/db";
import { signinSchema, signupSchema } from "../types/type";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import express from "express";
import { Response, Request, NextFunction, Router } from "express";

const app = express();

app.use(express.json());

const authRouter: Router = Router();

authRouter.post("/signup", async (req, res) => {
  const parsedBody = signupSchema.safeParse(req.body);

  if (!parsedBody.success) {
    console.log("Signup validation error:", parsedBody.error);
    res.status(400).json({
      error: "Validation failed",
      details: parsedBody.error
    });
    return;
  }
  const password = parsedBody.data?.password;
  const hashedPassword = await bcrypt.hash(password!, 2);
  const user = await prismaClient.user.create({
    data: {
      name: parsedBody.data!.username,
      email: parsedBody.data!.email,
      password: hashedPassword!,
    },
  });

  return res.json({
    user: user.id,
  });
});

authRouter.post("/signin", async (req, res) => {
  const parsedBody = signinSchema.safeParse(req.body);

  if (!parsedBody.success) {
    return res.status(400).json({ error: "Invalid credentials format" });
  }

  const user = await prismaClient.user.findUnique({
    where: {
      email: parsedBody.data.email,
    },
  });

  if (!user) {
    return res.status(401).json({ error: "User does not exist" });
  }

  const password = parsedBody.data.password;
  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "24h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict", // Changed to strict - works for same-site requests
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
    domain: "localhost", // Explicitly set domain for localhost
  });

  return res.json({
    success: true,
  });
});

export default authRouter;
