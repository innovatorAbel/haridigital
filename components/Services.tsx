"use client";

import React from "react";
import { FaFacebook, FaNewspaper, FaPodcast, FaMusic } from "react-icons/fa";

const services = [
  {
    title: "Social Media",
    description:
      "Engage your audience with tailored content across all platforms.",
    icon: <FaFacebook size={32} className="text-white" />,
    bg: "bg-blue-400",
  },
  {
    title: "News",
    description: "Stay updated with high-quality, professional news coverage.",
    icon: <FaNewspaper size={32} className="text-white" />,
    bg: "bg-blue-400",
  },
  {
    title: "Podcasts",
    description: "Create engaging audio content to grow your audience.",
    icon: <FaPodcast size={32} className="text-white" />,
    bg: "bg-blue-400",
  },
  {
    title: "Music Production",
    description:
      "Produce professional music content for all digital platforms.",
    icon: <FaMusic size={32} className="text-white" />,
    bg: "bg-blue-400",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-24 py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${service.bg}`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {service.title}
              </h3>
              <p className="text-blue-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
