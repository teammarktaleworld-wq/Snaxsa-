"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram as InstagramIcon } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";

const galleryImages = [
  { src: "/images/peri/jar-peri.png", alt: "Peri Punch roasted makhana jar" },
  { src: "/images/tangy/jar-tangy.png", alt: "Tangy Tingle roasted makhana jar" },
  { src: "/images/mintypinch.jpeg", alt: "Minty Pinch roasted makhana jar" },
  { src: "/images/pepperburst/pepperbursts.png", alt: "Snow Pepper Burst roasted makhana jar" },
  { src: "/images/jars-trio.png", alt: "Snax सा flavour line-up" },
  { src: "/images/tangy/masalatangy.png", alt: "Snax सा jar, freshly packed" },
];

export default function Reviews() {
  return (
    <section id="gallery" className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
      <GradientBlobs variant="lav" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Snax सा On Instagram"
          title="A Peek Into Our"
          highlight="Jars & Kitchen"
          subtitle="Product shots and everyday snacking moments — follow along for new flavour drops."
        />

        <div className="flex items-center justify-between mb-6">
          <p className="uppercase tracking-[0.15em] text-xs font-bold text-coral flex items-center gap-1.5">
            <InstagramIcon size={14} /> @snaxsa_makhana
          </p>
          <Link
            href="/gallery"
            className="text-sm font-semibold text-royal hover:text-coral flex items-center gap-1 transition-colors"
          >
            See Full Gallery <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-2xl overflow-hidden glass shadow-glass p-2"
              >
                <Image src={img.src} alt={img.alt} fill className="object-contain p-2" />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-gradient text-white font-semibold text-sm shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            <InstagramIcon size={16} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
