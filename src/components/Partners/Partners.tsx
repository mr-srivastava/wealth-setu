import {
  IconBuildingHospital,
  IconChartDotsFilled,
  IconCircleCheckFilled,
  IconRosetteDiscountCheckFilled,
  IconShieldHalfFilled,
} from "@tabler/icons-react";
import React from "react";

const PARTNERS = [
  {
    title: "Insurance Partners",
    partners: [
      "Life Insurance Corporation (LIC)",
      "TATA AIA Life Insurance",
      "HDFC Life Insurance",
    ],
    icon: <IconShieldHalfFilled size={"3rem"} className="text-green-600" />,
  },
  {
    title: "Mutual Funds Partners",
    partners: [
      "Axis Mutual Fund",
      "HDFC Mutual Fund",
      "ICICI Prudential Mutual Fund",
    ],
    icon: <IconChartDotsFilled size={"3rem"} className="text-green-600" />,
  },
  {
    title: "General Insurance Partners",
    partners: [
      "Star Health Insurance",
      "Bajaj Allianz General Insurance",
      "HDFC ERGO General Insurance",
    ],
    icon: <IconBuildingHospital size={"3rem"} className="text-green-600" />,
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <div className="h-1 w-20 bg-green-600 rounded mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with India&apos;s leading financial institutions to
            provide you with the best financial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-green-600 mb-6">{partner.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {partner.title}
              </h3>
              <div className="space-y-4">
                {partner.partners.map((partner) => (
                  <div key={partner} className="flex items-center space-x-3">
                    <IconCircleCheckFilled className="text-green-600" />
                    <span className="text-gray-700">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-green-50 rounded-lg border border-green-200">
            <IconRosetteDiscountCheckFilled
              size={"1.5rem"}
              className="text-green-600 mr-1"
            />
            <span className="text-gray-700">
              AMFI Registration Number (ARN): 123456
            </span>
          </div>

          <p className="mt-6 text-gray-600">
            Our partnerships with leading financial institutions enable us to
            offer you the best-in-className financial products and services.
          </p>
        </div>
      </div>
    </section>
  );
}
