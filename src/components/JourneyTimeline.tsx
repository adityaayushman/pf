"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2023",
    title: "Started B.Tech in Artificial Intelligence",
    description: "Began my degree at SRM Institute of Science and Technology, Chennai — building strong foundations in programming, mathematics and AI.",
  },
  {
    year: "2024",
    title: "Summer Intern @ Silicon Institute of Technology",
    description: "Hands-on with software development, Python, Machine Learning and Deep Learning. Earned NPTEL certification in Programming in Java.",
  },
  {
    year: "2024",
    title: "First Full Stack Projects",
    description: "Developed management systems and database-driven applications.",
  },
  {
    year: "2025",
    title: "AI & Computer Vision Projects",
    description: "Built accident-detection systems using YOLO and LSTM, and explored real-time video intelligence.",
  },
  {
    year: "2025",
    title: "Blockchain Healthcare Research",
    description: "Created decentralized medical-record systems using blockchain and IPFS.",
  },
  {
    year: "2025",
    title: "Summer Intern @ Syllogistek Systems",
    description: "Developed AI solutions with Generative AI, Keras and PyTorch. Certified in Networking Basics by Cisco.",
  },
  {
    year: "2026",
    title: "CrowdCount & Cloud Resource Optimizer",
    description: "Built a YOLOv8 multi-zone crowd-intelligence platform and a reinforcement-learning cloud optimizer with Explainable AI.",
  },
  {
    year: "Future",
    title: "AI & Computer Vision Engineer",
    description: "Building intelligent, scalable systems that turn ambitious ideas into real-world impact.",
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
