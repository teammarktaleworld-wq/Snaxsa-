"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { comparisonRows } from "@/data/nutrition";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

export default function Comparison() {
  return (
    <section className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
      <GradientBlobs variant="coral" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Makhana vs."
          highlight="Regular Chips"
          subtitle="The same craving, a noticeably better choice."
        />
        <Reveal>
          <div className="glass rounded-3xl shadow-glass overflow-hidden">
            <div className="grid grid-cols-3 text-center bg-royal-gradient text-white font-display font-semibold py-4 text-sm md:text-base">
              <div />
              <div>Snax सा Makhana</div>
              <div>Regular Chips</div>
            </div>
            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid grid-cols-3 items-center text-center py-4 border-b border-royal/5 last:border-0"
              >
                <div className="text-left pl-5 text-sm font-medium text-ink-soft">{row.label}</div>
                <div className="flex justify-center">
                  {row.makhana ? (
                    <Check size={18} className="text-success" />
                  ) : (
                    <X size={18} className="text-ink/20" />
                  )}
                </div>
                <div className="flex justify-center">
                  {row.chips ? (
                    <Check size={18} className="text-success" />
                  ) : (
                    <X size={18} className="text-coral/60" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
