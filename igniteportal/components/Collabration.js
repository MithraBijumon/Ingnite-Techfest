"use client";
import React, { useState } from "react";

const slides = [
  "assets/placeholder.png",
  "assets/placeholder.png",
  "assets/placeholder.png",
];

export default function Collabration() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <h1 className="text-4xl mt-20 font-bold text-white text-center">
        Collabrations
      </h1>

      <div className="relative w-full overflow-hidden rounded-lg h-56 md:h-96">
        {/* Slides container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((src, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 sm:mt-20 mt-10 flex items-center justify-center"
            >
              <img src={src} className="sm:h-50 h-30 " alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute z-30 flex -translate-x-1/2 sm:bottom-5 bottom-2 left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
          </span>
        </button>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          </span>
        </button>
      </div>
    </div>
  );
}
