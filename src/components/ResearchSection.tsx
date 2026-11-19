"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

type Research = { title: string; tech: string; link?: string };

const researches: Research[] = [
  {
    title: "Cloud Computing Resource Optimizer",
    tech: "SSRN Preprint (2026)",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6957438",
  },
  {
    title: "MedVision — AI Medical Imaging",
    tech: "Computer Vision · KIIT Research",
    link: "https://github.com/adityaayushman/medvision",
  },
];

const cardClass =
  "group flex items-center justify-between p-6 md:p-8 bg-[#1d1d1f] rounded-[28px] border border-white/10  hover:bg-[#2a2a2d] hover:-translate-y-0.5 transition-all duration-500 ease-out";

export default function ResearchSection() {
  return (
    <section id="research" className="py-28 md:py-44 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">Research & Papers</h2>
          <p className="text-[#a1a1a6] text-lg leading-relaxed">
            Exploring the frontiers of technology through rigorous academic research and practical implementation.
          </p>
        </motion.div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {researches.map((item, idx) => {
            const anim = {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.5, delay: idx * 0.15 },
            } as const;

            const inner = (
              <>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#2997ff] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[#86868b] font-medium tracking-wide">
                    {item.tech}
                  </span>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-[#a1a1a6] group-hover:bg-[#0071e3]/15 group-hover:text-[#2997ff] transition-all duration-500">
                  {item.link ? <ExternalLink size={20} /> : <BookOpen size={20} />}
                </div>
              </>
            );

            return item.link ? (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} cursor-pointer`}
                {...anim}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div key={item.title} className={cardClass} {...anim}>
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
