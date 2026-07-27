"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";
import GradientBlobs from "@/components/ui/GradientBlobs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  pillLabel?: string;
  illustration?: ReactNode;
  variant?: "coral" | "lav" | "mint";
}

/** Shared hero header for inner pages — mirrors the homepage hero language. */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  pillLabel,
  illustration,
  variant = "coral",
}: PageHeroProps) {
  return (
    <section className="grain relative pt-32 pb-16 md:pt-40 md:pb-20 bg-hero-mesh overflow-hidden">
      <GradientBlobs variant={variant} />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {pillLabel && (
            <Pill icon={<span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />} className="mb-6">
              {pillLabel}
            </Pill>
          )}
          <p className="uppercase tracking-[0.22em] text-xs font-bold text-coral mb-3">{eyebrow}</p>
          <h1 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl md:text-[3.2rem] text-ink">
            {title} <span className="italic text-gradient-royal">{highlight}</span>
          </h1>
          <p className="mt-5 text-ink-soft max-w-lg leading-relaxed text-lg">{description}</p>
        </motion.div>

        {illustration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {illustration}
          </motion.div>
        )}
      </div>
    </section>
  );
}
