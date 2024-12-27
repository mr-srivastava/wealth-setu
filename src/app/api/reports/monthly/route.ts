import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// Define Zod schema for query validation
const querySchema = z.object({
  month: z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Invalid month format (expected YYYY-MM)")
    .array()
    .optional(), // Allow multiple "month" parameters or none
});

export async function GET(request: Request) {
  try {
    // Parse and validate query parameters
    const url = new URL(request.url);
    const searchParams = Object.fromEntries(url.searchParams.entries());
    const parsedParams = querySchema.parse({
      month: searchParams.month ? url.searchParams.getAll("month") : undefined,
    });

    // Construct the query dynamically based on validated parameters
    const query = Prisma.sql`SELECT * FROM "monthly_transactions_breakdown"`;
    if (parsedParams.month && parsedParams.month.length > 0) {
      const monthConditions = parsedParams.month;
      console.log(monthConditions);
      //   const monthConditions = parsedParams.month
      //     .map((month) => `TO_CHAR(transaction_month, 'YYYY-MM') = '${month}'`)
      //     .join(" OR "); // Example: "TO_CHAR(transaction_month, 'YYYY-MM') = '2024-12'"
      //   query += ` WHERE ${monthConditions}`;
    }

    // Fetch data from the database
    const data = await prisma.$queryRaw<
      {
        transaction_month: Date;
        total_transactions: number;
        total_amount: number;
      }[]
    >(query);

    const sanitizedData = data.map((item) => ({
      ...item,
      total_transactions: parseInt(item.total_transactions.toString()),
      total_amount: parseFloat(item.total_amount.toFixed(2).toString()),
    }));

    return NextResponse.json({ success: true, data: sanitizedData });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid query parameters",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to fetch data",
          error: error.message,
        },
        { status: 500 }
      );
    }

    // Handle other unknown errors
    console.error("Unknown error:", error);
    return NextResponse.json(
      { success: false, message: "An unknown error occurred" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
