import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { flavours } from "@/data/flavours";
import { flavourPageDetails } from "@/data/flavour-page-details";

export default function FlavourCollection() {
  return (
    <section className="grain relative overflow-hidden bg-[#fffaf4] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#a66c35]">
              THE SNAX SA LINE-UP
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#351522] sm:text-4xl">
              Six flavours. Your kind of crunch.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#765e58]">
            Choose a flavour to explore its story, ingredients, pack options, and more.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flavours.map((flavour, index) => {
            const flavourGallery = flavourPageDetails[flavour.id]?.gallery ?? [];
            const hoverImage =
              flavourGallery.find((image) => /burst|explosion/i.test(image.label))
                ?.src ??
              flavourGallery[2]?.src ??
              flavour.image;

            return (
              <Link
                key={flavour.id}
                href={`/flavours/${flavour.id}`}
                className="group overflow-hidden rounded-[1.75rem] border border-[#eadfd4] bg-white shadow-[0_16px_42px_rgba(76,37,28,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(76,37,28,0.13)]"
              >
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff6eb] to-[#f4e8dc] p-6"
                  style={{
                    background: `radial-gradient(ellipse at 50% 45%, ${flavour.colorFrom}22, #fff8ef 70%)`,
                  }}
                >
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-bold tracking-widest text-[#77564b]">
                    {flavour.tagline.toUpperCase()}
                  </span>
                  <Image
                    src={flavour.image}
                    alt={`${flavour.name} roasted makhana jar`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 transition duration-500 group-hover:scale-105 group-hover:opacity-0"
                    priority={index < 3}
                  />
                  <Image
                    src={hoverImage}
                    alt={`${flavour.name} flavour burst`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#351522]">
                        {flavour.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#765e58]">
                        {flavour.description}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="mt-1 shrink-0 text-[#a66c35] transition-transform group-hover:translate-x-1"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-[#efe6dd] pt-4 text-xs font-semibold text-[#795c52]">
                    <span>75g · ₹{flavour.weightPrices["75g"]}</span>
                    <span className="text-[#c8b6a6]">|</span>
                    <span>40g · ₹{flavour.weightPrices["40g"]}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
