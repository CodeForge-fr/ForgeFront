"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/photo.jpg",
    title: "CINEMA MEDLEY",
    date: "OCTOBER 26, 2026",
    location: "YEREVAN",
  },
  {
    id: 2,
    image: "/images/photo.jpg",
    title: "SYMPHONIC NIGHT",
    date: "NOVEMBER 10, 2026",
    location: "PARIS",
  },
  {
    id: 3,
    image: "/images/photo.jpg",
    title: "MOVIE SOUNDTRACKS",
    date: "DECEMBER 05, 2026",
    location: "ROME",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative w-full h-screen overflow-hidden left-1/2 -translate-x-1/2">
      <Image
        src={slide.image}
        alt="slide"
        fill
        className="object-cover object-[center_30%]"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Search */}
        <div className="mb-10 w-full max-w-[700px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          />
        </div>

        <p className="text-lg tracking-widest">{slide.date}</p>

        <h1 className="text-6xl font-bold mt-2">{slide.title}</h1>

        <p className="mt-4 text-lg">📍 {slide.location}</p>

        <div className="flex gap-4 mt-8">
          <button className="border border-white px-6 py-2 rounded-full">
            View Details
          </button>

          <button className="bg-blue-500 px-6 py-2 rounded-full">
            Book Now
          </button>
        </div>

        {/* dots */}
        <div className="flex gap-3 mt-10">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
