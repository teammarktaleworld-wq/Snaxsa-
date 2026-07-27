// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { Dumbbell, Leaf, Bone, HeartPulse } from "lucide-react";

// // // const icons = [
// // //   { Icon: Dumbbell, color: "bg-coral text-white", x: "4%", y: "6%", delay: 0 },
// // //   { Icon: Leaf, color: "bg-success text-white", x: "60%", y: "0%", delay: 0.4 },
// // //   { Icon: Bone, color: "bg-gold text-ink", x: "0%", y: "58%", delay: 0.8 },
// // //   { Icon: HeartPulse, color: "bg-royal text-white", x: "58%", y: "56%", delay: 1.2 },
// // // ];

// // // /** Floating nutrient-icon cluster used in the Health Benefits hero. */
// // // export default function NutrientBurst() {
// // //   return (
// // //     <div className="relative w-full max-w-sm mx-auto aspect-square" aria-hidden>
// // //       <div className="absolute inset-0 rounded-4xl glass shadow-lift" />
// // //       <div className="absolute inset-10 rounded-full bg-gold/15 blur-2xl" />
// // //       {icons.map(({ Icon, color, x, y, delay }, i) => (
// // //         <motion.div
// // //           key={i}
// // //           className={`absolute w-16 h-16 rounded-2xl shadow-card flex items-center justify-center ${color}`}
// // //           style={{ left: x, top: y }}
// // //           animate={{ y: [0, -14, 0] }}
// // //           transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeInOut" }}
// // //         >
// // //           <Icon size={26} />
// // //         </motion.div>
// // //       ))}
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import { motion } from "framer-motion";
// // import {
// //   Dumbbell,
// //   Leaf,
// //   Bone,
// //   HeartPulse,
// //   Sparkles,
// // } from "lucide-react";

// // const icons = [
// //   {
// //     Icon: Dumbbell,
// //     label: "Protein",
// //     color: "from-[#E91E63] to-[#F57C00]",
// //     x: "12%",
// //     y: "15%",
// //     delay: 0,
// //   },
// //   {
// //     Icon: Leaf,
// //     label: "Natural",
// //     color: "from-green-500 to-emerald-400",
// //     x: "68%",
// //     y: "12%",
// //     delay: 0.4,
// //   },
// //   {
// //     Icon: Bone,
// //     label: "Calcium",
// //     color: "from-yellow-400 to-orange-400",
// //     x: "12%",
// //     y: "68%",
// //     delay: 0.8,
// //   },
// //   {
// //     Icon: HeartPulse,
// //     label: "Healthy",
// //     color: "from-pink-500 to-rose-500",
// //     x: "68%",
// //     y: "68%",
// //     delay: 1.2,
// //   },
// // ];

// // export default function NutrientBurst() {
// //   return (
// //     <div
// //       className="relative w-full max-w-md mx-auto aspect-square"
// //       aria-hidden
// //     >
// //       {/* Animated Glow */}
// //       <motion.div
// //         className="absolute inset-0 rounded-full blur-[90px]"
// //         style={{
// //           background:
// //             "radial-gradient(circle, rgba(233,30,99,.22), rgba(245,124,0,.18), transparent 75%)",
// //         }}
// //         animate={{
// //           scale: [1, 1.08, 1],
// //           opacity: [0.5, 0.9, 0.5],
// //         }}
// //         transition={{
// //           duration: 5,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //         }}
// //       />

// //       {/* Decorative Rings */}
// //       <motion.div
// //         className="absolute inset-10 rounded-full border border-[#E91E63]/20"
// //         animate={{ rotate: 360 }}
// //         transition={{
// //           duration: 40,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //       />

// //       <motion.div
// //         className="absolute inset-20 rounded-full border border-[#F57C00]/30 border-dashed"
// //         animate={{ rotate: -360 }}
// //         transition={{
// //           duration: 28,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //       />

// //       {/* Connecting Lines */}
// //       <svg
// //         className="absolute inset-0 w-full h-full"
// //         viewBox="0 0 400 400"
// //       >
// //         <line
// //           x1="100"
// //           y1="100"
// //           x2="300"
// //           y2="100"
// //           stroke="#E91E63"
// //           strokeOpacity="0.15"
// //           strokeWidth="2"
// //         />
// //         <line
// //           x1="300"
// //           y1="100"
// //           x2="300"
// //           y2="300"
// //           stroke="#F57C00"
// //           strokeOpacity="0.15"
// //           strokeWidth="2"
// //         />
// //         <line
// //           x1="300"
// //           y1="300"
// //           x2="100"
// //           y2="300"
// //           stroke="#E91E63"
// //           strokeOpacity="0.15"
// //           strokeWidth="2"
// //         />
// //         <line
// //           x1="100"
// //           y1="300"
// //           x2="100"
// //           y2="100"
// //           stroke="#F57C00"
// //           strokeOpacity="0.15"
// //           strokeWidth="2"
// //         />
// //       </svg>

// //       {/* Floating Cards */}
// //       {icons.map(({ Icon, label, color, x, y, delay }, i) => (
// //         <motion.div
// //           key={i}
// //           className="absolute"
// //           style={{ left: x, top: y }}
// //           animate={{
// //             y: [0, -12, 0],
// //             rotate: [-4, 4, -4],
// //           }}
// //           transition={{
// //             duration: 4,
// //             delay,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         >
// //           <div
// //             className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${color}
// //             shadow-[0_12px_35px_rgba(0,0,0,.18)]
// //             flex flex-col items-center justify-center text-white backdrop-blur-lg`}
// //           >
// //             <Icon size={30} strokeWidth={2.2} />
// //             <span className="text-[11px] font-semibold mt-2">{label}</span>
// //           </div>
// //         </motion.div>
// //       ))}

// //       {/* Center */}
// //       <motion.div
// //         className="absolute inset-0 flex items-center justify-center"
// //         animate={{
// //           scale: [1, 1.08, 1],
// //         }}
// //         transition={{
// //           duration: 3,
// //           repeat: Infinity,
// //         }}
// //       >
// //         <div
// //           className="w-28 h-28 rounded-full
// //           bg-[linear-gradient(120deg,#E91E63,#F57C00)]
// //           shadow-[0_0_45px_rgba(233,30,99,.45)]
// //           flex items-center justify-center"
// //         >
// //           <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
// //             <Sparkles
// //               size={42}
// //               className="text-[#E91E63]"
// //               strokeWidth={2}
// //             />
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Floating Particles */}
// //       {Array.from({ length: 12 }).map((_, i) => (
// //         <motion.div
// //           key={i}
// //           className="absolute w-2 h-2 rounded-full bg-[#F57C00]"
// //           style={{
// //             left: `${15 + Math.random() * 70}%`,
// //             top: `${15 + Math.random() * 70}%`,
// //           }}
// //           animate={{
// //             scale: [0.5, 1.5, 0.5],
// //             opacity: [0.2, 1, 0.2],
// //           }}
// //           transition={{
// //             duration: 2 + Math.random() * 2,
// //             repeat: Infinity,
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }



// "use client";

// import { motion } from "framer-motion";
// import {
//   Dumbbell,
//   Leaf,
//   Bone,
//   HeartPulse,
// } from "lucide-react";
// import Image from "next/image";

// const items = [
//   { Icon: Dumbbell, color: "#F57C00", angle: 0 },
//   { Icon: Leaf, color: "#22C55E", angle: 90 },
//   { Icon: Bone, color: "#EAB308", angle: 180 },
//   { Icon: HeartPulse, color: "#E91E63", angle: 270 },
// ];

// export default function NutrientBurst() {
//   const radius = 120;

//   return (
//     <div className="relative w-[360px] h-[360px] mx-auto">
//       {/* Glow */}
//       <motion.div
//         className="absolute inset-0 rounded-full blur-[80px]"
//         style={{
//           background:
//             "radial-gradient(circle,#E91E6330,#F57C0020,transparent 70%)",
//         }}
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.4, 0.8, 0.4],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//         }}
//       />

//       {/* Rotating Ring */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         {items.map(({ Icon, color, angle }, i) => {
//           const rad = (angle * Math.PI) / 180;
//           const x = Math.cos(rad) * radius;
//           const y = Math.sin(rad) * radius;

//           return (
//             <motion.div
//               key={i}
//               className="absolute"
//               style={{
//                 left: `calc(50% + ${x}px - 34px)`,
//                 top: `calc(50% + ${y}px - 34px)`,
//               }}
//               whileHover={{
//                 scale: 1.15,
//               }}
//             >
//               <div
//                 className="w-16 h-16 rounded-full bg-white border border-white/30 backdrop-blur-xl shadow-2xl flex items-center justify-center"
//                 style={{
//                   boxShadow: `0 0 25px ${color}55`,
//                 }}
//               >
//                 <Icon size={28} color={color} />
//               </div>
//             </motion.div>
//           );
//         })}
//       </motion.div>

//       {/* Orbit Rings */}
//       <div className="absolute inset-10 rounded-full border border-[#E91E63]/20" />
//       <div className="absolute inset-16 rounded-full border border-[#F57C00]/20 border-dashed" />

//       {/* Centre */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//         animate={{
//           scale: [1, 1.05, 1],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//         }}
//       >
//         {/* <div className="w-36 h-36 rounded-full bg-[linear-gradient(135deg,#E91E63,#F57C00)] p-[4px] shadow-[0_0_50px_rgba(233,30,99,.45)]"> */}
//         <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
//           <Image
//             src="/images/logo.png"
//             alt="Snax"
//             fill
//             className="object-contain p-5"
//           />
//         </div>
//     </div>
//       </motion.div >
//     </div >
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dumbbell,
  Leaf,
  Bone,
  HeartPulse,
} from "lucide-react";

const items = [
  {
    Icon: Dumbbell,
    color: "#F57C00",
    start: { x: 0, y: -130 },      // Top
    end: { x: 0, y: -45 },
  },
  {
    Icon: HeartPulse,
    color: "#E91E63",
    start: { x: 130, y: 0 },       // Right
    end: { x: 45, y: 0 },
  },
  {
    Icon: Bone,
    color: "#F9A825",
    start: { x: 0, y: 130 },       // Bottom
    end: { x: 0, y: 45 },
  },
  {
    Icon: Leaf,
    color: "#22C55E",
    start: { x: -130, y: 0 },      // Left
    end: { x: -45, y: 0 },
  },
];

export default function NutrientBurst() {
  return (
    <div className="relative w-[380px] h-[380px] mx-auto overflow-visible">

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle,#E91E6325,#F57C0020,transparent 75%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.75, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Decorative Rings */}
      <motion.div
        className="absolute inset-8 rounded-full border border-[#E91E63]/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-14 rounded-full border border-dashed border-[#F57C00]/25"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Center Logo */}
      <motion.div
        className="absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2 z-30"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >
        <div className="w-32 h-32 rounded-full bg-white shadow-[0_0_40px_rgba(233,30,99,.35)] p-4">
          <div className="relative w-full h-full">
            <Image
              src="/images/logo.png"
              alt="Snax"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Animated Icons */}
      {items.map(({ Icon, color, start, end }, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2 z-20"
          animate={{
            x: [
              start.x,   // Outside
              end.x,     // Near logo
              0,         // Centre
              -end.y,    // Rotate 90°
              -start.y,  // Outside new position
              start.x,   // Back
            ],

            y: [
              start.y,
              end.y,
              0,
              end.x,
              start.x,
              start.y,
            ],

            scale: [
              1,
              0.92,
              1.05,
              1,
              1,
              1,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.22, 0.38, 0.62, 0.82, 1],
            delay: index * 0.15,
          }}
          style={{
            marginLeft: -32,
            marginTop: -32,
          }}
        >
          <div
            className="w-16 h-16 rounded-full bg-white
            flex items-center justify-center
            shadow-2xl"
            style={{
              boxShadow: `0 0 25px ${color}66`,
            }}
          >
            <Icon
              size={28}
              color={color}
            />
          </div>
        </motion.div>
      ))}
      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-2 h-2 rounded-full bg-[#F57C00]"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}

    </div>
  );
}