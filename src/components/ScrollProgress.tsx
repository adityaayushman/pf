"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-[#ff6b35]"
      aria-hidden="true"
    />
  );
}
