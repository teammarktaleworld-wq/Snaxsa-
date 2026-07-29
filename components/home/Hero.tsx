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
















"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Truck, Leaf, ShieldCheck, WheatOff } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";
import Pill from "@/components/ui/Pill";

const trustPills = [
  { icon: <ShieldCheck size={16} className="text-pink-hot" />, label: "High Protein" },
  { icon: <ShieldCheck size={16} className="text-royal" />, label: "Rich in Calcium" },
  { icon: <WheatOff size={16} className="text-gold" />, label: "Gluten Free" },
  { icon: <Leaf size={16} className="text-coral" />, label: "Roasted Not Fried" },
  { icon: <ShieldCheck size={16} className="text-royal" />, label: "No Artificial Preservatives" },
];

// Buy Now: goes straight to Amazon once a real listing URL is configured;
// until then it falls back to scrolling visitors to the Flavours/Products
// section on this page, so the button is never inactive.
const amazonConfigured = SITE_CONFIG.amazon.classic && SITE_CONFIG.amazon.classic !== "#";
const buyNowHref = amazonConfigured ? SITE_CONFIG.amazon.classic : "/#flavours";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient overflow-hidden"
    >
      {/* decorative floating leaves */}
      <motion.div
        className="absolute top-24 left-[8%] text-4xl opacity-40 hidden md:block"
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🍃
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[3%] w-40 h-40 rounded-full bg-pink-hot/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-10 right-[10%] w-56 h-56 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Pill
            icon={<span className="w-1.5 h-1.5 rounded-full bg-pink-hot animate-pulse" />}
            className="mb-6"
          >
            MADE IN JAIPUR, RAJASTHAN
          </Pill>

          <h1 className="font-display font-extrabold leading-[1.08] text-4xl sm:text-5xl md:text-[3.4rem]">
            <span className="text-maroon">Healthy Crunch.</span>
            <br />
            <span className="text-gradient-maroon bg-[linear-gradient(120deg,#E91E63,#F57C00)] bg-clip-text text-transparent">
              Royal Taste.
            </span>
          </h1>

          <p className="mt-5 font-display text-xl md:text-2xl font-semibold text-ink/80">
            Snax <span className="text-gold">सा</span>{" "}
            <span className="text-sm md:text-base font-body font-medium text-ink/50 align-middle">
              PREMIUM ROASTED MAKHANA
            </span>
          </p>

          <p className="mt-4 text-ink/70 max-w-md leading-relaxed">
            Roasted to perfection with authentic Indian spices. High in protein,
            roasted not fried, and made with zero preservatives.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              href={buyNowHref}
              {...(amazonConfigured ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              Buy Now
            </Button>
            <Button variant="outline" size="lg" href="/flavours">
              Explore Flavours
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={18} />}
              href={whatsappLinkWithMessage("Hi Snax सा! I'd like to order some makhana.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </Button>
            <Button variant="ghost" size="lg" href="/contact">
              Contact Us
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {trustPills.map((pill) => (
              <Pill key={pill.label} icon={pill.icon}>
                {pill.label}
              </Pill>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink/80">
              <Leaf size={17} className="text-coral" />
              Roasted in Small Batches, Never Fried
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-ink/80">
              <Truck size={17} className="text-royal" />
              Free Delivery in Jaipur
            </div>
          </div>
        </motion.div>

        {/* Right column - decorative artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div
            className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(107,16,46,0.35)]"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)",
            }}
          >
            <Image
              src="/images/hero-jaipur.png"
              alt="Golden makhana pouring from a copper pot into a bowl, with Jaipur's Hawa Mahal skyline at sunset"
              width={1200}
              height={800}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          <motion.div
            className="absolute -bottom-6 -left-6 hidden sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="glass rounded-2xl px-5 py-3 shadow-card">
              <p className="text-xs text-ink/60 font-medium">Roasted Fresh</p>
              <p className="font-display font-bold text-maroon">Every Single Day</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}







