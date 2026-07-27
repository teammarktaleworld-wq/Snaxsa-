"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Blob {
  className: string;
  color: string;
  duration?: number;
}

interface GradientBlobsProps {
  variant?: "coral" | "lav" | "mint";
  className?: string;
}

const presets: Record<string, Blob[]> = {
  coral: [
    { className: "w-72 h-72 -top-16 -left-10", color: "bg-peach/60", duration: 11 },
    { className: "w-80 h-80 top-1/3 -right-20", color: "bg-coral/25", duration: 14 },
    { className: "w-56 h-56 bottom-0 left-1/4", color: "bg-lavender/30", duration: 9 },
  ],
  lav: [
    { className: "w-72 h-72 -top-10 right-0", color: "bg-lavender/45", duration: 12 },
    { className: "w-64 h-64 bottom-0 -left-16", color: "bg-sky/45", duration: 10 },
    { className: "w-52 h-52 top-1/2 left-1/3", color: "bg-mint/35", duration: 13 },
  ],
  mint: [
    { className: "w-72 h-72 -bottom-16 -right-10", color: "bg-mint/50", duration: 13 },
    { className: "w-60 h-60 top-0 left-0", color: "bg-sunbeam/40", duration: 10 },
    { className: "w-48 h-48 top-1/3 right-1/4", color: "bg-peach/40", duration: 9 },
  ],
};

/** Layered blurred blob backdrop; pick a variant per section for visual variety. */
export default function GradientBlobs({ variant = "coral", className }: GradientBlobsProps) {
  const blobs = presets[variant];
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full blur-3xl animate-blobMove", b.className, b.color)}
          style={{ animationDuration: `${b.duration ?? 12}s` }}
        />
      ))}
    </div>
  );
}
