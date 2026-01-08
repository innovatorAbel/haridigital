"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Podcasts", href: "#podcasts" },
    { name: "News", href: "#news" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-full">
        {/* Logo + Text */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo3.png"
            alt="Hari Digital Logo"
            width={70}
            height={80}
          />
          {/* <span className="text-2xl font-bold text-blue-600">Hari Digital</span> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center h-full">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-500 transition-all duration-300"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
