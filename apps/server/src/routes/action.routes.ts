import { prismaClient } from "@repo/db";
import { Router } from "express";

const actionRouter: Router = Router();

actionRouter.get("/", async (req, res) => {
  const availableActionNodes = await prismaClient.availableActionNodes.findMany(
    {},
  );

  res.json({ availableActionNodes });
});

export default actionRouter;
