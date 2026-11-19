"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 text-center relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-10"
      >
        <h2
          className="font-semibold leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          Let&apos;s Build Something<br />
          Meaningful Together.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href="mailto:adityaasahoo@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all">
            <span>Contact Me</span>
            <Mail size={20} />
          </a>
          
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-[#1d1d1f] text-white border border-white/15 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10  hover:scale-105 active:scale-95 transition-all duration-300">
            <span>View Projects</span>
            <ArrowRight size={20} />
          </a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#0071e3] text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0077ed] hover:scale-105 active:scale-95 transition-all hover:">
            <span>View Resume</span>
            <Download size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
