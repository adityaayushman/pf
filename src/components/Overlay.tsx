"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Phase 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.10, 0.18, 0.28], [0.1, 0.1, 0.1, 0]);

  // Phase 2
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.38, 0.44, 0.52], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.52], [60, -60]);

  // Phase 3
  const opacity3 = useTransform(scrollYProgress, [0.52, 0.62, 0.70, 0.78], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.52, 0.78], [40, -40]);

  // Phase 4
  const opacity4 = useTransform(scrollYProgress, [0.78, 0.88, 0.96, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.78, 1], [40, -40]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center">
      {/* Phase 1 */}
      <motion.div
        style={{ opacity: opacity1 }}
        className="absolute w-full text-center will-change-[opacity,transform]"
      >
        <h1
          className="font-black tracking-tighter"
          style={{ fontSize: "clamp(5rem, 15vw, 14rem)" }}
        >
          Aditya Ayushman Sahoo.
        </h1>
      </motion.div>

      {/* Phase 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full text-center flex flex-col items-center gap-4 will-change-[opacity,transform]"
      >
        <span className="text-[#ff6b35] font-semibold tracking-widest uppercase text-sm md:text-base">
          AI • Computer Vision • Cloud
        </span>
        <h2
          className="font-bold leading-tight tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          Aditya Ayushman Sahoo.
        </h2>
        <span className="text-[#9ca3af] text-lg md:text-xl font-medium tracking-wide">
          B.Tech Artificial Intelligence @ SRM • Deep Learning & Real-Time Systems
        </span>
      </motion.div>

      {/* Phase 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute w-full text-center will-change-[opacity,transform]"
      >
        <h2
          className="font-bold leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          AI & Machine<br />
          Learning Engineer.
        </h2>
      </motion.div>

      {/* Phase 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute w-full text-center flex flex-col items-center gap-6 px-4 will-change-[opacity,transform]"
      >
        <h2
          className="font-bold leading-tight tracking-tight"
          style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
        >
          Building Real-Time AI,<br />
          Computer Vision & Cloud<br />
          Intelligence Systems.
        </h2>
        <span className="text-[#9ca3af] text-base md:text-xl tracking-wider font-medium">
          Deep Learning • YOLOv8 • Reinforcement Learning • FastAPI
        </span>
      </motion.div>
    </div>
  );
}
