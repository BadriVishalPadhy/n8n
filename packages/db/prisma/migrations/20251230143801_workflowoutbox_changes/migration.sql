/*
  Warnings:

  - You are about to drop the column `outboxId` on the `WorkFlowOutBox` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[WorkFlowRunId]` on the table `WorkFlowOutBox` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `WorkFlowRunId` to the `WorkFlowOutBox` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WorkFlowOutBox" DROP CONSTRAINT "WorkFlowOutBox_outboxId_fkey";

-- DropIndex
DROP INDEX "WorkFlowOutBox_outboxId_key";

-- AlterTable
ALTER TABLE "WorkFlowOutBox" DROP COLUMN "outboxId",
ADD COLUMN     "WorkFlowRunId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WorkFlowOutBox_WorkFlowRunId_key" ON "WorkFlowOutBox"("WorkFlowRunId");

-- AddForeignKey
ALTER TABLE "WorkFlowOutBox" ADD CONSTRAINT "WorkFlowOutBox_WorkFlowRunId_fkey" FOREIGN KEY ("WorkFlowRunId") REFERENCES "WorkFlowRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
