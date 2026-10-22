"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  const format = (n: number) => Intl.NumberFormat("en-US").format(Math.floor(n)) + suffix;

  // The final value is the server-rendered text, so it shows with JS disabled
  // or prefers-reduced-motion. Only animate from 0 when motion is allowed.
  useEffect(() => {
    if (reduced) {
      if (ref.current) ref.current.textContent = format(value);
      return;
    }
    if (isInView) {
      motionValue.set(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, value, motionValue, reduced]);

  useEffect(() => {
    if (reduced) return;
    if (ref.current) ref.current.textContent = format(motionValue.get());
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(latest);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [springValue, suffix, reduced]);

  return <span ref={ref} className="font-extrabold text-5xl md:text-6xl text-white">{format(value)}</span>;
}

export default function AboutMeSplit() {
  // Live LeetCode solved count (with a static fallback).
  const [solved, setSolved] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/stats")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!active || !d) return;
        if (typeof d?.leetcode?.solved === "number") setSolved(d.leetcode.solved);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <Counter value={7} suffix="" />
            <span className="text-gray-400 font-medium">Projects Built</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={5} suffix="" />
            <span className="text-gray-400 font-medium">Internships</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={1} suffix="" />
            <span className="text-gray-400 font-medium">Research Works</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={solved ?? 330} suffix={solved != null ? "" : "+"} />
            <span className="text-gray-400 font-medium">DSA Problems Solved</span>
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
            I am Aditya Ayushman Sahoo, a B.Tech CSE (AI & ML) student at SRM Institute of Science and Technology, Class of 2027, focused on Computer Vision, Deep Learning and Cloud AI.
          </p>
          <p>
            My journey began with curiosity about how technology works and evolved into building complete software systems that solve real-world challenges.
          </p>
          <p>
            Over the years, I have worked across Artificial Intelligence, Machine Learning, Computer Vision, Full Stack Development, Mobile Development, Cloud Computing, and Database Systems.
          </p>
          <p>
            From PCB defect inspection and medical-imaging intelligence to carbon-aware EV charging and road-safety analytics, I enjoy turning ambitious ideas into impactful products.
          </p>
          <p>
            More recently, I built <span className="text-white font-medium">CrowdCount</span>, a multi-zone real-time crowd-intelligence platform powered by YOLOv8 and FastAPI, and a <span className="text-white font-medium">Cloud Resource Optimizer</span> that uses reinforcement learning (Deep Q-Networks) with Explainable AI for smarter workload scheduling.
          </p>
          <p>
            I'm currently a research intern at <span className="text-white font-medium">KIIT</span> exploring AI-powered medical imaging (MedVision), alongside internships at <span className="text-white font-medium">Osswal Infosystem</span> (a SAP Partner, as a Flutter developer) and <span className="text-white font-medium">Kukreja's Wastec</span> — following earlier roles at <span className="text-white font-medium">Syllogistek Systems</span> and the <span className="text-white font-medium">Silicon Institute of Technology</span>. My Cloud Resource Optimizer is available as an SSRN preprint on <span className="text-white font-medium">SSRN</span>.
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
