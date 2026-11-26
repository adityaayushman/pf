"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "SSRN Preprint (2026) — Cloud Optimizer",
  "Research Intern — KIIT · MedVision",
  "5× Industry Internships",
  "Committee Head — Aaruush, SRM University",
  "NPTEL Certified — Programming in Java",
  "Cisco Certified — Networking Basics",
  "MathWorks — Deep Learning Onramp",
  "Cybersecurity Internship — AICTE NEAT",
  "Event Volunteer — Ed Sheeran India Tour 2025",
];

export default function Achievements() {
  return (
    <section className="py-28 md:py-44 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-[#0e0e10] rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#0071e3]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#0071e3]/5 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">Achievements & Credentials</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {items.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-[#1d1d1f] p-4 rounded-xl border border-white/10  hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-500 ease-out"
            >
              <CheckCircle2 className="text-[#2997ff] shrink-0" size={24} />
              <span className="text-white font-medium text-lg tracking-wide">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
