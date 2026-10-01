// // import { Metadata } from "next";
// // import Image from "next/image";
// // import PageHero from "@/components/ui/PageHero";
// // import FlavourGrid from "@/components/flavours/FlavourGrid";
// // import FlavourFinder from "@/components/flavours/FlavourFinder";
// // import CTA from "@/components/home/CTA";

// // export const metadata: Metadata = {
// //   title: "Our Flavours | Snax सा",
// //   description: "Explore all four Snax सा roasted makhana flavours — Peri Punch, Tangy Tingle, Minty Pinch and Snow Pepper Burst.",
// // };

// // function JarsIllustration() {
// //   return (
// //     <div className="relative w-full max-w-sm mx-auto aspect-square glass rounded-4xl shadow-lift p-8">
// //       <Image src="/images/jars-trio2.png" alt="Snax सा flavour jars" fill className="object-contain p-6" />
// //     </div>
// //   );
// // }

// // export default function FlavoursPage() {
// //   return (
// //     <main className="relative">
// //       <PageHero
// //         eyebrow="Our Flavours"
// //         title="Four Ways To"
// //         highlight="Crunch Royally"
// //         description="Every jar is roasted fresh in small batches and seasoned with our own spice blends — pick your favourite, or collect all four."
// //         pillLabel="100% ROASTED, NOT FRIED"
// //         illustration={<JarsIllustration />}
// //         variant="mint"
// //       />
// //       <FlavourGrid />
// //       <FlavourFinder />
// //       <CTA />
// //     </main>
// //   );
// // }


// // C:\Marktale-projectes\Snaxsa-\app\order\page.tsx

// import { Metadata } from "next";
// import Image from "next/image";
// import PageHero from "@/components/ui/PageHero";
// import FlavourGrid from "@/components/flavours/FlavourGrid";
// import FlavourFinder from "@/components/flavours/FlavourFinder";
// import CTA from "@/components/home/CTA";

// export const metadata: Metadata = {
//   title: "Our Flavours | Snax सा",
//   description: "Explore all four Snax सा roasted makhana flavours — Peri Punch, Tangy Tingle, Minty Pinch and Snow Pepper Burst.",
// };

// function JarsIllustration() {
//   return (
//     <div className="relative w-full max-w-lg mx-auto aspect-[4/3]">
//       <Image
//         src="/images/Snaxsa main/Trioflavoursimage.png"
//         alt="Snax सा flavour jars"
//         fill
//         className="object-contain drop-shadow-2xl"
//         sizes="(max-width: 768px) 100vw, 512px"
//         priority
//       />
//     </div>
//   );
// }

// export default function FlavoursPage() {
//   return (
//     <main className="relative">
//       <PageHero
//         eyebrow="Our Flavours"
//         title="Four Ways To"
//         highlight="Crunch Royally"
//         description="Every jar is roasted fresh in small batches and seasoned with our own spice blends — pick your favourite, or collect all four."
//         pillLabel="100% ROASTED, NOT FRIED"
//         illustration={<JarsIllustration />}
//         variant="mint"
//       />
//       <FlavourGrid />
//       <FlavourFinder />
//       <CTA />
//     </main>
//   );
// }












import { Metadata } from "next";
import Image from "next/image";

import PageHero from "@/components/ui/PageHero";
import FlavourGrid from "@/components/flavours/FlavourGrid";
import FlavourFinder from "@/components/flavours/FlavourFinder";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Our Flavours | Snax सा",
  description:
    "Explore all four Snax सा roasted makhana flavours — Peri Punch, Tangy Tingle, Minty Pinch and Snow Pepper Burst.",
};

function JarsIllustration() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      {/* Premium image frame */}
      <div
        className="
          relative
          w-full
          aspect-[16/9]
          overflow-hidden
          rounded-[2rem]
          border
          border-white/80
          bg-white/40
          p-2
          shadow-[0_25px_70px_rgba(100,60,50,0.16)]
          backdrop-blur-sm
        "
      >
        {/* Inner image */}
        <div
          className="
            relative
            w-full
            h-full
            overflow-hidden
            rounded-[1.5rem]
            bg-[#fff8ef]
          "
        >
          <Image
            src="/images/Snaxsa main/Trioflavoursimage.png"
            alt="Snax सा roasted makhana flavours"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 620px"
            className="
              object-cover
              object-center
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
          />

          {/* Very subtle premium highlight */}
          <div
            className="
              absolute
              inset-0
              pointer-events-none
              bg-gradient-to-br
              from-white/10
              via-transparent
              to-transparent
            "
          />
        </div>
      </div>
    </div>
  );
}

export default function FlavoursPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Our Flavours"
        title="Four Ways To"
        highlight="Crunch Royally"
        description="Every jar is roasted fresh in small batches and seasoned with our own spice blends — pick your favourite, or collect all four."
        pillLabel="100% ROASTED, NOT FRIED"
        illustration={<JarsIllustration />}
        variant="mint"
      />

      <FlavourGrid />

      <FlavourFinder />

      <CTA />
    </main>
  );
}