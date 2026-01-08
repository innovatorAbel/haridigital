"use client";

import React from "react";

const podcasts = [
  {
    title: "የጫሙት ሽካ ትረካ",
    youtubeUrl:
      "https://youtube.com/playlist?list=PL6YJPuzfXDS4MFcgdQJvsdBmmxDy8JepN&si=G0wxQDUu9ihUOv4M",
    thumbnail: "/podcast1.jpg",
  },
  {
    title: "ከ አቡነ ሉቃስ የተደረገ ቆይታ",
    youtubeUrl: "https://youtu.be/CARLt-ck8l0?si=8GEV6pHAQhgnHahB",
    thumbnail: "/podcast2.jpg",
  },
  {
    title: "አስገራሚው የወጣቱ የሂወት ጉዞ",
    youtubeUrl: "https://youtu.be/c4cFwxxbf20?si=cOxRBi-vQkLMY9OI",
    thumbnail: "/podcast3.jpg",
  },
  {
    // title: "Music Production Secrets",
    youtubeUrl: "https://youtu.be/LJBBpjlKWlw?si=OoQAHr2A5WBW7oqR",
    thumbnail: "/podcast4.jpg",
  },
];

const FeaturedPodcasts: React.FC = () => {
  return (
    <section id="podcasts" className="py-16 bg - bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Featured Podcasts
        </h2>

        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {podcasts.map((podcast, index) => (
            <a
              key={index}
              href={podcast.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[360px] md:w-[400px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer snap-start relative"
            >
              {/* Thumbnail */}
              <img
                src={podcast.thumbnail}
                alt={podcast.title}
                className="w-full h-60 md:h-72 object-cover rounded-2xl"
              />

              {/* Title at bottom */}
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-3 rounded-b-2xl text-center font-semibold">
                {podcast.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPodcasts;
