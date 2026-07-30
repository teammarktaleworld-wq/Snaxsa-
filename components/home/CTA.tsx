// "use client";

// import { motion } from "framer-motion";
// import { MessageCircle, ArrowRight, Mail } from "lucide-react";
// import Button from "@/components/ui/Button";
// import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";
// import MagneticButton from "@/components/ui/MagneticButton";
// import Reveal from "@/components/ui/Reveal";

// const amazonConfigured = SITE_CONFIG.amazon.classic && SITE_CONFIG.amazon.classic !== "#";
// const buyNowHref = amazonConfigured ? SITE_CONFIG.amazon.classic : "/flavours";

// const particles = Array.from({ length: 10 }).map((_, i) => ({
//   id: i,
//   left: `${(i * 37) % 100}%`,
//   delay: i * 0.4,
//   duration: 4 + (i % 4),
// }));

// export default function CTA() {
//   return (
//     <section id="contact" className="px-5 md:px-8 py-6">
//       <Reveal>
//         <div className="relative max-w-6xl mx-auto rounded-4xl bg-royal-gradient px-6 md:px-14 py-14 md:py-20 text-center overflow-hidden shadow-[0_30px_70px_-18px_rgba(107,16,46,0.55)]">
//           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
//           <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_85%_80%,white,transparent_40%)]" />

//           {particles.map((p) => (
//             <motion.span
//               key={p.id}
//               className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-sunbeam"
//               style={{ left: p.left }}
//               animate={{ y: [-10, -220], opacity: [0, 1, 0] }}
//               transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
//             />
//           ))}

//           <h2 className="relative font-display text-3xl md:text-5xl font-bold text-white mb-5">
//             Ready to taste Rajasthan&apos;s healthiest snack?
//           </h2>
//           <p className="relative text-white/80 max-w-xl mx-auto mb-9">
//             Order today and get freshly roasted makhana delivered to your door,
//             free, anywhere in Jaipur.
//           </p>
//           <div className="relative flex flex-wrap justify-center gap-4">
//             <MagneticButton>
//               <Button
//                 variant="primary"
//                 size="lg"
//                 icon={<ArrowRight size={18} />}
//                 className="bg-white !text-royal shadow-gold hover:!shadow-gold"
//                 href={buyNowHref}
//                 {...(amazonConfigured ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//               >
//                 Buy on Amazon
//               </Button>
//             </MagneticButton>
//             <MagneticButton>
//               <Button
//                 variant="whatsapp"
//                 size="lg"
//                 icon={<MessageCircle size={18} />}
//                 href={whatsappLinkWithMessage("Hi Snax सा! I'd like to order some makhana.")}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Order on WhatsApp
//               </Button>
//             </MagneticButton>
//             <MagneticButton>
//               <Button variant="outline" size="lg" icon={<Mail size={18} />} className="!bg-white/10 !border-white/30 !text-white hover:!text-gold hover:!border-gold" href="/contact">
//                 Contact Us
//               </Button>
//             </MagneticButton>
//           </div>
//         </div>
//       </Reveal>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

const amazonConfigured = SITE_CONFIG.amazon.classic && SITE_CONFIG.amazon.classic !== "#";
const buyNowHref = amazonConfigured ? SITE_CONFIG.amazon.classic : "/order";

const particles = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  delay: i * 0.4,
  duration: 4 + (i % 4),
}));

export default function CTA() {
  return (
    <section id="contact" className="px-5 md:px-8 py-6">
      <Reveal>
        <div className="relative max-w-6xl mx-auto rounded-4xl bg-[linear-gradient(120deg,#6B102E_0%,#7B1FA2_55%,#E91E63_100%)] px-6 md:px-14 py-14 md:py-20 text-center overflow-hidden shadow-[0_30px_70px_-18px_rgba(107,16,46,0.55)]">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_85%_80%,white,transparent_40%)]" />

          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-sunbeam"
              style={{ left: p.left }}
              animate={{ y: [-10, -220], opacity: [0, 1, 0] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
            />
          ))}

          <h2 className="relative font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Ready to taste Rajasthan&apos;s healthiest snack?
          </h2>
          <p className="relative text-white/80 max-w-xl mx-auto mb-9">
            Order today and get freshly roasted makhana delivered to your door,
            free, anywhere in Jaipur.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                className="bg-white !text-maroon shadow-gold hover:!shadow-gold"
                href={buyNowHref}
                {...(amazonConfigured ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                Buy on Amazon
              </Button>
            </MagneticButton>
            <MagneticButton>
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
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" icon={<Mail size={18} />} className="!bg-white/10 !border-white/30 !text-white hover:!text-gold hover:!border-gold" href="/contact">
                Contact Us
              </Button>
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}