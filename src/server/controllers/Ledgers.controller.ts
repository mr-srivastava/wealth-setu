import { NextResponse } from "next/server";
import {
  LedgerSchema,
  BulkLedgerSchema,
} from "@/server/validators/Ledgers.validator";
import {
  getLedgersService,
  getLedgersByPartnerService,
  createLedgerService,
  createBulkLedgersService,
} from "@/server/services/Ledgers.service";
import { z } from "zod";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const partnerId = searchParams.get("partnerId");

  try {
    if (id) {
      // Fetch a specific ledger by ID
      const ledger = await getLedgersService(Number(id));
      if (!ledger) {
        return NextResponse.json(
          { message: "Ledger not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(ledger, { status: 200 });
    }

    if (partnerId) {
      // Fetch ledgers by partnerId
      const partnerLedgers = await getLedgersByPartnerService(
        Number(partnerId)
      );

      if (!partnerLedgers || partnerLedgers.length === 0) {
        return NextResponse.json(
          { message: "No ledgers found for this partner" },
          { status: 404 }
        );
      }

      return NextResponse.json(partnerLedgers, { status: 200 });
    }

    // Fetch all ledgers if no filters are provided
    const ledgers = await getLedgersService();
    return NextResponse.json(ledgers, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (Array.isArray(body)) {
      // Validate bulk data
      const validatedBody = BulkLedgerSchema.parse(body);

      // Call the bulk ledger creation service
      const ledgers = await createBulkLedgersService(validatedBody);
      return NextResponse.json(ledgers, { status: 200 });
    } else {
      // Validate single ledger data
      const validatedBody = LedgerSchema.parse(body);

      // Call the ledger creation service
      const ledger = await createLedgerService(validatedBody);
      return NextResponse.json(ledger, { status: 200 });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
