"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { bulkCategories } from "@/data/bulkOrders";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const iconBg = [
  "bg-royal/15 text-royal",
  "bg-coral/15 text-coral",
  "bg-sky/30 text-royal",
  "bg-gold/20 text-gold",
];

export default function Categories() {
  return (
    <section className="grain relative py-20 md:py-28 overflow-hidden">
      <GradientBlobs variant="lav" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Bulk Orders"
          title="Perfect For Every"
          highlight="Occasion"
          subtitle="Custom quantities, custom branding, always the same royal crunch."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bulkCategories.map((cat, i) => {
            const Icon = Icons[cat.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <Reveal key={cat.id} delay={i * 0.08}>
                <TiltCard maxTilt={6} className="h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="h-full glass rounded-3xl p-6 shadow-glass hover:shadow-lift transition-shadow duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${iconBg[i % iconBg.length]}`}>
                      {Icon && <Icon size={24} />}
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink mb-1.5">{cat.label}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed mb-4">{cat.description}</p>
                    <span className="inline-block text-[11px] font-semibold text-royal bg-royal/10 rounded-full px-3 py-1">
                      Min. {cat.minOrder}
                    </span>
                  </motion.div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
