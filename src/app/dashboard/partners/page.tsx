import {
  Partner,
  PartnersTable,
} from "@/components/PartnersTable/PartnersTable";
import { Metadata } from "next";

const fetchPartners = async (): Promise<Array<Partner>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/partners`);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${res.status} - ${errorText}`);
  }
  return res.json();
};

export const metadata: Metadata = {
  title: "Partners | WealthSetu - Your Financial Journey Starts Here",
  description: "WealthSetu - Your Financial Journey Starts Here",
};

export default async function Partners() {
  const partners = await fetchPartners();
  return (
    <div className="p-4 pt-0">
      <h1 className="my-2 text-3xl font-semibold leading-none tracking-tight">
        Partners
      </h1>
      <PartnersTable partners={partners} />
    </div>
  );
}
