"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

// Central GitHub link for project cards that don't have a dedicated repo yet.
const GITHUB_URL = "https://github.com/adityaayushman";

type ProjectTheme =
  | "crowd"
  | "circuit"
  | "cloud"
  | "pixels"
  | "detection"
  | "pulse"
  | "blockchain"
  | "parking"
  | "grid"
  | "chart";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  theme: ProjectTheme;
};

const projects: Project[] = [
  {
    title: "CrowdCount — Real-Time Crowd Intelligence",
    description:
      "Real-time crowd-analytics platform running YOLOv8 across multiple camera feeds. A dual pipeline powers a live dashboard and offline batch processing — centroid tracking, zone and line-crossing metrics, and spatial heatmaps over a FastAPI backend, exportable as CSV, JSON and PDF reports.",
    tech: ["Python", "YOLOv8", "FastAPI", "OpenCV"],
    repo: "https://github.com/adityaayushman/CROWD-COUNT",
    theme: "crowd",
  },
  {
    title: "PCBMind AI — PCB Defect Inspection",
    description:
      "AI-powered PCB defect-inspection SaaS: upload → AI inspect → annotated result → PDF report → dashboard. A full-stack platform with a Next.js frontend, FastAPI backend and Supabase database.",
    tech: ["Next.js", "FastAPI", "Computer Vision", "Supabase"],
    repo: "https://github.com/adityaayushman/pcb-mind",
    theme: "circuit",
  },
  {
    title: "Cloud Computing Resource Optimizer",
    description:
      "Multi-cloud resource optimizer that forecasts CPU and memory demand with XGBoost and Random Forest, then schedules allocation through a Deep Q-Network. Explainable AI keeps every decision transparent and interpretable.",
    tech: ["Python", "XGBoost", "Reinforcement Learning", "DQN"],
    theme: "cloud",
  },
  {
    title: "Clear Pixel — Image Enhancement Engine",
    description:
      "Grayscale image-processing system that improves clarity and reduces noise — Gaussian blur, Sobel edge detection, Laplacian and sharpening built from scratch with manual convolution, plus real-time visualization.",
    tech: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    theme: "pixels",
  },
  {
    title: "AI-Powered Accident Detection System",
    description:
      "Real-time accident detection using YOLO and LSTM models, deployed on edge devices to alert emergency services instantly.",
    tech: ["Python", "YOLOv8", "LSTM", "OpenCV"],
    theme: "detection",
  },
  {
    title: "Hospital Emergency Response Platform",
    description:
      "A centralized platform for hospitals to coordinate emergency response units and track patient admission flow.",
    tech: ["Next.js", "Node.js", "Socket.io", "PostgreSQL"],
    theme: "pulse",
  },
  {
    title: "Decentralized Medical Record System",
    description:
      "A secure blockchain-based healthcare record system using IPFS for decentralized data storage.",
    tech: ["Solidity", "React", "Ether.js", "IPFS"],
    theme: "blockchain",
  },
  {
    title: "Intelligent Parking System",
    description:
      "Computer vision based parking management that guides drivers to empty spots and automates billing.",
    tech: ["Python", "TensorFlow", "React", "Firebase"],
    theme: "parking",
  },
  {
    title: "Restaurant Management System",
    description:
      "A comprehensive full-stack solution for table reservations, order tracking, and inventory management.",
    tech: ["Spring Boot", "React", "MySQL", "Tailwind"],
    theme: "grid",
  },
  {
    title: "Road Safety Analytics Platform",
    description:
      "A data visualization dashboard analyzing traffic patterns and accident hotspots to assist city planning.",
    tech: ["Next.js", "Tailwind", "Prisma", "Supabase"],
    theme: "chart",
  },
];

const O = "#ff6b35";

function renderTheme(theme: ProjectTheme) {
  switch (theme) {
    case "crowd":
      return (
        <>
          <line x1="8" y1="98" x2="312" y2="52" stroke={O} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5 6" />
          {[...Array(32)].map((_, i) => {
            const x = ((i * 47) % 305) + 8;
            const y = ((i * i * 13) % 104) + 8;
            const r = 1.8 + (i % 3) * 0.9;
            const hot = i % 7 === 0;
            return (
              <circle key={i} cx={x} cy={y} r={r} fill={hot ? O : "white"} fillOpacity={hot ? 0.7 : 0.12 + (i % 4) * 0.06} />
            );
          })}
        </>
      );
    case "circuit":
      return (
        <>
          <g stroke={O} strokeOpacity="0.35" strokeWidth="1.5" fill="none">
            <path d="M8 28 H78 V68 H150" />
            <path d="M40 108 V60 H120 V20 H206" />
            <path d="M176 92 H258 V40 H312" />
            <path d="M232 112 V82 H304" />
          </g>
          {[[78, 28], [150, 68], [120, 60], [206, 20], [258, 40], [304, 82]].map(([x, y], i) => (
            <circle key={`p${i}`} cx={x} cy={y} r="3.5" fill={O} fillOpacity="0.75" />
          ))}
          {[[8, 28], [40, 108], [176, 92], [312, 40]].map(([x, y], i) => (
            <circle key={`n${i}`} cx={x} cy={y} r="2" fill="white" fillOpacity="0.18" />
          ))}
        </>
      );
    case "cloud":
      return (
        <>
          <g stroke="white" strokeOpacity="0.12" strokeWidth="1">
            <line x1="40" y1="82" x2="110" y2="40" />
            <line x1="110" y1="40" x2="182" y2="72" />
            <line x1="182" y1="72" x2="252" y2="30" />
            <line x1="252" y1="30" x2="300" y2="76" />
            <line x1="40" y1="82" x2="182" y2="72" />
          </g>
          <path d="M18 102 C 90 92, 130 58, 302 18" stroke={O} strokeOpacity="0.5" strokeWidth="2" fill="none" />
          {[[40, 82], [110, 40], [182, 72], [252, 30], [300, 76]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill={O} fillOpacity="0.75" />
          ))}
        </>
      );
    case "pixels":
      return (
        <>
          {[...Array(8)].flatMap((_, r) =>
            [...Array(16)].map((__, c) => {
              const clean = c > 8;
              const fill = clean && (r + c) % 2 === 0 ? O : "white";
              const fop = clean
                ? (r + c) % 2 === 0
                  ? 0.14
                  : 0.05
                : 0.04 + (((r * 7 + c * 11 + r * c * 3) % 5) * 0.1);
              return <rect key={`${r}-${c}`} x={c * 20} y={r * 15} width="18" height="13" fill={fill} fillOpacity={fop} />;
            })
          )}
        </>
      );
    case "detection":
      return (
        <>
          <g stroke="white" strokeOpacity="0.06">
            {[...Array(9)].map((_, i) => (
              <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="120" />
            ))}
            {[...Array(4)].map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 40} x2="320" y2={i * 40} />
            ))}
          </g>
          {[[30, 26, 72, 52], [150, 56, 92, 46], [224, 16, 62, 40]].map(([x, y, w, h], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} rx="2" stroke={O} strokeOpacity="0.65" strokeWidth="1.5" fill={O} fillOpacity="0.05" />
              <rect x={x} y={y - 8} width="22" height="7" rx="1.5" fill={O} fillOpacity="0.55" />
            </g>
          ))}
        </>
      );
    case "pulse":
      return (
        <>
          <line x1="0" y1="60" x2="320" y2="60" stroke="white" strokeOpacity="0.08" />
          <path
            d="M0 60 H70 L84 60 L94 30 L108 92 L122 60 L150 60 L160 46 L170 60 H320"
            stroke={O}
            strokeOpacity="0.65"
            strokeWidth="2"
            fill="none"
          />
          <g fill="white" fillOpacity="0.14">
            <rect x="272" y="20" width="10" height="30" rx="2" />
            <rect x="262" y="30" width="30" height="10" rx="2" />
          </g>
        </>
      );
    case "blockchain":
      return (
        <>
          <line x1="30" y1="60" x2="290" y2="60" stroke={O} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 5" />
          {[46, 116, 186, 256].map((x, i) => (
            <g key={i}>
              <rect x={x - 19} y="41" width="38" height="38" rx="7" fill="white" fillOpacity="0.05" stroke={O} strokeOpacity="0.5" strokeWidth="1.5" />
              <rect x={x - 9} y="52" width="18" height="4" rx="2" fill="white" fillOpacity="0.22" />
              <rect x={x - 9} y="60" width="18" height="4" rx="2" fill="white" fillOpacity="0.12" />
            </g>
          ))}
        </>
      );
    case "parking":
      return (
        <>
          {[...Array(2)].flatMap((_, row) =>
            [...Array(6)].map((__, c) => {
              const occ = (row * 6 + c) % 3 === 0;
              return (
                <rect
                  key={`${row}-${c}`}
                  x={16 + c * 50}
                  y={row === 0 ? 16 : 66}
                  width="40"
                  height="38"
                  rx="4"
                  fill={occ ? O : "white"}
                  fillOpacity={occ ? 0.5 : 0.05}
                  stroke="white"
                  strokeOpacity="0.1"
                />
              );
            })
          )}
        </>
      );
    case "grid":
      return (
        <>
          {[...Array(3)].map((_, i) => (
            <g key={i}>
              <rect x="18" y={20 + i * 32} width="18" height="18" rx="4" fill={O} fillOpacity={0.5 - i * 0.12} />
              <rect x="46" y={24 + i * 32} width={180 - i * 30} height="4" rx="2" fill="white" fillOpacity="0.16" />
              <rect x="46" y={32 + i * 32} width={120 - i * 22} height="4" rx="2" fill="white" fillOpacity="0.08" />
            </g>
          ))}
          <rect x="250" y="20" width="52" height="80" rx="6" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" />
        </>
      );
    case "chart":
      return (
        <>
          <line x1="18" y1="100" x2="302" y2="100" stroke="white" strokeOpacity="0.12" />
          {[42, 70, 55, 86, 60, 96, 74].map((h, i) => (
            <rect key={i} x={30 + i * 38} y={100 - h} width="20" height={h} rx="3" fill={O} fillOpacity={0.25 + (i % 3) * 0.12} />
          ))}
          <path d="M40 70 L78 50 L116 62 L154 34 L192 56 L230 24 L268 46" stroke="white" strokeOpacity="0.4" strokeWidth="2" fill="none" />
        </>
      );
    default:
      return null;
  }
}

function ProjectVisual({ theme }: { theme: ProjectTheme }) {
  return (
    <div className="relative -mx-8 -mt-8 mb-6 h-32 overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#ff6b35]/12 via-white/2 to-transparent">
      <svg
        viewBox="0 0 320 120"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
        aria-hidden="true"
      >
        {renderTheme(theme)}
      </svg>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Work</h2>
        <div className="h-1 w-20 bg-[#ff6b35] rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1.5 hover:bg-white/8 hover:border-white/25 hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out"
          >
            <ProjectVisual theme={project.theme} />

            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <a
                href={project.repo ?? GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#ff6b35] transition-colors"
              >
                <GitBranch size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
