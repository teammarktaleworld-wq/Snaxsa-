// // // "use client";

// // // import { motion } from "framer-motion";

// // // /** Rotating royal mandala — recurring Rajasthani-heritage motif used across inner pages. */
// // // export default function Mandala({ size = 320 }: { size?: number }) {
// // //   return (
// // //     <div className="relative mx-auto" style={{ width: size, height: size }} aria-hidden>
// // //       <div className="absolute inset-0 rounded-full bg-gold/15 blur-3xl" />
// // //       <motion.svg
// // //         viewBox="0 0 200 200"
// // //         className="absolute inset-0 w-full h-full"
// // //         animate={{ rotate: 360 }}
// // //         transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// // //       >
// // //         <defs>
// // //           <linearGradient id="mandalaGold" x1="0%" y1="0%" x2="100%" y2="100%">
// // //             <stop offset="0%" stopColor="#F9A825" />
// // //             <stop offset="100%" stopColor="#6B102E" />
// // //           </linearGradient>
// // //         </defs>
// // //         <g fill="none" stroke="url(#mandalaGold)" strokeWidth="1.2" opacity="0.55">
// // //           <circle cx="100" cy="100" r="90" />
// // //           <circle cx="100" cy="100" r="72" />
// // //           <circle cx="100" cy="100" r="54" />
// // //           {Array.from({ length: 16 }).map((_, i) => {
// // //             const angle = (i * 360) / 16;
// // //             return (
// // //               <line
// // //                 key={i}
// // //                 x1="100"
// // //                 y1="10"
// // //                 x2="100"
// // //                 y2="28"
// // //                 transform={`rotate(${angle} 100 100)`}
// // //               />
// // //             );
// // //           })}
// // //           {Array.from({ length: 12 }).map((_, i) => {
// // //             const angle = (i * 360) / 12;
// // //             return (
// // //               <path
// // //                 key={i}
// // //                 d="M100 46 Q106 58 100 72 Q94 58 100 46 Z"
// // //                 transform={`rotate(${angle} 100 100)`}
// // //                 fill="url(#mandalaGold)"
// // //                 stroke="none"
// // //                 opacity="0.4"
// // //               />
// // //             );
// // //           })}
// // //         </g>
// // //       </motion.svg>
// // //       <motion.svg
// // //         viewBox="0 0 200 200"
// // //         className="absolute inset-0 w-full h-full"
// // //         animate={{ rotate: -360 }}
// // //         transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
// // //       >
// // //         <g fill="none" stroke="#E91E63" strokeWidth="1" opacity="0.35">
// // //           <circle cx="100" cy="100" r="36" />
// // //           {Array.from({ length: 8 }).map((_, i) => {
// // //             const angle = (i * 360) / 8;
// // //             return (
// // //               <path
// // //                 key={i}
// // //                 d="M100 64 Q112 82 100 100 Q88 82 100 64 Z"
// // //                 transform={`rotate(${angle} 100 100)`}
// // //               />
// // //             );
// // //           })}
// // //         </g>
// // //       </motion.svg>
// // //       <div className="absolute inset-0 flex items-center justify-center">
// // //         <div className="w-16 h-16 rounded-full bg-royal-gradient shadow-glow flex items-center justify-center text-white font-display font-bold text-xl">
// // //           स
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // "use client";

// // import { motion } from "framer-motion";

// // export default function Mandala({ size = 340 }: { size?: number }) {
// //   return (
// //     <div
// //       className="relative mx-auto"
// //       style={{ width: size, height: size }}
// //       aria-hidden
// //     >
// //       {/* Glow */}
// //       <motion.div
// //         className="absolute inset-0 rounded-full blur-[90px] bg-gradient-to-r from-yellow-400/20 via-orange-400/15 to-pink-500/20"
// //         animate={{
// //           scale: [1, 1.08, 1],
// //           opacity: [0.4, 0.7, 0.4],
// //         }}
// //         transition={{
// //           repeat: Infinity,
// //           duration: 6,
// //           ease: "easeInOut",
// //         }}
// //       />

// //       {/* OUTER MANDALA */}
// //       <motion.svg
// //         viewBox="0 0 200 200"
// //         className="absolute inset-0 w-full h-full"
// //         animate={{ rotate: 360 }}
// //         transition={{
// //           duration: 50,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //       >
// //         <defs>
// //           <linearGradient id="gold1">
// //             <stop offset="0%" stopColor="#FFD54F" />
// //             <stop offset="100%" stopColor="#B36A00" />
// //           </linearGradient>
// //         </defs>

// //         <g
// //           stroke="url(#gold1)"
// //           fill="none"
// //           strokeWidth="1.2"
// //           opacity="0.8"
// //         >
// //           <circle cx="100" cy="100" r="90" />
// //           <circle cx="100" cy="100" r="76" />
// //           <circle cx="100" cy="100" r="60" />
// //           <circle cx="100" cy="100" r="44" />

// //           {Array.from({ length: 24 }).map((_, i) => (
// //             <path
// //               key={i}
// //               d="M100 10 Q108 28 100 45 Q92 28 100 10 Z"
// //               transform={`rotate(${i * 15} 100 100)`}
// //               fill="url(#gold1)"
// //               stroke="none"
// //               opacity="0.35"
// //             />
// //           ))}

// //           {Array.from({ length: 48 }).map((_, i) => (
// //             <circle
// //               key={i}
// //               cx="100"
// //               cy="10"
// //               r="1.8"
// //               transform={`rotate(${i * 7.5} 100 100)`}
// //               fill="#FFD54F"
// //               stroke="none"
// //             />
// //           ))}
// //         </g>
// //       </motion.svg>

// //       {/* INNER FLOWER */}
// //       <motion.svg
// //         viewBox="0 0 200 200"
// //         className="absolute inset-0 w-full h-full"
// //         animate={{ rotate: -360 }}
// //         transition={{
// //           duration: 32,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //       >
// //         <g opacity="0.65">
// //           {Array.from({ length: 12 }).map((_, i) => (
// //             <path
// //               key={i}
// //               d="M100 55 Q118 80 100 100 Q82 80 100 55 Z"
// //               transform={`rotate(${i * 30} 100 100)`}
// //               fill="#F9A825"
// //             />
// //           ))}

// //           <circle
// //             cx="100"
// //             cy="100"
// //             r="24"
// //             fill="#6B102E"
// //             stroke="#FFD54F"
// //             strokeWidth="2"
// //           />
// //         </g>
// //       </motion.svg>

// //       {/* Sparkles */}
// //       {[
// //         [20, 40],
// //         [170, 45],
// //         [40, 170],
// //         [165, 155],
// //         [100, 12],
// //       ].map(([x, y], i) => (
// //         <motion.div
// //           key={i}
// //           className="absolute w-2 h-2 rounded-full bg-yellow-300"
// //           style={{
// //             left: `${x}px`,
// //             top: `${y}px`,
// //           }}
// //           animate={{
// //             opacity: [0.2, 1, 0.2],
// //             scale: [0.8, 1.8, 0.8],
// //           }}
// //           transition={{
// //             duration: 2 + i,
// //             repeat: Infinity,
// //           }}
// //         />
// //       ))}

// //       {/* Centre */}
// //       <motion.div
// //         animate={{
// //           scale: [1, 1.08, 1],
// //         }}
// //         transition={{
// //           repeat: Infinity,
// //           duration: 3,
// //         }}
// //         className="absolute inset-0 flex items-center justify-center"
// //       >
// //         <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-700 shadow-[0_0_35px_rgba(255,193,7,0.6)] flex items-center justify-center">
// //           <span className="text-3xl font-bold text-white font-display">
// //             सा
// //           </span>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }




// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // /** Rotating royal mandala — recurring Rajasthani-heritage motif used across inner pages. */
// // export default function Mandala({ size = 320 }: { size?: number }) {
// //   return (
// //     <div className="relative mx-auto" style={{ width: size, height: size }} aria-hidden>
// //       <div className="absolute inset-0 rounded-full bg-gold/15 blur-3xl" />
// //       <motion.svg
// //         viewBox="0 0 200 200"
// //         className="absolute inset-0 w-full h-full"
// //         animate={{ rotate: 360 }}
// //         transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// //       >
// //         <defs>
// //           <linearGradient id="mandalaGold" x1="0%" y1="0%" x2="100%" y2="100%">
// //             <stop offset="0%" stopColor="#E91E63" />
// //             <stop offset="100%" stopColor="#F57C00" />
// //           </linearGradient>
// //         </defs>
// //         <g fill="none" stroke="url(#mandalaGold)" strokeWidth="1.2" opacity="0.55">
// //           <circle cx="100" cy="100" r="90" />
// //           <circle cx="100" cy="100" r="72" />
// //           <circle cx="100" cy="100" r="54" />
// //           {Array.from({ length: 16 }).map((_, i) => {
// //             const angle = (i * 360) / 16;
// //             return (
// //               <line
// //                 key={i}
// //                 x1="100"
// //                 y1="10"
// //                 x2="100"
// //                 y2="28"
// //                 transform={`rotate(${angle} 100 100)`}
// //               />
// //             );
// //           })}
// //           {Array.from({ length: 12 }).map((_, i) => {
// //             const angle = (i * 360) / 12;
// //             return (
// //               <path
// //                 key={i}
// //                 d="M100 46 Q106 58 100 72 Q94 58 100 46 Z"
// //                 transform={`rotate(${angle} 100 100)`}
// //                 fill="url(#mandalaGold)"
// //                 stroke="none"
// //                 opacity="0.4"
// //               />
// //             );
// //           })}
// //         </g>
// //       </motion.svg>
// //       <motion.svg
// //         viewBox="0 0 200 200"
// //         className="absolute inset-0 w-full h-full"
// //         animate={{ rotate: -360 }}
// //         transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
// //       >
// //         <g fill="none" stroke="#E91E63" strokeWidth="1" opacity="0.35">
// //           <circle cx="100" cy="100" r="36" />
// //           {Array.from({ length: 8 }).map((_, i) => {
// //             const angle = (i * 360) / 8;
// //             return (
// //               <path
// //                 key={i}
// //                 d="M100 64 Q112 82 100 100 Q88 82 100 64 Z"
// //                 transform={`rotate(${angle} 100 100)`}
// //               />
// //             );
// //           })}
// //         </g>
// //       </motion.svg>
// //       <div className="absolute inset-0 flex items-center justify-center">
// //         <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
// //           <Image
// //             src="/images/logo.png"
// //             alt="Snax सा logo"
// //             fill
// //             className="object-contain p-1"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }







// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Mandala({ size = 340 }: { size?: number }) {
//   return (
//     <motion.div
//       className="relative mx-auto"
//       style={{ width: size, height: size }}
//       aria-hidden
//       animate={{
//         y: [0, -6, 0],
//       }}
//       transition={{
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       {/* Background Glow */}
//       <motion.div
//         className="absolute inset-0 rounded-full bg-yellow-400/20 blur-[70px]"
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.35, 0.7, 0.35],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//         }}
//       />

//       {/* OUTER SVG */}
//       <motion.svg
//         viewBox="0 0 200 200"
//         className="absolute inset-0 h-full w-full"
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 45,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         <defs>
//           <linearGradient
//             id="mandalaGold"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="100%"
//           >
//             <stop offset="0%" stopColor="#FFF3B0" />
//             <stop offset="35%" stopColor="#F9A825" />
//             <stop offset="100%" stopColor="#A85B00" />
//           </linearGradient>
//         </defs>

//         <g
//           fill="none"
//           stroke="url(#mandalaGold)"
//           strokeWidth="1.3"
//           opacity="0.75"
//         >
//           <circle cx="100" cy="100" r="92" />
//           <circle cx="100" cy="100" r="76" />
//           <circle cx="100" cy="100" r="58" />

//           {/* Decorative spokes */}
//           {Array.from({ length: 24 }).map((_, i) => (
//             <line
//               key={i}
//               x1="100"
//               y1="8"
//               x2="100"
//               y2="24"
//               transform={`rotate(${i * 15} 100 100)`}
//             />
//           ))}

//           {/* Petals */}
//           {Array.from({ length: 16 }).map((_, i) => (
//             <path
//               key={i}
//               d="M100 42 Q108 56 100 72 Q92 56 100 42 Z"
//               transform={`rotate(${i * 22.5} 100 100)`}
//               fill="url(#mandalaGold)"
//               stroke="none"
//               opacity="0.45"
//             />
//           ))}

//           {/* Decorative dots */}
//           {Array.from({ length: 48 }).map((_, i) => (
//             <circle
//               key={i}
//               cx="100"
//               cy="8"
//               r="1.5"
//               fill="#FFD54F"
//               stroke="none"
//               transform={`rotate(${i * 7.5} 100 100)`}
//             />
//           ))}
//         </g>
//       </motion.svg>

//       {/* INNER SVG */}
//       <motion.svg
//         viewBox="0 0 200 200"
//         className="absolute inset-0 h-full w-full"
//         animate={{ rotate: -360 }}
//         transition={{
//           duration: 60,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         <g fill="none" stroke="#F9A825" strokeWidth="1" opacity="0.45">
//           <circle cx="100" cy="100" r="36" />

//           {Array.from({ length: 12 }).map((_, i) => (
//             <path
//               key={i}
//               d="M100 62 Q114 82 100 100 Q86 82 100 62 Z"
//               transform={`rotate(${i * 30} 100 100)`}
//             />
//           ))}
//         </g>
//       </motion.svg>

//       {/* Centre Logo */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <motion.div
//           animate={{
//             scale: [1, 1.06, 1],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//           }}
//           className="relative w-20 h-20 rounded-full overflow-hidden bg-white shadow-[0_0_35px_rgba(249,168,37,0.55)] ring-4 ring-yellow-400/40"
//         >
//           <Image
//             src="/images/logo.png"
//             alt="Snax सा Logo"
//             fill
//             className="object-contain p-2"
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Mandala({ size = 360 }: { size?: number }) {
  return (
    <motion.div
      className="relative mx-auto"
      style={{ width: size, height: size }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249,168,37,0.28) 0%, rgba(107,16,46,0.12) 45%, transparent 75%)",
          filter: "blur(55px)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* OUTER RING */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4B5" />
            <stop offset="35%" stopColor="#FFD54F" />
            <stop offset="70%" stopColor="#F9A825" />
            <stop offset="100%" stopColor="#8C5100" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          stroke="url(#gold)"
          fill="none"
          strokeWidth="1.2"
          filter="url(#glow)"
        >
          <circle cx="100" cy="100" r="94" />
          <circle cx="100" cy="100" r="82" />
          <circle cx="100" cy="100" r="68" />

          {/* Sun Rays */}
          {Array.from({ length: 48 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="4"
              x2="100"
              y2="18"
              transform={`rotate(${i * 7.5} 100 100)`}
            />
          ))}

          {/* Outer Dots */}
          {Array.from({ length: 72 }).map((_, i) => (
            <circle
              key={i}
              cx="100"
              cy="6"
              r="1.4"
              fill="#FFD54F"
              stroke="none"
              transform={`rotate(${i * 5} 100 100)`}
            />
          ))}
        </g>
      </motion.svg>

      {/* LOTUS */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <g opacity="0.95">
          {Array.from({ length: 24 }).map((_, i) => (
            <path
              key={i}
              d="M100 24
                 C108 42 116 55 100 74
                 C84 55 92 42 100 24 Z"
              transform={`rotate(${i * 15} 100 100)`}
              fill="#F9A825"
            />
          ))}

          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={`inner-${i}`}
              d="M100 46
                 C108 58 114 70 100 84
                 C86 70 92 58 100 46 Z"
              transform={`rotate(${i * 30} 100 100)`}
              fill="#FFE082"
            />
          ))}

          <circle
            cx="100"
            cy="100"
            r="40"
            stroke="#FFD54F"
            strokeWidth="1.4"
            fill="none"
          />
        </g>
      </motion.svg>

      {/* Decorative Diamonds */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x="97"
            y="20"
            width="6"
            height="6"
            rx="1"
            fill="#FFD54F"
            transform={`rotate(${i * 45} 100 100)`}
          />
        ))}
      </motion.svg>

      {/* Floating Sparkles */}
      {[
        [18, 40],
        [300, 55],
        [40, 300],
        [310, 285],
        [170, 8],
        [170, 330],
      ].map(([x, y], i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-300"
          style={{
            width: 6,
            height: 6,
            left: x,
            top: y,
            boxShadow: "0 0 12px #FFD54F",
          }}
          animate={{
            scale: [0.8, 1.8, 0.8],
            opacity: [0.3, 1, 0.3],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2 + i * 0.4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Centre Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative w-24 h-24 rounded-full overflow-hidden bg-white border-4 border-yellow-400 shadow-[0_0_40px_rgba(249,168,37,0.7)]"
        >
          <Image
            src="/images/logo.png"
            alt="Snax सा"
            fill
            className="object-contain p-3"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}