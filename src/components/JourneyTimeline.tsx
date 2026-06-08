"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2023",
    title: "Started B.Tech in AI & ML",
    description: "Built foundations in programming and software engineering.",
  },
  {
    year: "2024",
    title: "First Full Stack Projects",
    description: "Developed management systems and database-driven applications.",
  },
  {
    year: "2025",
    title: "AI & Computer Vision Projects",
    description: "Built accident detection systems using YOLO and LSTM.",
  },
  {
    year: "2025",
    title: "Blockchain Healthcare Research",
    description: "Created decentralized healthcare record systems.",
  },
  {
    year: "2026",
    title: "Hackathons & Research",
    description: "Expanded into AI research and innovation challenges.",
  },
  {
    year: "Future",
    title: "AI Products & Startups",
    description: "Building scalable AI-powered solutions.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">The Journey</h2>
        <div className="h-1 w-20 bg-[#ff6b35] rounded-full mx-auto"></div>
      </motion.div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-12">
          {timelineItems.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#ff6b35] border-4 border-[#0d0d0d] -translate-x-1/2 mt-2 md:mt-0 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className="bg-[#111111] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors"
                  >
                    <span className="text-[#ff6b35] font-bold text-lg mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
