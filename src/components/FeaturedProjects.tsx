"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

// Central GitHub link for all project cards. Swap for per-project repo URLs later if desired.
const GITHUB_URL = "https://github.com/adityaayushman";

const projects = [
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
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col bg-[#111111] border border-white/10 rounded-2xl p-8 hover:-translate-y-[6px] hover:border-white/30 transition-all duration-300"
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
                href={GITHUB_URL}
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
