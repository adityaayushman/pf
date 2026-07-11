"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

// Central GitHub link for project cards that don't have a dedicated repo yet.
const GITHUB_URL = "https://github.com/adityaayushman";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
};

const projects: Project[] = [
  {
    title: "CrowdCount — Real-Time Crowd Intelligence",
    description:
      "Real-time crowd-analytics platform running YOLOv8 across multiple camera feeds. A dual pipeline powers a live dashboard and offline batch processing — centroid tracking, zone and line-crossing metrics, and spatial heatmaps over a FastAPI backend, exportable as CSV, JSON and PDF reports.",
    tech: ["Python", "YOLOv8", "FastAPI", "OpenCV"],
    repo: "https://github.com/adityaayushman/CROWD-COUNT",
  },
  {
    title: "PCBMind AI — PCB Defect Inspection",
    description:
      "AI-powered PCB defect-inspection SaaS: upload → AI inspect → annotated result → PDF report → dashboard. A full-stack platform with a Next.js frontend, FastAPI backend and Supabase database.",
    tech: ["Next.js", "FastAPI", "Computer Vision", "Supabase"],
    repo: "https://github.com/adityaayushman/pcb-mind",
  },
  {
    title: "Cloud Computing Resource Optimizer",
    description:
      "Multi-cloud resource optimizer that forecasts CPU and memory demand with XGBoost and Random Forest, then schedules allocation through a Deep Q-Network. Explainable AI keeps every decision transparent and interpretable.",
    tech: ["Python", "XGBoost", "Reinforcement Learning", "DQN"],
  },
  {
    title: "Clear Pixel — Image Enhancement Engine",
    description:
      "Grayscale image-processing system that improves clarity and reduces noise — Gaussian blur, Sobel edge detection, Laplacian and sharpening built from scratch with manual convolution, plus real-time visualization.",
    tech: ["Python", "OpenCV", "NumPy", "Matplotlib"],
  },
  {
    title: "AI-Powered Accident Detection System",
    description: "Real-time accident detection using YOLO and LSTM models, deployed on edge devices to alert emergency services instantly.",
    tech: ["Python", "YOLOv8", "LSTM", "OpenCV"],
  },
  {
    title: "Hospital Emergency Response Platform",
    description: "A centralized platform for hospitals to coordinate emergency response units and track patient admission flow.",
    tech: ["Next.js", "Node.js", "Socket.io", "PostgreSQL"],
  },
  {
    title: "Decentralized Medical Record System",
    description: "A secure blockchain-based healthcare record system using IPFS for decentralized data storage.",
    tech: ["Solidity", "React", "Ether.js", "IPFS"],
  },
  {
    title: "Intelligent Parking System",
    description: "Computer vision based parking management that guides drivers to empty spots and automates billing.",
    tech: ["Python", "TensorFlow", "React", "Firebase"],
  },
  {
    title: "Restaurant Management System",
    description: "A comprehensive full-stack solution for table reservations, order tracking, and inventory management.",
    tech: ["Spring Boot", "React", "MySQL", "Tailwind"],
  },
  {
    title: "Road Safety Analytics Platform",
    description: "A data visualization dashboard analyzing traffic patterns and accident hotspots to assist city planning.",
    tech: ["Next.js", "Tailwind", "Prisma", "Supabase"],
  },
];

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
            className="group flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1.5 hover:bg-white/8 hover:border-white/25 hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out"
          >
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
