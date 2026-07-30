
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MessageCircle, ShoppingCart, Beef, CalendarClock } from "lucide-react";
import { flavours } from "@/data/flavours";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { whatsappLinkWithMessage } from "@/lib/site-config";
import { SITE_CONFIG } from "@/lib/site-config";

export default function FlavourGrid() {
  return (
    <section className="grain relative py-20 md:py-24 overflow-hidden bg-white/50">
      <GradientBlobs variant="mint" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col gap-20 md:gap-28">
          {flavours.map((flavour, i) => (
            <Reveal key={flavour.id} delay={i * 0.08}>
              <div
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-10 md:gap-16`}
              >
                {/* ── IMAGE BLOCK ── */}
                <div className="relative w-full md:w-[42%] shrink-0">
                  {flavour.badge && (
                    <span className="absolute top-4 left-4 z-10 bg-royal-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-glow">
                      {flavour.badge}
                    </span>
                  )}

                  {/* Image fills edge-to-edge, clipped by border-radius */}
                  <motion.div
                    className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden"
                    style={{
                      background: `radial-gradient(ellipse at 60% 40%, ${flavour.colorFrom}40, ${flavour.colorTo}28 70%, transparent)`,
                      boxShadow: `inset 0 0 0 1.5px ${flavour.colorFrom}30`,
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  >
                    <Image
                      src={flavour.image}
                      alt={`${flavour.name} roasted makhana jar`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                  </motion.div>
                </div>

                {/* ── CONTENT BLOCK ── */}
                <div className="w-full md:w-[58%] flex flex-col gap-4">
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: flavour.colorFrom }}
                    >
                      {flavour.tagline}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl font-extrabold text-ink leading-tight">
                      {flavour.name}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-ink-soft leading-relaxed">
                    {flavour.description}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-royal bg-royal/10 rounded-full px-3 py-1.5">
                      <Beef size={12} /> {flavour.protein} protein
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-coral bg-coral/10 rounded-full px-3 py-1.5">
                      <CalendarClock size={12} /> Shelf life: {flavour.shelfLife}
                    </span>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-ink-soft/50 mb-2">
                      Ingredients
                    </p>
                    <ul className="grid grid-cols-1 gap-1">
                      {flavour.ingredients.map((ing) => (
                        <li key={ing} className="flex items-center gap-2 text-xs text-ink-soft">
                          <Check size={12} className="text-gold shrink-0" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-ink/8">
                    <p className="font-display text-2xl font-bold text-ink">
                      ₹{flavour.price}{" "}
                      <span className="text-sm font-body font-normal text-ink-soft/50">
                        / {flavour.weight}
                      </span>
                    </p>
                    <div className="flex items-center gap-2">
                      <MagneticButton>
                        <Button
                          variant="whatsapp"
                          size="sm"
                          icon={<MessageCircle size={14} />}
                          href={whatsappLinkWithMessage(
                            `Hi ${SITE_CONFIG.companyName}! I'd like a bulk order quote.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </Button>
                      </MagneticButton>
                      <MagneticButton>
                        <Button
                          variant="primary"
                          size="sm"
                          icon={<ShoppingCart size={14} />}
                          href={flavour.amazonUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buy on Amazon
                        </Button>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}