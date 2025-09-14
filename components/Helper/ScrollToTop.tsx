'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show and hide functionality
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 animate-pulse z-50">
      {isVisible && (
        <button
          // className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
          className="bg-cyan-700 hover:bg-cyan-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/70 transition-colors"

          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
