"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-32 md:py-48 px-6 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff6b35]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-10"
      >
        <h2
          className="font-black leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          Let's Build Something<br />
          Meaningful Together.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all">
            <span>Contact Me</span>
            <Mail size={20} />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/5 hover:border-white/40 hover:scale-105 active:scale-95 transition-all">
            <span>View Projects</span>
            <ArrowRight size={20} />
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#ff8555] hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]">
            <span>Download Resume</span>
            <Download size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
