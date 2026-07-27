"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import GradientBlobs from "@/components/ui/GradientBlobs";

/** Stylised location card — a decorative stand-in for an embedded map. */
export default function MapCard() {
  return (
    <div className="relative rounded-4xl overflow-hidden glass shadow-lift h-64 md:h-full min-h-[260px]">
      <GradientBlobs variant="mint" className="opacity-70" />
      <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden>
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="#6B102E" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 rounded-full bg-royal-gradient shadow-glow flex items-center justify-center text-white">
          <MapPin size={22} />
        </div>
        <div className="w-3 h-3 rounded-full bg-royal/40 mx-auto -mt-1 blur-[2px]" />
      </motion.div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 glass-strong rounded-full px-5 py-2 text-xs font-semibold text-ink shadow-glass">
        Jaipur, Rajasthan, India
      </div>
    </div>
  );
}
