//one WorkFlow will have many WorkFlowRuns

import { Kafka } from "kafkajs";
import { prismaClient } from "@repo/db";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});
const TOPIC_NAME = "OUTBOX";

const consumer = kafka.consumer({ groupId: "worker" });

async function main() {
  await consumer.connect();
  await consumer.subscribe({
    topic: TOPIC_NAME,
    fromBeginning: true,
  });

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      await new Promise((Resolve) => setTimeout(Resolve, 2000));

      const obj = JSON.parse(message.value?.toString()!);
      const stage = obj.stage;
      const workflowId = obj.WorkFlowRunId;

      const avaialbleActions = await prismaClient.workFlowRun.findFirst({
        where: {
          id: workflowId, //i missed id
        },
        include: {
          workflow: {
            include: {
              actionsNodes: {
                include: {
                  type: true,
                },
              },
            },
          },
        },
      });

      const currentAction = avaialbleActions?.workflow.actionsNodes.find(
        (x) => x.sortingOrder === stage,
      );

      if (currentAction?.type.id == "email") {
        console.log("email");
      }
      if (currentAction?.type.id == "sol") {
        console.log("sol");
      }

      await new Promise((res) => setTimeout(res, 1000));

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

main();
