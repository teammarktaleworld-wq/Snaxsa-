"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        align === "center" ? "text-center mx-auto" : "text-left",
        "max-w-2xl mb-10",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "uppercase tracking-[0.22em] text-xs font-bold mb-3 flex items-center gap-2",
            align === "center" && "justify-center",
            light ? "text-white/80" : "text-coral"
          )}
        >
          <span className={cn("w-6 h-px", light ? "bg-white/60" : "bg-coral")} />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight",
          light ? "text-white" : "text-ink"
        )}
      >
        {title} {highlight && <span className="text-gradient-royal">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base md:text-lg", light ? "text-white/75" : "text-ink-soft")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
