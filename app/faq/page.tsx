import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Mandala from "@/components/ui/Mandala";
import Accordion from "@/components/faq/Accordion";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "FAQ | Snax सा",
  description: "Answers to common questions about Snax सा roasted makhana, delivery, and bulk orders.",
};

export default function FaqPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="FAQ"
        title="Your Questions,"
        highlight="Answered"
        description="Everything you need to know about our makhana, delivery and bulk orders — still curious? Message us on WhatsApp."
        pillLabel="WE'VE GOT ANSWERS"
        illustration={<Mandala size={280} />}
        variant="lav"
      />
      <Accordion />
      <CTA />
    </main>
  );
}
