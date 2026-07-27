"use client";

import { motion } from "framer-motion";

/** Floating gift-box illustration used on the Bulk Orders page. */
export default function GiftBox() {
  return (
    <div className="relative w-full max-w-[260px] mx-auto aspect-square" aria-hidden>
      <div className="absolute inset-x-0 bottom-4 mx-auto w-40 h-16 rounded-full bg-royal/20 blur-2xl" />
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full drop-shadow-[0_20px_30px_rgba(107,16,46,0.25)]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="boxBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4F81" />
            <stop offset="100%" stopColor="#6B102E" />
          </linearGradient>
          <linearGradient id="boxLid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD980" />
            <stop offset="100%" stopColor="#E91E63" />
          </linearGradient>
        </defs>
        <rect x="45" y="95" width="110" height="80" rx="10" fill="url(#boxBody)" />
        <rect x="35" y="70" width="130" height="32" rx="10" fill="url(#boxLid)" />
        <rect x="92" y="70" width="16" height="105" fill="#FCEBC0" opacity="0.85" />
        <rect x="35" y="80" width="130" height="10" fill="#FCEBC0" opacity="0.7" />
        <path
          d="M100 70 C80 40 60 45 65 62 C70 76 90 74 100 70 Z"
          fill="url(#boxLid)"
        />
        <path
          d="M100 70 C120 40 140 45 135 62 C130 76 110 74 100 70 Z"
          fill="url(#boxLid)"
        />
      </motion.svg>
      {["✦", "✧", "✦"].map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-gold text-lg"
          style={{ left: `${20 + i * 30}%`, top: `${10 + (i % 2) * 12}%` }}
          animate={{ opacity: [0, 1, 0], y: [0, -14, -20] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}
