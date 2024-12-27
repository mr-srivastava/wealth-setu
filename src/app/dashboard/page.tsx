import { DataCard } from "@/components/Reports";
import { AreaChartCard } from "@/components/Reports/AreaChart";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | WealthSetu - Your Financial Journey Starts Here",
  description: "WealthSetu - Your Financial Journey Starts Here",
};

interface TransactionData {
  transaction_month: string;
  total_transactions: number;
  total_amount: number;
}

interface ApiResponse {
  success: boolean;
  data: TransactionData[];
}

interface ChartData {
  month: string;
  total_amount: number;
}

async function fetchMonthlyTransactions(): Promise<ApiResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/reports/monthly`
    );

    if (!res.ok) {
      // Check for HTTP errors (e.g., 404, 500)
      const errorText = await res.text(); // Get error message from response body if available.
      throw new Error(
        `HTTP error ${res.status}: ${errorText || res.statusText}`
      );
    }

    const data: ApiResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching monthly transactions:", error);
    return null;
  }
}

type SortOrder = "asc" | "desc";
type SortField = "transaction_month" | "total_amount";

interface DashboardData {
  totalTransactions: number;
  totalAmount: number;
  chartData: ChartData[];
}

function convertData(
  transactionData: TransactionData[],
  sortBy: SortField = "transaction_month", // Default sort by month
  sortOrder: SortOrder = "asc" // Default sort order ascending
): DashboardData | null {
  if (!transactionData || !Array.isArray(transactionData)) {
    console.error("Invalid transaction data format. Must be an array.");
    return null;
  }

  const totalAmount = transactionData.reduce(
    (total, item) => total + item.total_amount,
    0
  );
  const totalTransactions = totalAmount / transactionData.length;

  const sortedData = [...transactionData].sort((a, b) => {
    let aValue: string | number = a[sortBy];
    let bValue: string | number = b[sortBy];

    if (sortBy === "transaction_month") {
      aValue = new Date(aValue as string).getTime();
      bValue = new Date(bValue as string).getTime();
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
  });

  const chartData: ChartData[] = [];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (const item of sortedData) {
    const date = new Date(item.transaction_month);
    const monthIndex = date.getMonth(); // 0-indexed
    const monthName = monthNames[monthIndex];

    chartData.push({
      month: monthName,
      total_amount: item.total_amount,
    });
  }

  return { totalAmount, totalTransactions, chartData };
}

export default async function Page() {
  const monthlyTransactions = await fetchMonthlyTransactions();
  const { totalAmount, totalTransactions, chartData } = convertData(
    monthlyTransactions?.data || []
  ) ?? {
    totalAmount: 0,
    totalTransactions: 0,
    chartData: [],
  };
  return (
    <div className="p-4 pt-0">
      <h1 className="my-2 text-3xl font-semibold leading-none tracking-tight">
        Dashboard
      </h1>
      <div className="flex flex-1 flex-col gap-4 pt-5">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <DataCard
            title="Annual Ledger Summary"
            description="A comprehensive overview of financial activity for the year."
          >
            <div className="w-full h-full text-5xl font-bold flex items-center justify-center">
              {totalAmount.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
              })}
            </div>
          </DataCard>
          <DataCard
            title="Average Monthly Ledger Activity"
            description="Average financial activity recorded per month throughout the year."
          >
            <div className="w-full h-full text-5xl font-bold flex items-center justify-center">
              {totalTransactions.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
              })}
            </div>
          </DataCard>
          <AreaChartCard
            title="Monthly Ledger Summary"
            subtitle="An overview of financial activity recorded in the ledger."
            chartData={chartData}
          />
        </div>
        <Skeleton className="min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </div>
  );
}
