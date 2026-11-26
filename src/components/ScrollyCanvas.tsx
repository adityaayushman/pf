"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

// The sequence has 150 files. Every second one is plenty for a scroll-scrubbed hero, and halves
// the decoded pixels held in memory (150 frames at 1280x720 is about 550 MB).
const FILE_COUNT = 150;
const STEP = 2;
const FRAME_COUNT = FILE_COUNT / STEP;
const CONCURRENCY = 6;
const getFramePath = (index: number) => {
  const paddedIndex = (index * STEP).toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
};

export default function ScrollyCanvas({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Created once on the client (empty during SSR); never rendered, so no hydration mismatch.
  const [images] = useState<HTMLImageElement[]>(() =>
    typeof Image === "undefined"
      ? []
      : Array.from({ length: FRAME_COUNT }, () => new Image())
  );
  const [firstReady, setFirstReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Load frames in order with limited concurrency, so we don't fire 150
  // requests at once (which saturates the network and stalls first paint).
  // Frame 0 is also <link rel=preload>ed in the document head, so it's
  // usually already in cache by the time this runs.
  useEffect(() => {
    const imgs = images;

    let next = 0;
    let active = 0;
    let cancelled = false;

    const pump = () => {
      while (active < CONCURRENCY && next < FRAME_COUNT) {
        const i = next++;
        active++;
        const img = imgs[i];
        img.decoding = "async";
        const done = () => {
          if (cancelled) return;
          if (i === 0) setFirstReady(true);
          setLoadedCount((c) => c + 1);
          active--;
          pump();
        };
        img.onload = done;
        img.onerror = done;
        img.src = getFramePath(i);
      }
    };
    pump();

    return () => {
      cancelled = true;
    };
  }, [images]);

  const isLoaded = (img?: HTMLImageElement) =>
    !!img && img.complete && img.naturalWidth > 0;

  const drawImage = (index: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Prefer the exact frame; if it hasn't decoded yet, use the nearest
    // loaded frame so scrubbing never flashes an empty canvas.
    let img: HTMLImageElement | undefined = images[index];
    if (!isLoaded(img)) {
      let best: HTMLImageElement | undefined;
      for (let d = 1; d < FRAME_COUNT && !best; d++) {
        if (index - d >= 0 && isLoaded(images[index - d])) best = images[index - d];
        else if (index + d < FRAME_COUNT && isLoaded(images[index + d]))
          best = images[index + d];
      }
      img = best;
    }
    if (!isLoaded(img)) return;
    const frame = img as HTMLImageElement;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = frame.width / frame.height;

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
    ctx.drawImage(frame, offsetX, offsetY, drawWidth, drawHeight);
  };

  const currentFrame = () =>
    Math.min(FRAME_COUNT - 1, Math.floor(scrollYProgress.get() * FRAME_COUNT));

  // Size the canvas and draw the current frame (also on resize).
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const sizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    sizeCanvas();
    requestAnimationFrame(() => drawImage(currentFrame()));

    const handleResize = () => {
      sizeCanvas();
      drawImage(currentFrame());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, firstReady]);

  // As more frames stream in, refresh the current frame (no canvas resize,
  // so there's no flicker) — upgrades a "nearest" frame to the exact one.
  useEffect(() => {
    if (!firstReady) return;
    requestAnimationFrame(() => drawImage(currentFrame()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedCount]);

  // Coalesce scroll events: at most one draw per animation frame, and none when the frame
  // index has not changed.
  const pendingFrame = useRef(-1);
  const drawnFrame = useRef(-1);
  const rafId = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    let frameIndex = Math.floor(latest * FRAME_COUNT);
    if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;
    if (frameIndex === drawnFrame.current && !rafId.current) return;
    pendingFrame.current = frameIndex;
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = 0;
      drawnFrame.current = pendingFrame.current;
      drawImage(pendingFrame.current);
    });
  });

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#000000]">
      {!firstReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#000000] z-10">
          <div className="h-8 w-8 rounded-full border-2 border-white/15 border-t-[#2997ff] animate-spin" />
          <span className="text-[#a1a1a6] text-xs font-semibold tracking-[0.3em] uppercase">
            Loading
          </span>
        </div>
      )}
      <canvas ref={canvasRef} className="block w-full h-full object-cover" />
    </div>
  );
}
