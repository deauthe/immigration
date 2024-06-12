/*
  Warnings:

  - Added the required column `userId` to the `UserAssesment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserAssesment" DROP CONSTRAINT "UserAssesment_assesmentId_fkey";

-- AlterTable
ALTER TABLE "UserAssesment" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserAssesment" ADD CONSTRAINT "UserAssesment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;
