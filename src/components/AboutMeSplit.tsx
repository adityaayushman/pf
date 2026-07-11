"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="font-extrabold text-5xl md:text-6xl text-white">0{suffix}</span>;
}

export default function AboutMeSplit() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <Counter value={20} suffix="+" />
            <span className="text-gray-400 font-medium">Projects Built</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={5} suffix="+" />
            <span className="text-gray-400 font-medium">Major Domains</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={3} suffix="+" />
            <span className="text-gray-400 font-medium">Research Works</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={1000} suffix="+" />
            <span className="text-gray-400 font-medium">Hours of Development</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-gray-300 text-lg leading-relaxed"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            From Curious Developer to AI Innovator
          </h3>
          <p>
            I am Aditya Ayushman Sahoo, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning.
          </p>
          <p>
            My journey began with curiosity about how technology works and evolved into building complete software systems that solve real-world challenges.
          </p>
          <p>
            Over the years, I have worked across Artificial Intelligence, Machine Learning, Computer Vision, Blockchain, Full Stack Development, Cloud Computing, and Database Systems.
          </p>
          <p>
            From building AI-powered accident detection systems using YOLO and LSTM to creating decentralized healthcare solutions using blockchain and IPFS, I enjoy turning ambitious ideas into impactful products.
          </p>
          <p>
            I focus on building scalable systems, intelligent workflows, and user-centric experiences that combine innovation with practicality.
          </p>
          <p>
            Currently, I am exploring advanced AI systems, automation agents, computer vision applications, and full-stack architectures while participating in hackathons, research initiatives, and product development.
          </p>
          <p>
            My mission is to create technology that solves meaningful problems and improves lives through intelligent software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
