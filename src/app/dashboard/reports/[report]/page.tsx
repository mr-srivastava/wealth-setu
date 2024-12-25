import { YearToDateReport } from "@/components/Reports/YearToDateReport";
import React from "react";

const reportRenderer = (report: string) => {
  switch (report) {
    case "year-to-date":
      return <YearToDateReport />;
    default:
      return <div>Report not found</div>;
  }
};

export default function Report({ params }: { params: { report: string } }) {
  return <div>{reportRenderer(params.report)}</div>;
}
