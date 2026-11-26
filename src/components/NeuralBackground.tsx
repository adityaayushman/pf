"use client";

import { useEffect, useRef } from "react";

/**
 * A living neural-network backdrop: nodes drift at different depths (parallax with
 * scroll), link to their neighbours, and send signal pulses along the links. The
 * cursor acts like an "attention head": nodes near it light up and link to it.
 * Static when the visitor prefers reduced motion; paused while the tab is hidden.
 */

type Node = { x: number; y: number; vx: number; vy: number; z: number; glow: number };
type Pulse = { a: number; b: number; t: number };

const BLUE = "41,151,255";

export default function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let lastPulse = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const LINK = 175;
    const ATTENTION = 190;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, Math.max(40, (w * h) / 14000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        z: 0.35 + Math.random() * 0.65,
        glow: 0,
      }));
      pulses = [];
    };

    const wrap = (v: number, max: number) => ((v % max) + max) % max;

    // The hero's sticky canvas is opaque and covers the whole viewport until the hero ends,
    // so drawing underneath it is wasted work.
    const hero = document.getElementById("top");
    const isCovered = () =>
      !!hero && window.scrollY < hero.offsetHeight - window.innerHeight - 24;
    const FRAME_MS = 1000 / 30;
    let lastDraw = 0;

    const frame = (time: number) => {
      if (isCovered()) {
        raf = 0;
        return; // the scroll listener restarts the loop once the hero scrolls away
      }
      if (!reduced && time - lastDraw < FRAME_MS - 2) {
        raf = requestAnimationFrame(frame);
        return;
      }
      lastDraw = time;
      ctx.clearRect(0, 0, w, h);
      const scroll = window.scrollY;

      // Positions on screen, with depth-based scroll parallax.
      const pts = nodes.map((n) => {
        if (!reduced) {
          n.x = wrap(n.x + n.vx * n.z * 2, w);
          n.y = wrap(n.y + n.vy * n.z * 2, h);
        }
        const sx = n.x;
        const sy = wrap(n.y - scroll * n.z * 0.18, h);
        let target = 0;
        if (mouse.active) {
          const d = Math.hypot(sx - mouse.x, sy - mouse.y);
          if (d < ATTENTION) target = 1 - d / ATTENTION;
        }
        n.glow += (target - n.glow) * 0.22;
        return { sx, sy, n };
      });

      // Links between neighbours, drawn in a few alpha buckets (one stroke per bucket)
      // instead of one path and one stroke per link.
      const BUCKETS = 6;
      const paths: Path2D[] = Array.from({ length: BUCKETS }, () => new Path2D());
      const used = new Array<boolean>(BUCKETS).fill(false);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].sx - pts[j].sx;
          const dy = pts[i].sy - pts[j].sy;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          const closeness = 1 - Math.sqrt(d2) / LINK;
          const boost = Math.max(pts[i].n.glow, pts[j].n.glow);
          const alpha = Math.min(1, closeness * (0.22 + boost * 0.6));
          const b = Math.min(BUCKETS - 1, Math.floor(alpha * BUCKETS));
          paths[b].moveTo(pts[i].sx, pts[i].sy);
          paths[b].lineTo(pts[j].sx, pts[j].sy);
          used[b] = true;
        }
      }
      ctx.lineWidth = 0.8;
      for (let b = 0; b < BUCKETS; b++) {
        if (!used[b]) continue;
        ctx.strokeStyle = `rgba(${BLUE},${((b + 0.5) / BUCKETS).toFixed(3)})`;
        ctx.stroke(paths[b]);
      }

      // Attention lines from the cursor to nearby nodes.
      if (mouse.active) {
        for (const p of pts) {
          if (p.n.glow < 0.05) continue;
          ctx.strokeStyle = `rgba(255,255,255,${(p.n.glow * 0.35).toFixed(3)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.sx, p.sy);
          ctx.stroke();
        }
      }

      // Nodes.
      for (const p of pts) {
        const r = 1.1 + p.n.z * 1.3 + p.n.glow * 2.2;
        ctx.fillStyle =
          p.n.glow > 0.05
            ? `rgba(255,255,255,${(0.35 + p.n.glow * 0.65).toFixed(3)})`
            : `rgba(${BLUE},${(0.4 + p.n.z * 0.4).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Signal pulses travelling along links.
      if (!reduced) {
        if (time - lastPulse > 450 && pulses.length < 8) {
          lastPulse = time;
          const a = Math.floor(Math.random() * pts.length);
          let best = -1;
          let bestD = LINK * LINK;
          for (let k = 0; k < pts.length; k++) {
            if (k === a) continue;
            const dx = pts[a].sx - pts[k].sx;
            const dy = pts[a].sy - pts[k].sy;
            const d2 = dx * dx + dy * dy;
            if (d2 < bestD && Math.random() < 0.5) {
              bestD = d2;
              best = k;
            }
          }
          if (best >= 0) pulses.push({ a, b: best, t: 0 });
        }
        pulses = pulses.filter((p) => p.t < 1);
        for (const p of pulses) {
          p.t += 0.036;
          const A = pts[p.a];
          const B = pts[p.b];
          if (!A || !B) continue;
          const x = A.sx + (B.sx - A.sx) * p.t;
          const y = A.sy + (B.sy - A.sy) * p.t;
          const g = ctx.createRadialGradient(x, y, 0, x, y, 9);
          g.addColorStop(0, `rgba(${BLUE},0.9)`);
          g.addColorStop(1, `rgba(${BLUE},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, 9, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!reduced && !document.hidden) raf = requestAnimationFrame(frame);
      else raf = 0;
    };

    const start = () => {
      if (raf) return;
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = e.pointerType !== "touch";
    };
    const onLeave = () => {
      mouse.active = false;
    };
    const onVisibility = () => {
      if (!document.hidden) start();
    };

    resize();
    start();
    const onResize = () => {
      resize();
      start();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("scroll", start, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", start);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
