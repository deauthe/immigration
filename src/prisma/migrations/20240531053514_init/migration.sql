/*
  Warnings:

  - The `educationLevel` column on the `UserAssesment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `educationField` column on the `UserAssesment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `englishLevel` column on the `UserAssesment` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('short', 'medium', 'long');

-- AlterTable
ALTER TABLE "UserAssesment" DROP COLUMN "educationLevel",
ADD COLUMN     "educationLevel" "EducationLevel",
DROP COLUMN "educationField",
ADD COLUMN     "educationField" "EducationField",
DROP COLUMN "englishLevel",
ADD COLUMN     "englishLevel" "EnglishLevel";

-- DropEnum
DROP TYPE "educationLevel";
