import { prisma } from "@/lib/prisma";

interface PartnerData {
  name: string;
  shortName: string;
}

// Service to fetch all partners or a single partner by ID
export async function getPartnersService(id?: number) {
  if (id) {
    const partner = await prisma.partners.findUnique({
      where: { id },
    });
    return partner;
  }

  const partners = await prisma.partners.findMany();
  return partners;
}

// Service to create a single partner
export async function createPartnerService(data: PartnerData) {
  const partner = await prisma.partners.create({
    data,
  });
  return partner;
}

// Service to create multiple partners
export async function createBulkPartnersService(data: PartnerData[]) {
  const partners = await prisma.partners.createMany({
    data,
  });
  return partners;
}
