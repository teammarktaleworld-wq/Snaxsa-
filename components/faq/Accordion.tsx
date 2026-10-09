// C:\Marktale-projectes\Snaxsa-\components\faq\Accordion.tsx
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqItems } from "@/data/faq";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { whatsappLinkWithMessage } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function Accordion() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(faqItems.map((f) => f.category)))], []);
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<string | null>(faqItems[0]?.id ?? null);

  const filtered = active === "All" ? faqItems : faqItems.filter((f) => f.category === active);

  return (
    <section className="grain relative py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all",
                active === cat
                  ? "bg-royal-gradient text-white shadow-glow"
                  : "glass text-ink-soft hover:text-royal"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((item, i) => {
            const isOpen = open === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="glass rounded-2xl shadow-glass overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-ink">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 w-8 h-8 rounded-full bg-coral/10 text-coral flex items-center justify-center"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-6 pb-5 text-sm text-ink-soft leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center glass rounded-3xl px-6 py-8 shadow-glass">
            <p className="font-display font-bold text-ink text-lg mb-1">Still curious?</p>
            <p className="text-sm text-ink-soft mb-5">Message us on WhatsApp and we'll answer directly.</p>
            <Button
              variant="whatsapp"
              size="md"
              icon={<MessageCircle size={16} />}
              href={whatsappLinkWithMessage("Hi Snax सा! I have a question that wasn't in your FAQ.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto"
            >
              Ask on WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
