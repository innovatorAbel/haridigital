"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-600/30 to-blue-300/20" />

      {/* Abstract Shapes */}
      <div className="absolute -top-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-300 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-400 rounded-full opacity-20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left flex flex-col items-center md:items-start">
        {/* Headline */}
        {/* <h1
          className="text-white font-bold drop-shadow-lg leading-tight 
          text-3xl sm:text-4xl md:text-6xl max-w-2xl"
        >
          Hari Digital
        </h1> */}

        {/* Subtitle */}
        {/* <p
          className="text-white/90 mt-4 drop-shadow-md
          text-base sm:text-lg md:text-xl max-w-xl"
        >
          We craft engaging content across social media, podcasts, news, and
          music production to help your brand stand out.
        </p> */}

        {/* Button */}
        <button
          onClick={() =>
            window.open(
              "https://www.youtube.com/@%E1%88%93%E1%88%AA%E1%8B%B2%E1%8C%82%E1%89%B3%E1%88%8D",
              "_blank"
            )
          }
          className="mt-20 sm:mt-80 block mx-auto bg-gradient-to-r from-blue-500 to-blue-300 
text-white px-8 sm:px-10 py-3 rounded-full text-base sm:text-lg 
font-medium hover:from-blue-400 hover:to-blue-200 transition-all 
duration-300 shadow-xl hover:shadow-2xl"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Hero;
