import {
  IconCircleCheckFilled,
  IconShieldHalfFilled,
} from '@tabler/icons-react';
import Link from 'next/link';
import React, { memo } from 'react';
import HeroIcon from '../HeroIcon/HeroIcon';

interface CallToActionButton {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
}

interface TrustBadge {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const trustBadges: TrustBadge[] = [
  {
    icon: IconCircleCheckFilled,
    label: 'AMFI Registered',
  },
  {
    icon: IconShieldHalfFilled,
    label: 'Licensed Advisor',
  },
];

const CallToActionButton = memo(function CallToActionButton({
  button,
}: {
  button: CallToActionButton;
}) {
  const baseClasses =
    'inline-block text-center px-8 py-3 rounded-md transition-colors duration-300';
  const classes =
    button.variant === 'primary'
      ? `${baseClasses} bg-green-600 text-white hover:bg-green-700`
      : `${baseClasses} border border-green-600 text-green-600 hover:bg-green-50`;

  return (
    <Link href={button.href} className={classes}>
      {button.label}
    </Link>
  );
});

const TrustBadge = memo(function TrustBadge({ badge }: { badge: TrustBadge }) {
  const IconComponent = badge.icon;

  return (
    <div className="flex items-center">
      <IconComponent className="text-green-600 mr-2" />
      {badge.label}
    </div>
  );
});

interface HeroContentProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

const HeroContent = memo(function HeroContent({
  title = 'Building Wealth, Securing Futures with WealthSetu',
  subtitle = 'Your trusted partner in creating comprehensive financial solutions. From smart investments to complete protection, we bridge the gap to your financial success.',
  ctaText = 'Start Your Financial Journey',
  ctaHref = '#contact',
}: HeroContentProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h1>

      <p className="text-lg text-gray-600">{subtitle}</p>

      <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
        <CallToActionButton
          button={{ href: ctaHref, label: ctaText, variant: 'primary' }}
        />
        <CallToActionButton
          button={{
            href: '#why-us',
            label: 'Learn More',
            variant: 'secondary',
          }}
        />
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600">
        {trustBadges.map(badge => (
          <TrustBadge key={badge.label} badge={badge} />
        ))}
      </div>
    </div>
  );
});

const HeroVisual = memo(function HeroVisual() {
  return (
    <div className="hidden md:block">
      <HeroIcon iconSrc="/rupee.svg" />
    </div>
  );
});

interface HeroProps {
  className?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({
  className = '',
  title = 'Building Wealth, Securing Futures with WealthSetu',
  subtitle = 'Your trusted partner in creating comprehensive financial solutions. From smart investments to complete protection, we bridge the gap to your financial success.',
  ctaText = 'Start Your Financial Journey',
  ctaHref = '#contact',
}: HeroProps) {
  return (
    <div
      className={`pt-16 bg-gradient-to-br from-green-50 to-green-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <HeroContent
            title={title}
            subtitle={subtitle}
            ctaText={ctaText}
            ctaHref={ctaHref}
          />
          <HeroVisual />
        </div>
      </div>
    </div>
  );
}
