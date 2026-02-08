//one WorkFlow will have many WorkFlowRuns
import { Kafka } from "kafkajs";
import { prismaClient } from "@repo/db";
import { parse } from "./parse";
// import { sendEmail } from "../src/email"; // You'll need to create this

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

        const currentAction = availableActions.workflow.actionsNodes.find(
          (x) => x.sortingOrder === stage,
        );

        if (!currentAction) {
          console.log("Current action not found?");
          await consumer.commitOffsets([
            {
              topic: TOPIC_NAME,
              partition: partition,
              offset: (parseInt(message.offset) + 1).toString(),
            },
          ]);
          return;
        }

        // This is the runtime data from the trigger event (zapRunMetadata equivalent)
        const workflowRunMetadata = availableActions.meta || {};

        console.log(`Executing stage ${stage}: ${currentAction.type.name}`);

        //Email---------------------------------------------------------------------------------------
        if (currentAction.type.id === "email") {
          const metadata = currentAction.metadata as any;

          console.log("workflowRunMetadata", workflowRunMetadata);

          // Parse the email template with runtime data
          // const body = parse(metadata?.body as string, workflowRunMetadata);
          // const to = parse(metadata?.email as string, workflowRunMetadata);
          // const subject = parse(
          //   metadata?.subject as string,
          //   workflowRunMetadata,
          // );

          // console.log(`Sending email to ${to}`);
          // console.log(`Subject: ${subject}`);
          // console.log(`Body: ${body}`);

          // await sendEmail(to, subject, body);
          console.log("Email sent successfully!");
        }

        await new Promise((r) => setTimeout(r, 500));

        const lastStage =
          (availableActions.workflow.actionsNodes?.length || 1) - 1;
        console.log("Last stage:", lastStage);
        console.log("Current stage:", stage);

        if (lastStage !== stage) {
          console.log("Pushing back to the queue");
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
        }

        console.log("Processing done");

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
