import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

export default function ContactForm() {
  return (
    <form className="space-y-6" x-data="{ submitted: false }">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="first_name"
          >
            First Name*
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="last_name"
          >
            Last Name*
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
            required
          />
        </div>
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="email"
        >
          Email Address*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="phone"
        >
          Phone Number*
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
          required
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="service"
        >
          Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
        >
          <option value="">Select a Service</option>
          <option value="mutual_funds">Mutual Funds</option>
          <option value="life_insurance">Life Insurance</option>
          <option value="health_insurance">Health Insurance</option>
          <option value="general_insurance">General Insurance</option>
        </select>
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="message"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
      >
        Schedule Consultation
        <IconArrowRight className="ml-2" />
      </button>

      <div
        x-show="submitted"
        className="hidden text-green-600 text-center font-medium"
      >
        Thank you for contacting us! We&apos;ll get back to you shortly.
      </div>
    </form>
  );
}
