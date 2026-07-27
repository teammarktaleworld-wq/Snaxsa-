import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NutrientBurst from "@/components/ui/NutrientBurst";
import StatsGrid from "@/components/benefits/StatsGrid";
import Comparison from "@/components/benefits/Comparison";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Health Benefits | Snax सा",
  description: "Why roasted makhana is genuinely good for you — protein, fibre, calcium and more.",
};

export default function BenefitsPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Health Benefits"
        title="Snacking That"
        highlight="Loves You Back"
        description="Makhana isn't just a trendy snack — it's a genuinely nutrient-dense superfood, roasted fresh with nothing artificial added."
        pillLabel="NUTRITIONIST APPROVED"
        illustration={<NutrientBurst />}
        variant="mint"
      />
      <StatsGrid />
      <Comparison />
      <CTA />
    </main>
  );
}
