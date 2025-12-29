-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "sid" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expire" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("sid")
);

-- CreateTable
CREATE TABLE "WorkFlow" (
    "id" TEXT NOT NULL,

    CONSTRAINT "WorkFlow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriggerNodes" (
    "id" TEXT NOT NULL,
    "workflowId" TEXT NOT NULL,
    "TriggerNodeId" TEXT NOT NULL,

    CONSTRAINT "TriggerNodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableTriggerNodes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AvailableTriggerNodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionNodes" (
    "id" TEXT NOT NULL,
    "workflowId" TEXT NOT NULL,
    "ActionNodeId" TEXT NOT NULL,

    CONSTRAINT "ActionNodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableActionNodes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AvailableActionNodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkFlowRun" (
    "id" TEXT NOT NULL,
    "workflowId" TEXT NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "WorkFlowRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkFlowOutBox" (
    "id" TEXT NOT NULL,
    "outboxId" TEXT NOT NULL,

    CONSTRAINT "WorkFlowOutBox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Session_expire_idx" ON "Session"("expire");

-- CreateIndex
CREATE UNIQUE INDEX "TriggerNodes_workflowId_key" ON "TriggerNodes"("workflowId");

-- CreateIndex
CREATE UNIQUE INDEX "ActionNodes_workflowId_key" ON "ActionNodes"("workflowId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkFlowOutBox_outboxId_key" ON "WorkFlowOutBox"("outboxId");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerNodes" ADD CONSTRAINT "TriggerNodes_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "WorkFlow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerNodes" ADD CONSTRAINT "TriggerNodes_TriggerNodeId_fkey" FOREIGN KEY ("TriggerNodeId") REFERENCES "AvailableTriggerNodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionNodes" ADD CONSTRAINT "ActionNodes_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "WorkFlow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionNodes" ADD CONSTRAINT "ActionNodes_ActionNodeId_fkey" FOREIGN KEY ("ActionNodeId") REFERENCES "AvailableActionNodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkFlowRun" ADD CONSTRAINT "WorkFlowRun_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "WorkFlow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkFlowOutBox" ADD CONSTRAINT "WorkFlowOutBox_outboxId_fkey" FOREIGN KEY ("outboxId") REFERENCES "WorkFlowRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
