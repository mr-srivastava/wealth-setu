import { z } from "zod";

// Validation schemas
export const SinglePartnerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  shortName: z.string().min(1, "Short name is required"),
});

export const BulkPartnersSchema = z.array(SinglePartnerSchema);
