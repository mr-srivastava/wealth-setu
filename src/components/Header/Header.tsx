"use client";
import React, { useState, useCallback, memo } from "react";

interface NavigationItem {
  href: string;
  label: string;
  isButton?: boolean;
}

const navigationItems: NavigationItem[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us", isButton: true }
];

const Logo = memo(function Logo() {
  return (
    <span className="text-2xl font-bold text-green-600">WealthSetu</span>
  );
});

const NavigationLink = memo(function NavigationLink({ item }: { item: NavigationItem }) {
  const baseClasses = "transition-colors duration-300";
  const classes = item.isButton 
    ? `${baseClasses} bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700`
    : `${baseClasses} text-gray-700 hover:text-green-600`;

  return (
    <a href={item.href} className={classes}>
      {item.label}
    </a>
  );
});

const MobileNavigationLink = memo(function MobileNavigationLink({ item }: { item: NavigationItem }) {
  const baseClasses = "block px-3 py-2 rounded-md transition-colors duration-300";
  const classes = item.isButton 
    ? `${baseClasses} bg-green-600 text-white hover:bg-green-700`
    : `${baseClasses} text-gray-700 hover:text-green-600 hover:bg-gray-100`;

  return (
    <a href={item.href} className={classes}>
      {item.label}
    </a>
  );
});

const HamburgerButton = memo(function HamburgerButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
});

const MobileMenu = memo(function MobileMenu({ isOpen, items }: { isOpen: boolean; items: NavigationItem[] }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {items.map((item) => (
          <MobileNavigationLink key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
});

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <header className={`relative ${className}`}>
      <nav className="bg-white fixed w-full top-0 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Logo />
              </div>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8" role="menubar">
              {navigationItems.map((item) => (
                <div key={item.href} role="none">
                  <NavigationLink item={item} />
                </div>
              ))}
            </div>

            <div className="flex items-center md:hidden">
              <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} items={navigationItems} />
      </nav>
    </header>
  );
}
