"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            About Us
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            ሓሪ ዲጂታል፡- በተለያዩ የሚድያና ሚዲያ ነክ ዘርፎች ማለትም ሓሪ ዜና ትንታኔ፣ ሓሪ ፖድካትን ጨምሮ
            በዲጂታል ሚዲያ የሚሠራጩ የተለያዩ ይዘቶችን በአማራጭነት የሚያቀርብ ድርጅት ሲሆን በሁነቶች ዝግጅት፣
            በማስታወቂያና በዶክመንተሪ ቀረጻ እና በዲጂታል አርት፣ የጋዜጠኝነት እና የህዝብ ግንኙነት ሙያዎችን
            የማማከርና ስልጠናዎችን ይሰጣል።
          </p>

          {/* <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            From concept to final production, we combine strategy, creativity,
            and technology to produce content that informs, entertains, and
            inspires.
          </p> */}

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="bg-blue-50 px-6 py-4 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700">100+</h3>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="bg-blue-50 px-6 py-4 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700">50+</h3>
              <p className="text-sm text-gray-600">Clients</p>
            </div>
            <div className="bg-blue-50 px-6 py-4 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700">5+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-40"></div>

          <img
            src="/logo3.png"
            alt="About us"
            className=" w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
