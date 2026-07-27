"use client";

import { motion } from "framer-motion";

const makhana = Array.from({ length: 7 }).map((_, i) => ({
  id: i,
  delay: i * 0.45,
  drift: (i % 2 === 0 ? 1 : -1) * (6 + i * 2),
  size: 7 + (i % 3) * 2,
}));

const sparkles = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  x: 30 + i * 14,
  delay: i * 0.6,
}));

/**
 * Signature hero illustration: a small brass pot tilted at the pour, with
 * roasted makhana continuously falling and fading, golden sparkles and a
 * soft floating leaf. Loops forever. Minimal, elegant, no wooden bowl.
 */
export default function BrassPot() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto aspect-[3/4]" aria-hidden>
      {/* ambient glow */}
      <div className="absolute inset-x-0 top-6 mx-auto w-40 h-40 rounded-full bg-gold/25 blur-3xl" />

      {/* falling makhana + sparkles column */}
      <div className="absolute left-[38%] top-[30%] w-24 h-64">
        {makhana.map((m) => (
          <motion.span
            key={m.id}
            className="absolute rounded-full bg-[#FBEBD2] shadow-[0_0_6px_rgba(244,165,34,0.6)]"
            style={{ width: m.size, height: m.size, left: "50%" }}
            initial={{ y: -10, x: 0, opacity: 0 }}
            animate={{ y: 210, x: m.drift, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.6,
              delay: m.delay,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        ))}
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            className="absolute text-gold"
            style={{ left: s.x, top: 40 }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.4], y: [0, 30] }}
            transition={{ duration: 2.2, delay: s.delay, repeat: Infinity, ease: "easeOut" }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* pot */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-40 drop-shadow-[0_18px_25px_rgba(107,16,46,0.25)] origin-[70%_20%]"
        animate={{ rotate: [-6, -2, -6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="brass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCEBC0" />
            <stop offset="45%" stopColor="#F9A825" />
            <stop offset="100%" stopColor="#4B0D20" />
          </linearGradient>
        </defs>
        {/* pot body */}
        <path
          d="M55 70 Q40 95 55 130 Q70 165 105 165 Q140 165 150 130 Q158 100 140 72 Q125 50 100 50 Q72 50 55 70 Z"
          fill="url(#brass)"
        />
        {/* pot neck / spout */}
        <path
          d="M132 58 Q150 46 168 40 Q176 37 178 44 Q179 50 171 53 Q152 60 138 70 Z"
          fill="url(#brass)"
        />
        {/* rim highlight */}
        <ellipse cx="100" cy="52" rx="26" ry="8" fill="#FCEBC0" opacity="0.8" />
        {/* base ring */}
        <ellipse cx="102" cy="162" rx="34" ry="7" fill="#4B0D20" opacity="0.6" />
      </motion.svg>

      {/* floating leaf accent */}
      <motion.span
        className="absolute -left-2 bottom-8 text-2xl opacity-70"
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🍃
      </motion.span>
    </div>
  );
}
