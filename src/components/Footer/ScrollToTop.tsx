"use client";
import { IconArrowUp } from "@tabler/icons-react";
import React from "react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none"
    >
      <i className="fas fa-arrow-up"></i>
      <IconArrowUp className="text-white" />
    </button>
  );
}
