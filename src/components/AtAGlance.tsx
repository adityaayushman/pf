"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, GraduationCap, Mail, MapPin } from "lucide-react";

const CURRENT_ROLES = [
  { role: "Research Intern", org: "KIIT" },
  { role: "Flutter Developer Intern", org: "Osswal Infosystem (SAP Partner)" },
  { role: "AI/ML Intern", org: "Kukreja's Wastec Bio-Gas" },
];

const linkClass =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-colors";

export default function AtAGlance() {
  return (
    <section id="glance" className="px-6 md:px-12 pt-16 md:pt-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-[#ff6b35] font-semibold tracking-widest uppercase text-xs">
              At a glance
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              AI &amp; Machine Learning Engineer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Computer vision, deep learning and cloud AI. I build end-to-end systems, from model to
              API to dashboard, with 5 internships and an SSRN preprint behind them.
            </p>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <GraduationCap size={16} className="text-[#ff6b35] shrink-0" />
                B.Tech CSE (AI &amp; ML), SRM Institute of Science and Technology, Class of 2027
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#ff6b35] shrink-0" />
                Chennai, India
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff6b35] text-sm font-bold text-white hover:bg-[#ff8555] transition-colors"
              >
                <FileText size={16} />
                View Resume
              </a>
              <a href="mailto:adityaasahoo@gmail.com" className={linkClass}>
                <Mail size={16} />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-ayushman-sahoo-243b81287/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/adityaayushman"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="lg:w-[380px] shrink-0">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
              Currently
            </h3>
            <ul className="flex flex-col gap-3">
              {CURRENT_ROLES.map((r) => (
                <li
                  key={r.org}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="block text-white font-semibold">{r.role}</span>
                  <span className="block text-gray-400 text-sm">{r.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
