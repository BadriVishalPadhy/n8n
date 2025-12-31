/*
  Warnings:

  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "WorkFlow" ADD COLUMN     "triggerId" TEXT NOT NULL DEFAULT 'temp-trigger-id',
ADD COLUMN     "userId" TEXT NOT NULL DEFAULT 'temp-user-id';

-- DropTable
DROP TABLE "Session";

-- AddForeignKey
ALTER TABLE "WorkFlow" ADD CONSTRAINT "WorkFlow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
