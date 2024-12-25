import HeroIcon from "@/components/HeroIcon/HeroIcon";

import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title:
    "Unauthorized Access | WealthSetu - Your Financial Journey Starts Here",
  description: "WealthSetu - Your Financial Journey Starts Here",
};

export default function Forbidden() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-evenly min-h-screen space-y-4 w-full">
      <div className="space-y-4">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Unauthorized Access
        </h3>
        <p className="text-lg text-gray-600">
          You do not have permission to access this page.
        </p>
        <Link
          href={"/"}
          className="inline-flex text-center px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
        >
          Go Back
        </Link>
      </div>
      <div className="mb-4 w-1/2 p-20">
        <HeroIcon iconSrc="/forbidden.svg" height={250} width={250} />
      </div>
    </div>
  );
}
