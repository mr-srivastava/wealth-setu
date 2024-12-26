/*
  Warnings:

  - You are about to drop the column `email` on the `Partners` table. All the data in the column will be lost.
  - Added the required column `shortName` to the `Partners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Partners` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Partners_email_key";

-- AlterTable
ALTER TABLE "Partners" DROP COLUMN "email",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "shortName" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
