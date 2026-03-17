import React, { memo } from 'react';

import {
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from '@tabler/icons-react';
import ContactForm2 from './ContactForm2';

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  value: string;
}

interface BusinessHour {
  day: string;
  hours: string;
}

interface ContactProps {
  className?: string;
}

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: IconMapPinFilled,
    title: 'Office Address',
    value: '123 Financial District, Mumbai 400001',
  },
  {
    icon: IconPhoneFilled,
    title: 'Phone',
    value: '+91 98765 43210',
  },
  {
    icon: IconMailFilled,
    title: 'Email',
    value: 'contact@wealthsetu.com',
  },
];

const BUSINESS_HOURS: BusinessHour[] = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const ContactInfoItem = memo(function ContactInfoItem({
  info,
}: {
  info: ContactInfo;
}) {
  const IconComponent = info.icon;

  return (
    <div className="flex items-start gap-4">
      <div className="text-primary">
        <IconComponent className="text-primary" />
      </div>
      <div>
        <h4 className="font-medium text-foreground">{info.title}</h4>
        <p className="text-muted-foreground">{info.value}</p>
      </div>
    </div>
  );
});

const BusinessHourItem = memo(function BusinessHourItem({
  hour,
}: {
  hour: BusinessHour;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{hour.day}</span>
      <span className="text-foreground font-medium">{hour.hours}</span>
    </div>
  );
});

const ContactHeader = memo(function ContactHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-4">
        Get Started Today
      </h2>
      <div className="h-1 w-20 bg-primary rounded mx-auto"></div>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        Take the first step towards securing your financial future. Schedule a
        free consultation with our experts.
      </p>
    </div>
  );
});

const ContactFormSection = memo(function ContactFormSection() {
  return (
    <div className="bg-card rounded-xl p-8 shadow-lg">
      <ContactForm2 />
    </div>
  );
});

const ContactInfoSection = memo(function ContactInfoSection() {
  return (
    <div className="bg-card rounded-xl p-8 shadow-lg">
      <h3 className="text-xl font-bold text-foreground mb-6">
        Contact Information
      </h3>
      <div className="space-y-4">
        {CONTACT_INFO.map(info => (
          <ContactInfoItem key={info.title} info={info} />
        ))}
      </div>
    </div>
  );
});

const BusinessHoursSection = memo(function BusinessHoursSection() {
  return (
    <div className="bg-card rounded-xl p-8 shadow-lg">
      <h3 className="text-xl font-bold text-foreground mb-6">Business Hours</h3>
      <div className="space-y-2">
        {BUSINESS_HOURS.map(hour => (
          <BusinessHourItem key={hour.day} hour={hour} />
        ))}
      </div>
    </div>
  );
});

const ContactSidebar = memo(function ContactSidebar() {
  return (
    <div className="flex flex-col gap-8">
      <ContactInfoSection />
      <BusinessHoursSection />
    </div>
  );
});

export default function Contact({ className = '' }: ContactProps) {
  return (
    <section id="contact" className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactFormSection />
          <ContactSidebar />
        </div>
      </div>
    </section>
  );
}
