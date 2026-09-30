"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ClipboardList, Truck, Gift } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";

const steps = [
  {
    step: "01",
    icon: <MessageCircle size={24} />,
    title: "Get in Touch",
    desc: "Fill the enquiry form or WhatsApp us. Share your occasion, quantity, and any branding ideas — we'll respond within 24 hours.",
    color: "#E91E63",
    bg: "#FFF0F5",
  },
  {
    step: "02",
    icon: <ClipboardList size={24} />,
    title: "We Send a Quote",
    desc: "Our team prepares a custom pricing sheet with bulk rates, packaging options, and branding mockups tailored to your requirement.",
    color: "#F57C00",
    bg: "#FFF8F0",
  },
  {
    step: "03",
    icon: <Gift size={24} />,
    title: "Roasted & Packed",
    desc: "Once confirmed, we roast your order fresh in small batches, pack in branded gift jars, and prepare for dispatch.",
    color: "#FCD980",
    bg: "#FFFDF0",
  },
  {
    step: "04",
    icon: <Truck size={24} />,
    title: "Delivered Pan India",
    desc: "Your order ships with our trusted logistics partners. Tracking provided. Jaipur orders get same-week delivery.",
    color: "#4CAF50",
    bg: "#F0FFF4",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="grain relative py-20 md:py-28 overflow-hidden bg-white/60">
      <GradientBlobs variant="mint" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="How Bulk Orders"
          highlight="Actually Work"
          subtitle="Four steps from enquiry to doorstep — no hassle, no confusion."
        />

        <div className="relative grid md:grid-cols-4 gap-6 mt-2">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-hot via-gold to-green-400"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.55 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="relative z-10 w-24 h-24 rounded-3xl flex flex-col items-center justify-center shadow-lg mb-5 border-2"
                style={{
                  background: s.bg,
                  borderColor: `${s.color}30`,
                  boxShadow: `0 12px 32px ${s.color}20`,
                }}
              >
                <span style={{ color: s.color }}>{s.icon}</span>
                <span
                  className="text-[9px] font-black uppercase tracking-widest mt-1"
                  style={{ color: s.color }}
                >
                  {s.step}
                </span>
              </motion.div>

              <h3 className="font-display text-base font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-xs text-ink-soft leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}