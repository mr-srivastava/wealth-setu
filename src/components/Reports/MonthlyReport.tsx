import React from 'react';
import { DataCard } from './DataCard';
import { Input } from '../ui/input';

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
        <DataCard
          title="Total Income"
          description="Total income accumulated this year."
        >
          <div className=" text-4xl font-bold">₹2,54,868.04</div>
        </DataCard>
        <DataCard
          title="Total Income"
          description="Total income accumulated this year."
        >
          <div className=" text-4xl font-bold">₹2,54,868.04</div>
        </DataCard>
        <DataCard
          title="Total Income"
          description="Total income accumulated this year."
        >
          <div className=" text-4xl font-bold">31.42%</div>
        </DataCard>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
};
