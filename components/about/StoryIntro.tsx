"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import GradientBlobs from "@/components/ui/GradientBlobs";

const stats = [
  { value: "4", label: "Signature Flavours" },
  { value: "100%", label: "Roasted, Not Fried" },
  { value: "0", label: "Preservatives" },
  { value: "0", label: "Artificial Colours" },
];

export default function StoryIntro() {
  return (
    <section id="story" className="grain relative py-20 md:py-24 overflow-hidden">
      <GradientBlobs variant="coral" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="uppercase tracking-[0.22em] text-xs font-bold text-coral mb-3">Where It Began</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-5">
            A royal snack, <span className="text-gradient-royal">reimagined</span>
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            Makhana has been part of Rajasthani kitchens for generations —
            served during fasts, festivals and family evenings. Snax सा was
            born from a simple question: why should something this wholesome
            taste ordinary?
          </p>
          <p className="text-ink-soft leading-relaxed mb-4">
            We started in a small Jaipur kitchen, hand-roasting batches for
            friends and family. Today Snax सा still roasts every batch the
            same way — small batches, slow-roasted, with zero shortcuts.
          </p>
          <p className="text-ink-soft leading-relaxed">
            Every jar carries a little bit of that royal heritage — colourful,
            proud, and unapologetically flavourful.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center glass rounded-2xl py-4 shadow-glass">
                <p className="font-display text-xl font-bold text-ink">{stat.value}</p>
                <p className="text-[11px] text-ink-soft/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div className="relative rounded-4xl overflow-hidden shadow-lift aspect-[4/3] glass p-6">
            <Image
              src="/images/hero-jaipur.png"
              alt="Snax सा makhana with the Hawa Mahal in the background"
              fill
              className="object-cover rounded-3xl"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
