import React from "react";
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

const SOCIALS = [
  { name: "LinkedIn", icon: <IconBrandLinkedinFilled />, href: "#" },
  { name: "Twitter", icon: <IconBrandXFilled />, href: "#" },
  { name: "Facebook", icon: <IconBrandFacebookFilled />, href: "#" },
  { name: "Instagram", icon: <IconBrandInstagramFilled />, href: "#" },
];

const QUICK_LINKS = [
  { name: "About Us", href: "/#about" },
  { name: "Our Services", href: "/#services" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact Us", href: "/#contact" },
  { name: "Dashboard", href: "/dashboard" },
];

const SERVICES = [
  {
    name: "Mutual Funds",
    href: "/#services",
  },
  {
    name: "Life Insurance",
    href: "/#services",
  },
  {
    name: "Health Insurance",
    href: "/#services",
  },
  {
    name: "General Insurance",
    href: "/#services",
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-500">WealthSetu</h3>
            <p className="text-gray-400">
              Your trusted partner in creating comprehensive financial solutions
              for a secure future.
            </p>
            <div className="flex space-x-4">
              {SOCIALS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-500">
              Our Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-500">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <IconMapPinFilled className="text-green-500" />
                <span className="text-gray-400">
                  123 Financial District, Mumbai 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IconPhoneFilled className="text-green-500" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <IconMailFilled className="text-green-500" />
                <span className="text-gray-400">contact@wealthsetu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                <span className="font-medium">AMFI Registration:</span>{" "}
                ARN-123456
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-medium">SEBI Registration:</span>{" "}
                INA000012345
              </div>
            </div>
            <div className="flex justify-start md:justify-end space-x-4">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8">
          <p>© {new Date().getFullYear()} WealthSetu. All rights reserved.</p>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
