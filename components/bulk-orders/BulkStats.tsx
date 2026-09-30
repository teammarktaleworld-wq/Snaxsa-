// "use client";

// import { useRef } from "react";
// import { motion, useInView, useMotionValue, useSpring, useEffect } from "framer-motion";
// import { Package, MapPin, Star, Clock } from "lucide-react";

// const stats = [
//   { icon: <Package size={20} />, value: 5000, suffix: "+", label: "Jars Delivered", color: "#E91E63" },
//   { icon: <MapPin  size={20} />, value: 18,   suffix: "+", label: "Cities Served",  color: "#F57C00" },
//   { icon: <Star    size={20} />, value: 200,  suffix: "+", label: "Happy Clients",  color: "#FCD980" },
//   { icon: <Clock   size={20} />, value: 24,   suffix: "h", label: "Quote Response", color: "#E91E63" },
// ];

// function Counter({ value, suffix }: { value: number; suffix: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true });
//   const mv = useMotionValue(0);
//   const spring = useSpring(mv, { stiffness: 60, damping: 18 });

//   // @ts-ignore — works at runtime
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   if (typeof window !== "undefined") {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     spring.onChange((v: number) => {
//       if (ref.current) ref.current.textContent = Math.round(v) + suffix;
//     });
//   }

//   if (inView) mv.set(value);

//   return <span ref={ref}>0{suffix}</span>;
// }

// export default function BulkStats() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-10%" });

//   return (
//     <section ref={ref} className="relative py-12 md:py-16 bg-white border-y border-ink/6 overflow-hidden">
//       {/* subtle bg */}
//       <div className="absolute inset-0 bg-gradient-to-r from-pink-hot/3 via-transparent to-gold/3 pointer-events-none" />

//       <div className="relative max-w-5xl mx-auto px-5 md:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//           {stats.map((s, i) => (
//             <motion.div
//               key={s.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               className="flex flex-col items-center text-center gap-3"
//             >
//               {/* Icon circle */}
//               <div
//                 className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
//                 style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}99)` }}
//               >
//                 {s.icon}
//               </div>
//               {/* Number */}
//               <p
//                 className="font-display text-3xl md:text-4xl font-extrabold leading-none"
//                 style={{ color: s.color }}
//               >
//                 <Counter value={s.value} suffix={s.suffix} />
//               </p>
//               {/* Label */}
//               <p className="text-xs font-semibold text-ink/50 uppercase tracking-wide">{s.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }















"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Package, MapPin, Star, Clock } from "lucide-react";

const stats = [
  { icon: <Package size={20} />, value: 5000, suffix: "+", label: "Jars Delivered", color: "#E91E63" },
  { icon: <MapPin  size={20} />, value: 18,   suffix: "+", label: "Cities Served",  color: "#F57C00" },
  { icon: <Star    size={20} />, value: 200,  suffix: "+", label: "Happy Clients",  color: "#FCD980" },
  { icon: <Clock   size={20} />, value: 24,   suffix: "h", label: "Quote Response", color: "#E91E63" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });

  // Start the count-up when the element scrolls into view
  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  // Write the animated value into the DOM
  useEffect(() => {
    const unsubscribe = spring.on("change", (v: number) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
    return unsubscribe;
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function BulkStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative py-12 md:py-16 bg-white border-y border-ink/6 overflow-hidden">
      {/* subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-hot/3 via-transparent to-gold/3 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-3"
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}99)` }}
              >
                {s.icon}
              </div>
              {/* Number */}
              <p
                className="font-display text-3xl md:text-4xl font-extrabold leading-none"
                style={{ color: s.color }}
              >
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              {/* Label */}
              <p className="text-xs font-semibold text-ink/50 uppercase tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}