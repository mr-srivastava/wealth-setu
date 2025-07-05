import React, { memo } from "react";
import ScrollToTop from "./ScrollToTop";
import Link from "next/link";
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface FooterLink {
  name: string;
  href: string;
}

interface ContactInfo {
  icon: React.ElementType;
  value: string;
}

interface FooterProps {
  className?: string;
}

const SOCIALS: SocialLink[] = [
  { name: "LinkedIn", icon: <IconBrandLinkedinFilled />, href: "#" },
  { name: "Twitter", icon: <IconBrandXFilled />, href: "#" },
  { name: "Facebook", icon: <IconBrandFacebookFilled />, href: "#" },
  { name: "Instagram", icon: <IconBrandInstagramFilled />, href: "#" },
];

const QUICK_LINKS: FooterLink[] = [
  { name: "About Us", href: "/#about" },
  { name: "Our Services", href: "/#services" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact Us", href: "/#contact" },
  { name: "Dashboard", href: "/dashboard" },
];

const SERVICES: FooterLink[] = [
  { name: "Mutual Funds", href: "/#services" },
  { name: "Life Insurance", href: "/#services" },
  { name: "Health Insurance", href: "/#services" },
  { name: "General Insurance", href: "/#services" },
];

const CONTACT_INFO: ContactInfo[] = [
  { icon: IconMapPinFilled, value: "123 Financial District, Mumbai 400001" },
  { icon: IconPhoneFilled, value: "+91 98765 43210" },
  { icon: IconMailFilled, value: "contact@wealthsetu.com" },
];

const LEGAL_LINKS: FooterLink[] = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Disclaimer", href: "#" },
];

const SocialLink = memo(function SocialLink({ social }: { social: SocialLink }) {
  return (
    <Link
      href={social.href}
      className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      aria-label={social.name}
    >
      {social.icon}
    </Link>
  );
});

const FooterLink = memo(function FooterLink({ link }: { link: FooterLink }) {
  return (
    <li>
      <Link
        href={link.href}
        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      >
        {link.name}
      </Link>
    </li>
  );
});

const ContactInfoItem = memo(function ContactInfoItem({ info }: { info: ContactInfo }) {
  const IconComponent = info.icon;
  
  return (
    <li className="flex items-center space-x-3">
      <IconComponent className="text-green-500" />
      <span className="text-gray-400">{info.value}</span>
    </li>
  );
});

const CompanyInfo = memo(function CompanyInfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-green-500">WealthSetu</h3>
      <p className="text-gray-400">
        Your trusted partner in creating comprehensive financial solutions
        for a secure future.
      </p>
      <div className="flex space-x-4">
        {SOCIALS.map((social) => (
          <SocialLink key={social.name} social={social} />
        ))}
      </div>
    </div>
  );
});

const QuickLinksSection = memo(function QuickLinksSection() {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-green-500">Quick Links</h4>
      <ul className="space-y-2">
        {QUICK_LINKS.map((link) => (
          <FooterLink key={link.name} link={link} />
        ))}
      </ul>
    </div>
  );
});

const ServicesSection = memo(function ServicesSection() {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-green-500">Our Services</h4>
      <ul className="space-y-2">
        {SERVICES.map((service) => (
          <FooterLink key={service.name} link={service} />
        ))}
      </ul>
    </div>
  );
});

const ContactInfoSection = memo(function ContactInfoSection() {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-green-500">Contact Info</h4>
      <ul className="space-y-2">
        {CONTACT_INFO.map((info, index) => (
          <ContactInfoItem key={index} info={info} />
        ))}
      </ul>
    </div>
  );
});

const FooterBottom = memo(function FooterBottom() {
  return (
    <div className="border-t border-gray-800 pt-8 mt-8">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-400">
            <span className="font-medium">AMFI Registration:</span> ARN-123456
          </div>
          <div className="text-sm text-gray-400">
            <span className="font-medium">SEBI Registration:</span> INA000012345
          </div>
        </div>
        <div className="flex justify-start md:justify-end space-x-4">
          {LEGAL_LINKS.map((link) => (
            <FooterLink key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
});

const Copyright = memo(function Copyright() {
  return (
    <div className="text-center text-gray-400 text-sm mt-8">
      <p>© {new Date().getFullYear()} WealthSetu. All rights reserved.</p>
    </div>
  );
});

const FooterContent = memo(function FooterContent() {
  return (
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      <CompanyInfo />
      <QuickLinksSection />
      <ServicesSection />
      <ContactInfoSection />
    </div>
  );
});

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer id="footer" className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FooterContent />
        <FooterBottom />
        <Copyright />
      </div>
      <ScrollToTop />
    </footer>
  );
}
