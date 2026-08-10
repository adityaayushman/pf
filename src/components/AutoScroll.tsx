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

    const startAutoScroll = () => {
      if (cancelled) return;
      const hero = document.getElementById("top");
      // End of the hero scene = start of the content/intro below it.
      const target = hero ? hero.offsetHeight : window.innerHeight;
      if (window.scrollY >= target - 1) return;

      // Constant, gentle drift (~0.14 px/ms ≈ 140 px/s) with a soft ramp-in and
      // ramp-out — no eased "fast middle", so it stays consistently slow.
      const cruise = 0.14; // px per millisecond
      const t0 = performance.now();
      let last = t0;

      const step = (now: number) => {
        if (cancelled) return;
        const dt = now - last;
        last = now;
        const y = window.scrollY;
        const remaining = target - y;
        if (remaining <= 1) {
          window.scrollTo(0, target);
          removeListeners();
          return;
        }
        // Ramp up over the first ~800ms and ease down over the last ~600px.
        const factor = Math.min(1, (now - t0) / 800, remaining / 600);
        window.scrollTo(0, Math.min(target, y + cruise * factor * dt));
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    timer = setTimeout(startAutoScroll, 5000);

    return cancel;
  }, []);

  return null;
}
