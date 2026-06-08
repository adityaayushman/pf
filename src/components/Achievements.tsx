"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Multiple Production Projects",
  "AI Research Experience",
  "Hackathon Participation",
  "Full Stack Development",
  "Blockchain Development",
  "Computer Vision Applications",
];

export default function Achievements() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#ff6b35]/5 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Milestones & Expertise</h2>
          <div className="h-1 w-20 bg-[#ff6b35] rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {items.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-colors"
            >
              <CheckCircle2 className="text-[#ff6b35] shrink-0" size={24} />
              <span className="text-white font-medium text-lg tracking-wide">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
