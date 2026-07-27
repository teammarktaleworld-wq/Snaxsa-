"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

export default function StoryProcess() {
  return (
    <section className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
      <GradientBlobs variant="mint" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="From Farm to Jar"
          title="Our"
          highlight="Process"
          subtitle="Six careful steps between the lotus pond and your snack bowl."
        />
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal/20 to-transparent" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {processSteps.map((step, i) => {
              const Icon = Icons[step.icon as keyof typeof Icons] as Icons.LucideIcon;
              return (
                <Reveal key={step.id} delay={i * 0.09} y={20}>
                  <div className="flex flex-col items-center text-center relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      className="w-16 h-16 rounded-full glass-strong shadow-glass flex items-center justify-center text-royal mb-4 relative z-10"
                    >
                      {Icon && <Icon size={24} />}
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-royal-gradient text-white text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </motion.div>
                    <h3 className="font-display font-bold text-ink mb-1">{step.label}</h3>
                    <p className="text-xs text-ink-soft leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
