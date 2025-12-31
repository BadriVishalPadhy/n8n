import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { prismaClient } from "@repo/db";
import { nodeCreateSchema } from "../types/type";

const nodeRouter: Router = Router();

nodeRouter.post("/", authMiddleware, async (req, res) => {
  const parsedData = nodeCreateSchema.safeParse(req.body);
  const id: string = req.id;

  if (!parsedData.success) {
    return res.status(401).json({ error: "Unauthorized entry" });
  }

  try {
    await prismaClient.$transaction(async (tx) => {
      const workflow = await tx.workFlow.create({
        data: {
          userId: id, // Remove parseInt()
          triggerId: "",
          actionsNodes: {
            create: parsedData.data.actions.map((n, index) => ({
              ActionNodeId: n.availableActionId,
              sortingOrder: index,
            })),
          },
        },
      });

      const trigger = await tx.triggerNodes.create({
        data: {
          TriggerNodeId: parsedData.data.availableTriggerId,
          workflowId: workflow.id,
        },
      });

      await tx.workFlow.update({
        where: {
          id: workflow.id,
        },
        data: {
          triggerId: trigger.id,
        },
      });
    });

    return res.status(201).json({ message: "Workflow created successfully" });
  } catch (error) {
    console.error("Error creating workflow:", error);
    return res.status(500).json({ error: "Failed to create workflow" });
  }
});

nodeRouter.get("/", authMiddleware, async (req, res) => {
  const id = req.id;
  const workFlows = await prismaClient.workFlow.findMany({
    where: {
      userId: id,
    },
    include: {
      actionsNodes: {
        include: {
          type: true,
        },
      },
      triggerNodes: {
        include: {
          type: true,
        },
      },
    },
  });
  console.log("workFlows handler");
  return res.json({
    workFlows,
  });
});

nodeRouter.get("/:workFlowId", authMiddleware, async (req, res) => {
  const id = req.id;
  const workFlowId = req.params.workFlowId;
  const workFlows = await prismaClient.workFlow.findMany({
    where: {
      id: workFlowId,
      userId: id,
    },
    include: {
      actionsNodes: {
        include: {
          type: true,
        },
      },
      triggerNodes: {
        include: {
          type: true,
        },
      },
    },
  });

  return res.json({
    workFlows,
  });
});

export default nodeRouter;
