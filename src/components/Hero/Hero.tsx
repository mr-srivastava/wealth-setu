import React from "react";

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building Wealth, <br />
              <span className="text-green-600">Securing Futures</span>
              <br />
              with WealthSetu
            </h1>
            <p className="text-lg text-gray-600">
              Your trusted partner in creating comprehensive financial
              solutions. From smart investments to complete protection, we
              bridge the gap to your financial success.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
              <a
                href="#contact"
                className="inline-block text-center px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Start Your Financial Journey
              </a>
              <a
                href="#why-us"
                className="inline-block text-center px-8 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-600 mr-2"></i>
                AMFI Registered
              </div>
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-green-600 mr-2"></i>
                Licensed Advisor
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-96 w-full">
              <div className="absolute inset-0 bg-green-200 rounded-lg transform -rotate-6"></div>
              <div className="absolute inset-0 bg-green-600/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-9xl text-green-600/30"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}