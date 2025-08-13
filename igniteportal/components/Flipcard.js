"use client";
import { useState } from "react";

export default function FlipCard({ frontText, backText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-70 perspective cursor-pointer"
      onMouseEnter={() => setFlipped(!flipped)}
      onMouseLeave={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-[#212121CC] text-white flex items-center justify-center rounded-2xl shadow-lg backface-hidden">
          <p className="text-xl font-bold tracking-wide">{frontText}</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-br from-pink-300 via-red-400 to-yellow-200 text-white flex items-center justify-center rounded-2xl shadow-lg rotate-y-180 backface-hidden">
            <p className="text-xl font-bold">{backText}</p>
          
        </div>
      </div>
    </div>
  );
}
