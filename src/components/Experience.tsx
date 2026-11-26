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
    role: "Flutter Developer Intern",
    company: "Osswal Infosystem Pvt. Ltd.",
    tag: "SAP Partner",
    period: "Jul 2026 – Present",
    location: "Indore, India",
    points: [
      "Developing cross-platform mobile app features in Flutter (Dart) for a client project built on SAP Business One, working with senior developers and SAP consultants through implementation, testing and code reviews.",
    ],
    tech: ["Flutter", "Dart", "SAP Business One"],
  },
  {
    role: "AI/ML Intern",
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
    period: "Jun 2025 – Jul 2025",
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
      className="py-28 md:py-44 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">Experience</h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1d1d1f] rounded-[28px] p-6 md:p-8 hover:bg-[#2a2a2d]  transition-all duration-500 ease-out"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-[#2997ff] font-semibold">{exp.role}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-[#86868b] text-sm font-medium">{exp.tag}</span>
                  {exp.period.endsWith("Present") && (
                    <span className="ml-1 rounded-full border border-[#2997ff]/40 bg-[#0071e3]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2997ff]">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <div className="text-left md:text-right shrink-0">
                <span className="block text-[#d2d2d7] font-medium">{exp.period}</span>
                <span className="block text-[#86868b] text-sm">{exp.location}</span>
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-2.5">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 text-[#a1a1a6] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071e3]"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-[#1b1b1d] border border-white/10 rounded-full text-xs text-[#d2d2d7] font-medium tracking-wide"
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
