"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const heightClass = {
  sm: "h-56",
  md: "h-72",
  lg: "h-96",
};

export default function MasonryGrid() {
  return (
    <section className="grain relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 0.06} className="break-inside-avoid">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className={cn(
                  "relative rounded-3xl overflow-hidden shadow-glass group",
                  heightClass[item.height]
                )}
              >
                {item.type === "image" && item.src && (
                  <>
                    <Image
                      src={item.src}
                      alt={item.caption ?? "Snax सा gallery photo"}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-semibold">{item.caption}</p>
                    </div>
                  </>
                )}
                {item.type === "quote" && (
                  <div
                    className={cn(
                      "w-full h-full flex items-center justify-center p-6 text-center",
                      item.bg
                    )}
                  >
                    <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
                      {item.quote}
                    </p>
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
