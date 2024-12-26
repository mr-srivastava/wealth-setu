import {
  Transaction,
  TransactionsTable,
} from "@/components/TransactionTable/TransactionTable";
import { Metadata } from "next";

const fetchLedger = async (): Promise<Array<Transaction>> => {
  const res = await fetch("http://localhost:3000/api/ledgers");
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${res.status} - ${errorText}`);
  }
  return res.json();
};

export const metadata: Metadata = {
  title: "Ledger | WealthSetu - Your Financial Journey Starts Here",
  description: "WealthSetu - Your Financial Journey Starts Here",
};

export default async function Ledger() {
  const ledger = await fetchLedger();

  return (
    <div className="p-4 pt-0">
      <h1 className="my-2 text-3xl font-semibold leading-none tracking-tight">
        Ledger
      </h1>
      <TransactionsTable transactions={ledger} />
    </div>
  );
}
