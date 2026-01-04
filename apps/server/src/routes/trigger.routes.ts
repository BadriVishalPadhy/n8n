import { Router } from "express";
import { prismaClient } from "@repo/db";

const triggerRouter: Router = Router();

triggerRouter.get("/", async (req, res) => {
  const triggers = await prismaClient.availableTriggerNodes.findMany({});
  res.json({
    triggers,
  });
});

export default triggerRouter;
