//one WorkFlow will have many WorkFlowRuns
import { Kafka } from "kafkajs";
import { prismaClient } from "@repo/db";
import { JsonObject } from "../../../packages/db/generated/prisma/runtime/library";
import json_templates from "json-templates";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const parse = json_templates;

const TOPIC_NAME = "OUTBOX";
const consumer = kafka.consumer({ groupId: "worker" });

async function main() {
  await consumer.connect();

  // ✅ Create producer once outside the message loop
  const producer = kafka.producer();
  await producer.connect();

  await consumer.subscribe({
    topic: TOPIC_NAME,
    fromBeginning: true,
  });

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const obj = JSON.parse(message.value?.toString()!);
      const workflowRunId = obj.WorkFlowRunId;
      const stage = obj.stage;

      // ✅ Fixed typo
      const availableActions = await prismaClient.workFlowRun.findFirst({
        where: {
          id: workflowRunId,
        },
        include: {
          workflow: {
            include: {
              actionsNodes: {
                include: {
                  type: true,
                },
                orderBy: {
                  sortingOrder: "asc", // ✅ Ensure proper order
                },
              },
            },
          },
        },
      });

      // ✅ Add null check
      if (!availableActions) {
        console.log("WorkflowRun not found");
        await consumer.commitOffsets([
          {
            topic: TOPIC_NAME,
            partition: partition,
            offset: (parseInt(message.offset) + 1).toString(),
          },
        ]);
        return;
      }

      const currentAction = availableActions.workflow.actionsNodes[stage];

      // Check if workflow is complete
      if (!currentAction) {
        console.log(`Workflow ${workflowRunId} completed - no more actions`);
        await consumer.commitOffsets([
          {
            topic: TOPIC_NAME,
            partition: partition,
            offset: (parseInt(message.offset) + 1).toString(),
          },
        ]);
        return;
      }

      const workData: any = availableActions.meta;

      // Execute action based on type
      console.log(`Executing stage ${stage}: ${currentAction.type.name}`);

      if (currentAction.type.id === "email") {
        const body = parse(
          (currentAction.metadata as JsonObject)?.body as string,
        );
        const to = parse((currentAction.metadata as JsonObject).to as string);
        console.log(` sending this ${body.parameters} to ${to.parameters} `);
        console.log("Email body ===", currentAction.metadata);
      }

      if (currentAction.type.id === "sol") {
        console.log("Processing SOL transaction...");
        // SOL logic here
      }

      // Check if there's a next action
      const hasNextAction =
        stage + 1 < availableActions.workflow.actionsNodes.length;
      const length = availableActions.workflow.actionsNodes.length;

      if (hasNextAction) {
        console.log(`Publishing next stage: ${stage + 1}`);
        await producer.send({
          topic: TOPIC_NAME,
          messages: [
            {
              value: JSON.stringify({
                WorkFlowRunId: workflowRunId,
                stage: stage + 1,
              }),
            },
          ],
        });
      } else {
        console.log(`Stage ${stage} was the last action`);
      }

      // Commit offset
      await consumer.commitOffsets([
        {
          topic: TOPIC_NAME,
          partition: partition,
          offset: (parseInt(message.offset) + 1).toString(),
        },
      ]);
    },
  });
}

main().catch(console.error);
