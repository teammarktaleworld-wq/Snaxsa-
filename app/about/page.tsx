import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Mandala from "@/components/ui/Mandala";
import StoryIntro from "@/components/about/StoryIntro";
import StoryProcess from "@/components/about/StoryProcess";
import Values from "@/components/about/Values";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Our Story | Snax सा",
  description: "The story behind Snax सा — premium roasted makhana made with royal Rajasthani heritage in Jaipur.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Our Story"
        title="Rooted in Jaipur,"
        highlight="Made for Royalty"
        description="From a small Jaipur kitchen to thousands of tiffins, gym bags and tea tables — this is the story of Snax सा."
        pillLabel="EST. IN JAIPUR"
        illustration={<Mandala />}
      />
      <StoryIntro />
      <StoryProcess />
      <Values />
      <CTA />
    </main>
  );
}
