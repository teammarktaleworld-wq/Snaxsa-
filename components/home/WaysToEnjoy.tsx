"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { waysToEnjoy } from "@/data/waysToEnjoy";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

const colors = [
  "bg-coral/15 text-coral",
  "bg-royal/15 text-royal",
  "bg-gold/20 text-gold",
  "bg-success/15 text-success",
  "bg-sky/30 text-royal",
  "bg-lavender/30 text-royal",
  "bg-sunbeam/30 text-gold",
];

export default function WaysToEnjoy() {
  return (
    <section className="grain relative py-20 md:py-24 overflow-hidden">
      <GradientBlobs variant="coral" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Anytime, Anywhere"
          title="Ways To"
          highlight="Enjoy Snax सा"
          subtitle="One crunchy jar, endless moments — from tiffins to travel bags."
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6">
          {waysToEnjoy.map((way, i) => {
            const Icon = Icons[way.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <Reveal key={way.id} delay={i * 0.06} y={16}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center gap-2.5"
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-3xl flex items-center justify-center shadow-glass glass ${colors[i % colors.length]}`}
                  >
                    {Icon && <Icon size={22} />}
                  </div>
                  <span className="text-[11px] md:text-xs font-semibold text-ink-soft text-center leading-tight">
                    {way.label}
                  </span>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
