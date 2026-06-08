"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 150;
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
};

export default function ScrollyCanvas({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImage = (index: number) => {
    if (!canvasRef.current || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    if (loadedCount > 0) {
      requestAnimationFrame(() => drawImage(0));
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawImage(Math.min(FRAME_COUNT - 1, Math.floor(scrollYProgress.get() * FRAME_COUNT)));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, loadedCount]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    let frameIndex = Math.floor(latest * FRAME_COUNT);
    if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;
    requestAnimationFrame(() => drawImage(frameIndex));
  });

  const loadingPercentage = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0d0d0d]">
      {loadedCount < FRAME_COUNT && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d] z-10">
          <span className="text-[#9ca3af] text-xl font-bold tracking-widest">
            LOADING {loadingPercentage}%
          </span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover"
      />
    </div>
  );
}
