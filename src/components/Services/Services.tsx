import {
  IconArrowRight,
  IconChartPie4Filled,
  IconCheck,
  IconEmergencyBed,
  IconShieldHeart,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const SERVICES = [
  {
    title: "Mutual Funds",
    description:
      "Strategic investment solutions designed to help you achieve your financial goals through diversified portfolios.",
    icon: <IconChartPie4Filled size={"3rem"} />,
    features: [
      "Customized Portfolio Management",
      "Risk-Adjusted Returns",
      "Regular Portfolio Review",
    ],
    highlightText: "AMFI Registered Mutual Fund Distributor",
  },
  {
    title: "Life Insurance",
    description:
      "Comprehensive protection plans ensuring financial security for you and your loved ones.",
    icon: <IconShieldHeart size={"3rem"} />,
    features: [
      "Term Life Insurance",
      "Unit-Linked Insurance Plans",
      "Child Education Planning",
    ],
    highlightText: "Partners: LIC, TATA AIA, and more",
  },
  {
    title: "Health & General Insurance",
    description:
      "Complete protection against medical emergencies and coverage for your valuable assets.",
    icon: <IconEmergencyBed size={"3rem"} />,
    features: [
      "Health Insurance Plans",
      "Motor Insurance",
      "Property Insurance",
    ],
    highlightText: "Comprehensive Coverage Solutions",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-green-600 rounded mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to meet your unique
            needs, from wealth creation to protection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-green-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <IconCheck className="text-green-600 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-green-600 text-sm font-medium">
                {service.highlightText}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Get Expert Advice
            <IconArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
