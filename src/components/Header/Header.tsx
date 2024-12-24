"use client";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="relative">
      <nav className="bg-white fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-green-600">
                  WealthSetu
                </span>
              </div>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#why-us"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                Why Us
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  ) : (
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
              >
                Services
              </a>
              <a
                href="#why-us"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
              >
                Why Us
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
