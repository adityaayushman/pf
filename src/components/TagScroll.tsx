"use client";

import React from "react";

const row1 = [
  "AI Engineer",
  "Full Stack Developer",
  "Computer Vision",
  "Machine Learning",
  "Deep Learning",
  "Prompt Engineering",
  "React Developer",
  "Next.js",
  "Supabase",
  "Blockchain",
];

const row2 = [
  "Research Paper Author",
  "Hackathon Builder",
  "Java Developer",
  "Python Developer",
  "Automation Systems",
  "YOLO Detection",
  "LSTM Models",
  "Cloud Computing",
  "Problem Solver",
];

export default function TagScroll() {
  return (
    <section className="py-24 md:py-32 bg-[#111111] overflow-hidden flex flex-col gap-6">
      <div className="relative flex w-[200%] md:w-[150%] lg:w-[120%]">
        <div className="flex w-full animate-scroll-left gap-4 pr-4">
          {[...row1, ...row1, ...row1, ...row1].map((tag, idx) => (
            <span
              key={`row1-${idx}`}
              className="whitespace-nowrap border border-white/20 rounded-full px-6 py-2 text-sm md:text-base text-gray-300 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex w-[200%] md:w-[150%] lg:w-[120%]">
        <div className="flex w-full animate-scroll-right gap-4 pr-4">
          {[...row2, ...row2, ...row2, ...row2].map((tag, idx) => (
            <span
              key={`row2-${idx}`}
              className="whitespace-nowrap border border-white/20 rounded-full px-6 py-2 text-sm md:text-base text-gray-300 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
