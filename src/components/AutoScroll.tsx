"use client";

import { useEffect } from "react";

/**
 * If the visitor lands at the top and doesn't interact for 5 seconds,
 * smoothly auto-scroll through the hero to the content below — so they
 * discover there's more without having to scroll first. Any real user
 * intent (wheel, touch, key, pointer) cancels it immediately.
 */
export default function AutoScroll() {
  useEffect(() => {
    // Respect reduced-motion, and only kick in when starting at the top.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (window.scrollY > 40) return;

    let cancelled = false;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;

    const onUserIntent = () => cancel();

    const removeListeners = () => {
      window.removeEventListener("wheel", onUserIntent);
      window.removeEventListener("touchstart", onUserIntent);
      window.removeEventListener("keydown", onUserIntent);
      window.removeEventListener("pointerdown", onUserIntent);
    };

    function cancel() {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(timer);
      removeListeners();
    }

    window.addEventListener("wheel", onUserIntent, { passive: true });
    window.addEventListener("touchstart", onUserIntent, { passive: true });
    window.addEventListener("keydown", onUserIntent);
    window.addEventListener("pointerdown", onUserIntent);

    // Gentle ease-in-out (sine) — smooth acceleration, low peak speed so it
    // never rushes through the middle.
    const ease = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

    const startAutoScroll = () => {
      if (cancelled) return;
      const hero = document.getElementById("top");
      const start = window.scrollY;
      // End of the hero scene = start of the content/intro below it.
      const target = hero ? hero.offsetHeight : window.innerHeight;
      const distance = target - start;
      if (distance <= 0) return;

      // Slow, gentle pace (~0.28 px/ms → ~3s per screen), clamped.
      const duration = Math.min(18000, Math.max(4000, distance / 0.28));
      const t0 = performance.now();

      const step = (now: number) => {
        if (cancelled) return;
        const p = Math.min(1, (now - t0) / duration);
        window.scrollTo(0, start + distance * ease(p));
        if (p < 1) raf = requestAnimationFrame(step);
        else removeListeners();
      };
      raf = requestAnimationFrame(step);
    };

    timer = setTimeout(startAutoScroll, 5000);

    return cancel;
  }, []);

  return null;
}
