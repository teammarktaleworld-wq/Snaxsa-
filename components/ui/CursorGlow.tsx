"use client";

import { useEffect, useRef } from "react";

/** Small golden blur that follows the cursor; grows over interactive elements. Desktop only. */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor-grow]"
      );
      el.style.width = interactive ? "52px" : "26px";
      el.style.height = interactive ? "52px" : "26px";
      el.style.opacity = "1";
    };

    const onLeaveWindow = () => {
      el.style.opacity = "0";
    };

    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeaveWindow);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeaveWindow);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow opacity-0" aria-hidden />;
}
