"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import GiftBox from "@/components/ui/GiftBox";
import { whatsappLinkWithMessage, SITE_CONFIG } from "@/lib/site-config";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function BulkHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-hero-gradient">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-10 w-72 h-72 rounded-full bg-pink-hot/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coral/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Eyebrow */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-maroon/60 border border-maroon/20 bg-white/60 rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-hot animate-pulse" />
              Bulk &amp; Corporate Orders
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-extrabold leading-[1.04] text-[2.8rem] sm:text-5xl md:text-[3.6rem] text-maroon"
          >
            Gifting That<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(115deg,#E91E63 10%,#F57C00 90%)" }}
            >
              Feels Royal.
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p variants={item} className="mt-5 text-ink/65 max-w-[430px] leading-relaxed text-[0.97rem]">
            From boardrooms to baraats — premium roasted makhana in custom-branded jars,
            packed beautifully for every occasion. Pan-India delivery, minimum 50 jars.
          </motion.p>

          {/* Social proof row */}
          <motion.div variants={item} className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["🧑‍💼","👰","🎉","🏢"].map((e, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-amber-50 text-sm flex items-center justify-center shadow-sm"
                >
                  {e}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {Array.from({length:5}).map((_,i)=>(
                  <Star key={i} size={11} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-[11px] text-ink/50 font-medium">Trusted by 200+ corporates &amp; families</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white shadow-xl transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#E91E63,#F57C00)",
                boxShadow: "0 8px 28px rgba(233,30,99,0.35)",
              }}
            >
              Get a Quote <ArrowRight size={15} />
            </a>
            <a
              href={whatsappLinkWithMessage(`Hi ${SITE_CONFIG.companyName}! I'd like a bulk order quote.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(135deg,#25D366,#128C7E)",
                boxShadow: "0 8px 24px rgba(37,211,102,0.30)",
              }}
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
            {[
              "✦ Custom Branding",
              "✦ Pan India Delivery",
              "✦ Min. 50 Jars",
              "✦ Bulk Pricing",
              "✦ Gift Packaging",
            ].map((t) => (
              <span
                key={t}
                className="text-[11px] font-semibold text-maroon/70 bg-white/60 border border-maroon/10 rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — gift box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <GiftBox />
        </motion.div>
      </div>
    </section>
  );
}