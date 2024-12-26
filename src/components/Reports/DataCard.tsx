import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface DataCardProps {
  title: string;
  description: string;
  value: number | string;
}

function DataCard({ title, description, value }: DataCardProps) {
  return (
    <Card className="w-full h-full flex flex-col items-start justify-evenly">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className=" text-4xl font-bold">{value}</CardContent>
    </Card>
  );
}

export { DataCard };
