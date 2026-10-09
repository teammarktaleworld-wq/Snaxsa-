"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "HR Manager, TechCorp Jaipur",
    avatar: "👩‍💼",
    text: "Ordered 200 branded jars for Diwali gifting. The packaging was stunning and the makhana was fresh. Every colleague raved about it — we're already planning the next order.",
    rating: 5,
    occasion: "Corporate Diwali Gifting",
    color: "#E91E63",
  },
  {
    name: "Rahul & Meera Joshi",
    role: "Wedding, Udaipur",
    avatar: "👰",
    text: "We chose Snax सा for our wedding favours instead of the usual mithai boxes. 350 jars, custom labels with our names, delivered 3 days before the wedding. Absolutely perfect.",
    rating: 5,
    occasion: "Wedding Favours",
    color: "#F57C00",
  },
  {
    name: "Karan Mehta",
    role: "Events Manager, Rajputana Hotels",
    avatar: "🏢",
    text: "We use Snax सा for all our conference snack boxes now. Guests always ask where we got them. Bulk pricing is excellent and the team is super responsive.",
    rating: 5,
    occasion: "Conference & Events",
    color: "#FCD980",
  },
];

export default function BulkTestimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Subtle bg wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 60%, #E91E6308, transparent 50%), radial-gradient(ellipse at 80% 30%, #FCD98008, transparent 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="What Clients Say"
          title="Trusted By"
          highlight="Hundreds"
          subtitle="From startups to luxury hotels — here's what they said."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl border border-ink/6 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Colour top bar */}
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}66)` }}
              />

              {/* Quote icon */}
              <Quote size={20} className="mb-3 opacity-20" style={{ color: t.color }} />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-ink-soft leading-relaxed mb-5 italic">"{t.text}"</p>

              {/* Occasion chip */}
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
                style={{ background: `${t.color}12`, color: t.color }}
              >
                {t.occasion}
              </span>

              {/* Person */}
              <div className="flex items-center gap-3 pt-4 border-t border-ink/6">
                <span className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-lg border border-ink/5">
                  {t.avatar}
                </span>
                <div>
                  <p className="font-display font-bold text-ink text-sm">{t.name}</p>
                  <p className="text-[10px] text-ink/40 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}