import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import FlavourGrid from "@/components/flavours/FlavourGrid";
import FlavourFinder from "@/components/flavours/FlavourFinder";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Our Flavours | Snax सा",
  description: "Explore all four Snax सा roasted makhana flavours — Peri Punch, Tangy Tingle, Minty Pinch and Snow Pepper Burst.",
};

function JarsIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square glass rounded-4xl shadow-lift p-8">
      <Image src="/images/jars-trio.png" alt="Snax सा flavour jars" fill className="object-contain p-6" />
    </div>
  );
}

export default function FlavoursPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Our Flavours"
        title="Four Ways To"
        highlight="Crunch Royally"
        description="Every jar is roasted fresh in small batches and seasoned with our own spice blends — pick your favourite, or collect all four."
        pillLabel="100% ROASTED, NOT FRIED"
        illustration={<JarsIllustration />}
        variant="mint"
      />
      <FlavourGrid />
      <FlavourFinder />
      <CTA />
    </main>
  );
}
