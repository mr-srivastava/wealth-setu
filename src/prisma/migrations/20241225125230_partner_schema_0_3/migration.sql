-- DropIndex
DROP INDEX "Partners_name_key";

-- CreateTable
CREATE TABLE "Ledgers" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ledgers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ledgers" ADD CONSTRAINT "Ledgers_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
