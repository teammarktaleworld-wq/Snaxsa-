"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatRingProps {
  percent: number;
  label: string;
  value: string;
  color: string;
}

/** Animated circular progress ring used on the Health Benefits page. */
export default function StatRing({ percent, label, value, color }: StatRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const r = 54;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(107,16,46,0.1)" strokeWidth="10" />
          <motion.circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-xl text-ink">{value}</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-semibold text-ink-soft">{label}</p>
    </div>
  );
}
