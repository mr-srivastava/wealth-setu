import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React, { memo } from 'react';

interface TrustMetric {
  metric: string;
  label: string;
}

interface MissionVision {
  title: string;
  description: string;
}

interface AboutProps {
  className?: string;
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
}

const TRUST_METRICS: TrustMetric[] = [
  { metric: '10+', label: 'Years of Experience' },
  { metric: '5000+', label: 'Happy Clients' },
  { metric: '₹100Cr+', label: 'Assets Managed' },
  { metric: '99%', label: 'Client Satisfaction' },
];

const MISSION_VISION: MissionVision[] = [
  {
    title: 'Our Mission',
    description:
      'To empower individuals and businesses with smart financial solutions for a secure future.',
  },
  {
    title: 'Our Vision',
    description:
      'To be the most trusted financial advisory partner, creating lasting wealth for generations.',
  },
];

const TrustMetricCard = memo(function TrustMetricCard({
  metric,
}: {
  metric: TrustMetric;
}) {
  return (
    <div className="text-center p-6 bg-green-50 rounded-lg">
      <div className="text-3xl font-bold text-green-600 mb-2">
        {metric.metric}
      </div>
      <div className="text-gray-600">{metric.label}</div>
    </div>
  );
});

const MissionVisionCard = memo(function MissionVisionCard({
  item,
}: {
  item: MissionVision;
}) {
  return (
    <div className="border-l-4 border-green-600 pl-4">
      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
});

interface AboutContentProps {
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
}

const AboutContent = memo(function AboutContent({
  title = 'Your Bridge to Financial Security',
  description = 'At WealthSetu, we believe in building bridges to financial success through expert guidance and personalized solutions. Our commitment to excellence and client-first approach has made us a trusted name in financial advisory services.',
  features = [],
}: AboutContentProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-1 w-20 bg-green-600 rounded"></div>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>

      <div className="grid grid-cols-2 gap-6">
        {MISSION_VISION.map(item => (
          <MissionVisionCard key={item.title} item={item} />
        ))}
      </div>

      {features.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">
            Why Choose WealthSetu?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                {feature.icon}
                <div>
                  <h4 className="font-medium text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

const AboutVisual = memo(function AboutVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-green-50 rounded-xl transform rotate-3"></div>
      <div className="relative bg-white p-8 rounded-xl shadow-lg">
        <div className="grid grid-cols-2 gap-6">
          {TRUST_METRICS.map(metric => (
            <TrustMetricCard key={metric.label} metric={metric} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 font-medium rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
          >
            Schedule a Consultation
            <IconArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
});

export default function About({
  className = '',
  title,
  description,
  features,
}: AboutProps) {
  return (
    <section id="about" className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AboutContent
            title={title}
            description={description}
            features={features}
          />
          <AboutVisual />
        </div>
      </div>
    </section>
  );
}
