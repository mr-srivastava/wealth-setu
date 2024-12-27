import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | WealthSetu - Your Financial Journey Starts Here",
  description: "WealthSetu - Your Financial Journey Starts Here",
};

export default function Page() {
  return (
    <div className="p-4 pt-0">
      <h1 className="my-2 text-3xl font-semibold leading-none tracking-tight">
        Dashboard
      </h1>
      <div className="flex flex-1 flex-col gap-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Skeleton className="aspect-video rounded-xl" />
          <Skeleton className="aspect-video rounded-xl" />
          <Skeleton className="aspect-video rounded-xl" />
        </div>
        <Skeleton className="min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </div>
  );
}
