import { IconCircleCheckFilled } from "@tabler/icons-react";
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Your Bridge to Financial Security
              </h2>
              <div className="h-1 w-20 bg-green-600 rounded"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              At WealthSetu, we believe in building bridges to financial success
              through expert guidance and personalized solutions. Our commitment
              to excellence and client-first approach has made us a trusted name
              in financial advisory services.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To empower individuals and businesses with smart financial
                  solutions for a secure future.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted financial advisory partner, creating
                  lasting wealth for generations.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                Why Choose WealthSetu?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <IconCircleCheckFilled className="text-green-600 mt-1" />
                  <span className="text-gray-600">
                    AMFI Registered Advisors
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <IconCircleCheckFilled className="text-green-600 mt-1" />
                  <span className="text-gray-600">Personalized Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <IconCircleCheckFilled className="text-green-600 mt-1" />
                  <span className="text-gray-600">Expert Guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <IconCircleCheckFilled className="text-green-600 mt-1" />
                  <span className="text-gray-600">Transparent Service</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-green-50 rounded-xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    5000+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹100Cr+
                  </div>
                  <div className="text-gray-600">Assets Managed</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    99%
                  </div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 font-medium rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  Schedule a Consultation
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
