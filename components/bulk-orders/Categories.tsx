// "use client";

// import * as Icons from "lucide-react";
// import { motion } from "framer-motion";
// import { bulkCategories } from "@/data/bulkOrders";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GradientBlobs from "@/components/ui/GradientBlobs";
// import Reveal from "@/components/ui/Reveal";
// import TiltCard from "@/components/ui/TiltCard";

// const iconBg = [
//   "bg-royal/15 text-royal",
//   "bg-coral/15 text-coral",
//   "bg-sky/30 text-royal",
//   "bg-gold/20 text-gold",
// ];

// export default function Categories() {
//   return (
//     <section className="grain relative py-20 md:py-28 overflow-hidden">
//       <GradientBlobs variant="lav" />
//       <div className="relative max-w-6xl mx-auto px-5 md:px-8">
//         <SectionHeading
//           eyebrow="Bulk Orders"
//           title="Perfect For Every"
//           highlight="Occasion"
//           subtitle="Custom quantities, custom branding, always the same royal crunch."
//         />
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {bulkCategories.map((cat, i) => {
//             const Icon = Icons[cat.icon as keyof typeof Icons] as Icons.LucideIcon;
//             return (
//               <Reveal key={cat.id} delay={i * 0.08}>
//                 <TiltCard maxTilt={6} className="h-full">
//                   <motion.div
//                     whileHover={{ y: -8 }}
//                     className="h-full glass rounded-3xl p-6 shadow-glass hover:shadow-lift transition-shadow duration-300"
//                   >
//                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${iconBg[i % iconBg.length]}`}>
//                       {Icon && <Icon size={24} />}
//                     </div>
//                     <h3 className="font-display text-lg font-bold text-ink mb-1.5">{cat.label}</h3>
//                     <p className="text-sm text-ink-soft leading-relaxed mb-4">{cat.description}</p>
//                     <span className="inline-block text-[11px] font-semibold text-royal bg-royal/10 rounded-full px-3 py-1">
//                       Min. {cat.minOrder}
//                     </span>
//                   </motion.div>
//                 </TiltCard>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }











"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Heart,
  Calendar,
  Gift,
  GraduationCap,
  PartyPopper,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

const categories = [
  {
    id: "corporate",
    icon: <Building2 size={22} />,
    label: "Corporate Gifting",
    description:
      "Impress clients, reward employees, or celebrate milestones with premium branded makhana — a gifting upgrade they'll remember.",
    minOrder: "100 jars",
    color: "#E91E63",
    bg: "#FFF0F5",
    emoji: "🏢",
  },
  {
    id: "wedding",
    icon: <Heart size={22} />,
    label: "Wedding Favours",
    description:
      "Custom labels, elegant gift jars, and flavours everyone will love. The mithai alternative that guests actually take home and finish.",
    minOrder: "50 jars",
    color: "#F57C00",
    bg: "#FFF8F0",
    emoji: "💍",
  },
  {
    id: "events",
    icon: <Calendar size={22} />,
    label: "Events & Conferences",
    description:
      "Keep attendees energised and impressed with healthy, branded snack jars at your next corporate event, summit or trade show.",
    minOrder: "75 jars",
    color: "#9C27B0",
    bg: "#FDF0FF",
    emoji: "🎙️",
  },
  {
    id: "festive",
    icon: <Gift size={22} />,
    label: "Festive Gift Boxes",
    description:
      "Diwali, Holi, Eid, Christmas — custom gift hampers with mixed flavours packed in premium boxes with your personalised message.",
    minOrder: "50 jars",
    color: "#FCD980",
    bg: "#FFFDF0",
    emoji: "🎁",
  },
  {
    id: "education",
    icon: <GraduationCap size={22} />,
    label: "Schools & Colleges",
    description:
      "A healthy canteen alternative. Bulk packs for student events, prize distributions, or healthy tuck shops — priced right.",
    minOrder: "100 jars",
    color: "#2196F3",
    bg: "#F0F8FF",
    emoji: "🎓",
  },
  {
    id: "parties",
    icon: <PartyPopper size={22} />,
    label: "Parties & Celebrations",
    description:
      "Birthdays, anniversaries, baby showers — make your celebration unforgettable with a royal snack station everyone's talking about.",
    minOrder: "50 jars",
    color: "#4CAF50",
    bg: "#F0FFF4",
    emoji: "🎉",
  },
];

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="grain relative py-20 md:py-28 overflow-hidden">
      <GradientBlobs variant="lav" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Occasions We Cover"
          title="Perfect For Every"
          highlight="Occasion"
          subtitle="Custom quantities, custom branding, always the same royal crunch."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative h-full rounded-3xl border overflow-hidden p-6 bg-white cursor-default transition-shadow duration-300 hover:shadow-xl"
                style={{ borderColor: `${cat.color}20` }}
              >
                {/* Top colour strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}44)` }}
                />

                {/* Background emoji watermark */}
                <span className="absolute bottom-4 right-4 text-5xl opacity-[0.06] select-none pointer-events-none">
                  {cat.emoji}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: cat.bg, color: cat.color }}
                >
                  {cat.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-ink mb-2">{cat.label}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-5">{cat.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span
                    className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: `${cat.color}12`, color: cat.color }}
                  >
                    Min. {cat.minOrder}
                  </span>
                  <a
                    href="#enquiry"
                    className="text-xs font-bold transition-colors hover:underline"
                    style={{ color: cat.color }}
                  >
                    Get quote →
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
