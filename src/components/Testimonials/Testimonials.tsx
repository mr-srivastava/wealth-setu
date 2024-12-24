import {
  IconArrowNarrowRight,
  IconQuoteFilled,
  IconStarFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import React from "react";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    review:
      "WealthSetu has transformed my approach to financial planning. Their expert guidance helped me create a diversified portfolio that's perfectly aligned with my retirement goals.",
    profession: "IT Professional",
    clientAge: 5,
  },
  {
    name: "Priya Patel",
    review:
      "The personalized attention and comprehensive insurance solutions provided by WealthSetu have given my family complete peace of mind. They truly care about their clients.",
    profession: "Business Owner",
    clientAge: 3,
  },
  {
    name: "Amit Kumar",
    review:
      "As a first-time investor, WealthSetu made the entire process simple and transparent. Their regular portfolio reviews and updates keep me confident about my investments.",
    profession: "Healthcare Professional",
    clientAge: 2,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <div className="h-1 w-20 bg-green-600 rounded mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our clients about their journey to financial success with
            WealthSetu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-green-600 mb-6">
                <IconQuoteFilled
                  size={"2.25rem"}
                  className="opacity-20 transform -scale-x-100"
                />
              </div>
              <blockquote className="text-gray-600 mb-6">
                &quot;{testimonial.review}&quot;
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <IconUserFilled className="text-green-600" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.profession} • Client for{" "}
                      {testimonial.clientAge} years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <IconStarFilled className="text-yellow-400" />
            <IconStarFilled className="text-yellow-400" />
            <IconStarFilled className="text-yellow-400" />
            <IconStarFilled className="text-yellow-400" />
            <IconStarFilled className="text-yellow-400" />
            <span className="ml-2 text-gray-600 font-semibold">
              4.9/5 Average Rating
            </span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Start Your Success Story
            <IconArrowNarrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
