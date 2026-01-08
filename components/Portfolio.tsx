"use client";

import React, { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const portfolioItems = [
  { image: "/portfolio1.jpg", caption: "ኤፐኒም አልበም" },
  { image: "/portfolio2.jpg", caption: "Event Documentary" },
  { image: "/portfolio3.jpg", caption: "Event Documentary" },
  { image: "/portfolio4.jpg", caption: "Gratitude program" },
  { image: "/portfolio5.jpg", caption: "Social Media Campaign" },
  { image: "/portfolio6.jpg", caption: "Book launch" },
];

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 1; // pixels per frame
  const requestRef = useRef<number | null>(null);
  const pauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-scroll animation
  const animateScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollLeft += scrollSpeed;

      // Infinite scroll: reset when reaching half of content
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }
    requestRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
      if (pauseTimeout.current !== null) clearTimeout(pauseTimeout.current);
    };
  }, []);

  // Handle manual scroll via buttons
  const handleManualScroll = (distance: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });

      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);

      // Resume auto-scroll after 2 seconds
      if (pauseTimeout.current !== null) clearTimeout(pauseTimeout.current);
      pauseTimeout.current = setTimeout(() => {
        requestRef.current = requestAnimationFrame(animateScroll);
      }, 2000);
    }
  };

  return (
    <section id="portfolio" className="pt-24 py-16 bg-blue-50 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Our Portfolio
        </h2>

        <div className="overflow-hidden relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden pb-4"
          >
            {[...portfolioItems, ...portfolioItems].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[360px] lg:w-[400px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-56 md:h-64 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <p className="text-blue-800 font-semibold text-center">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={() => handleManualScroll(-360)}
              className="pointer-events-auto bg-gradient-to-br from-blue-300 to-blue-200 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 flex items-center justify-center text-2xl"
              aria-label="Previous Slide"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => handleManualScroll(360)}
              className="pointer-events-auto bg-gradient-to-br from-blue-300 to-blue-200 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 flex items-center justify-center text-2xl"
              aria-label="Next Slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
