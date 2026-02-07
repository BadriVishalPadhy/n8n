//one WorkFlow will have many WorkFlowRuns
import { Kafka } from "kafkajs";
import { prismaClient } from "@repo/db";
import { parse } from "./parse";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const TOPIC_NAME = "OUTBOX";
const consumer = kafka.consumer({ groupId: "worker" });

async function main() {
  await consumer.connect();

  const producer = kafka.producer();
  await producer.connect();

  await consumer.subscribe({
    topic: TOPIC_NAME,
    fromBeginning: true,
  });

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const obj = JSON.parse(message.value?.toString()!);
        const workflowRunId = obj.WorkFlowRunId;
        const stage = obj.stage;

        console.log(
          `Processing message: WorkflowRunId=${workflowRunId}, stage=${stage}`,
        );

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
                    sortingOrder: "asc",
                  },
                },
              },
            },
          },
        });

        if (!availableActions) {
          console.log(`WorkflowRun not found for id: ${workflowRunId}`);
          await consumer.commitOffsets([
            {
              topic: TOPIC_NAME,
              partition: partition,
              offset: (parseInt(message.offset) + 1).toString(),
            },
          ]);
          return;
        }

        if (
          !availableActions.workflow ||
          !availableActions.workflow.actionsNodes
        ) {
          console.log(
            `Workflow has no actions for WorkflowRunId: ${workflowRunId}`,
          );
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

        const workData: any = availableActions.meta || {};

        console.log(`Executing stage ${stage}: ${currentAction.type.name}`);

        if (currentAction.type.id === "email") {
          console.log("Sending email...");

          const metadata = currentAction.metadata as any;

          console.log("Original metadata:", metadata);
          console.log("WORKDATA:", workData);

          // const parsedMetadata: any = {};
          // for (const key in metadata) {
          //   if (typeof metadata[key] === "string") {
          //     parsedMetadata[key] = parse(metadata[key], workData);
          //   } else {
          //     parsedMetadata[key] = metadata[key];
          //   }
          // }

          const parsedMetadata: any = {};
          for (const key in workData) {
            if (typeof workData[key] === "string") {
              parsedMetadata[key] = parse(workData[key], workData);
            } else {
              parsedMetadata[key] = workData[key];
            }
          }

          console.log("Parsed metadata:", parsedMetadata);

          // TODO: Send email
          // await EmailService.sendEmail(parsedMetadata);
        }

        if (currentAction.type.id === "webhook") {
          console.log("Calling webhook...");

          const metadata = currentAction.metadata as any;

          console.log("Original metadata:", metadata);
          console.log("WORKDATA:", workData);

          // ✅ Parse ALL fields dynamically
          const parsedMetadata: any = {};
          for (const key in metadata) {
            if (typeof metadata[key] === "string") {
              parsedMetadata[key] = parse(metadata[key], workData);
            } else if (
              typeof metadata[key] === "object" &&
              metadata[key] !== null
            ) {
              // Handle nested objects (like body)
              parsedMetadata[key] = {};
              for (const nestedKey in metadata[key]) {
                if (typeof metadata[key][nestedKey] === "string") {
                  parsedMetadata[key][nestedKey] = parse(
                    metadata[key][nestedKey],
                    workData,
                  );
                } else {
                  parsedMetadata[key][nestedKey] = metadata[key][nestedKey];
                }
              }
            } else {
              parsedMetadata[key] = metadata[key];
            }
          }

          console.log("Parsed metadata:", parsedMetadata);

          // TODO: Call webhook
          // await WebhookService.callWebhook(parsedMetadata);
        }

        const hasNextAction =
          stage + 1 < availableActions.workflow.actionsNodes.length;

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

        await consumer.commitOffsets([
          {
            topic: TOPIC_NAME,
            partition: partition,
            offset: (parseInt(message.offset) + 1).toString(),
          },
        ]);
      } catch (error) {
        console.error("Error processing message:", error);

        await consumer.commitOffsets([
          {
            topic: TOPIC_NAME,
            partition: partition,
            offset: (parseInt(message.offset) + 1).toString(),
          },
        ]);
      }
    },
  });
}

main().catch(console.error);
