


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   Dumbbell,
//   Leaf,
//   Bone,
//   HeartPulse,
// } from "lucide-react";

// const items = [
//   {
//     Icon: Dumbbell,
//     color: "#F57C00",
//     start: { x: 0, y: -130 },      // Top
//     end: { x: 0, y: -45 },
//   },
//   {
//     Icon: HeartPulse,
//     color: "#E91E63",
//     start: { x: 130, y: 0 },       // Right
//     end: { x: 45, y: 0 },
//   },
//   {
//     Icon: Bone,
//     color: "#F9A825",
//     start: { x: 0, y: 130 },       // Bottom
//     end: { x: 0, y: 45 },
//   },
//   {
//     Icon: Leaf,
//     color: "#22C55E",
//     start: { x: -130, y: 0 },      // Left
//     end: { x: -45, y: 0 },
//   },
// ];

// export default function NutrientBurst() {
//   return (
//     <div className="relative w-[380px] h-[380px] mx-auto overflow-visible">

//       {/* Background Glow */}
//       <motion.div
//         className="absolute inset-0 rounded-full blur-[90px]"
//         style={{
//           background:
//             "radial-gradient(circle,#E91E6325,#F57C0020,transparent 75%)",
//         }}
//         animate={{
//           scale: [1, 1.12, 1],
//           opacity: [0.35, 0.75, 0.35],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//         }}
//       />

//       {/* Decorative Rings */}
//       <motion.div
//         className="absolute inset-8 rounded-full border border-[#E91E63]/20"
//         animate={{
//           rotate: 360,
//         }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <motion.div
//         className="absolute inset-14 rounded-full border border-dashed border-[#F57C00]/25"
//         animate={{
//           rotate: -360,
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Center Logo */}
//       <motion.div
//         className="absolute left-1/2 top-1/2
//         -translate-x-1/2 -translate-y-1/2 z-30"
//         animate={{
//           scale: [1, 1.08, 1],
//         }}
//         transition={{
//           duration: 2.5,
//           repeat: Infinity,
//         }}
//       >
//         <div className="w-32 h-32 rounded-full bg-white shadow-[0_0_40px_rgba(233,30,99,.35)] p-4">
//           <div className="relative w-full h-full">
//             <Image
//               src="/images/logo.png"
//               alt="Snax"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* Animated Icons */}
//       {items.map(({ Icon, color, start, end }, index) => (
//         <motion.div
//           key={index}
//           className="absolute left-1/2 top-1/2 z-20"
//           animate={{
//             x: [
//               start.x,   // Outside
//               end.x,     // Near logo
//               0,         // Centre
//               -end.y,    // Rotate 90°
//               -start.y,  // Outside new position
//               start.x,   // Back
//             ],

//             y: [
//               start.y,
//               end.y,
//               0,
//               end.x,
//               start.x,
//               start.y,
//             ],

//             scale: [
//               1,
//               0.92,
//               1.05,
//               1,
//               1,
//               1,
//             ],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             times: [0, 0.22, 0.38, 0.62, 0.82, 1],
//             delay: index * 0.15,
//           }}
//           style={{
//             marginLeft: -32,
//             marginTop: -32,
//           }}
//         >
//           <div
//             className="w-16 h-16 rounded-full bg-white
//             flex items-center justify-center
//             shadow-2xl"
//             style={{
//               boxShadow: `0 0 25px ${color}66`,
//             }}
//           >
//             <Icon
//               size={28}
//               color={color}
//             />
//           </div>
//         </motion.div>
//       ))}
//       {/* Floating particles */}
//       {Array.from({ length: 8 }).map((_, i) => (
//         <motion.div
//           key={`p-${i}`}
//           className="absolute w-2 h-2 rounded-full bg-[#F57C00]"
//           style={{
//             left: `${20 + Math.random() * 60}%`,
//             top: `${20 + Math.random() * 60}%`,
//           }}
//           animate={{
//             opacity: [0.2, 1, 0.2],
//             scale: [0.5, 1.5, 0.5],
//             y: [0, -15, 0],
//           }}
//           transition={{
//             duration: 2 + i * 0.3,
//             repeat: Infinity,
//           }}
//         />
//       ))}

//     </div>
//   );
// }

















// "use client";

// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";

// const nutrients = [
//   {
//     icon: "💪",
//     stat: "9.7g",
//     label: "Protein",
//     sub: "per 100g",
//     color: "#E91E63",
//     angle: 0,
//   },
//   {
//     icon: "🦴",
//     stat: "60mg",
//     label: "Calcium",
//     sub: "per 100g",
//     color: "#F57C00",
//     angle: 72,
//   },
//   {
//     icon: "⚡",
//     stat: "347",
//     label: "Low Cal",
//     sub: "kcal / 100g",
//     color: "#22C55E",
//     angle: 144,
//   },
//   {
//     icon: "🌿",
//     stat: "High",
//     label: "Antioxidants",
//     sub: "Kaempferol rich",
//     color: "#8B5CF6",
//     angle: 216,
//   },
//   {
//     icon: "🌾",
//     stat: "14.5g",
//     label: "Fibre",
//     sub: "per 100g",
//     color: "#0EA5E9",
//     angle: 288,
//   },
// ];

// const ORBIT_R = 130; // px from center to card center
// const ORBIT_DURATION = 18; // seconds for one full revolution

// function toRad(deg: number) {
//   return (deg * Math.PI) / 180;
// }

// /**
//  * Generates keyframe arrays for a smooth circular orbit
//  * starting at `startDeg` and going 360°, sampled at N steps.
//  */
// function orbitKeyframes(startDeg: number, steps = 37) {
//   const xs: number[] = [];
//   const ys: number[] = [];
//   for (let i = 0; i <= steps; i++) {
//     const angle = toRad(startDeg + (360 * i) / steps);
//     xs.push(parseFloat((Math.cos(angle) * ORBIT_R).toFixed(2)));
//     ys.push(parseFloat((Math.sin(angle) * ORBIT_R).toFixed(2)));
//   }
//   return { xs, ys };
// }

// export default function NutrientBurst() {
//   return (
//     <div className="relative w-[380px] h-[380px] mx-auto overflow-visible select-none">

//       {/* Background Glow */}
//       <motion.div
//         className="absolute inset-0 rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(233,30,99,.18), rgba(245,124,0,.12), transparent 72%)",
//         }}
//         animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }}
//         transition={{ duration: 5, repeat: Infinity }}
//       />

//       {/* Outer decorative ring */}
//       <motion.div
//         className="absolute inset-4 rounded-full border border-[#E91E63]/20"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Inner dashed ring */}
//       <motion.div
//         className="absolute inset-11 rounded-full border border-dashed border-[#F57C00]/25"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Center Logo */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
//         animate={{ scale: [1, 1.07, 1] }}
//         transition={{ duration: 2.8, repeat: Infinity }}
//       >
//         <div
//           className="w-28 h-28 rounded-full bg-white flex flex-col items-center justify-center text-center px-2"
//           style={{
//             boxShadow:
//               "0 0 0 3px rgba(233,30,99,.12), 0 6px 30px rgba(233,30,99,.22)",
//           }}
//         >
//           <div className="relative w-16 h-16">
//             <Image
//               src="/images/logo.png"
//               alt="Snax सा"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* Orbiting Nutrient Cards */}
//       {nutrients.map(({ icon, stat, label, sub, color, angle }, i) => {
//         const { xs, ys } = orbitKeyframes(angle);
//         return (
//           <motion.div
//             key={i}
//             className="absolute left-1/2 top-1/2 z-20"
//             style={{ marginLeft: -48, marginTop: -36 }}
//             animate={{ x: xs, y: ys }}
//             transition={{
//               duration: ORBIT_DURATION,
//               repeat: Infinity,
//               ease: "linear",
//               times: xs.map((_, idx) => idx / (xs.length - 1)),
//             }}
//           >
//             <div
//               className="w-24 min-h-[68px] rounded-2xl bg-white flex flex-col items-center
//                          justify-center text-center px-2 py-2"
//               style={{
//                 boxShadow: `0 3px 18px rgba(0,0,0,.10)`,
//                 border: `1.5px solid ${color}`,
//               }}
//             >
//               <span className="text-[22px] leading-none mb-1">{icon}</span>
//               <span
//                 className="text-[13px] font-bold leading-tight"
//                 style={{ color }}
//               >
//                 {stat}
//               </span>
//               <span className="text-[9px] text-gray-500 font-medium mt-0.5 leading-tight">
//                 {label}
//                 <br />
//                 {sub}
//               </span>
//             </div>
//           </motion.div>
//         );
//       })}

//       {/* Floating particles */}
//       {[
//         { color: "#E91E63", left: "62%", top: "18%", dur: 2.2, delay: 0 },
//         { color: "#F57C00", left: "18%", top: "42%", dur: 3.0, delay: -0.8 },
//         { color: "#22C55E", left: "75%", top: "65%", dur: 2.7, delay: -1.4 },
//         { color: "#8B5CF6", left: "30%", top: "78%", dur: 2.0, delay: -0.5 },
//         { color: "#0EA5E9", left: "55%", top: "82%", dur: 3.2, delay: -1.1 },
//         { color: "#E91E63", left: "82%", top: "30%", dur: 2.5, delay: -0.3 },
//       ].map((p, i) => (
//         <motion.div
//           key={`p-${i}`}
//           className="absolute rounded-full"
//           style={{
//             width: 5,
//             height: 5,
//             background: p.color,
//             left: p.left,
//             top: p.top,
//           }}
//           animate={{
//             opacity: [0.15, 0.8, 0.15],
//             scale: [0.6, 1.4, 0.6],
//             y: [0, -14, 0],
//           }}
//           transition={{
//             duration: p.dur,
//             repeat: Infinity,
//             delay: p.delay,
//           }}
//         />
//       ))}
//     </div>
//   );
// }













"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── Realistic Makhana SVG ───────────────────────────────────────────────────

function MakhanaShape({
  size = 40,
  gradId,
  rotate = 0,
}: {
  size?: number;
  gradId: string;
  rotate?: number;
}) {
  const cx = size / 2;
  const cy = size / 2 + size * 0.03;
  const rx = size * 0.42;
  const ry = size * 0.39;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <radialGradient id={gradId} cx="37%" cy="34%" r="60%">
          <stop offset="0%" stopColor="#FEFDF8" />
          <stop offset="42%" stopColor="#FEF2D5" />
          <stop offset="100%" stopColor="#E2BB65" />
        </radialGradient>
        <radialGradient id={`${gradId}s`} cx="37%" cy="34%" r="54%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.85} />
          <stop offset="100%" stopColor="#E2BB65" stopOpacity={0} />
        </radialGradient>
      </defs>
      {/* main body */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry}
        fill={`url(#${gradId})`} stroke="#C89A40" strokeWidth={0.6} />
      {/* highlight */}
      <ellipse cx={cx * 0.7} cy={cy * 0.66} rx={rx * 0.44} ry={ry * 0.35}
        fill={`url(#${gradId}s)`} opacity={0.85} />
      {/* central dimple */}
      <ellipse cx={cx} cy={cy} rx={rx * 0.25} ry={ry * 0.22}
        fill="#D4A050" opacity={0.5} />
      {/* surface bumps */}
      <circle cx={cx * 0.5}  cy={cy * 0.88} r={size * 0.045} fill="#E0BC68" opacity={0.5} />
      <circle cx={cx * 1.5}  cy={cy * 0.78} r={size * 0.038} fill="#E0BC68" opacity={0.45} />
      <circle cx={cx * 1.55} cy={cy * 1.35} r={size * 0.05}  fill="#CCA040" opacity={0.4} />
      <circle cx={cx * 0.6}  cy={cy * 1.35} r={size * 0.042} fill="#E0BC68" opacity={0.42} />
      <circle cx={cx}        cy={cy * 0.48} r={size * 0.035} fill="#EDD080" opacity={0.5} />
      {/* shadow */}
      <ellipse cx={cx} cy={cy + ry * 0.8} rx={rx * 0.8} ry={ry * 0.18}
        fill="#9E7800" opacity={0.1} />
    </svg>
  );
}

// ─── Floating Makhana config ──────────────────────────────────────────────────

const floatingMakhanas = [
  { size: 42, left: "72%", top:  "6%", rotate: -12, dur: 3.2, delay: 0,    gradId: "mk1" },
  { size: 36, left:  "4%", top: "62%", rotate:  20, dur: 4.0, delay: -1.2, gradId: "mk2" },
  { size: 28, left:  "6%", top: "10%", rotate:   8, dur: 3.7, delay: -0.6, gradId: "mk3" },
  { size: 32, left: "76%", top: "72%", rotate:  -6, dur: 4.4, delay: -2.0, gradId: "mk4" },
  { size: 22, left: "88%", top: "38%", rotate:  15, dur: 2.9, delay: -0.4, gradId: "mk5" },
  { size: 24, left: "-4%", top: "44%", rotate: -18, dur: 3.5, delay: -1.8, gradId: "mk6" },
];

// ─── Nutrient cards ───────────────────────────────────────────────────────────

const nutrients = [
  { icon: "💪", stat: "9.7g",  label: "Protein",      sub: "per 100g",        color: "#E91E63", angle: 0   },
  { icon: "🦴", stat: "60mg",  label: "Calcium",       sub: "per 100g",        color: "#F57C00", angle: 72  },
  { icon: "⚡", stat: "347",   label: "Low Cal",        sub: "kcal / 100g",    color: "#22C55E", angle: 144 },
  { icon: "🌿", stat: "High",  label: "Antioxidants",  sub: "Kaempferol rich", color: "#8B5CF6", angle: 216 },
  { icon: "🌾", stat: "14.5g", label: "Fibre",         sub: "per 100g",        color: "#0EA5E9", angle: 288 },
];

const ORBIT_R = 130;
const STEPS   = 37;

function orbitKF(startDeg: number) {
  const xs: number[] = [], ys: number[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const a = ((startDeg + 360 * i / STEPS) * Math.PI) / 180;
    xs.push(+( Math.cos(a) * ORBIT_R).toFixed(2));
    ys.push(+( Math.sin(a) * ORBIT_R).toFixed(2));
  }
  return { xs, ys, times: xs.map((_, i) => i / STEPS) };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function NutrientBurst() {
  return (
    <div className="relative w-[380px] h-[380px] mx-auto overflow-visible select-none">

      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle,rgba(233,30,99,.18),rgba(245,124,0,.12),transparent 72%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Rings */}
      <motion.div className="absolute inset-4 rounded-full border border-[#E91E63]/20"
        animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute inset-11 rounded-full border border-dashed border-[#F57C00]/25"
        animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

      {/* Center Logo */}
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
        animate={{ scale: [1, 1.07, 1] }} transition={{ duration: 2.8, repeat: Infinity }}>
        <div className="w-28 h-28 rounded-full bg-white flex flex-col items-center justify-center text-center px-2"
          style={{ boxShadow: "0 0 0 3px rgba(233,30,99,.12),0 6px 30px rgba(233,30,99,.22)" }}>
          <div className="relative w-16 h-16">
            <Image src="/images/logo.png" alt="Snax सा" fill className="object-contain" />
          </div>
        </div>
      </motion.div>

      {/* Floating Makhanas */}
      {floatingMakhanas.map(({ size, left, top, rotate, dur, delay, gradId }) => (
        <motion.div key={gradId}
          className="absolute z-10 pointer-events-none"
          style={{ left, top }}
          animate={{ y: [0, -10, 0], rotate: [rotate, rotate + 8, rotate] }}
          transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <MakhanaShape size={size} gradId={gradId} rotate={rotate} />
        </motion.div>
      ))}

      {/* Orbiting Nutrient Cards */}
      {nutrients.map(({ icon, stat, label, sub, color, angle }, i) => {
        const { xs, ys, times } = orbitKF(angle);
        return (
          <motion.div key={i}
            className="absolute left-1/2 top-1/2 z-20"
            style={{ marginLeft: -45, marginTop: -34 }}
            animate={{ x: xs, y: ys }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", times }}
          >
            <div className="w-[90px] min-h-[68px] rounded-2xl bg-white flex flex-col items-center
                            justify-center text-center px-2 py-2"
              style={{ boxShadow: "0 3px 16px rgba(0,0,0,.10)", border: `1.5px solid ${color}` }}>
              <span className="text-[20px] leading-none mb-1">{icon}</span>
              <span className="text-[12px] font-bold leading-tight" style={{ color }}>{stat}</span>
              <span className="text-[9px] text-gray-500 font-medium mt-0.5 leading-tight">
                {label}<br />{sub}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Particles */}
      {[
        { color: "#E91E63", left: "62%", top: "18%", dur: 2.2, delay: 0    },
        { color: "#F57C00", left: "18%", top: "42%", dur: 3.0, delay: -0.8 },
        { color: "#22C55E", left: "75%", top: "65%", dur: 2.7, delay: -1.4 },
        { color: "#8B5CF6", left: "30%", top: "78%", dur: 2.0, delay: -0.5 },
        { color: "#0EA5E9", left: "55%", top: "82%", dur: 3.2, delay: -1.1 },
      ].map((p, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: 5, height: 5, background: p.color, left: p.left, top: p.top }}
          animate={{ opacity: [0.15, 0.8, 0.15], scale: [0.6, 1.4, 0.6], y: [0, -14, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay }} />
      ))}
    </div>
  );
}