import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Gallery | Snax सा",
  description: "A look at Snax सा — our jars, our roasts, and our royal Rajasthani roots.",
};

function GalleryIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square glass rounded-4xl shadow-lift p-6 grid grid-cols-2 gap-3">
      {["/images/jar-peri.png", "/images/jar-tangy.png", "/images/jar-minty.png", "/images/jar-snowpepper.png"].map(
        (src) => (
          <div key={src} className="relative rounded-2xl overflow-hidden bg-white/40">
            <Image src={src} alt="Snax सा jar" fill className="object-contain p-2" />
          </div>
        )
      )}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Gallery"
        title="Snax सा,"
        highlight="In The Wild"
        description="Product shots, jar close-ups and the odd Jaipur sunset — a peek into the Snax सा world."
        pillLabel="#SNAXSA"
        illustration={<GalleryIllustration />}
        variant="lav"
      />
      <MasonryGrid />
      <CTA />
    </main>
  );
}
