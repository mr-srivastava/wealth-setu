-- AlterTable
ALTER TABLE "Ledgers" ALTER COLUMN "timestamp" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "monthly_transactions_breakdown" (
    "transaction_month" TIMESTAMP(3) NOT NULL,
    "total_transactions" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL
);
