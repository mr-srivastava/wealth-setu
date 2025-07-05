import {
  IconDeviceDesktopAnalytics,
  IconFolderCheck,
  IconMessages,
  IconTransactionRupee,
} from '@tabler/icons-react';
import React from 'react';

const STEPS = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Understanding your financial goals and current situation',
    icon: <IconMessages size={'2.25rem'} className="text-green-600" />,
  },
  {
    step: 2,
    title: 'Analysis and Planning',
    description: 'Evaluating options and creating a personalized plan',
    icon: (
      <IconDeviceDesktopAnalytics size={'2.25rem'} className="text-green-600" />
    ),
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'Executing the strategy with complete transparency',
    icon: <IconTransactionRupee size={'2.25rem'} className="text-green-600" />,
  },
  {
    step: 4,
    title: 'Regular Review',
    description: 'Monitoring progress and adjusting strategies as needed',
    icon: <IconFolderCheck size={'2.25rem'} className="text-green-600" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
          <div className="h-1 w-20 bg-green-600 rounded mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures you receive the most suitable
            financial solutions tailored to your needs.
          </p>
        </div>

        <div className="relative">
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-green-200 -mt-px"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map(step => (
              <div
                key={step.step}
                className="relative bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white">
                  {step.step}
                </div>
                <div className="text-center pt-8 flex flex-col items-center justify-center">
                  <div className="text-green-600 mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Begin Your Journey
            <i className="fas fa-arrow-right ml-2"></i>
          </a>

          <p className="mt-4 text-sm text-gray-600">
            Schedule a free consultation and discover how we can help secure
            your financial future
          </p>
        </div>
      </div>
    </section>
  );
}
