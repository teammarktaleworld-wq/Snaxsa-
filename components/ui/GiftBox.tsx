// "use client";

// import { motion } from "framer-motion";

// /** Floating gift-box illustration used on the Bulk Orders page. */
// export default function GiftBox() {
//   return (
//     <div className="relative w-full max-w-[260px] mx-auto aspect-square" aria-hidden>
//       <div className="absolute inset-x-0 bottom-4 mx-auto w-40 h-16 rounded-full bg-royal/20 blur-2xl" />
//       <motion.svg
//         viewBox="0 0 200 200"
//         className="absolute inset-0 w-full h-full drop-shadow-[0_20px_30px_rgba(107,16,46,0.25)]"
//         animate={{ y: [0, -12, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <defs>
//           <linearGradient id="boxBody" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#FF4F81" />
//             <stop offset="100%" stopColor="#6B102E" />
//           </linearGradient>
//           <linearGradient id="boxLid" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#FCD980" />
//             <stop offset="100%" stopColor="#E91E63" />
//           </linearGradient>
//         </defs>
//         <rect x="45" y="95" width="110" height="80" rx="10" fill="url(#boxBody)" />
//         <rect x="35" y="70" width="130" height="32" rx="10" fill="url(#boxLid)" />
//         <rect x="92" y="70" width="16" height="105" fill="#FCEBC0" opacity="0.85" />
//         <rect x="35" y="80" width="130" height="10" fill="#FCEBC0" opacity="0.7" />
//         <path
//           d="M100 70 C80 40 60 45 65 62 C70 76 90 74 100 70 Z"
//           fill="url(#boxLid)"
//         />
//         <path
//           d="M100 70 C120 40 140 45 135 62 C130 76 110 74 100 70 Z"
//           fill="url(#boxLid)"
//         />
//       </motion.svg>
//       {["✦", "✧", "✦"].map((s, i) => (
//         <motion.span
//           key={i}
//           className="absolute text-gold text-lg"
//           style={{ left: `${20 + i * 30}%`, top: `${10 + (i % 2) * 12}%` }}
//           animate={{ opacity: [0, 1, 0], y: [0, -14, -20] }}
//           transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
//         >
//           {s}
//         </motion.span>
//       ))}
//     </div>
//   );
// }














"use client";

import { motion } from "framer-motion";

export default function GiftBox() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto select-none" aria-hidden>
      {/* Ground shadow */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full bg-maroon/20 blur-2xl" />

      {/* Floating sparkles */}
      {[
        { char: "✦", left: "12%", top: "8%",  delay: 0    },
        { char: "✧", left: "78%", top: "14%", delay: 0.6  },
        { char: "✦", left: "88%", top: "55%", delay: 1.1  },
        { char: "✧", left: "5%",  top: "60%", delay: 0.3  },
        { char: "✦", left: "55%", top: "4%",  delay: 1.5  },
      ].map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-gold font-bold text-lg pointer-events-none"
          style={{ left: s.left, top: s.top }}
          animate={{ opacity: [0, 1, 0], y: [0, -16, -26], scale: [0.6, 1.2, 0.8] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: s.delay, ease: "easeOut" }}
        >
          {s.char}
        </motion.span>
      ))}

      {/* Main floating SVG */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <svg viewBox="0 0 280 300" className="w-full drop-shadow-[0_24px_40px_rgba(107,16,46,0.30)]">
          <defs>
            {/* Box body gradient */}
            <linearGradient id="gbBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#6B102E" />
            </linearGradient>
            {/* Box side shadow */}
            <linearGradient id="gbBodySide" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6B102E" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6B102E" stopOpacity="0" />
            </linearGradient>
            {/* Lid gradient */}
            <linearGradient id="gbLid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCD980" />
              <stop offset="50%" stopColor="#F9A825" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>
            {/* Lid side */}
            <linearGradient id="gbLidSide" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E65100" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E65100" stopOpacity="0" />
            </linearGradient>
            {/* Ribbon */}
            <linearGradient id="gbRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FCEBC0" />
              <stop offset="100%" stopColor="#FCD980" />
            </linearGradient>
            {/* Bow */}
            <linearGradient id="gbBow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDE7" />
              <stop offset="100%" stopColor="#FCD980" />
            </linearGradient>
            {/* Inner glow */}
            <radialGradient id="gbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FCD980" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FCD980" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ── BOX BODY ── */}
          {/* Front face */}
          <rect x="60" y="150" width="160" height="120" rx="8" fill="url(#gbBody)" />
          {/* Side shadow overlay */}
          <rect x="180" y="150" width="40" height="120" rx="4" fill="url(#gbBodySide)" opacity="0.5" />
          {/* Bottom edge highlight */}
          <rect x="60" y="260" width="160" height="8" rx="4" fill="#6B102E" opacity="0.3" />
          {/* Polka dots */}
          {[
            [90, 175], [130, 185], [170, 172], [100, 220], [155, 230], [195, 200],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="white" opacity="0.12" />
          ))}

          {/* ── LID ── */}
          <rect x="50" y="118" width="180" height="38" rx="8" fill="url(#gbLid)" />
          {/* Lid side shadow */}
          <rect x="190" y="118" width="40" height="38" rx="4" fill="url(#gbLidSide)" opacity="0.4" />
          {/* Lid bottom edge */}
          <rect x="50" y="148" width="180" height="6" rx="3" fill="#E65100" opacity="0.25" />

          {/* ── RIBBON vertical ── */}
          <rect x="128" y="118" width="24" height="152" fill="url(#gbRibbon)" opacity="0.9" />
          {/* Ribbon horizontal on lid */}
          <rect x="50" y="130" width="180" height="14" fill="url(#gbRibbon)" opacity="0.9" />

          {/* ── BOW ── */}
          {/* Left loop */}
          <path
            d="M140 118 C110 90 75 85 80 105 C85 122 115 120 140 118 Z"
            fill="url(#gbBow)"
            stroke="#F9A825"
            strokeWidth="1.5"
          />
          {/* Right loop */}
          <path
            d="M140 118 C170 90 205 85 200 105 C195 122 165 120 140 118 Z"
            fill="url(#gbBow)"
            stroke="#F9A825"
            strokeWidth="1.5"
          />
          {/* Bow centre knot */}
          <ellipse cx="140" cy="116" rx="12" ry="10" fill="#FCEBC0" stroke="#F9A825" strokeWidth="1" />
          {/* Ribbon tails */}
          <path d="M132 118 L118 145" stroke="#FCD980" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
          <path d="M148 118 L162 145" stroke="#FCD980" strokeWidth="8" strokeLinecap="round" opacity="0.8" />

          {/* ── INNER GLOW on lid ── */}
          <ellipse cx="140" cy="137" rx="70" ry="14" fill="url(#gbGlow)" />

          {/* ── MAKHANA peeking out (tiny circles) ── */}
          {[
            [108, 145], [125, 140], [142, 143], [158, 141], [172, 146],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="6"
              fill="#FCEBC0"
              stroke="#F9A825"
              strokeWidth="1"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Orbiting badges */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute bg-white rounded-2xl shadow-lg border border-ink/5 px-3 py-2 text-center"
          style={{ top: "10%", right: "-8%" }}
        >
          <p className="text-[9px] text-ink/40 font-bold uppercase tracking-wide">Min. Order</p>
          <p className="font-display font-extrabold text-maroon text-sm">50 Jars</p>
        </div>
        <div
          className="absolute bg-white rounded-2xl shadow-lg border border-ink/5 px-3 py-2 text-center"
          style={{ bottom: "22%", left: "-12%" }}
        >
          <p className="text-[9px] text-ink/40 font-bold uppercase tracking-wide">Delivery</p>
          <p className="font-display font-extrabold text-royal text-sm">Pan India</p>
        </div>
      </motion.div>
    </div>
  );
}