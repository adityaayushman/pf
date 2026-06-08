"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const researches = [
  {
    title: "AI-Powered Road Accident Detection",
    tech: "YOLO + LSTM",
  },
  {
    title: "Decentralized Medical Records",
    tech: "Blockchain + IPFS",
  },
  {
    title: "Intelligent Healthcare Systems",
    tech: "AI + Cloud Computing",
  },
];

export default function ResearchSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Research & Papers</h2>
          <div className="h-1 w-20 bg-[#ff6b35] rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Exploring the frontiers of technology through rigorous academic research and practical implementation.
          </p>
        </motion.div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {researches.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group flex items-center justify-between p-6 md:p-8 bg-[#111111] rounded-2xl border border-white/5 hover:border-white/20 hover:bg-[#1a1a1a] transition-all cursor-pointer"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ff6b35] transition-colors">
                  {item.title}
                </h3>
                <span className="text-gray-500 font-medium tracking-wide">
                  {item.tech}
                </span>
              </div>
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-gray-400 group-hover:bg-[#ff6b35]/10 group-hover:text-[#ff6b35] transition-colors">
                <BookOpen size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
