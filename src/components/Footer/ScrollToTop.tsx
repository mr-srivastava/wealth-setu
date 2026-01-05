'use client';
import { IconArrowUp } from '@tabler/icons-react';
import React from 'react';

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300 focus:outline-none"
    >
      <i className="fas fa-arrow-up"></i>
      <IconArrowUp className="text-white" />
    </button>
  );
}
