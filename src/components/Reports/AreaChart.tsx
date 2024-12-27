"use client";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DataCard } from "./DataCard";

interface ChartData {
  month: string;
  total_amount: number;
}

const chartConfig = {
  total_amount: {
    label: "Total Amount",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface AreaChartCardProps {
  className?: string;
  chartData: Array<ChartData> | null;
  title: string;
  subtitle: string;
}

export function AreaChartCard({
  chartData,
  title,
  subtitle,
}: AreaChartCardProps) {
  return (
    <DataCard title={title} description={subtitle}>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData || undefined}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator="dot"
                formatter={(value) =>
                  value.toLocaleString("en-US", {
                    style: "currency",
                    currency: "INR",
                  })
                }
              />
            }
          />
          <Area
            dataKey="total_amount"
            type="natural"
            fill="var(--color-total_amount)"
            fillOpacity={0.4}
            stroke="var(--color-total_amount)"
          />
        </AreaChart>
      </ChartContainer>
    </DataCard>
  );
}
