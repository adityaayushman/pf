"use client";

import React from "react";
import { motion } from "framer-motion";

const stack = [
  {
    category: "AI / ML",
    items: ["Python", "TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
  },
  {
    category: "Computer Vision",
    items: ["YOLOv8", "OpenCV", "NumPy", "Matplotlib"],
  },
  {
    category: "ML & Data",
    items: ["XGBoost", "Random Forest", "Reinforcement Learning", "Explainable AI"],
  },
  {
    category: "Web & Backend",
    items: ["React", "Next.js", "TypeScript", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    category: "Cloud & Blockchain",
    items: ["Vercel", "Cloud Computing", "Solidity", "IPFS"],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-[#ff6b35] rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-300"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/10 transition-colors duration-500 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight relative z-10">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-3 relative z-10">
              {group.items.map((item) => (
                <li key={item} className="text-gray-400 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]"></span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
