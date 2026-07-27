"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";
import GiftBox from "@/components/ui/GiftBox";
import { whatsappLinkWithMessage } from "@/lib/site-config";

const occasions = ["Corporate Gifting", "Wedding Favours", "Events & Conferences", "Festive Gift Boxes"];

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
      <GradientBlobs variant="mint" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <Reveal>
          <GiftBox />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Get a Quote"
            title="Tell Us About"
            highlight="Your Order"
            align="left"
            subtitle="Share a few details and our team will get back to you with pricing within 24 hours."
            className="mb-8"
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8 shadow-glass flex items-start gap-4"
            >
              <CheckCircle2 className="text-gold shrink-0" size={28} />
              <div>
                <p className="font-display font-bold text-ink text-lg">Thank you!</p>
                <p className="text-sm text-ink-soft mt-1">
                  Your enquiry has been noted. Our team will reach out on WhatsApp or email shortly.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
                />
              </div>
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm text-ink-soft focus:outline-none focus:ring-2 focus:ring-coral"
              >
                <option value="" disabled>
                  Select Occasion
                </option>
                {occasions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <input
                required
                placeholder="Approximate Quantity (e.g. 100 jars)"
                className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
              />
              <textarea
                rows={3}
                placeholder="Anything else we should know? (optional)"
                className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral resize-none"
              />
              <div className="flex flex-wrap gap-3 pt-1">
                <Button type="submit" variant="primary" size="md" icon={<Send size={16} />} className="w-full sm:w-auto">
                  Submit Enquiry
                </Button>
                <Button
                  variant="whatsapp"
                  size="md"
                  icon={<MessageCircle size={16} />}
                  href={whatsappLinkWithMessage("Hi Snax सा! I'd like a bulk order quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Or WhatsApp Us
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
