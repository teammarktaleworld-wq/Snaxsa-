// app/flavours/page.tsx

import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import FlavourDeepDive from "@/components/flavours/Flavourdeepdive";

export const metadata: Metadata = {
  title: "Our Flavours | Snax सा",
  description:
    "Dive deep into all four Snax सा roasted makhana flavours — the ingredients, origin stories, tasting notes and what to pair them with.",
};

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[4/3]">
      <Image
        src="/images/jars-trio2.png"
        alt="All four Snax सा flavour jars"
        fill
        className="object-contain drop-shadow-2xl"
        sizes="(max-width: 768px) 100vw, 512px"
        priority
      />
    </div>
  );
}

export default function FlavoursPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="The Flavour Lab"
        title="Every Flavour"
        highlight="Has a Story"
        description="Each jar starts with a craving and goes through 40+ recipe iterations before it earns a label. Here's everything — origin, ingredients, tasting notes, and what to eat them with."
        pillLabel="4 FLAVOURS · ALL ROASTED · NEVER FRIED"
        illustration={<HeroIllustration />}
        variant="mint"
      />
      <FlavourDeepDive />
    </main>
  );
}