import { prismaClient } from "@repo/db";
import { Kafka } from "kafkajs";

const TOPIC_NAME = "OUTBOX";

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

async function main() {
  const producer = kafka.producer();
  await producer.connect();

  while (true) {
    const pendingRows = await prismaClient.workFlowOutBox.findMany({
      where: {},
      take: 10,
    });
    console.log("pendingRows", pendingRows);

    await producer.send({
      topic: TOPIC_NAME,
      messages: pendingRows.map((r) => {
        return {
          value: JSON.stringify({ WorkFlowRunId: r.WorkFlowRunId }),
        };
      }),
    });

    await prismaClient.workFlowOutBox.deleteMany({
      where: {
        id: {
          in: pendingRows.map((x) => x.id),
        },
      },
    });
    await new Promise((r) => setTimeout(r, 3000));
  }
}

main();
