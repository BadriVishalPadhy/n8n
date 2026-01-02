import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { prismaClient } from "@repo/db";
import { nodeCreateSchema } from "../types/type";

const nodeRouter: Router = Router();

nodeRouter.post("/", authMiddleware, async (req, res) => {
  const parsedData = nodeCreateSchema.safeParse(req.body);
  const id: string = req.user?.id;

  if (!parsedData.success) {
    return res.status(400).json({
      error: "Invalid request data",
      details: parsedData.error,
    });
  }

  try {
    const workflowId = await prismaClient.$transaction(async (tx) => {
      const workflow = await tx.workFlow.create({
        data: {
          userId: id,
          triggerId: "",
          actionsNodes: {
            create: parsedData.data.actions.map((action, index) => ({
              ActionNodeId: action.availableActionId,
              sortingOrder: index,
              metadata: action.actionMeta,
            })),
          },
        },
      });

      // Create trigger node
      const trigger = await tx.triggerNodes.create({
        data: {
          TriggerNodeId: parsedData.data.availableTriggerId,
          workflowId: workflow.id,
          metadata: parsedData.data.triggerMeta,
        },
      });

      // Update workflow with trigger ID
      await tx.workFlow.update({
        where: {
          id: workflow.id,
        },
        data: {
          triggerId: trigger.id,
        },
      });

      return workflow.id;
    });

    return res.status(201).json({
      message: "Workflow created successfully",
      workflowId: workflowId,
    });
  } catch (error) {
    console.error("Error creating workflow:", error);
    return res.status(500).json({ error: "Failed to create workflow" });
  }
});

nodeRouter.get("/", authMiddleware, async (req, res) => {
  const id: string = req.user?.id;
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
  const id: string = req.user?.id;
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
