/*
  Warnings:

  - You are about to drop the column `number` on the `UserAssesment` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "educationLevel" AS ENUM ('short', 'medium', 'long');

-- CreateEnum
CREATE TYPE "EducationField" AS ENUM ('short', 'medium', 'long');

-- CreateEnum
CREATE TYPE "EnglishLevel" AS ENUM ('short', 'medium', 'long');

-- AlterTable
ALTER TABLE "UserAssesment" DROP COLUMN "number",
ADD COLUMN     "mobileNo" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "childrenNo" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "educationLevel" DROP NOT NULL,
ALTER COLUMN "educationField" DROP NOT NULL,
ALTER COLUMN "englishLevel" DROP NOT NULL,
ALTER COLUMN "frenchLevel" DROP NOT NULL,
ALTER COLUMN "ieltsScorce" DROP NOT NULL,
ALTER COLUMN "travelHistory" DROP NOT NULL,
ALTER COLUMN "netWorth" DROP NOT NULL,
ALTER COLUMN "comment" DROP NOT NULL;
