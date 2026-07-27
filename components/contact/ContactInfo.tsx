"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SITE_CONFIG } from "@/lib/site-config";

const cards = [
  { Icon: MapPin, label: "Visit Us", value: SITE_CONFIG.address, color: "bg-coral/15 text-coral" },
  { Icon: Phone, label: "Call Us", value: `${SITE_CONFIG.phone} / ${SITE_CONFIG.phoneSecondary}`, color: "bg-royal/15 text-royal" },
  { Icon: Mail, label: "Email Us", value: SITE_CONFIG.email, color: "bg-gold/20 text-gold" },
  { Icon: Clock, label: "Hours", value: SITE_CONFIG.hours, color: "bg-success/15 text-success" },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, i) => (
        <Reveal key={card.label} delay={i * 0.08}>
          <motion.div
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-5 shadow-glass h-full"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
              <card.Icon size={20} />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-ink-soft/60">{card.label}</p>
            {/* <p className="text-sm font-semibold text-ink mt-0.5">{card.value}</p> */}
            {card.label === "Call Us" ? (
              <div className="text-sm font-semibold text-ink mt-0.5 space-y-1">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="block hover:text-royal transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>

                <a
                  href={`tel:+${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`}
                  className="block hover:text-royal transition-colors"
                >
                  {SITE_CONFIG.phoneSecondary}
                </a>
              </div>
            ) : (
              <p className="text-sm font-semibold text-ink mt-0.5">
                {card.value}
              </p>
            )}
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
