-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "UserAssesment" (
    "assesmentId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "childrenNo" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "educationLevel" TEXT NOT NULL,
    "educationField" TEXT NOT NULL,
    "englishLevel" TEXT NOT NULL,
    "frenchLevel" TEXT NOT NULL,
    "ieltsScorce" TEXT NOT NULL,
    "familyInCanada" BOOLEAN NOT NULL,
    "travelHistory" TEXT NOT NULL,
    "netWorth" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "UserAssesment_pkey" PRIMARY KEY ("assesmentId")
);

-- AddForeignKey
ALTER TABLE "UserAssesment" ADD CONSTRAINT "UserAssesment_assesmentId_fkey" FOREIGN KEY ("assesmentId") REFERENCES "User"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;
