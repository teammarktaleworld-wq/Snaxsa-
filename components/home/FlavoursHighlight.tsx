// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { flavours } from "@/data/flavours";
// import Button from "@/components/ui/Button";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GradientBlobs from "@/components/ui/GradientBlobs";
// import TiltCard from "@/components/ui/TiltCard";
// import Reveal from "@/components/ui/Reveal";
// import MagneticButton from "@/components/ui/MagneticButton";

// export default function FlavoursHighlight() {
//   return (
//     <section id="flavours" className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
//       <GradientBlobs variant="mint" />
//       <div className="relative max-w-7xl mx-auto px-5 md:px-8">
//         <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
//           <SectionHeading
//             eyebrow="Our Flavours"
//             title="Four Ways To"
//             highlight="Crunch Royally"
//             align="left"
//             className="mb-0"
//           />
//           <Link
//             href="/flavours"
//             className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {flavours.map((flavour, i) => (
//             <Reveal key={flavour.id} delay={i * 0.08}>
//               <TiltCard className="group h-full">
//                 <div className="h-full glass rounded-3xl overflow-hidden shadow-glass hover:shadow-lift transition-shadow duration-300 relative">
//                   {flavour.badge && (
//                     <span className="absolute top-4 left-4 z-10 bg-royal-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-glow">
//                       {flavour.badge}
//                     </span>
//                   )}
//                   <div
//                     className="relative aspect-square flex items-center justify-center p-6"
//                     style={{
//                       background: `linear-gradient(160deg, ${flavour.colorFrom}22, ${flavour.colorTo}22)`,
//                     }}
//                   >
//                     <motion.div
//                       className="relative w-full h-full"
//                       whileHover={{ scale: 1.08, rotate: -2 }}
//                       transition={{ type: "spring", stiffness: 250, damping: 18 }}
//                     >
//                       <Image
//                         src={flavour.image}
//                         alt={`${flavour.name} roasted makhana jar`}
//                         fill
//                         className="object-contain drop-shadow-xl"
//                       />
//                     </motion.div>
//                   </div>
//                   <div className="p-5 text-center">
//                     <h3 className="font-display font-bold text-lg text-ink">{flavour.name}</h3>
//                     <p className="text-xs text-ink-soft/70 mb-4">{flavour.tagline}</p>
//                     <MagneticButton className="w-full">
//                       <Button variant="secondary" size="sm" className="w-full" href="/flavours">
//                         Learn More
//                       </Button>
//                     </MagneticButton>
//                   </div>
//                 </div>
//               </TiltCard>
//             </Reveal>
//           ))}
//         </div>

//         <div className="mt-8 text-center sm:hidden">
//           <Link
//             href="/flavours"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { flavours } from "@/data/flavours";
// import Button from "@/components/ui/Button";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GradientBlobs from "@/components/ui/GradientBlobs";
// import TiltCard from "@/components/ui/TiltCard";
// import Reveal from "@/components/ui/Reveal";
// import MagneticButton from "@/components/ui/MagneticButton";

// export default function FlavoursHighlight() {
//   return (
//     <section id="flavours" className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
//       <GradientBlobs variant="mint" />
//       <div className="relative max-w-7xl mx-auto px-5 md:px-8">
//         <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
//           <SectionHeading
//             eyebrow="Our Flavours"
//             title="Four Ways To"
//             highlight="Crunch Royally"
//             align="left"
//             className="mb-0"
//           />
//           <Link
//             href="/flavours"
//             className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {flavours.map((flavour, i) => (
//             <Reveal key={flavour.id} delay={i * 0.08}>
//               <TiltCard className="group h-full">
//                 <div className="h-full glass rounded-3xl overflow-hidden shadow-glass hover:shadow-lift transition-shadow duration-300 relative">
//                   {flavour.badge && (
//                     <span className="absolute top-4 left-4 z-10 bg-royal-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-glow">
//                       {flavour.badge}
//                     </span>
//                   )}
//                   <div
//                     className="relative aspect-square flex items-center justify-center p-6"
//                     style={{
//                       background: `linear-gradient(160deg, ${flavour.colorFrom}22, ${flavour.colorTo}22)`,
//                     }}
//                   >
//                     <motion.div
//                       className="flex w-full h-full items-center justify-center p-4"
//                       whileHover={{ scale: 1.08, rotate: -2 }}
//                       transition={{ type: "spring", stiffness: 250, damping: 18 }}
//                     >
//                       <Image
//                         src={flavour.image}
//                         alt={`${flavour.name} roasted makhana jar`}
//                         width={420}
//                         height={420}
//                         className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
//                       />
//                     </motion.div>
//                   </div>
//                   <div className="p-5 text-center">
//                     <h3 className="font-display font-bold text-lg text-ink">{flavour.name}</h3>
//                     <p className="text-xs text-ink-soft/70 mb-4">{flavour.tagline}</p>
//                     <MagneticButton className="w-full">
//                       <Button variant="secondary" size="sm" className="w-full" href="/flavours">
//                         Learn More
//                       </Button>
//                     </MagneticButton>
//                   </div>
//                 </div>
//               </TiltCard>
//             </Reveal>
//           ))}
//         </div>

//         <div className="mt-8 text-center sm:hidden">
//           <Link
//             href="/flavours"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// } 















// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { flavours } from "@/data/flavours";
// import Button from "@/components/ui/Button";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GradientBlobs from "@/components/ui/GradientBlobs";
// import TiltCard from "@/components/ui/TiltCard";
// import Reveal from "@/components/ui/Reveal";
// import MagneticButton from "@/components/ui/MagneticButton";

// export default function FlavoursHighlight() {
//   return (
//     <section id="flavours" className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
//       <GradientBlobs variant="mint" />
//       <div className="relative max-w-7xl mx-auto px-5 md:px-8">
//         <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
//           <SectionHeading
//             eyebrow="Our Flavours"
//             title="Four Ways To"
//             highlight="Crunch Royally"
//             align="left"
//             className="mb-0"
//           />
//           <Link
//             href="/flavours"
//             className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {flavours.map((flavour, i) => (
//             <Reveal key={flavour.id} delay={i * 0.08}>
//               <TiltCard className="group h-full">
//                 <div className="h-full glass rounded-3xl overflow-hidden shadow-glass hover:shadow-lift transition-shadow duration-300 relative">
//                   {flavour.badge && (
//                     <span className="absolute top-4 left-4 z-10 bg-royal-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-glow">
//                       {flavour.badge}
//                     </span>
//                   )}

//                   {/* ✅ Taller image zone, minimal padding so jar fills the space */}
//                   <div
//                     className="relative w-full overflow-hidden"
//                     style={{
//                       aspectRatio: "4/4.2",
//                       background: `linear-gradient(160deg, ${flavour.colorFrom}22, ${flavour.colorTo}22)`,
//                     }}
//                   >
//                     <motion.div
//                       className="absolute inset-0 flex items-end justify-center pb-2"
//                       whileHover={{ scale: 1.07, rotate: -1.5 }}
//                       transition={{ type: "spring", stiffness: 250, damping: 18 }}
//                     >
//                       <Image
//                         src={flavour.image}
//                         alt={`${flavour.name} roasted makhana jar`}
//                         width={420}
//                         height={420}
//                         className="w-[88%] h-auto object-contain drop-shadow-xl"
//                       />
//                     </motion.div>
//                   </div>

//                   {/* ✅ Tighter bottom text section */}
//                   <div className="px-5 pt-4 pb-5 text-center">
//                     <h3 className="font-display font-bold text-lg text-ink">{flavour.name}</h3>
//                     <p className="text-xs text-ink-soft/70 mb-4">{flavour.tagline}</p>
//                     <MagneticButton className="w-full">
//                       <Button variant="secondary" size="sm" className="w-full" href="/flavours">
//                         Learn More
//                       </Button>
//                     </MagneticButton>
//                   </div>
//                 </div>
//               </TiltCard>
//             </Reveal>
//           ))}
//         </div>

//         <div className="mt-8 text-center sm:hidden">
//           <Link
//             href="/flavours"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }










// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { flavours } from "@/data/flavours";
// import Button from "@/components/ui/Button";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GradientBlobs from "@/components/ui/GradientBlobs";
// import TiltCard from "@/components/ui/TiltCard";
// import Reveal from "@/components/ui/Reveal";
// import MagneticButton from "@/components/ui/MagneticButton";

// export default function FlavoursHighlight() {
//   return (
//     <section id="flavours" className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
//       <GradientBlobs variant="mint" />
//       <div className="relative max-w-7xl mx-auto px-5 md:px-8">
//         <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
//           <SectionHeading
//             eyebrow="Our Flavours"
//             title="Four Ways To"
//             highlight="Crunch Royally"
//             align="left"
//             className="mb-0"
//           />
//           <Link
//             href="/flavours"
//             className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {flavours.map((flavour, i) => (
//             <Reveal key={flavour.id} delay={i * 0.08}>
//               <TiltCard className="group h-full">
//                 <div className="h-full glass rounded-3xl overflow-hidden shadow-glass hover:shadow-lift transition-shadow duration-300 relative">
//                   {flavour.badge && (
//                     <span className="absolute top-4 left-4 z-10 bg-royal-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-glow">
//                       {flavour.badge}
//                     </span>
//                   )}

//                   {/* ✅ Taller image zone, minimal padding so jar fills the space */}
//                   <div
//                     className="relative w-full overflow-hidden"
//                     style={{
//                       aspectRatio: "4/4.2",
//                       background: `linear-gradient(160deg, ${flavour.colorFrom}22, ${flavour.colorTo}22)`,
//                     }}
//                   >
//                     <motion.div
//                       className="absolute inset-0 flex items-end justify-center pb-2"
//                       whileHover={{ scale: 1.07, rotate: -1.5 }}
//                       transition={{ type: "spring", stiffness: 250, damping: 18 }}
//                     >
//                       <Image
//                         src={flavour.image}
//                         alt={`${flavour.name} roasted makhana jar`}
//                         width={420}
//                         height={420}
//                         className="w-[88%] h-auto object-contain drop-shadow-xl"
//                       />
//                     </motion.div>
//                   </div>

//                   {/* ✅ Tighter bottom text section */}
//                   <div className="px-5 pt-4 pb-5 text-center">
//                     <h3 className="font-display font-bold text-lg text-ink">{flavour.name}</h3>
//                     <p className="text-xs text-ink-soft/70 mb-4">{flavour.tagline}</p>
//                     <MagneticButton className="w-full">
//                       <Button variant="secondary" size="sm" className="w-full" href="/flavours">
//                         Learn More
//                       </Button>
//                     </MagneticButton>
//                   </div>
//                 </div>
//               </TiltCard>
//             </Reveal>
//           ))}
//         </div>

//         <div className="mt-8 text-center sm:hidden">
//           <Link
//             href="/flavours"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }









// // C:\Marktale-projectes\Snaxsa-\components\home\FlavoursHighlight.tsx







// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { flavours } from "@/data/flavours";
// import Button from "@/components/ui/Button";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GradientBlobs from "@/components/ui/GradientBlobs";
// import TiltCard from "@/components/ui/TiltCard";
// import Reveal from "@/components/ui/Reveal";
// import MagneticButton from "@/components/ui/MagneticButton";

// export default function FlavoursHighlight() {
//   return (
//     <section id="flavours" className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
//       <GradientBlobs variant="mint" />
//       <div className="relative max-w-7xl mx-auto px-5 md:px-8">
//         <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
//           <SectionHeading
//             eyebrow="Our Flavours"
//             title="Four Ways To"
//             highlight="Crunch Royally"
//             align="left"
//             className="mb-0"
//           />
//           <Link
//             href="/order"
//             className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {flavours.map((flavour, i) => (
//             <Reveal key={flavour.id} delay={i * 0.08}>
//               <TiltCard className="group h-full">
//                 <div className="h-full glass rounded-3xl overflow-hidden shadow-glass hover:shadow-lift transition-shadow duration-300 relative flex flex-col">
//                   {flavour.badge && (
//                     <span className="absolute top-4 left-4 z-10 bg-royal-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-glow">
//                       {flavour.badge}
//                     </span>
//                   )}

//                   {/* Image zone — gradient bg, jar fully visible */}
//                   <div
//                     className="relative w-full flex items-end justify-center pt-6 pb-2 px-4"
//                     style={{
//                       aspectRatio: "1 / 1.1",
//                       background: `linear-gradient(160deg, ${flavour.colorFrom}22, ${flavour.colorTo}22)`,
//                     }}
//                   >
//                     <motion.div
//                       className="w-full flex items-end justify-center"
//                       whileHover={{ scale: 1.07, rotate: -1.5 }}
//                       transition={{ type: "spring", stiffness: 250, damping: 18 }}
//                     >
//                       <Image
//                         src={flavour.image}
//                         alt={`${flavour.name} roasted makhana jar`}
//                         width={420}
//                         height={520}
//                         className="w-full h-auto object-contain drop-shadow-xl"
//                       />
//                     </motion.div>
//                   </div>

//                   {/* Bottom text */}
//                   <div className="px-5 pt-4 pb-5 text-center mt-auto">
//                     <h3 className="font-display font-bold text-lg text-ink">{flavour.name}</h3>
//                     <p className="text-xs text-ink-soft/70 mb-4">{flavour.tagline}</p>
//                     <MagneticButton className="w-full">
//                       <Button variant="secondary" size="sm" className="w-full" href="/order">
//                         Learn More
//                       </Button>
//                     </MagneticButton>
//                   </div>
//                 </div>
//               </TiltCard>
//             </Reveal>
//           ))}
//         </div>

//         <div className="mt-8 text-center sm:hidden">
//           <Link
//             href="/order"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
//           >
//             View All Flavours <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }













"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { flavours } from "@/data/flavours";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";

export default function FlavoursHighlight() {
  return (
    <section
      id="flavours"
      className="grain relative py-24 md:py-32 overflow-hidden bg-white/50"
    >
      <GradientBlobs variant="mint" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* ── Header row ── */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16 md:mb-20">
          <SectionHeading
            eyebrow="Our Flavours"
            title="Four Ways To"
            highlight="Crunch Royally"
            align="left"
            className="mb-0"
          />
          <Link
            href="/flavours"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors group"
          >
            Explore All Flavours
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* ── Flavour grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 md:gap-x-10">
          {flavours.map((flavour, i) => (
            <Reveal key={flavour.id} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center group">

                {/* ── Jar image — no card, no bg, just the jar ── */}
                <div className="relative w-full mb-6">
                  {/* Soft colour glow under the jar */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-70"
                    style={{
                      background: `linear-gradient(90deg, ${flavour.colorFrom}, ${flavour.colorTo})`,
                    }}
                  />

                  {/* Badge */}
                  {flavour.badge && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 220 }}
                      className="absolute -top-2 -right-1 z-10 text-white text-[9px] font-black px-2.5 py-1 rounded-full shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${flavour.colorFrom}, ${flavour.colorTo})`,
                      }}
                    >
                      ★ {flavour.badge}
                    </motion.span>
                  )}

                  {/* The jar itself — hover floats up */}
                  <motion.div
                    whileHover={{ y: -10, rotate: -1.5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative z-10 w-full"
                  >
                    {/* Subtle idle float animation */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3.5 + i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.6,
                      }}
                    >
                      {/* Rounded image container */}
                      <div
                        className="relative w-full aspect-square rounded-[2.25rem] overflow-hidden shadow-2xl"
                        style={{
                          background: `linear-gradient(145deg, ${flavour.colorFrom}18, ${flavour.colorTo}12)`,
                          boxShadow: `0 24px 60px ${flavour.colorFrom}22`,
                        }}
                      >
                        <Image
                          src={flavour.image}
                          alt={`${flavour.name} roasted makhana jar`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 18vw"
                          priority={i < 2}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* ── Text content ── */}
                <div className="flex flex-col items-center gap-3 w-full">
                  {/* Colour dot + tagline */}
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: flavour.colorFrom }}
                    />
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: flavour.colorFrom }}
                    >
                      {flavour.tagline}
                    </p>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-ink leading-tight">
                    {flavour.name}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs text-ink-soft/70 leading-relaxed line-clamp-2 max-w-[180px]">
                    {flavour.description}
                  </p>

                  {/* Price */}
                  <p className="font-display text-lg font-bold text-ink">
                    ₹{flavour.price}
                    <span className="text-xs font-body font-normal text-ink-soft/40 ml-1">
                      / {flavour.weight}
                    </span>
                  </p>

                  {/* CTA */}
                  <MagneticButton className="w-full">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full"
                      href="/flavours"
                    >
                      Learn More
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Mobile "View All" link ── */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/flavours"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
          >
            Explore All Flavours <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}