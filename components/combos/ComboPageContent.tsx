"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, ChevronDown, Gift, MessageCircle, Sparkles } from "lucide-react";
import { flavours } from "@/data/flavours";
import { whatsappLinkWithMessage } from "@/lib/site-config";

const comboBoxes = [
  {
    name: "SnaxSa Signature Box",
    pack: "4 × 75g",
    detail: "Four full-size packs for your everyday favourites.",
    price: "999",
    label: "THE CLASSIC PICK",
    image: "/images/Snaxsa main/Jars-trio-best.png",
    tone: "from-[#fff0d6] via-[#fff8ee] to-[#f8e3ce]",
  },
  {
    name: "SnaxSa Grand Box",
    pack: "4 × 75g + 2 × 40g",
    detail: "A generous spread with two extra mini packs to share.",
    price: "799",
    label: "MADE TO SHARE",
    image: "/images/Snaxsa main/All-flavours-best.png",
    tone: "from-[#f7e9de] via-[#fff8ee] to-[#f2d5ca]",
    featured: true,
  },
  {
    name: "SnaxSa Discovery Box",
    pack: "6 × 40g",
    detail: "A little taste of everything, perfect for trying and gifting.",
    price: "599",
    label: "A LITTLE OF EVERYTHING",
    image: "/images/4flavours.webp",
    tone: "from-[#eaf2e7] via-[#fff8ee] to-[#dce9d7]",
  },
];

const builderOptions = [
  { id: "three-large", title: "3 × 75g Box", description: "Choose a flavour for each of your three 75g jars.", price: "₹659", slots: [{ size: "75g", count: 3 }] },
  { id: "four-small", title: "4 × 40g Box", description: "Choose a flavour for each of your four 40g jars.", price: "₹549", slots: [{ size: "40g", count: 4 }] },
  { id: "mixed", title: "2 × 75g + 2 × 40g Box", description: "Choose two flavours for the 75g jars and two for the 40g jars.", price: "₹729", slots: [{ size: "75g", count: 2 }, { size: "40g", count: 2 }] },
] as const;

export default function ComboPageContent() {
  const [builderId, setBuilderId] = useState<(typeof builderOptions)[number]["id"]>("three-large");
  const [jarFlavours, setJarFlavours] = useState<Record<string, string>>({});
  const currentBuilder = builderOptions.find((option) => option.id === builderId)!;
  const jarSlots = currentBuilder.slots.flatMap(({ size, count }) =>
    Array.from({ length: count }, (_, index) => ({ id: `${size}-${index}`, size, number: index + 1 }))
  );
  const selectedJarCount = jarSlots.filter((slot) => Boolean(jarFlavours[slot.id])).length;
  const allJarsSelected = jarSlots.every((slot) => Boolean(jarFlavours[slot.id]));
  const buildLink = useMemo(() => {
    const selections = jarSlots.map((slot) => `${slot.size} jar ${slot.number}: ${jarFlavours[slot.id]}`).join("; ");
    return whatsappLinkWithMessage(`Hi Snax सा! I'd like to order the ${currentBuilder.title} for ${currentBuilder.price}. My flavour choices are: ${selections}.`);
  }, [currentBuilder, jarFlavours, jarSlots]);

  return (
    <main className="relative overflow-hidden bg-[#fffaf4]">
      <section className="grain relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_78%_5%,rgba(245,190,113,0.27),transparent_35%),linear-gradient(145deg,#fffaf4_0%,#f8eee4_54%,#fff8ef_100%)] pb-12 pt-32 md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#c8844e]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 md:px-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b87843]/20 bg-white/70 px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-[#8d512d]">
              <Sparkles size={14} /> THE ROYAL SNACK BOXES
            </p>
            <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.05] text-[#351522] sm:text-5xl md:text-6xl">
              More crunch.<br /><span className="italic text-[#a66c35]">More to share.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#684d49] md:text-lg">
              Pick a ready-made box for every kind of snacker, then make it yours with a custom flavour mix.
            </p>
            <a href="#combo-boxes" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#681b34] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#681b34]/15 transition hover:-translate-y-0.5 hover:bg-[#812443]">
              Explore the boxes <ArrowDown size={16} />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute inset-8 rounded-full bg-[#d7a767]/20 blur-3xl" />
            <Image src="/images/Snaxsa main/All-flavours-best.png" alt="Snax सा makhana flavours together" width={1000} height={700} priority className="relative h-auto w-full drop-shadow-[0_24px_28px_rgba(82,39,32,0.16)]" />
            <div className="absolute bottom-3 left-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur md:bottom-8 md:left-8">
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#9a683d]">ROASTED, NOT FRIED</p>
              <p className="mt-1 font-display text-lg font-bold text-[#351522]">A royal crunch in every box</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="combo-boxes" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <p className="text-xs font-bold tracking-[0.22em] text-[#a66c35]">THREE WAYS TO SHARE</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#351522] sm:text-4xl">Choose your combo box</h2>
            <p className="mt-3 text-[#765e58]">Thoughtfully packed for tasting, sharing, or keeping all the crunch to yourself.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {comboBoxes.map((box, index) => {
              const message = `Hi Snax सा! I'd like to order the ${box.name} (${box.pack}) for ₹${box.price}.`;
              return (
                <motion.article key={box.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.08 }} className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_50px_rgba(76,37,28,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(76,37,28,0.14)] ${box.featured ? "border-[#b77e43]/50 ring-1 ring-[#b77e43]/20" : "border-[#eadfd4]"}`}>
                  {box.featured && <span className="absolute right-4 top-4 z-10 rounded-full bg-[#681b34] px-3 py-1.5 text-[10px] font-bold tracking-wider text-white">GRAND FAVOURITE</span>}
                  <div className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${box.tone} p-7`}>
                    <div className="absolute -bottom-14 h-36 w-4/5 rounded-full bg-[#915f47]/10 blur-2xl" />
                    <Image src={box.image} alt={`${box.name} makhana assortment`} width={600} height={420} className="relative h-full w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-4 left-5 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-[#79533c] backdrop-blur">{box.label}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-display text-xl font-bold text-[#351522]">{box.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#765e58]">{box.detail}</p>
                    <div className="mt-5 flex items-end justify-between border-t border-[#efe6dd] pt-4">
                      <div><p className="text-xs font-semibold text-[#9a8177]">IN THE BOX</p><p className="mt-1 font-semibold text-[#482e2d]">{box.pack}</p></div>
                      <p className="font-display text-3xl font-extrabold text-[#681b34]"><span className="mr-0.5 text-base">₹</span>{box.price}</p>
                    </div>
                    <a href={whatsappLinkWithMessage(message)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#681b34] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#812443]">
                      Order this box <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="build-your-own" className="grain scroll-mt-20 bg-[#f2e8dd] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#a66c35]"><Gift size={16} /> YOUR BOX, YOUR WAY</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#351522] sm:text-4xl">Build your own combo</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-[#684d49]">Choose a box size, then select a flavour for every jar. Your full selection will be ready to send to our team on WhatsApp.</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d9c5b0] bg-white/60 px-4 py-2 text-sm font-semibold text-[#684d49]"><Check size={15} className="text-[#8a5a32]" /> Select a flavour for every jar</p>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_20px_55px_rgba(76,37,28,0.08)] backdrop-blur sm:p-8">
            <div className="mb-5">
              <p className="text-xs font-bold tracking-[0.18em] text-[#a66c35]">STEP 1 · CHOOSE YOUR BOX</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {builderOptions.map((option) => {
                  const active = option.id === builderId;
                  return <button key={option.id} type="button" aria-pressed={active} onClick={() => setBuilderId(option.id)} className={`rounded-2xl border p-3 text-left transition ${active ? "border-[#8d512d] bg-[#fff4e7] shadow-sm ring-1 ring-[#8d512d]/15" : "border-[#eee3d8] bg-white hover:border-[#d4b08b]"}`}>
                    <span className="block text-sm font-bold leading-snug text-[#432b2b]">{option.title}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#8d512d]">{option.price}</span>
                  </button>;
                })}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#856f66]">{currentBuilder.description}</p>
            </div>

            <div className="flex items-center justify-between border-t border-[#eee3d8] pt-5">
              <div><p className="text-xs font-bold tracking-[0.18em] text-[#a66c35]">STEP 2 · PICK YOUR FLAVOURS</p><h3 className="mt-1 font-display text-xl font-bold text-[#351522]">Choose every jar</h3></div>
              <span className="rounded-full bg-[#f5eee6] px-3 py-1.5 text-xs font-semibold text-[#795c52]">{selectedJarCount} / {jarSlots.length}</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {jarSlots.map((slot) => <label key={slot.id} className="block">
                <span className="mb-1.5 block text-xs font-semibold text-[#795c52]">{slot.size} jar {slot.number}</span>
                <span className="relative block">
                  <select value={jarFlavours[slot.id] ?? ""} onChange={(event) => setJarFlavours((current) => ({ ...current, [slot.id]: event.target.value }))} className="w-full appearance-none rounded-xl border border-[#e7d9cb] bg-white px-4 py-3 pr-10 text-sm font-semibold text-[#432b2b] outline-none transition focus:border-[#9c643a] focus:ring-2 focus:ring-[#9c643a]/15">
                    <option value="" disabled>Choose a flavour</option>
                    {flavours.map((flavour) => <option key={flavour.id} value={flavour.name}>{flavour.name}</option>)}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#947d71]" />
                </span>
              </label>)}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#eee3d8] pt-5">
              <div><p className="text-xs font-semibold text-[#9a8177]">YOUR BOX PRICE</p><p className="font-display text-2xl font-extrabold text-[#681b34]">{currentBuilder.price}</p></div>
              <a aria-disabled={!allJarsSelected} href={allJarsSelected ? buildLink : undefined} target={allJarsSelected ? "_blank" : undefined} rel={allJarsSelected ? "noopener noreferrer" : undefined} className={`inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-white transition ${allJarsSelected ? "bg-[#681b34] shadow-lg shadow-[#681b34]/15 hover:-translate-y-0.5 hover:bg-[#812443]" : "cursor-not-allowed bg-[#b6a19a]"}`}>
                <MessageCircle size={16} /> {allJarsSelected ? "Continue on WhatsApp" : "Choose all flavours"} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
