"use client";

import React from "react";
import { motion } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  tag: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: "Research Intern",
    company: "KIIT — Kalinga Institute of Industrial Technology",
    tag: "Research Internship",
    period: "Jun 2026 – Present",
    location: "India",
    points: [
      "Researching AI-powered medical imaging (MedVision) for intelligent clinical decision support.",
      "Focused on Computer Vision, Deep Learning and Explainable AI.",
    ],
    tech: ["Computer Vision", "Deep Learning", "Explainable AI"],
  },
  {
    role: "AI Intern",
    company: "Osswal Infosystem Pvt. Ltd.",
    tag: "SAP Partner",
    period: "Jul 2026 – Present",
    location: "Indore, India",
    points: [
      "Gaining hands-on industry experience in a professional software-development environment.",
      "Learning enterprise technologies, collaborating with experienced professionals, and contributing to real-world projects.",
    ],
    tech: ["Enterprise Software", "SAP Ecosystem"],
  },
  {
    role: "Intern",
    company: "Kukreja's Wastec Bio-Gas Pvt. Ltd.",
    tag: "AI · Computer Vision",
    period: "Jun 2026 – Present",
    location: "Mumbai, India",
    points: [
      "Contributing to PCBMind AI — an AI-powered PCB defect-inspection platform using computer vision and deep learning.",
      "End-to-end pipeline: image preprocessing, PCB registration, defect detection and automated quality reporting.",
    ],
    tech: ["Python", "PyTorch", "FastAPI", "React.js"],
  },
  {
    role: "Summer Intern",
    company: "Syllogistek Systems Pvt. Ltd.",
    tag: "AI / Software",
    period: "Jun 2025 – Jul 2026",
    location: "India",
    points: [
      "Developed software solutions addressing AI-related challenges.",
      "Collaborated with technical teams to improve implementation workflows and system processes.",
    ],
    tech: ["Generative AI", "Keras", "PyTorch"],
  },
  {
    role: "Summer Intern",
    company: "Silicon Institute of Technology (SIT)",
    tag: "Software / ML",
    period: "Jun 2024 – Jul 2024",
    location: "Bhubaneswar, India",
    points: [
      "Gained practical exposure to software-development methodologies and emerging technologies.",
      "Built collaborative technical learning modules and project-based initiatives.",
    ],
    tech: ["Python", "Machine Learning", "Deep Learning"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">Experience</h2>
        <div className="h-1 w-20 bg-[#ff6b35] rounded-full"></div>
      </motion.div>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-white/8 hover:border-white/25 transition-all duration-500 ease-out"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-[#ff6b35] font-semibold">{exp.role}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-500 text-sm font-medium">{exp.tag}</span>
                </div>
              </div>
              <div className="text-left md:text-right shrink-0">
                <span className="block text-gray-300 font-medium">{exp.period}</span>
                <span className="block text-gray-500 text-sm">{exp.location}</span>
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-2.5">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 text-gray-400 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 font-medium tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
