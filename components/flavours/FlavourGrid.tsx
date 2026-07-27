"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MessageCircle, ShoppingCart, Beef, CalendarClock } from "lucide-react";
import { flavours } from "@/data/flavours";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/ui/TiltCard";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { whatsappLinkWithMessage } from "@/lib/site-config";

export default function FlavourGrid() {
  return (
    <section className="grain relative py-20 md:py-24 overflow-hidden bg-white/50">
      <GradientBlobs variant="mint" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {flavours.map((flavour, i) => (
            <Reveal key={flavour.id} delay={i * 0.08}>
              <TiltCard maxTilt={5} className="group h-full">
                <div className="h-full glass rounded-4xl overflow-hidden shadow-glass hover:shadow-lift transition-shadow duration-300 relative flex flex-col sm:flex-row">
                  {flavour.badge && (
                    <span className="absolute top-5 left-5 z-10 bg-royal-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-glow">
                      {flavour.badge}
                    </span>
                  )}
                  <div
                    className="relative sm:w-2/5 aspect-square sm:aspect-auto flex items-center justify-center p-6"
                    style={{ background: `linear-gradient(160deg, ${flavour.colorFrom}25, ${flavour.colorTo}25)` }}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.08, rotate: -2 }}
                      transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    >
                      <Image src={flavour.image} alt={`${flavour.name} jar`} fill className="object-contain drop-shadow-xl" />
                    </motion.div>
                  </div>

                  <div className="p-6 sm:w-3/5 flex flex-col">
                    <h3 className="font-display text-2xl font-bold text-ink">{flavour.name}</h3>
                    <p className="text-xs font-semibold text-coral mb-3">{flavour.tagline}</p>
                    <p className="text-sm text-ink-soft leading-relaxed mb-4">{flavour.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-royal bg-royal/10 rounded-full px-3 py-1">
                        <Beef size={12} /> {flavour.protein} protein
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-coral bg-coral/10 rounded-full px-3 py-1">
                        <CalendarClock size={12} /> Shelf life: {flavour.shelfLife}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-ink-soft/60 mb-2">Ingredients</p>
                      <ul className="grid grid-cols-1 gap-1">
                        {flavour.ingredients.map((ing) => (
                          <li key={ing} className="flex items-center gap-1.5 text-xs text-ink-soft">
                            <Check size={12} className="text-gold shrink-0" /> {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div>
                        <p className="font-display text-xl font-bold text-ink">
                          ₹{flavour.price} <span className="text-xs font-body font-medium text-ink-soft/60">/ {flavour.weight}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MagneticButton>
                          <Button
                            variant="whatsapp"
                            size="sm"
                            icon={<MessageCircle size={14} />}
                            href={whatsappLinkWithMessage(`Hi Snax सा! I'd like to order the ${flavour.name} jar.`)}
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
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
