import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactOrnament from "@/components/ui/ContactOrnament";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapCard from "@/components/contact/MapCard";
import GradientBlobs from "@/components/ui/GradientBlobs";

export const metadata: Metadata = {
  title: "Contact Us | Snax सा",
  description: "Get in touch with Snax सा — questions, orders and everything in between.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        highlight="Makhana"
        description="Questions about an order, a bulk enquiry, or just want to say hi? We'd love to hear from you."
        pillLabel="WE REPLY WITHIN 24 HOURS"
        illustration={<ContactOrnament />}
        variant="coral"
      />

      <section className="grain relative py-16 md:py-24 overflow-hidden bg-white/50">
        <GradientBlobs variant="lav" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <ContactInfo />
            <MapCard />
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
