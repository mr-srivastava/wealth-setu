import { NextResponse } from "next/server";
import {
  SinglePartnerSchema,
  BulkPartnersSchema,
} from "@/server/validators/Partners.validator";
import {
  getPartnersService,
  createPartnerService,
  createBulkPartnersService,
} from "@/server/services/Partners.service";
import { z } from "zod";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const partner = await getPartnersService(Number(id));

      if (!partner) {
        return NextResponse.json(
          { message: "Partner not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(partner, { status: 200 });
    }

    const partners = await getPartnersService();
    return NextResponse.json(partners, { status: 200 });
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
      const validatedBody = BulkPartnersSchema.parse(body);

      // Call the bulk creation service
      const partners = await createBulkPartnersService(validatedBody);
      return NextResponse.json(partners, { status: 200 });
    } else {
      // Validate single partner data
      const validatedBody = SinglePartnerSchema.parse(body);

      // Call the single creation service
      const partner = await createPartnerService(validatedBody);
      return NextResponse.json(partner, { status: 200 });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
