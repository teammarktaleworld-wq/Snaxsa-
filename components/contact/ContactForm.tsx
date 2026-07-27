"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { whatsappLinkWithMessage } from "@/lib/site-config";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-8 shadow-glass flex items-start gap-4"
      >
        <CheckCircle2 className="text-success shrink-0" size={28} />
        <div>
          <p className="font-display font-bold text-ink text-lg">Message sent!</p>
          <p className="text-sm text-ink-soft mt-1">
            Thanks for reaching out — we&apos;ll get back to you within a day.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
        />
      </div>
      <input
        placeholder="Subject"
        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
      />
      <textarea
        required
        rows={4}
        placeholder="Your Message"
        className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral resize-none"
      />
      <div className="flex flex-wrap gap-3">
        <Button type="submit" variant="primary" size="md" icon={<Send size={16} />}>
          Send Message
        </Button>
        <MagneticButton>
          <Button
            type="button"
            variant="whatsapp"
            size="md"
            icon={<MessageCircle size={16} />}
            href={whatsappLinkWithMessage("Hi Snax सा! I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </Button>
        </MagneticButton>
      </div>
    </form>
  );
}
