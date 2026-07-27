"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { brandValues } from "@/data/values";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

const iconBg = [
  "bg-gold/20 text-gold",
  "bg-success/15 text-success",
  "bg-coral/15 text-coral",
  "bg-royal/15 text-royal",
];

export default function Values() {
  return (
    <section className="grain relative py-20 md:py-28 overflow-hidden">
      <GradientBlobs variant="lav" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="What We Stand For" title="Our" highlight="Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brandValues.map((value, i) => {
            const Icon = Icons[value.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <Reveal key={value.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full glass rounded-3xl p-6 shadow-glass hover:shadow-lift transition-shadow duration-300 text-center"
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${iconBg[i % iconBg.length]}`}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="font-display font-bold text-ink mb-1.5">{value.label}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{value.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
