"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Flame,
  Leaf,
  Wind,
  Zap,
  Dumbbell,
  Clock,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { flavours } from "@/data/flavours";

// ─── Extended metadata per flavour (origin story, tasting notes, pairings, spice) ──

const FLAVOUR_META: Record<
  string,
  {
    spice: number;
    spiceLabel: string;
    tastingNotes: { emoji: string; note: string }[];
    pairings: { emoji: string; label: string }[];
    story: string;
    icon: React.ReactNode;
    mood: string;
  }
> = {
  "peri-punch": {
    spice: 4,
    spiceLabel: "Fiery Hot",
    tastingNotes: [
      { emoji: "🔥", note: "Smoky heat" },
      { emoji: "🍋", note: "Citrus finish" },
      { emoji: "🌶️", note: "Slow burn" },
      { emoji: "🧄", note: "Savoury depth" },
    ],
    pairings: [
      { emoji: "🍺", label: "Chilled beer" },
      { emoji: "🎬", label: "Movie night" },
      { emoji: "🫖", label: "Evening chai" },
      { emoji: "🥤", label: "Nimbu paani" },
    ],
    story:
      "Peri Punch started as a dare. We wanted to see if we could nail the smoky, fruity heat of the African peri-peri chilli on a makhana — a snack most people only reach for when they want something light. After 40+ batches and three rounds of blind tastings, batch #43 landed exactly right: layered heat that builds, citrus that cuts through, and a finish that makes you reach back in.",
    icon: <Flame size={16} />,
    mood: "Bold & Unapologetic",
  },
  "tangy-tingle": {
    spice: 2,
    spiceLabel: "Mild Tingle",
    tastingNotes: [
      { emoji: "🍅", note: "Sun-ripened tomato" },
      { emoji: "🥭", note: "Raw mango tang" },
      { emoji: "🫧", note: "Bright & zesty" },
      { emoji: "🌿", note: "Herby lift" },
    ],
    pairings: [
      { emoji: "☕", label: "Evening tea" },
      { emoji: "📚", label: "Study session" },
      { emoji: "🚗", label: "Road trips" },
      { emoji: "🥛", label: "Buttermilk" },
    ],
    story:
      "Tangy Tingle is the jar that started it all. It was born from a simple craving — that street-side slice of raw mango dusted with chaat masala and black salt that no packaged snack ever quite captured. We slow-dehydrate real tomato and blend it with amchur, then coat every makhana by hand until the tang clings perfectly to the surface. The result is bright, moreish, and completely impossible to stop eating.",
    icon: <Zap size={16} />,
    mood: "Bright & Crowd-Pleasing",
  },
  "minty-pinch": {
    spice: 1,
    spiceLabel: "No Heat",
    tastingNotes: [
      { emoji: "🌿", note: "Cool mint" },
      { emoji: "🫙", note: "Chaat masala" },
      { emoji: "💨", note: "Cooling exhale" },
      { emoji: "✨", note: "Clean finish" },
    ],
    pairings: [
      { emoji: "💪", label: "Post-workout" },
      { emoji: "🌞", label: "Summer evening" },
      { emoji: "🧃", label: "Fresh juice" },
      { emoji: "🏃", label: "On the go" },
    ],
    story:
      "Minty Pinch was an accident turned obsession. We were testing a palate cleanser between spicier batches and accidentally overdid the mint powder ratio. The result was startlingly good — cooling, herby, with chaat masala underneath giving it a savoury backbone. It became our lightest jar, the one people reach for on hot afternoons, post-gym, or whenever the other flavours feel like too much.",
    icon: <Leaf size={16} />,
    mood: "Cool & Effortless",
  },
  "snow-pepper": {
    spice: 3,
    spiceLabel: "Peppery Warmth",
    tastingNotes: [
      { emoji: "🫚", note: "Cracked pepper" },
      { emoji: "🏔️", note: "Pink salt crystals" },
      { emoji: "🌡️", label: "Slow warmth" },
      { emoji: "🧂", note: "Mineral finish" },
    ],
    pairings: [
      { emoji: "📖", label: "Evening reading" },
      { emoji: "🫖", label: "Masala chai" },
      { emoji: "💻", label: "Office desk" },
      { emoji: "🌙", label: "Late nights" },
    ],
    story:
      "Snow Pepper Burst was built for the person who wants real flavour without the drama. Cracked black pepper — coarser than most brands use — gives it a pronounced bite. Himalayan pink salt adds mineral complexity you won't find in regular table salt. No chilli, no artificial heat — just two ingredients doing honest work. Our most 'grown-up' jar, and the one most people quietly finish alone.",
    icon: <Wind size={16} />,
    mood: "Quiet & Complex",
  },
};

// ─── Spice Dots ───────────────────────────────────────────────────────────────

function SpiceDots({
  level,
  colorFrom,
}: {
  level: number;
  colorFrom: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * i, duration: 0.25, type: "spring" }}
          className="rounded-full"
          style={{
            width: i < level ? 10 : 8,
            height: i < level ? 10 : 8,
            background: i < level ? colorFrom : "#E5E7EB",
            boxShadow: i < level ? `0 0 6px ${colorFrom}60` : "none",
          }}
        />
      ))}
    </div>
  );
}

// ─── Ingredients Strip ────────────────────────────────────────────────────────

function IngredientStrip({
  ingredients,
  colorFrom,
}: {
  ingredients: string[];
  colorFrom: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {ingredients.map((ing, i) => (
        <motion.span
          key={ing}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.3 }}
          className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full border"
          style={{
            borderColor: `${colorFrom}30`,
            color: colorFrom,
            background: `${colorFrom}0D`,
          }}
        >
          <span
            className="w-1 h-1 rounded-full shrink-0"
            style={{ background: colorFrom }}
          />
          {ing}
        </motion.span>
      ))}
    </div>
  );
}

// ─── Accordion (Origin Story) ─────────────────────────────────────────────────

function StoryAccordion({
  story,
  colorFrom,
}: {
  story: string;
  colorFrom: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: `${colorFrom}25` }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ background: `${colorFrom}08` }}
      >
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          style={{ color: colorFrom }}>
          <Sparkles size={12} /> The Origin Story
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} style={{ color: colorFrom }} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="story"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 py-4 text-sm text-ink-soft leading-relaxed border-t"
              style={{ borderColor: `${colorFrom}15` }}>
              {story}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Single Flavour Block ─────────────────────────────────────────────────────

function FlavourBlock({
  flavour,
  index,
}: {
  flavour: (typeof flavours)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const meta = FLAVOUR_META[flavour.id];
  if (!meta) return null;

  return (
    <div
      ref={ref}
      id={flavour.id}
      className="relative"
    >
      {/* Colour wash strip that fades in from the flavour's palette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? "80%" : "20%"} 40%, ${flavour.colorFrom}12 0%, transparent 65%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-12 py-24 md:py-32">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center ${
            isEven ? "" : "lg:[direction:rtl]"
          }`}
        >
          {/* ── IMAGE SIDE ───────────────────────────────────────── */}
          <div className="relative [direction:ltr]">
            {/* Glow */}
            <div
              className="absolute inset-8 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse, ${flavour.colorFrom}, ${flavour.colorTo})`,
              }}
            />

            {/* Badge */}
            {flavour.badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: -6 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-3 -right-2 z-20 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${flavour.colorFrom}, ${flavour.colorTo})`,
                }}
              >
                ★ {flavour.badge}
              </motion.div>
            )}

            {/* Jar image with parallax */}
            <motion.div
              style={{ y: imgY }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square w-full max-w-md mx-auto rounded-[2.75rem] overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse at 55% 35%, ${flavour.colorFrom}22, ${flavour.colorTo}14 65%, white)`,
                  boxShadow: `0 32px 80px ${flavour.colorFrom}28, inset 0 0 0 1.5px ${flavour.colorFrom}20`,
                }}
              >
                <Image
                  src={flavour.image}
                  alt={`${flavour.name} jar`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </motion.div>
            </motion.div>

            {/* Floating stat pill — protein */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -20 : 20, y: 10 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="absolute bottom-6 left-0 z-20 bg-white rounded-2xl shadow-xl shadow-ink/8 border border-ink/5 px-4 py-3"
            >
              <p className="text-[9px] uppercase tracking-widest text-ink-soft/40 font-bold flex items-center gap-1 mb-0.5">
                <Dumbbell size={9} /> Protein
              </p>
              <p
                className="font-display text-xl font-extrabold leading-none"
                style={{ color: flavour.colorFrom }}
              >
                {flavour.protein.split(" ")[0]}
              </p>
              <p className="text-[9px] text-ink-soft/40 mt-0.5">per 100g</p>
            </motion.div>

            {/* Floating shelf life pill */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 20 : -20, y: 10 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.45 }}
              className="absolute top-6 left-6 z-20 bg-white rounded-2xl shadow-xl shadow-ink/8 border border-ink/5 px-4 py-3"
            >
              <p className="text-[9px] uppercase tracking-widest text-ink-soft/40 font-bold flex items-center gap-1 mb-0.5">
                <Clock size={9} /> Shelf Life
              </p>
              <p
                className="font-display text-xl font-extrabold leading-none"
                style={{ color: flavour.colorFrom }}
              >
                {flavour.shelfLife}
              </p>
            </motion.div>
          </div>

          {/* ── CONTENT SIDE ─────────────────────────────────────── */}
          <div className="[direction:ltr] flex flex-col gap-8">

            {/* Icon + tagline row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="flex items-center gap-3"
            >
              <span
                className="p-2.5 rounded-xl"
                style={{
                  background: `${flavour.colorFrom}18`,
                  color: flavour.colorFrom,
                }}
              >
                {meta.icon}
              </span>
              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.18em]"
                  style={{ color: flavour.colorFrom }}
                >
                  {flavour.tagline}
                </p>
                <p className="text-[10px] text-ink-soft/40 font-medium">{meta.mood}</p>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="font-display text-5xl md:text-6xl font-extrabold text-ink leading-[0.95] tracking-tight"
            >
              {flavour.name}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="text-base md:text-lg text-ink-soft leading-relaxed"
            >
              {flavour.description}
            </motion.p>

            {/* ── Spice level ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <SpiceDots level={meta.spice} colorFrom={flavour.colorFrom} />
              <span className="text-xs font-semibold text-ink-soft">
                {meta.spiceLabel}
              </span>
            </motion.div>

            {/* ── Tasting Notes ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft/40 mb-3">
                Tasting Notes
              </p>
              <div className="grid grid-cols-2 gap-2">
                {meta.tastingNotes.map((t, i) => (
                  <motion.div
                    key={t.note}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 border border-ink/6 bg-white"
                  >
                    <span className="text-base leading-none">{t.emoji}</span>
                    <span className="text-xs font-medium text-ink-soft">{t.note}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Best Paired With ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft/40 mb-3">
                Best Paired With
              </p>
              <div className="flex flex-wrap gap-2">
                {meta.pairings.map((p, i) => (
                  <motion.span
                    key={p.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft px-3 py-2 rounded-full border border-ink/10 bg-white"
                  >
                    <span>{p.emoji}</span> {p.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* ── Ingredients ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft/40 mb-3">
                What's Inside
              </p>
              <IngredientStrip
                ingredients={flavour.ingredients}
                colorFrom={flavour.colorFrom}
              />
            </motion.div>

            {/* ── Nutrition quick row ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { icon: <Dumbbell size={11} />, label: "Protein", value: flavour.protein },
                { icon: <Clock size={11} />, label: "Shelf Life", value: flavour.shelfLife },
                { icon: <ShieldCheck size={11} />, label: "Net Weight", value: flavour.weight },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-ink/6 bg-white px-4 py-3 shadow-sm"
                >
                  <p className="text-[9px] font-bold uppercase tracking-widest text-ink-soft/40 flex items-center gap-1 mb-1"
                    style={{ color: flavour.colorFrom }}>
                    {stat.icon} {stat.label}
                  </p>
                  <p className="font-display text-sm font-extrabold text-ink leading-tight">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* ── Origin Story accordion ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <StoryAccordion story={meta.story} colorFrom={flavour.colorFrom} />
            </motion.div>

            {/* ── Price + Order nudge ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="flex items-center justify-between pt-2 border-t border-ink/6"
            >
              <div>
                <p className="text-[10px] text-ink-soft/40 font-medium">Price</p>
                <p className="font-display text-3xl font-extrabold text-ink leading-none">
                  ₹{flavour.price}
                  <span className="text-sm font-body font-normal text-ink-soft/40 ml-1">
                    / {flavour.weight}
                  </span>
                </p>
              </div>
              <Link
                href="/order"
                className="inline-flex items-center gap-2 text-xs font-bold px-5 py-3 rounded-full text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${flavour.colorFrom}, ${flavour.colorTo})`,
                  boxShadow: `0 8px 24px ${flavour.colorFrom}40`,
                }}
              >
                Order this flavour <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${flavour.colorFrom}25, transparent)`,
        }}
      />
    </div>
  );
}

// ─── Sticky Flavour Jump Nav ──────────────────────────────────────────────────

function FlavourJumpNav() {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="sticky top-[64px] z-30 bg-white/85 backdrop-blur-xl border-b border-ink/6 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-3 flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
        <p className="text-[9px] font-bold uppercase tracking-widest text-ink-soft/30 shrink-0 hidden md:block">
          Flavours
        </p>
        {flavours.map((f) => {
          const meta = FLAVOUR_META[f.id];
          return (
            <button
              key={f.id}
              onClick={() => scrollTo(f.id)}
              className="shrink-0 group flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-ink-soft hover:text-ink transition-all border border-transparent hover:border-ink/10 hover:bg-ink/[0.03]"
            >
              <span
                className="p-1 rounded-lg transition-colors group-hover:opacity-100 opacity-60"
                style={{ background: `${f.colorFrom}18`, color: f.colorFrom }}
              >
                {meta?.icon}
              </span>
              {f.name}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}

// ─── All Flavours CTA at bottom ───────────────────────────────────────────────

function OrderNudge() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 50%, #E91E6312, transparent 50%),
            radial-gradient(ellipse at 85% 50%, #FCD98012, transparent 50%)
          `,
        }}
      />
      <div className="relative max-w-2xl mx-auto px-5 text-center flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-widest text-ink-soft/40"
        >
          Ready to crunch?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.07 }}
          className="font-display text-4xl md:text-5xl font-extrabold text-ink leading-tight"
        >
          Pick Your Flavour,<br />Place Your Order.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-base text-ink-soft max-w-md"
        >
          All four are available individually or as a tasting bundle —
          roasted fresh in small batches, shipped fast.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
        >
          <Link
            href="/order"
            className="inline-flex items-center gap-2.5 bg-ink text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-ink/90 transition-all hover:scale-105 shadow-xl shadow-ink/20"
          >
            Go to Order Page <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function FlavourDeepDive() {
  return (
    <div className="bg-white">
      <FlavourJumpNav />
      {flavours.map((flavour, i) => (
        <FlavourBlock key={flavour.id} flavour={flavour} index={i} />
      ))}
      <OrderNudge />
    </div>
  );
}