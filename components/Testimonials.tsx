"use client";

import React from "react";

const testimonials = [
  {
    name: "Bemanda Solutions",
    role: "Tech company",
    quote:
      " Working with Hati Digital has been such a pleasure! They handled our promotional videos and event documentation flawlessly, and their support during our events made everything run so smoothly. Their team is professional, creative, and easy to work with. We're really happy with the results.",
    avatar: "/avatar1.jpg",
  },
  {
    name: "Teka Asefa",
    role: "Musician",
    quote:
      "Their social media strategies helped our engagement grow tremendously in just 3 months.",
    avatar: "/avatar2.jpg",
  },
  {
    name: "Desalge Mersha",
    role: "Musician",
    quote:
      "Amazing music production support! My tracks sound amazing and reach a wider audience.",
    avatar: "/avatar3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          What Our Clients Say
        </h2>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto scrollbar-hide pb-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-blue-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-blue-800 italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <h3 className="text-blue-900 font-semibold">{t.name}</h3>
              <p className="text-blue-700 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
