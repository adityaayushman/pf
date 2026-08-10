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

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const startAutoScroll = () => {
      if (cancelled) return;
      const hero = document.getElementById("top");
      const start = window.scrollY;
      // End of the hero scene = start of the content/intro below it.
      const target = hero ? hero.offsetHeight : window.innerHeight;
      const distance = target - start;
      if (distance <= 0) return;

      // Slow, smooth pace (~0.8 px/ms), clamped to a sensible window.
      const duration = Math.min(8000, Math.max(2500, distance / 0.8));
      const t0 = performance.now();

      const step = (now: number) => {
        if (cancelled) return;
        const p = Math.min(1, (now - t0) / duration);
        window.scrollTo(0, start + distance * easeInOutCubic(p));
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
