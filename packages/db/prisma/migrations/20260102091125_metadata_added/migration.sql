-- AlterTable
ALTER TABLE "ActionNodes" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "TriggerNodes" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}';
