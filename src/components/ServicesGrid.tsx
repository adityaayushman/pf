"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Code2, Bot, Link, Lightbulb, Palette } from "lucide-react";

const services = [
  {
    title: "AI Engineering",
    description: "Machine Learning, Deep Learning, Computer Vision and intelligent systems.",
    icon: <BrainCircuit size={32} className="text-[#ff6b35]" />,
  },
  {
    title: "Full Stack Development",
    description: "Modern applications with React, Next.js and scalable architectures.",
    icon: <Code2 size={32} className="text-[#ff6b35]" />,
  },
  {
    title: "AI Automation",
    description: "Agents, workflows and automation systems.",
    icon: <Bot size={32} className="text-[#ff6b35]" />,
  },
  {
    title: "Blockchain Solutions",
    description: "Secure decentralized applications.",
    icon: <Link size={32} className="text-[#ff6b35]" />,
  },
  {
    title: "Research & Innovation",
    description: "IEEE papers, experimentation and R&D.",
    icon: <Lightbulb size={32} className="text-[#ff6b35]" />,
  },
  {
    title: "UI/UX Design",
    description: "Figma, wireframes and polished interfaces.",
    icon: <Palette size={32} className="text-[#ff6b35]" />,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">Core Services</h2>
        <div className="h-1 w-20 bg-[#ff6b35] rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1.5 hover:bg-white/8 hover:border-white/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out flex flex-col gap-4"
          >
            <div className="mb-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl w-fit group-hover:bg-[#ff6b35]/15 transition-colors duration-500">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-gray-400 font-medium">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
