// C:\merge\snax-sa__\components\flavours\FlavourFinder.tsx
"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { flavours } from "@/data/flavours";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const spiceLevel: Record<string, number> = {
  "peri-punch": 4,
  "tangy-tingle": 2,
  "minty-pinch": 1,
  "snow-pepper": 3,
};

export default function FlavourFinder() {
  return (
    <section className="grain relative py-20 md:py-24 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Pick Your Crunch"
          title="Spice Level"
          highlight="Guide"
          subtitle="Not sure where to start? Here's how each jar ranks on heat."
        />
        <Reveal>
          <div className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-5">
            {flavours.map((f) => (
              <div key={f.id} className="flex items-center gap-4">
                <span className="w-32 shrink-0 text-sm font-semibold text-ink">{f.name}</span>
                <div className="flex gap-1.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Flame
                        size={16}
                        className={i < spiceLevel[f.id] ? "fill-coral text-coral" : "text-ink/10"}
                      />
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
