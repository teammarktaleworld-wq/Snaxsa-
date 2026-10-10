
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, X } from "lucide-react";
import { flavours } from "@/data/flavours";
import { flavourPageDetails } from "@/data/flavour-page-details";
import { useCart } from "@/components/cart/CartProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

export default function FlavoursHighlight() {
  const { addItem } = useCart();
  const [pendingFlavour, setPendingFlavour] = useState<(typeof flavours)[number] | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<"75g" | "40g" | null>(null);
  const [cartToast, setCartToast] = useState("");

  const addSelectedJar = () => {
    if (!pendingFlavour || !selectedWeight) return;
    addItem({
      flavourId: pendingFlavour.id,
      name: pendingFlavour.name,
      weight: selectedWeight,
      price: pendingFlavour.weightPrices[selectedWeight],
      image: pendingFlavour.image,
    });
    setCartToast(`${pendingFlavour.name} · ${selectedWeight} added to cart`);
    setPendingFlavour(null);
    setSelectedWeight(null);
    window.setTimeout(() => setCartToast(""), 2600);
  };

  return (
    <section
      id="flavours"
      className="grain relative py-24 md:py-32 overflow-hidden bg-white/50"
    >
      <GradientBlobs variant="mint" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* ── Header row ── */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16 md:mb-20">
          <SectionHeading
            eyebrow="Our Flavours"
            title="Snaxsa Ways To"
            highlight="Crunch Royally"
            align="left"
            className="mb-0"
          />
          <Link
            href="/flavours"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-coral transition-colors group"
          >
            Explore All Flavours
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* ── Flavour grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-10">
          {flavours.map((flavour, i) => (
            <Reveal key={flavour.id} delay={i * 0.1}>
              <div className="h-full overflow-hidden rounded-3xl border border-ink/10 bg-white/85 shadow-[0_14px_45px_rgba(60,40,20,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(60,40,20,0.13)]">
                {(() => {
                  const flavourGallery = flavourPageDetails[flavour.id]?.gallery ?? [];
                  const hoverImage = flavourGallery.find((image) => /(?:makhana|flavour) burst|explosion/i.test(image.label))?.src ?? flavourGallery[2]?.src ?? flavour.image;
                  return (
                    <Link
                      href={`/flavours/${flavour.id}`}
                      aria-label={`View ${flavour.name} product details`}
                      className="group relative block aspect-square overflow-hidden"
                      style={{ background: `linear-gradient(145deg, ${flavour.colorFrom}18, ${flavour.colorTo}12)` }}
                    >
                      <Image
                        src={flavour.image}
                        alt={`${flavour.name} roasted makhana jar`}
                        fill
                        className="object-contain p-3 transition duration-500 group-hover:scale-105 group-hover:opacity-0"
                        sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 31vw"
                        priority={i < 2}
                      />
                      <Image
                        src={hoverImage}
                        alt={`${flavour.name} makhana serving image`}
                        fill
                        className="object-contain p-3 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                        sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 31vw"
                      />
                      <span className="absolute bottom-3 right-3 rounded-full bg-white/90 p-2 text-royal shadow-sm transition group-hover:translate-x-0.5">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                  );
                })()}

                <div className="flex h-[230px] flex-col items-start p-4 text-left sm:h-[250px] sm:p-5">
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-widest sm:text-[10px]" style={{ color: flavour.colorFrom }}>
                    {flavour.tagline}
                  </p>
                  <h3 className="font-display text-base font-extrabold leading-tight text-ink sm:text-xl">
                    {flavour.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-ink-soft/75 sm:text-sm">
                    {flavour.description}
                  </p>
                  <p className="mt-auto mb-3 text-[11px] font-semibold text-ink sm:text-sm">
                    75g ₹{flavour.weightPrices["75g"]}<span className="mx-2 text-ink-soft/40">·</span>40g ₹{flavour.weightPrices["40g"]}
                  </p>
                  <button
                    type="button"
                    onClick={() => { setPendingFlavour(flavour); setSelectedWeight(null); }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-royal px-3 py-2.5 text-xs font-bold text-white transition hover:bg-royal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal sm:text-sm"
                  >
                    <ShoppingCart size={15} /> Add to cart
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Mobile "View All" link ── */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/flavours"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
          >
            Explore All Flavours <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {pendingFlavour && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button type="button" aria-label="Close weight selection" className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setPendingFlavour(null)} />
          <div role="dialog" aria-modal="true" aria-labelledby="weight-dialog-title" className="relative z-10 w-full max-w-md rounded-3xl bg-[#fffaf4] p-6 shadow-2xl sm:p-8">
            <button type="button" aria-label="Close" onClick={() => setPendingFlavour(null)} className="absolute right-4 top-4 rounded-full p-2 text-ink-soft transition hover:bg-black/5 hover:text-ink"><X size={18} /></button>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">Choose a jar size</p>
            <h2 id="weight-dialog-title" className="mt-2 pr-8 font-display text-2xl font-extrabold text-ink">{pendingFlavour.name}</h2>
            <p className="mt-1 text-sm text-ink-soft">Select the weight you’d like to add.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {(["75g", "40g"] as const).map((weight) => (
                <button key={weight} type="button" aria-pressed={selectedWeight === weight} onClick={() => setSelectedWeight(weight)} className={`rounded-2xl border p-4 text-left transition ${selectedWeight === weight ? "border-royal bg-royal/5 ring-2 ring-royal/20" : "border-ink/10 bg-white hover:border-royal/40"}`}>
                  <span className="block text-sm font-bold text-ink">{weight} jar</span>
                  <span className="mt-1 block font-display text-xl font-extrabold text-royal">₹{pendingFlavour.weightPrices[weight]}</span>
                </button>
              ))}
            </div>
            <button type="button" disabled={!selectedWeight} onClick={addSelectedJar} className="mt-5 w-full rounded-full bg-royal px-5 py-3.5 text-sm font-bold text-white transition hover:bg-royal/90 disabled:cursor-not-allowed disabled:opacity-40">
              {selectedWeight ? `Add ${selectedWeight} jar to cart` : "Choose a weight"}
            </button>
          </div>
        </div>
      )}
      <div aria-live="polite" className={`fixed bottom-5 left-1/2 z-[110] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-xl transition ${cartToast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}>
        {cartToast}
      </div>
    </section>
  );
}
