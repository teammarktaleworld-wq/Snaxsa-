// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight, MessageCircle, Truck, Leaf, ShieldCheck, WheatOff } from "lucide-react";
// import Button from "@/components/ui/Button";
// import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";
// import Pill from "@/components/ui/Pill";

// const trustPills = [
//   { icon: <ShieldCheck size={16} className="text-pink-hot" />, label: "High Protein" },
//   { icon: <ShieldCheck size={16} className="text-royal" />, label: "Rich in Calcium" },
//   { icon: <WheatOff size={16} className="text-gold" />, label: "Gluten Free" },
//   { icon: <Leaf size={16} className="text-coral" />, label: "Roasted Not Fried" },
//   { icon: <ShieldCheck size={16} className="text-royal" />, label: "No Artificial Preservatives" },
// ];

// // Buy Now: goes straight to Amazon once a real listing URL is configured;
// // until then it falls back to scrolling visitors to the Flavours/Products
// // section on this page, so the button is never inactive.
// const amazonConfigured = SITE_CONFIG.amazon.classic && SITE_CONFIG.amazon.classic !== "#";
// const buyNowHref = amazonConfigured ? SITE_CONFIG.amazon.classic : "/#flavours";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient overflow-hidden"
//     >
//       {/* decorative floating leaves */}
//       <motion.div
//         className="absolute top-24 left-[8%] text-4xl opacity-40 hidden md:block"
//         animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       >
//         🍃
//       </motion.div>
//       <motion.div
//         className="absolute bottom-32 left-[3%] w-40 h-40 rounded-full bg-pink-hot/10 blur-3xl"
//         animate={{ scale: [1, 1.15, 1] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute top-10 right-[10%] w-56 h-56 rounded-full bg-gold/10 blur-3xl"
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 7, repeat: Infinity }}
//       />

//       <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
//         {/* Left column */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <Pill
//             icon={<span className="w-1.5 h-1.5 rounded-full bg-pink-hot animate-pulse" />}
//             className="mb-6"
//           >
//             MADE IN JAIPUR, RAJASTHAN
//           </Pill>

//           <h1 className="font-display font-extrabold leading-[1.08] text-4xl sm:text-5xl md:text-[3.4rem]">
//             <span className="text-maroon">Healthy Crunch.</span>
//             <br />
//             <span className="text-gradient-maroon bg-[linear-gradient(120deg,#E91E63,#F9A825)] bg-clip-text text-transparent">
//               Royal Taste.
//             </span>
//           </h1>

//           <p className="mt-5 font-display text-xl md:text-2xl font-semibold text-ink/80">
//             Snax <span className="text-gold">सा</span>{" "}
//             <span className="text-sm md:text-base font-body font-medium text-ink/50 align-middle">
//               PREMIUM ROASTED MAKHANA
//             </span>
//           </p>

//           <p className="mt-4 text-ink/70 max-w-md leading-relaxed">
//             Roasted to perfection with authentic Indian spices. High in protein,
//             roasted not fried, and made with zero preservatives.
//           </p>

//           <div className="mt-7 flex flex-wrap items-center gap-4">
//             <Button
//               variant="primary"
//               size="lg"
//               icon={<ArrowRight size={18} />}
//               href={buyNowHref}
//               {...(amazonConfigured ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//             >
//               Buy Now
//             </Button>
//             <Button variant="outline" size="lg" href="/flavours">
//               Explore Flavours
//             </Button>
//             <Button
//               variant="whatsapp"
//               size="lg"
//               icon={<MessageCircle size={18} />}
//               href={whatsappLinkWithMessage("Hi Snax सा! I'd like to order some makhana.")}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Order on WhatsApp
//             </Button>
//             <Button variant="ghost" size="lg" href="/contact">
//               Contact Us
//             </Button>
//           </div>

//           <div className="mt-7 flex flex-wrap gap-3">
//             {trustPills.map((pill) => (
//               <Pill key={pill.label} icon={pill.icon}>
//                 {pill.label}
//               </Pill>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-wrap items-center gap-6">
//             <div className="flex items-center gap-2 text-sm font-semibold text-ink/80">
//               <Leaf size={17} className="text-coral" />
//               Roasted in Small Batches, Never Fried
//             </div>
//             <div className="flex items-center gap-2 text-sm font-semibold text-ink/80">
//               <Truck size={17} className="text-royal" />
//               Free Delivery in Jaipur
//             </div>
//           </div>
//         </motion.div>

//         {/* Right column - decorative artwork */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
//           className="relative"
//         >
//           <div
//             className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(107,16,46,0.35)]"
//             style={{
//               WebkitMaskImage:
//                 "radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)",
//             }}
//           >
//             <Image
//               src="/images/hero-jaipur.png"
//               alt="Golden makhana pouring from a copper pot into a bowl, with Jaipur's Hawa Mahal skyline at sunset"
//               width={1200}
//               height={800}
//               priority
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           <motion.div
//             className="absolute -bottom-6 -left-6 hidden sm:block"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <div className="glass rounded-2xl px-5 py-3 shadow-card">
//               <p className="text-xs text-ink/60 font-medium">Roasted Fresh</p>
//               <p className="font-display font-bold text-maroon">Every Single Day</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }












// // C:\Marktale-projectes\Snaxsa-\components\home\Hero.tsx



// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight, MessageCircle, Truck, Leaf, ShieldCheck, WheatOff } from "lucide-react";
// import Button from "@/components/ui/Button";
// import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";
// import Pill from "@/components/ui/Pill";

// const trustPills = [
//   { icon: <ShieldCheck size={16} className="text-pink-hot" />, label: "High Protein" },
//   { icon: <ShieldCheck size={16} className="text-royal" />, label: "Rich in Calcium" },
//   { icon: <WheatOff size={16} className="text-gold" />, label: "Gluten Free" },
//   { icon: <Leaf size={16} className="text-coral" />, label: "Roasted Not Fried" },
//   { icon: <ShieldCheck size={16} className="text-royal" />, label: "No Artificial Preservatives" },
// ];

// // Buy Now: goes straight to Amazon once a real listing URL is configured;
// // until then it falls back to scrolling visitors to the Flavours/Products
// // section on this page, so the button is never inactive.
// const amazonConfigured = SITE_CONFIG.amazon.classic && SITE_CONFIG.amazon.classic !== "#";
// // const buyNowHref = amazonConfigured ? SITE_CONFIG.amazon.classic : "/#flavours";
// const buyNowHref = amazonConfigured
//   ? SITE_CONFIG.amazon.classic
//   : "/order";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient overflow-hidden"
//     >
//       {/* decorative floating leaves */}
//       <motion.div
//         className="absolute top-24 left-[8%] text-4xl opacity-40 hidden md:block"
//         animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       >
//         🍃
//       </motion.div>
//       <motion.div
//         className="absolute bottom-32 left-[3%] w-40 h-40 rounded-full bg-pink-hot/10 blur-3xl"
//         animate={{ scale: [1, 1.15, 1] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute top-10 right-[10%] w-56 h-56 rounded-full bg-gold/10 blur-3xl"
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 7, repeat: Infinity }}
//       />

//       <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
//         {/* Left column */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <Pill
//             icon={<span className="w-1.5 h-1.5 rounded-full bg-pink-hot animate-pulse" />}
//             className="mb-6"
//           >
//             MADE IN JAIPUR, RAJASTHAN
//           </Pill>

//           <h1 className="font-display font-extrabold leading-[1.08] text-4xl sm:text-5xl md:text-[3.4rem]">
//             <span className="text-maroon">Healthy Crunch.</span>
//             <br />
//             <span className="text-gradient-maroon bg-[linear-gradient(120deg,#E91E63,#F57C00)] bg-clip-text text-transparent">
//               Royal Taste.
//             </span>
//           </h1>

//           <p className="mt-5 font-display text-xl md:text-2xl font-semibold text-ink/80">
//             Snax <span className="text-gold">सा</span>{" "}
//             <span className="text-sm md:text-base font-body font-medium text-ink/50 align-middle">
//               PREMIUM ROASTED MAKHANA
//             </span>
//           </p>

//           <p className="mt-4 text-ink/70 max-w-md leading-relaxed">
//             Roasted to perfection with authentic Indian spices. High in protein,
//             roasted not fried, and made with zero preservatives.
//           </p>

//           <div className="mt-7 flex flex-wrap items-center gap-4">
//             <Button
//               variant="primary"
//               size="lg"
//               icon={<ArrowRight size={18} />}
//               href={buyNowHref}
//               {...(amazonConfigured ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//             >
//               Buy Now
//             </Button>
//             <Button variant="outline" size="lg" href="/#flavours">
//               Explore Flavours TEST
//             </Button>
//             <Button
//               variant="whatsapp"
//               size="lg"
//               icon={<MessageCircle size={18} />}
//               href={whatsappLinkWithMessage("Hi Snax सा! I'd like to order some makhana.")}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Order on WhatsApp
//             </Button>
//             <Button variant="ghost" size="lg" href="/contact">
//               Contact Us
//             </Button>
//           </div>

//           <div className="mt-7 flex flex-wrap gap-3">
//             {trustPills.map((pill) => (
//               <Pill key={pill.label} icon={pill.icon}>
//                 {pill.label}
//               </Pill>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-wrap items-center gap-6">
//             <div className="flex items-center gap-2 text-sm font-semibold text-ink/80">
//               <Leaf size={17} className="text-coral" />
//               Roasted in Small Batches, Never Fried
//             </div>
//             <div className="flex items-center gap-2 text-sm font-semibold text-ink/80">
//               <Truck size={17} className="text-royal" />
//               Free Delivery in Jaipur
//             </div>
//           </div>
//         </motion.div>

//         {/* Right column - decorative artwork */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
//           className="relative"
//         >
//           <div
//             className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(107,16,46,0.35)]"
//             style={{
//               WebkitMaskImage:
//                 "radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)",
//             }}
//           >
//             <Image
//               src="/images/hero-jaipur.png"
//               alt="Golden makhana pouring from a copper pot into a bowl, with Jaipur's Hawa Mahal skyline at sunset"
//               width={1200}
//               height={800}
//               priority
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           <motion.div
//             className="absolute -bottom-6 -left-6 hidden sm:block"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <div className="glass rounded-2xl px-5 py-3 shadow-card">
//               <p className="text-xs text-ink/60 font-medium">Roasted Fresh</p>
//               <p className="font-display font-bold text-maroon">Every Single Day</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


















"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Truck,
  Leaf,
  ShieldCheck,
  WheatOff,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";
import Pill from "@/components/ui/Pill";

const trustPills = [
  { icon: <ShieldCheck size={13} className="text-pink-hot" />, label: "High Protein" },
  { icon: <ShieldCheck size={13} className="text-royal" />,    label: "Rich in Calcium" },
  { icon: <WheatOff   size={13} className="text-gold" />,      label: "Gluten Free" },
  { icon: <Leaf       size={13} className="text-coral" />,      label: "Roasted Not Fried" },
  { icon: <ShieldCheck size={13} className="text-royal" />,    label: "No Preservatives" },
];

const amazonConfigured =
  SITE_CONFIG.amazon.classic && SITE_CONFIG.amazon.classic !== "#";
const buyNowHref = amazonConfigured ? SITE_CONFIG.amazon.classic : "/order";

// stagger children
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-hero-gradient overflow-hidden"
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-20 w-72 h-72 rounded-full bg-pink-hot/10 blur-3xl"
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-[8%] w-64 h-64 rounded-full bg-gold/12 blur-3xl"
          animate={{ scale: [1, 1.22, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-coral/10 blur-3xl"
          animate={{ scale: [1, 1.14, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* ── Floating leaves ── */}
      <motion.div
        className="absolute top-28 left-[7%] text-3xl opacity-30 hidden md:block select-none"
        animate={{ y: [0, -14, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🍃
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-[6%] text-2xl opacity-20 hidden md:block select-none"
        animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        🌿
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ══ LEFT COLUMN ══════════════════════════════════════════ */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Eyebrow pill */}
          <motion.div variants={item}>
            <Pill
              icon={
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-hot animate-pulse" />
                  <Sparkles size={11} className="text-gold" />
                </span>
              }
              className="mb-6 w-fit"
            >
              MADE IN JAIPUR, RAJASTHAN
            </Pill>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-extrabold leading-[1.06] text-[2.6rem] sm:text-5xl md:text-[3.5rem]"
          >
            <span className="text-maroon block">Healthy Crunch.</span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(115deg, #E91E63 10%, #F57C00 90%)",
              }}
            >
              Royal Taste.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.div variants={item} className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-ink/80">
              Snax <span className="text-gold">सा</span>
            </span>
            <span className="text-xs font-body font-semibold tracking-widest text-ink/40 uppercase">
              Premium Roasted Makhana
            </span>
          </motion.div>

          {/* Body copy */}
          <motion.p
            variants={item}
            className="mt-4 text-ink/65 max-w-[420px] leading-relaxed text-[0.95rem]"
          >
            Roasted to perfection with authentic Indian spices —
            high in protein, never fried, zero preservatives.
            A royal snack for everyday moments.
          </motion.p>

          {/* ── CTA buttons ── */}
          <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3">
            {/* Primary */}
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={17} />}
              href={buyNowHref}
              {...(amazonConfigured
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Buy Now
            </Button>

            {/* Explore Flavours — styled as a pill outline with gradient border trick */}
            <a
              href="/flavours"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-maroon border-2 border-maroon/20 bg-white/60 hover:border-maroon/50 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span className="text-base">✨</span>
              Explore Flavours
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform text-maroon/70"
              />
            </a>
          </motion.div>

          {/* Secondary row */}
          <motion.div variants={item} className="mt-3 flex flex-wrap gap-3">
            {/* WhatsApp */}
            <a
              href={whatsappLinkWithMessage("Hi Snax सा! I'd like to order some makhana.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 6px 20px rgba(37,211,102,0.35)",
              }}
            >
              <MessageCircle size={15} />
              Order on WhatsApp
            </a>

            {/* Contact ghost */}
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-ink/60 hover:text-ink border border-ink/10 bg-white/40 hover:bg-white/70 transition-all duration-200"
            >
              Contact Us
            </a>
          </motion.div>

          {/* ── Trust pills ── */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
            {trustPills.map((pill) => (
              <Pill key={pill.label} icon={pill.icon} className="text-[11px]">
                {pill.label}
              </Pill>
            ))}
          </motion.div>

          {/* ── Bottom trust bar ── */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-semibold text-ink/60"
          >
            <span className="flex items-center gap-1.5">
              <Leaf size={14} className="text-coral" />
              Roasted in Small Batches
            </span>
            <span className="hidden sm:block w-px h-4 bg-ink/15" />
            <span className="flex items-center gap-1.5">
              <Truck size={14} className="text-royal" />
              Free Delivery in Jaipur
            </span>
          </motion.div>
        </motion.div>

        {/* ══ RIGHT COLUMN — hero image ════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="relative"
        >
          {/* Decorative ring */}
          <div
            className="absolute inset-4 rounded-[3rem] blur-2xl opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, #E91E63, #F57C00, transparent 70%)",
            }}
          />

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_-12px_rgba(107,16,46,0.30)]"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 100% at 50% 50%, black 55%, transparent 100%)",
            }}
          >
            <Image
              src="/images/hero-jaipur.png"
              alt="Golden makhana pouring from a copper pot into a bowl, Jaipur skyline at sunset"
              width={1200}
              height={800}
              priority
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* ── Floating badge — Roasted Fresh ── */}
          <motion.div
            className="absolute -bottom-4 -left-4 hidden sm:block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-2xl px-5 py-3 shadow-card border border-white/60"
            >
              <p className="text-[10px] text-ink/50 font-semibold uppercase tracking-wide">
                Roasted Fresh
              </p>
              <p className="font-display font-bold text-maroon text-base leading-tight">
                Every Single Day
              </p>
            </motion.div>
          </motion.div>

          {/* ── Floating badge — Protein ── */}
          <motion.div
            className="absolute -top-4 -right-2 hidden sm:block"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass rounded-2xl px-4 py-3 shadow-card border border-white/60"
            >
              <p className="text-[10px] text-ink/50 font-semibold uppercase tracking-wide">
                Protein
              </p>
              <p className="font-display font-bold text-royal text-base leading-tight">
                9.7g / 100g
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


