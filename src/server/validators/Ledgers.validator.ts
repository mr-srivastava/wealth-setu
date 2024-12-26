import { z } from "zod";

// Validation schema for Ledger
export const LedgerSchema = z.object({
  amount: z.number(),
  timestamp: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Timestamp should be a valid number or string",
    })
    .transform((val) => BigInt(val)), // Transform string to BigInt
  partnerId: z.number(),
});

// Validation schema for Bulk Ledger creation
export const BulkLedgerSchema = z.array(
  z.object({
    amount: z.number(),
    timestamp: z
      .string()
      .refine((val) => !isNaN(Number(val)), {
        message: "Timestamp should be a valid number or string",
      })
      .transform((val) => BigInt(val)), // Transform string to BigInt
    partnerId: z.number(),
  })
);

// Validation schema for Partner ID (query parameter)
export const PartnerIdSchema = z.object({
  partnerId: z.number().int().positive("Partner ID must be a positive integer"),
});
