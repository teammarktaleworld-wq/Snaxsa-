"use client";

import * as Icons from "lucide-react";
import { featureStrip } from "@/data/featureStrip";

const colorMap: Record<string, string> = {
  coral: "bg-coral/15 text-coral",
  lavender: "bg-lavender/25 text-royal",
  mint: "bg-mint/35 text-success",
  sky: "bg-sky/35 text-royal",
  sunbeam: "bg-sunbeam/40 text-gold",
};

const track = [...featureStrip, ...featureStrip];

export default function FeatureStrip() {
  return (
    <div className="relative py-6 md:py-8 bg-white/60 border-y border-royal/5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max gap-4 md:gap-6 animate-marquee">
        {track.map((item, i) => {
          const Icon = Icons[item.icon as keyof typeof Icons] as Icons.LucideIcon;
          return (
            <div
              key={`${item.id}-${i}`}
              className="flex items-center gap-3 shrink-0 px-5 py-3 rounded-full glass shadow-glass"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${colorMap[item.bg]}`}>
                {Icon && <Icon size={18} />}
              </div>
              <div className="text-left leading-tight whitespace-nowrap">
                <p className="font-semibold text-sm text-ink">{item.title}</p>
                <p className="text-xs text-ink-soft/70">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
