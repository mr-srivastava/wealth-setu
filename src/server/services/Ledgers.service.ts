import { prisma } from "@/lib/prisma";

interface LedgerData {
  amount: number;
  timestamp: bigint;
  partnerId: number;
}

// Service to fetch all ledgers or a single ledger by ID
export async function getLedgersService(id?: number) {
  if (id) {
    const ledger = await prisma.ledgers.findUnique({
      where: { id },
      include: {
        partner: true, // Optionally include related partner data
      },
    });
    return ledger;
  }

  const ledgers = await prisma.ledgers.findMany({
    include: {
      partner: true, // Optionally include related partner data
    },
  });
  return ledgers;
}

// Service to fetch ledgers by partnerId
export async function getLedgersByPartnerService(partnerId: number) {
  const partnerLedgers = await prisma.ledgers.findMany({
    where: { partnerId },
    include: {
      partner: true, // Optionally include related partner data
    },
  });
  return partnerLedgers;
}

// Service to create a single ledger entry
export async function createLedgerService(data: LedgerData) {
  const ledger = await prisma.ledgers.create({
    data,
  });
  return ledger;
}

// Service to create multiple ledger entries in bulk
export async function createBulkLedgersService(data: LedgerData[]) {
  const ledgers = await prisma.ledgers.createMany({
    data,
  });
  return ledgers;
}
