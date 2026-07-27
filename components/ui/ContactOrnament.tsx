// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { MessageCircle, Mail, Phone } from "lucide-react";

// // // // /** Floating chat/mail/phone bubbles used on the Contact page hero. */
// // // // export default function ContactOrnament() {
// // // //   const items = [
// // // //     { Icon: MessageCircle, color: "bg-[#25D366] text-white", delay: 0, x: "0%", y: "0%" },
// // // //     { Icon: Mail, color: "bg-royal-gradient text-white", delay: 0.6, x: "62%", y: "8%" },
// // // //     { Icon: Phone, color: "bg-gold-shimmer text-ink", delay: 1.2, x: "30%", y: "55%" },
// // // //   ];
// // // //   return (
// // // //     <div className="relative w-full max-w-[280px] mx-auto aspect-square" aria-hidden>
// // // //       <div className="absolute inset-0 rounded-4xl glass shadow-lift" />
// // // //       <div className="absolute inset-8 rounded-full bg-royal/10 blur-2xl" />
// // // //       {items.map(({ Icon, color, delay, x, y }, i) => (
// // // //         <motion.div
// // // //           key={i}
// // // //           className={`absolute w-16 h-16 rounded-2xl shadow-card flex items-center justify-center ${color}`}
// // // //           style={{ left: x, top: y }}
// // // //           animate={{ y: [0, -14, 0] }}
// // // //           transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeInOut" }}
// // // //         >
// // // //           <Icon size={26} />
// // // //         </motion.div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }



// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { MessageCircle, Mail, Phone } from "lucide-react";

// // // /** Floating chat/mail/phone bubbles used on the Contact page hero. */
// // // export default function ContactOrnament() {
// // //   const items = [
// // //     { Icon: MessageCircle, color: "bg-whatsapp text-white", delay: 0, x: "0%", y: "0%" },
// // //     { Icon: Mail, color: "bg-royal-gradient text-white", delay: 0.6, x: "62%", y: "8%" },
// // //     { Icon: Phone, color: "bg-gold-shimmer text-ink", delay: 1.2, x: "30%", y: "55%" },
// // //   ];
// // //   return (
// // //     <div className="relative w-full max-w-[280px] mx-auto aspect-square" aria-hidden>
// // //       <div className="absolute inset-0 rounded-4xl glass shadow-lift" />
// // //       <div className="absolute inset-8 rounded-full bg-royal/10 blur-2xl" />
// // //       {items.map(({ Icon, color, delay, x, y }, i) => (
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
// // import { MessageCircle, Mail, Phone } from "lucide-react";

// // /** Floating chat/mail/phone bubbles used on the Contact page hero. */
// // export default function ContactOrnament() {
// //   const items = [
// //     { Icon: MessageCircle, color: "bg-whatsapp text-white", delay: 0, x: "18%", y: "18%" },
// //     { Icon: Mail, color: "bg-royal-gradient text-white", delay: 0.6, x: "78%", y: "22%" },
// //     { Icon: Phone, color: "bg-gold-shimmer text-ink", delay: 1.2, x: "45%", y: "68%" },
// //   ];
// //   return (
// //     <div className="relative w-full max-w-[280px] mx-auto aspect-square" aria-hidden>
// //       <div className="absolute inset-0 rounded-4xl glass shadow-lift" />
// //       <div className="absolute inset-8 rounded-full bg-royal/10 blur-2xl" />
// //       {items.map(({ Icon, color, delay, x, y }, i) => (
// //         <div
// //           key={i}
// //           className="absolute"
// //           style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
// //         >
// //           <motion.div
// //             className={`w-16 h-16 rounded-2xl shadow-card flex items-center justify-center ${color}`}
// //             animate={{ y: [0, -14, 0] }}
// //             transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeInOut" }}
// //           >
// //             <Icon size={26} />
// //           </motion.div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import { MessageCircle, Mail, Phone } from "lucide-react";

// /** Chat/mail/phone bubbles used on the Contact page hero. */
// export default function ContactOrnament() {
//   const items = [
//     { Icon: MessageCircle, color: "bg-whatsapp text-white", delay: 0, x: "18%", y: "18%" },
//     { Icon: Mail, color: "bg-royal-gradient text-white", delay: 0.4, x: "78%", y: "22%" },
//     { Icon: Phone, color: "bg-gold-shimmer text-ink", delay: 0.8, x: "45%", y: "68%" },
//   ];
//   return (
//     <div className="relative w-full max-w-[280px] mx-auto aspect-square" aria-hidden>
//       <div className="absolute inset-0 rounded-4xl glass shadow-lift" />
//       <div className="absolute inset-8 rounded-full bg-royal/10 blur-2xl" />
//       {items.map(({ Icon, color, delay, x, y }, i) => (
//         <div
//           key={i}
//           className="absolute"
//           style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
//         >
//           <motion.div
//             className={`w-16 h-16 rounded-2xl shadow-card flex items-center justify-center ${color}`}
//             animate={{ y: [0, -4, 0] }}
//             transition={{ duration: 4.5, repeat: Infinity, delay, ease: "easeInOut" }}
//           >
//             <Icon size={26} />
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";

import { MessageCircle, Mail, Phone } from "lucide-react";

/** Chat/mail/phone bubbles used on the Contact page hero. */
export default function ContactOrnament() {
  const items = [
    { Icon: MessageCircle, color: "bg-whatsapp text-white" },
    { Icon: Mail, color: "bg-royal-gradient text-white" },
    { Icon: Phone, color: "bg-gold-shimmer text-ink" },
  ];
  return (
    <div className="relative w-full max-w-[280px] mx-auto aspect-square" aria-hidden>
      <div className="absolute inset-0 rounded-4xl glass shadow-lift" />
      <div className="absolute inset-8 rounded-full bg-royal/10 blur-2xl" />
      <div className="relative w-full h-full flex items-center justify-center gap-5">
        {items.map(({ Icon, color }, i) => (
          <div
            key={i}
            className={`w-16 h-16 rounded-2xl shadow-card flex items-center justify-center ${color}`}
          >
            <Icon size={26} />
          </div>
        ))}
      </div>
    </div>
  );
}