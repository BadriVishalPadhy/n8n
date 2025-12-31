import { prismaClient } from "@repo/db";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Authentication Required!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Invalid or expired Token",
    });
  }
}

export default authMiddleware;
