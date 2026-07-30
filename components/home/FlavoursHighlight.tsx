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









// C:\Marktale-projectes\Snaxsa-\components\home\FlavoursHighlight.tsx







"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { flavours } from "@/data/flavours";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import TiltCard from "@/components/ui/TiltCard";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FlavoursHighlight() {
  return (
    <section id="flavours" className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
      <GradientBlobs variant="mint" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Our Flavours"
            title="Four Ways To"
            highlight="Crunch Royally"
            align="left"
            className="mb-0"
          />
          <Link
            href="/order"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors"
          >
            View All Flavours <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavours.map((flavour, i) => (
            <Reveal key={flavour.id} delay={i * 0.08}>
              <TiltCard className="group h-full">
                <div className="h-full glass rounded-3xl overflow-hidden shadow-glass hover:shadow-lift transition-shadow duration-300 relative flex flex-col">
                  {flavour.badge && (
                    <span className="absolute top-4 left-4 z-10 bg-royal-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-glow">
                      {flavour.badge}
                    </span>
                  )}

                  {/* Image zone — gradient bg, jar fully visible */}
                  <div
                    className="relative w-full flex items-end justify-center pt-6 pb-2 px-4"
                    style={{
                      aspectRatio: "1 / 1.1",
                      background: `linear-gradient(160deg, ${flavour.colorFrom}22, ${flavour.colorTo}22)`,
                    }}
                  >
                    <motion.div
                      className="w-full flex items-end justify-center"
                      whileHover={{ scale: 1.07, rotate: -1.5 }}
                      transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    >
                      <Image
                        src={flavour.image}
                        alt={`${flavour.name} roasted makhana jar`}
                        width={420}
                        height={520}
                        className="w-full h-auto object-contain drop-shadow-xl"
                      />
                    </motion.div>
                  </div>

                  {/* Bottom text */}
                  <div className="px-5 pt-4 pb-5 text-center mt-auto">
                    <h3 className="font-display font-bold text-lg text-ink">{flavour.name}</h3>
                    <p className="text-xs text-ink-soft/70 mb-4">{flavour.tagline}</p>
                    <MagneticButton className="w-full">
                      <Button variant="secondary" size="sm" className="w-full" href="/order">
                        Learn More
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/order"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
          >
            View All Flavours <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

