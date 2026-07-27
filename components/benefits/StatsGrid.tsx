"use client";

import { nutritionStats } from "@/data/nutrition";
import StatRing from "@/components/ui/StatRing";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

export default function StatsGrid() {
  return (
    <section className="grain relative py-20 md:py-24 overflow-hidden">
      <GradientBlobs variant="mint" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="By The Numbers"
          title="Goodness In"
          highlight="Every Handful"
          subtitle="Per 100g of roasted makhana — the numbers behind the crunch."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {nutritionStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.08}>
              <StatRing percent={stat.percent} value={stat.value} label={stat.label} color={stat.color} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
