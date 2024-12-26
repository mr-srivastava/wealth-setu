import React from "react";
import { DataCard } from "./DataCard";
import { Input } from "../ui/input";

export const MonthlyReport = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-end justify-between">
        <h1 className="my-2 text-3xl font-semibold leading-none tracking-tight">
          Monthly Report
        </h1>
        <Input placeholder="Search" className="w-1/4" />
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50">
          <DataCard
            title="Total Income"
            description="Total income accumulated this year."
            value="₹2,54,868.04"
          />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <DataCard
            title="Growth Rate"
            description="Growth rate compared to the previous year."
            value="31.42%"
          />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <DataCard
            title="Target Completion"
            description="Percentage of target achieved this year."
            value="64.36%"
          />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
};
