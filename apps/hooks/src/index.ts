import express from "express";
import { prismaClient } from "@repo/db";
const app = express();
app.use(express.json());

const PORT = 4000;

app.post("/hooks/catch/:userId/:workflow", async (req, res) => {
  const userId = req.params.userId;
  const workflowId = req.params.workflow;
  const body = req.body;

  await prismaClient.$transaction(async (tx: any) => {
    const run = await prismaClient.workFlowRun.create({
      data: {
        workflowId: workflowId,
        meta: body,
      },
    });

    prismaClient.workFlowOutBox.create({
      data: {
        outboxId: run.id,
      },
    });
  });

  res.json({
    sucess: "$transaction successfulllllll",
  });

  //store in a new DB
  // put it in kafka
});
app.listen(PORT, () => {
  console.log(` Hooks are running on PORT ${PORT} `);
});
