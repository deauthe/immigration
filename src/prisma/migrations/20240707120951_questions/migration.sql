/*
  Warnings:

  - The values [short,medium,long] on the enum `EducationLevel` will be removed. If these variants are still used in the database, this will fail.
  - The values [short,medium,long] on the enum `EnglishLevel` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `ieltsScorce` on the `UserAssesment` table. All the data in the column will be lost.
  - The `educationField` column on the `UserAssesment` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EducationLevel_new" AS ENUM ('Primary', 'Secondary', 'Tertiary');
ALTER TABLE "UserAssesment" ALTER COLUMN "educationLevel" TYPE "EducationLevel_new" USING ("educationLevel"::text::"EducationLevel_new");
ALTER TYPE "EducationLevel" RENAME TO "EducationLevel_old";
ALTER TYPE "EducationLevel_new" RENAME TO "EducationLevel";
DROP TYPE "EducationLevel_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "EnglishLevel_new" AS ENUM ('Beginner', 'Intermediate', 'Advanced');
ALTER TABLE "UserAssesment" ALTER COLUMN "englishLevel" TYPE "EnglishLevel_new" USING ("englishLevel"::text::"EnglishLevel_new");
ALTER TYPE "EnglishLevel" RENAME TO "EnglishLevel_old";
ALTER TYPE "EnglishLevel_new" RENAME TO "EnglishLevel";
DROP TYPE "EnglishLevel_old";
COMMIT;

-- AlterTable
ALTER TABLE "UserAssesment" DROP COLUMN "ieltsScorce",
ADD COLUMN     "ieltsScore" TEXT,
DROP COLUMN "educationField",
ADD COLUMN     "educationField" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "email_verified" TIMESTAMP(3),
ADD COLUMN     "password" TEXT;

-- DropEnum
DROP TYPE "EducationField";

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isOpen" BOOLEAN DEFAULT true,
    "name" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_userId_key" ON "Question"("userId");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
