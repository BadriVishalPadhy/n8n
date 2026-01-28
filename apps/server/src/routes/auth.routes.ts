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
    res.status(400).json({ error: "Wrong Credentials" });
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

  const user = await prismaClient.user.findUnique({
    where: {
      email: parsedBody.data!.email,
    },
  });
  const password = parsedBody.data?.password;
  const passwordValid = bcrypt.compare(password!, user?.password!);

  try {
    const token = jwt.sign({ userId: user?.id }, process.env.JWT_SECRET!, {
      expiresIn: "24h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Required for SameSite=None
      sameSite: "none",
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.error("cookie error", error);
    return res.status(400).json({
      error: "error",
    });
  }

  if (!user || !passwordValid) {
    res.status(401).json({ error: "user does not exist" });
  }
});

export default authRouter;
