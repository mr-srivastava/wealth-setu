// import {
//   Transaction,
//   TransactionsTable,
// } from "@/components/TransactionTable/TransactionTable";
// import { Metadata } from "next";

// const fetchLedger = async (): Promise<Array<Transaction>> => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ledgers`);
//   if (!res.ok) {
//     const errorText = await res.text();
//     throw new Error(`Failed to fetch data: ${res.status} - ${errorText}`);
//   }
//   return res.json();
// };

// export const metadata: Metadata = {
//   title: "Ledger | WealthSetu - Your Financial Journey Starts Here",
//   description: "WealthSetu - Your Financial Journey Starts Here",
// };

// export default async function Ledger() {
//   const ledger = await fetchLedger();

//   return (
//     <div className="p-4 pt-0">
//       <h1 className="my-2 text-3xl font-semibold leading-none tracking-tight">
//         Ledger
//       </h1>
//       <TransactionsTable transactions={ledger} />
//     </div>
//   );
// }
import React from "react";

export default function page() {
  return (
    <div>
      DB: {process.env.DATABASE_URL}
      <br />
      Di: {process.env.DIRECT_URL}
      <br />
      POSTGRES_PRISMA_URL: {process.env.POSTGRES_PRISMA_URL}
    </div>
  );
}
