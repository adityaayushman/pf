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
  | "energy"
  | "scan";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
  paper?: string;
  theme: ProjectTheme;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "PCBMind AI — Automated PCB Defect Inspection",
    description:
      "Built during my AI/ML internship at Kukreja's Wastec Bio-Gas. AI-powered PCB defect-inspection platform that automates defect detection and quality assessment — image preprocessing (CLAHE, ORB, homography), a FastAPI backend, a React.js analytics dashboard and exportable PDF/CSV reports.",
    tech: ["PyTorch", "YOLOv8", "FastAPI", "React.js", "Supabase"],
    repo: "https://github.com/adityaayushman/pcb-mind",
    live: "https://pcbmind-ai.vercel.app/",
    theme: "circuit",
    featured: true,
  },
  {
    title: "GridSense — Carbon-Aware EV Charging Optimizer",
    description:
      "Schedules home EV charging into off-peak, low-carbon hours using a linear-programming optimizer on real Spanish grid data, reducing grid strain and emissions. Full-stack dashboard with FastAPI, PostgreSQL and React.",
    tech: ["Python", "PuLP", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker"],
    repo: GITHUB_URL,
    live: "https://gridsense-app-drab.vercel.app/",
    theme: "energy",
  },
  {
    title: "MedVision — AI-Powered Medical Imaging Intelligence",
    description:
      "AI-powered medical-imaging platform for intelligent clinical decision support — computer vision and deep learning with Explainable AI, delivered through a FastAPI backend and a React dashboard.",
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "React.js"],
    repo: "https://github.com/adityaayushman/medvision",
    live: "https://medchron-ai.vercel.app/",
    theme: "scan",
    featured: true,
  },
  {
    title: "Smart Road Guardian AI X — Edge AI Road Safety",
    description:
      "Explainable road-safety platform for Indian roads that predicts crash risk with causal Bayesian networks, with live risk scoring, helmet detection, near-miss black-spot detection and fleet monitoring.",
    tech: ["Python", "PyTorch", "ONNX", "pgmpy", "Next.js", "Supabase"],
    repo: GITHUB_URL,
    live: "https://trie-dashboard.vercel.app/",
    theme: "detection",
  },
  {
    title: "Cloud Computing Resource Optimizer",
    description:
      "Multi-cloud resource optimizer that forecasts CPU and memory demand with XGBoost and Random Forest, then schedules allocation through a Deep Q-Network. Explainable AI keeps every decision transparent and interpretable. SSRN Preprint (2026).",
    tech: ["Python", "XGBoost", "Reinforcement Learning", "DQN"],
    paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6957438",
    theme: "cloud",
    featured: true,
  },
  {
    title: "CrowdCount — Real-Time Crowd Intelligence",
    description:
      "Real-time crowd-analytics platform running YOLOv8 across multiple camera feeds. A dual pipeline powers a live dashboard and offline batch processing — centroid tracking, zone and line-crossing metrics, and spatial heatmaps over a FastAPI backend, exportable as CSV, JSON and PDF reports.",
    tech: ["Python", "YOLOv8", "FastAPI", "OpenCV"],
    repo: "https://github.com/adityaayushman/CROWD-COUNT",
    theme: "crowd",
  },
  {
    title: "Clear Pixel — Image Enhancement Engine",
    description:
      "Grayscale image-processing system that improves clarity and reduces noise — Gaussian blur, Sobel edge detection, Laplacian and sharpening built from scratch with manual convolution, plus real-time visualization.",
    tech: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    theme: "pixels",
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
    case "energy":
      return (
        <>
          <line x1="8" y1="100" x2="312" y2="100" stroke="white" strokeOpacity="0.12" />
          {[34, 26, 20, 16, 22, 48, 70, 84, 66, 40, 28, 24].map((h, i) => (
            <rect key={i} x={14 + i * 25} y={100 - h} width="18" height={h} rx="3" fill={i >= 5 && i <= 8 ? "white" : O} fillOpacity={i >= 5 && i <= 8 ? 0.1 : 0.55} />
          ))}
          <path d="M14 70 C 70 74, 110 40, 160 24 S 260 60, 306 36" stroke={O} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 5" fill="none" />
        </>
      );
    case "scan":
      return (
        <>
          {[26, 46, 66].map((r, i) => (
            <circle key={i} cx="160" cy="60" r={r} fill="none" stroke={O} strokeOpacity={0.45 - i * 0.12} strokeWidth="1.5" />
          ))}
          <line x1="160" y1="6" x2="160" y2="114" stroke="white" strokeOpacity="0.1" />
          <line x1="54" y1="60" x2="266" y2="60" stroke="white" strokeOpacity="0.1" />
          <circle cx="160" cy="60" r="4" fill={O} fillOpacity="0.75" />
          {[[120, 40], [196, 76], [140, 82]].map(([x, y], i) => (
            <circle key={`d${i}`} cx={x} cy={y} r="3" fill="white" fillOpacity="0.22" />
          ))}
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
            transition={{ duration: 0.6, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1.5 hover:bg-white/8 hover:border-white/25 hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out"
          >
            {project.featured && (
              <span className="absolute top-4 right-4 z-10 rounded-full bg-[#ff6b35] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                Flagship
              </span>
            )}

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
              {(project.repo || !project.paper) && (
                <a
                  href={project.repo ?? GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#ff6b35] transition-colors"
                >
                  <GitBranch size={18} />
                  <span>GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#ff6b35] transition-colors"
                >
                  <span>Live Demo ↗</span>
                </a>
              )}
              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#ff6b35] transition-colors"
                >
                  <span>SSRN Preprint ↗</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
