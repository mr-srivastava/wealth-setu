import {
  IconArrowRight,
  IconCertificate,
  IconCircleCheckFilled,
  IconPresentationFilled,
  IconShieldHalfFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { memo } from "react";

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
  keyprop: string;
}

interface Metric {
  metric: string;
  label: string;
}

interface WhyUsProps {
  className?: string;
}

const VALUEPROPS: ValueProp[] = [
  {
    icon: <IconShieldHalfFilled size={"2.25rem"} className="text-green-600" />,
    title: "Trust & Credibility",
    description:
      "AMFI Registered advisors with proven expertise in wealth management and insurance solutions.",
    keyprop: "AMFI Registration: ARN-123456",
  },
  {
    icon: (
      <IconPresentationFilled size={"2.25rem"} className="text-green-600" />
    ),
    title: "Experience & Expertise",
    description:
      "Decade-long experience in creating wealth through strategic financial planning and risk management.",
    keyprop: "10+ Years of Excellence",
  },
  {
    icon: <IconCertificate size={"2.25rem"} className="text-green-600" />,
    title: "Comprehensive Solutions",
    description:
      "One-stop solution for all your financial needs - from investments to insurance and risk management.",
    keyprop: "Tailored Financial Solutions",
  },
];

const METRICS: Metric[] = [
  {
    metric: "5000+",
    label: "Happy Clients",
  },
  {
    metric: "₹100Cr+",
    label: "Assets Managed",
  },
  {
    metric: "10+",
    label: "Years Experience",
  },
  {
    metric: "99%",
    label: "Client Satisfaction",
  },
];

const ValuePropCard = memo(function ValuePropCard({ valueprop }: { valueprop: ValueProp }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-green-600 mb-6">{valueprop.icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {valueprop.title}
      </h3>
      <p className="text-gray-600 mb-6">{valueprop.description}</p>
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center text-sm text-gray-600">
          <IconCircleCheckFilled className="text-green-600 mr-2" />
          {valueprop.keyprop}
        </div>
      </div>
    </div>
  );
});

const MetricCard = memo(function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="bg-white p-6 rounded-lg text-center">
      <div className="text-3xl font-bold text-green-600 mb-2">
        {metric.metric}
      </div>
      <p className="text-gray-600">{metric.label}</p>
    </div>
  );
});

const WhyUsHeader = memo(function WhyUsHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Why Choose WealthSetu?
      </h2>
      <div className="h-1 w-20 bg-green-600 rounded mx-auto"></div>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Experience the perfect blend of expertise, trust, and personalized
        service that has made us the preferred choice for financial
        planning.
      </p>
    </div>
  );
});

const ValuePropsGrid = memo(function ValuePropsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {VALUEPROPS.map((valueprop) => (
        <ValuePropCard key={valueprop.title} valueprop={valueprop} />
      ))}
    </div>
  );
});

const MetricsGrid = memo(function MetricsGrid() {
  return (
    <div className="mt-16 grid md:grid-cols-4 gap-8">
      {METRICS.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
});

const WhyUsCTA = memo(function WhyUsCTA() {
  return (
    <div className="mt-16 text-center">
      <Link
        href="#contact"
        className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
      >
        Start Your Financial Journey
        <IconArrowRight className="ml-2" />
      </Link>
    </div>
  );
});

export default function WhyUs({ className = "" }: WhyUsProps) {
  return (
    <section id="why-us" className={`py-20 bg-green-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyUsHeader />
        <ValuePropsGrid />
        <MetricsGrid />
        <WhyUsCTA />
      </div>
    </section>
  );
}
