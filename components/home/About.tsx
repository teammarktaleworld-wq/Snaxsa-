"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import GradientBlobs from "@/components/ui/GradientBlobs";

const stats = [
  { value: "4", label: "Signature Flavours" },
  { value: "100%", label: "Roasted Not Fried" },
  { value: "0", label: "Preservatives Added" },
];

export default function About() {
  return (
    <section id="about" className="grain relative py-20 md:py-28 overflow-hidden">
      <GradientBlobs variant="mint" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="relative">
          <motion.div className="relative rounded-4xl overflow-hidden shadow-lift aspect-[4/3] glass p-6">
            <Image
              src="/images/jars-trio.png"
              alt="Snax सा makhana jars — our story"
              fill
              className="object-contain p-4"
            />
          </motion.div>
        </Reveal>



        <Reveal delay={0.1}>
          <p className="uppercase tracking-[0.22em] text-xs font-bold text-coral mb-3 flex items-center gap-2">
            <Sparkles size={14} /> Our Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-5">
            Made with love in <span className="text-gradient-royal">Jaipur</span>
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            Snax सा began with a simple idea: bring the royal taste of
            Rajasthan into a guilt-free, everyday snack. We hand-select the
            finest makhana and roast every batch fresh, never fried, so you
            get a crunch that&apos;s as wholesome as it is delicious.
          </p>
          <p className="text-ink-soft leading-relaxed mb-6">
            From our kitchen in Jaipur to your tiffin box, gym bag, or tea
            table — every jar is packed with protein, flavour, and a little
            bit of royal heritage.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-7">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center glass rounded-2xl py-4 shadow-glass">
                <p className="font-display text-xl font-bold text-ink">{stat.value}</p>
                <p className="text-xs text-ink-soft/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors"
          >
            Read Our Full Story <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
