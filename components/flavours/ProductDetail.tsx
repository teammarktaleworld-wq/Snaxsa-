"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Flame, Leaf, ShoppingCart, Sparkles, X } from "lucide-react";
import type { Flavour } from "@/types";
import { flavours } from "@/data/flavours";
import { flavourPageDetails } from "@/data/flavour-page-details";
import { useCart } from "@/components/cart/CartProvider";

type Weight = "75g" | "40g";

export default function ProductDetail({ flavour }: { flavour: Flavour }) {
  const details = flavourPageDetails[flavour.id];
  const gallery = [
    { src: flavour.image, label: `${flavour.name} product jar` },
    ...(details?.gallery ?? []).filter((image) => image.src !== flavour.image),
  ];
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [weight, setWeight] = useState<Weight>("75g");
  const [added, setAdded] = useState(false);
  const [recommendedFlavour, setRecommendedFlavour] = useState<Flavour | null>(null);
  const [recommendedWeight, setRecommendedWeight] = useState<Weight | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const price = flavour.weightPrices[weight];

  function handleAddToCart() {
    addItem({ flavourId: flavour.id, name: flavour.name, weight, price, image: flavour.image });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2600);
  }

  function addRecommendedToCart() {
    if (!recommendedFlavour || !recommendedWeight) return;
    addItem({
      flavourId: recommendedFlavour.id,
      name: recommendedFlavour.name,
      weight: recommendedWeight,
      price: recommendedFlavour.weightPrices[recommendedWeight],
      image: recommendedFlavour.image,
    });
    setRecommendedFlavour(null);
    setRecommendedWeight(null);
  }

  return (
    <main className="min-h-screen bg-[#fffaf4] pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link href="/flavours" className="inline-flex items-center gap-2 text-sm font-semibold text-[#765e58] transition hover:text-[#681b34]"><ArrowLeft size={16} /> All flavours</Link>

        <section className="mt-6 grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[#eadfd4] bg-[radial-gradient(ellipse_at_50%_45%,rgba(226,177,125,0.23),rgba(255,248,239,0.9)_68%)] p-5 shadow-[0_20px_55px_rgba(76,37,28,0.08)] sm:rounded-[2.5rem] sm:p-8">
              <Image src={activeImage.src} alt={activeImage.label} fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-contain p-5 sm:p-8" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#795c52] backdrop-blur">{activeImage.label.toUpperCase()}</span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
              {gallery.map((image) => (
                <button key={image.src} type="button" aria-label={`View ${image.label}`} aria-pressed={activeImage.src === image.src} onClick={() => setActiveImage(image)} className={`relative aspect-square overflow-hidden rounded-xl border bg-white p-1 transition ${activeImage.src === image.src ? "border-[#8d512d] ring-2 ring-[#8d512d]/15" : "border-[#eadfd4] hover:border-[#c7a487]"}`}>
                  <Image src={image.src} alt="" fill sizes="(max-width: 640px) 22vw, 10vw" className="object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d8bea3] bg-white/70 px-3.5 py-2 text-[10px] font-bold tracking-[0.18em] text-[#8d512d]"><Sparkles size={13} /> ROASTED, NOT FRIED</div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: flavour.colorFrom }}>{flavour.tagline} · {details?.mood}</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-[#351522] sm:text-5xl">{flavour.name}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#684d49]">{flavour.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-[#684d49] shadow-sm"><Leaf size={14} className="text-[#538357]" /> {flavour.protein} protein</span>
              {flavour.shelfLife !== "Not specified" && <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-[#684d49] shadow-sm">Best before {flavour.shelfLife}</span>}
              {details && <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-[#684d49] shadow-sm"><Flame size={14} style={{ color: flavour.colorFrom }} /> {details.heat}</span>}
            </div>

            <div className="mt-8 border-t border-[#eadfd4] pt-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div><p className="text-xs font-bold tracking-[0.18em] text-[#856f66]">CHOOSE YOUR JAR</p><p className="mt-1 text-sm text-[#947d71]">Select a pack size</p></div>
                <p className="font-display text-3xl font-extrabold text-[#681b34]">₹{price}<span className="ml-2 font-body text-sm font-medium text-[#856f66]">/ {weight}</span></p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {(["75g", "40g"] as const).map((size) => (
                  <button key={size} type="button" aria-pressed={weight === size} onClick={() => setWeight(size)} className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 text-left transition ${weight === size ? "border-[#8d512d] bg-[#fff3e5] ring-2 ring-[#8d512d]/15" : "border-[#eadfd4] bg-white hover:border-[#c7a487]"}`}>
                    <span><span className="block text-sm font-bold text-[#432b2b]">{size} jar</span><span className="mt-0.5 block text-xs text-[#856f66]">₹{flavour.weightPrices[size]}</span></span>
                    <span className={`grid h-5 w-5 place-items-center rounded-full border ${weight === size ? "border-[#681b34] bg-[#681b34] text-white" : "border-[#d9cabe] text-transparent"}`}><Check size={12} /></span>
                  </button>
                ))}
              </div>
              <button type="button" onClick={handleAddToCart} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#681b34] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#681b34]/15 transition hover:-translate-y-0.5 hover:bg-[#812443]">
                {added ? <Check size={18} /> : <ShoppingCart size={18} />}{added ? "Added to cart" : "Add to cart"}
              </button>
              <div aria-live="polite" className="mt-3 flex min-h-5 items-center justify-center gap-3 text-sm font-semibold text-[#52744c]">
                {added && <><Check size={15} /> {flavour.name} · {weight} added as its own cart item. <Link href="/cart" className="inline-flex items-center gap-1 text-[#681b34] underline underline-offset-2">View cart <ArrowRight size={13} /></Link></>}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#eee3d8] bg-white/70 p-4">
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#a66c35]">WHAT'S INSIDE</p>
              <div className="mt-3 flex flex-wrap gap-2">{flavour.ingredients.map((ingredient) => <span key={ingredient} className="rounded-full bg-[#f8efe6] px-3 py-1.5 text-xs font-medium text-[#684d49]">{ingredient}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 border-t border-[#eadfd4] pt-12 md:grid-cols-3 md:pt-16">
          <div><p className="text-xs font-bold tracking-[0.18em] text-[#a66c35]">TASTING NOTES</p><h2 className="mt-2 font-display text-2xl font-bold text-[#351522]">A little more flavour</h2><ul className="mt-4 space-y-2">{(details?.notes ?? [flavour.tagline]).map((note) => <li key={note} className="flex items-center gap-2 text-sm text-[#684d49]"><span className="h-1.5 w-1.5 rounded-full" style={{ background: flavour.colorFrom }} />{note}</li>)}</ul></div>
          <div><p className="text-xs font-bold tracking-[0.18em] text-[#a66c35]">BEST PAIRED WITH</p><h2 className="mt-2 font-display text-2xl font-bold text-[#351522]">Make it a moment</h2><ul className="mt-4 space-y-2">{(details?.pairings ?? ["Evening snack", "Tea time", "On the go"]).map((pairing) => <li key={pairing} className="flex items-center gap-2 text-sm text-[#684d49]"><span className="h-1.5 w-1.5 rounded-full" style={{ background: flavour.colorFrom }} />{pairing}</li>)}</ul></div>
          {details?.story && <div><p className="text-xs font-bold tracking-[0.18em] text-[#a66c35]">THE ORIGIN STORY</p><h2 className="mt-2 font-display text-2xl font-bold text-[#351522]">Made for this mood</h2><p className="mt-4 text-sm leading-relaxed text-[#684d49]">{details.story}</p></div>}
        </section>

        <section className="mt-14 border-t border-[#eadfd4] pt-10 sm:pt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div><p className="text-xs font-bold tracking-[0.18em] text-[#a66c35]">KEEP THE CRUNCH GOING</p><h2 className="mt-2 font-display text-3xl font-extrabold text-[#351522] sm:text-4xl">More Crunch Recommended</h2></div>
            <div className="hidden gap-2 sm:flex">
              <button type="button" aria-label="Scroll recommended flavours left" onClick={() => carouselRef.current?.scrollBy({ left: -340, behavior: "smooth" })} className="grid h-10 w-10 place-items-center rounded-full border border-[#ddcbb8] bg-white text-[#681b34] transition hover:bg-[#fff3e5]"><ChevronLeft size={19} /></button>
              <button type="button" aria-label="Scroll recommended flavours right" onClick={() => carouselRef.current?.scrollBy({ left: 340, behavior: "smooth" })} className="grid h-10 w-10 place-items-center rounded-full border border-[#ddcbb8] bg-white text-[#681b34] transition hover:bg-[#fff3e5]"><ChevronRight size={19} /></button>
            </div>
          </div>
          <div ref={carouselRef} className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 scrollbar-none sm:mx-0 sm:gap-6 sm:px-0">
            {flavours.filter((item) => item.id !== flavour.id).map((item) => {
              const itemGallery = flavourPageDetails[item.id]?.gallery ?? [];
              const hoverImage = itemGallery.find((image) => /burst|explosion/i.test(image.label))?.src ?? itemGallery[2]?.src ?? item.image;
              return (
                <article key={item.id} className="w-[72vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl border border-[#eadfd4] bg-white shadow-[0_12px_38px_rgba(76,37,28,0.07)] sm:w-[calc((100%-3rem)/3)] sm:max-w-none">
                  <Link href={`/flavours/${item.id}`} aria-label={`View ${item.name} product details`} className="group relative block aspect-square overflow-hidden" style={{ background: `linear-gradient(145deg, ${item.colorFrom}18, ${item.colorTo}12)` }}>
                    <Image src={item.image} alt={`${item.name} roasted makhana jar`} fill sizes="(max-width: 640px) 72vw, 30vw" className="object-contain p-3 transition duration-500 group-hover:scale-105 group-hover:opacity-0" />
                    <Image src={hoverImage} alt={`${item.name} serving image`} fill sizes="(max-width: 640px) 72vw, 30vw" className="object-contain p-3 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/90 p-2 text-[#681b34] shadow-sm"><ArrowRight size={16} /></span>
                  </Link>
                  <div className="flex h-[220px] flex-col p-4 text-left sm:h-[235px] sm:p-5">
                    <p className="text-[9px] font-bold uppercase tracking-widest sm:text-[10px]" style={{ color: item.colorFrom }}>{item.tagline}</p>
                    <h3 className="mt-1 font-display text-lg font-extrabold leading-tight text-[#351522] sm:text-xl">{item.name}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#684d49] sm:text-sm">{item.description}</p>
                    <p className="mt-auto mb-3 text-xs font-semibold text-[#432b2b] sm:text-sm">75g ₹{item.weightPrices["75g"]}<span className="mx-2 text-[#b8a397]">·</span>40g ₹{item.weightPrices["40g"]}</p>
                    <button type="button" onClick={() => { setRecommendedFlavour(item); setRecommendedWeight(null); }} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#681b34] px-3 py-2.5 text-xs font-bold text-white transition hover:bg-[#812443] sm:text-sm"><ShoppingCart size={15} /> Add to cart</button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="mt-10 text-center"><Link href="/flavours" className="inline-flex items-center gap-2 rounded-full border border-[#c9ae96] px-5 py-3 text-sm font-semibold text-[#684d49] transition hover:bg-white"><ArrowLeft size={15} /> Browse all six flavours</Link></div>
      </div>
      {recommendedFlavour && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button type="button" aria-label="Close weight selection" className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setRecommendedFlavour(null)} />
          <div role="dialog" aria-modal="true" aria-labelledby="recommended-weight-title" className="relative z-10 w-full max-w-md rounded-3xl bg-[#fffaf4] p-6 shadow-2xl sm:p-8">
            <button type="button" aria-label="Close" onClick={() => setRecommendedFlavour(null)} className="absolute right-4 top-4 rounded-full p-2 text-[#856f66] transition hover:bg-black/5"><X size={18} /></button>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#681b34]">Choose a jar size</p>
            <h2 id="recommended-weight-title" className="mt-2 pr-8 font-display text-2xl font-extrabold text-[#351522]">{recommendedFlavour.name}</h2>
            <p className="mt-1 text-sm text-[#684d49]">Select the weight you’d like to add.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {(["75g", "40g"] as const).map((size) => <button key={size} type="button" aria-pressed={recommendedWeight === size} onClick={() => setRecommendedWeight(size)} className={`rounded-2xl border p-4 text-left transition ${recommendedWeight === size ? "border-[#8d512d] bg-[#fff3e5] ring-2 ring-[#8d512d]/15" : "border-[#eadfd4] bg-white hover:border-[#c7a487]"}`}><span className="block text-sm font-bold text-[#432b2b]">{size} jar</span><span className="mt-1 block font-display text-xl font-extrabold text-[#681b34]">₹{recommendedFlavour.weightPrices[size]}</span></button>)}
            </div>
            <button type="button" disabled={!recommendedWeight} onClick={addRecommendedToCart} className="mt-5 w-full rounded-full bg-[#681b34] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#812443] disabled:cursor-not-allowed disabled:opacity-40">{recommendedWeight ? `Add ${recommendedWeight} jar to cart` : "Choose a weight"}</button>
          </div>
        </div>
      )}
    </main>
  );
}
