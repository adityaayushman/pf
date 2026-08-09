"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  ScanEye,
  LineChart,
  Code2,
  Database,
  Boxes,
} from "lucide-react";

const stack = [
  {
    category: "AI / ML",
    icon: <BrainCircuit size={22} />,
    items: ["Python", "TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
  },
  {
    category: "Computer Vision",
    icon: <ScanEye size={22} />,
    items: ["YOLOv8", "OpenCV", "NumPy", "Matplotlib"],
  },
  {
    category: "ML & Data",
    icon: <LineChart size={22} />,
    items: ["XGBoost", "Random Forest", "Reinforcement Learning", "Explainable AI"],
  },
  {
    category: "Web & Backend",
    icon: <Code2 size={22} />,
    items: ["React", "Next.js", "TypeScript", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    icon: <Database size={22} />,
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    category: "Cloud & Blockchain",
    icon: <Boxes size={22} />,
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
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-[#ff6b35] rounded-full"></div>
        <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
          The tools and frameworks I reach for to build intelligent, real-time systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out"
          >
            {/* Accent glow that reveals on hover */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ff6b35]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6b35]/10 text-[#ff6b35] group-hover:bg-[#ff6b35] group-hover:text-white transition-colors duration-500">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.category}
                </h3>
                <span className="ml-auto text-xs font-medium text-gray-600">
                  {group.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-[#ff6b35]/40 hover:bg-[#ff6b35]/10 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
