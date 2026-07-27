"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { whySnaxPoints } from "@/data/whySnax";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

const iconBg = [
  "bg-coral/15 text-coral",
  "bg-royal/15 text-royal",
  "bg-gold/20 text-gold",
  "bg-success/15 text-success",
  "bg-sky/30 text-royal",
  "bg-lavender/30 text-royal",
];

export default function WhyChoose() {
  return (
    <section id="benefits" className="grain relative py-20 md:py-28 overflow-hidden">
      <GradientBlobs variant="lav" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Snax सा"
          title="Why Choose"
          highlight="Snax सा?"
          subtitle="A royal Rajasthani snack, perfected for every mood — six reasons our jars never sit empty for long."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whySnaxPoints.map((point, i) => {
            const Icon = Icons[point.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <Reveal key={point.id} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full glass rounded-3xl p-6 shadow-glass hover:shadow-lift transition-shadow duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${iconBg[i % iconBg.length]}`}
                  >
                    {Icon && <Icon size={26} />}
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-ink mb-1.5">
                    {point.label}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{point.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
