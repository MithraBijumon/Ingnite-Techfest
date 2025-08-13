"use client";
import { useState } from "react";

export default function Incentive({ frontText, backText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-40 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-2xl shadow-lg backface-hidden">
          <p className="text-xl font-bold">{frontText}</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center rounded-2xl shadow-lg rotate-y-180 backface-hidden">
          <p className="text-xl font-bold">{backText}</p>
        </div>
      </div>
    </div>
  );
}
