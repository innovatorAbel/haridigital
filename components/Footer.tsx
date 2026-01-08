"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-8 text-blue-700 text-2xl justify-center">
          <a
            href="https://www.facebook.com/share/1EzUb7FfT2/"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@%E1%88%93%E1%88%AA%E1%8B%B2%E1%8C%82%E1%89%B3%E1%88%8D"
            className="hover:text-blue-500 transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/haridigital75?igsh=cTIwOTE4bjBocjJl"
            className="hover:text-blue-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@hari2024tiktok"
            className="hover:text-blue-500 transition-colors"
          >
            <FaTiktok />
          </a>
          <a
            href="https://t.me/hariDigitalmedia"
            className="hover:text-blue-500 transition-colors"
          >
            <FaTelegram />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-blue-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Hari Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
