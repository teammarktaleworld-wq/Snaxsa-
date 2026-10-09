// // import { Metadata } from "next";
// // import PageHero from "@/components/ui/PageHero";
// // import ContactInfo from "@/components/contact/ContactInfo";
// // import ContactForm from "@/components/contact/ContactForm";
// // import MapCard from "@/components/contact/MapCard";
// // import GradientBlobs from "@/components/ui/GradientBlobs";

// // export const metadata: Metadata = {
// //   title: "Contact Us | Snax सा",
// //   description: "Get in touch with Snax सा — questions, orders and everything in between.",
// // };

// // export default function ContactPage() {
// //   return (
// //     <main className="relative">
// //       <PageHero
// //         eyebrow="Contact"
// //         title="Let's Talk"
// //         highlight="Makhana"
// //         description="Questions about an order, a bulk enquiry, or just want to say hi? We'd love to hear from you."
// //         pillLabel="WE REPLY WITHIN 24 HOURS"
// //         illustration={<ContactOrnament />}
// //         variant="coral"
// //       />

// //       <section className="grain relative py-16 md:py-24 overflow-hidden bg-white/50">
// //         <GradientBlobs variant="lav" />
// //         <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10">
// //           <div className="space-y-6">
// //             <ContactInfo />
// //             <MapCard />
// //           </div>
// //           <ContactForm />
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }



// // C:\Marktale-projectes\Snaxsa-\app\contact\page.tsx
// // Route: /contact

// import { Metadata } from "next";
// import Image from "next/image";
// import PageHero from "@/components/ui/PageHero";
// import ContactInfo from "@/components/contact/ContactInfo";
// import ContactForm from "@/components/contact/ContactForm";
// import MapCard from "@/components/contact/MapCard";
// import GradientBlobs from "@/components/ui/GradientBlobs";
// import { Phone, MessageCircle, Mail } from "lucide-react";
// import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";
// import Accordion from "@/components/faq/Accordion";

// export const metadata: Metadata = {
//   title: "Contact Us | Snax सा",
//   description: "Get in touch with Snax सा — questions, orders and everything in between.",
// };

// const highlights = [
//   { Icon: Phone, label: "Call us", value: SITE_CONFIG.phone, href: SITE_CONFIG.phoneHref, color: "bg-royal/15 text-royal" },
//   { Icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: whatsappLinkWithMessage("Hi Snax सा! I have a question."), color: "bg-success/15 text-success", external: true },
//   { Icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, color: "bg-gold/20 text-gold" },
// ];

// export default function ContactPage() {
//   return (
//     <main className="relative">
//       <PageHero
//         eyebrow="Contact"
//         title="Let's Talk"
//         highlight="Makhana"
//         description="Questions about an order, a bulk enquiry, or just want to say hi? We'd love to hear from you."
//         pillLabel="WE REPLY WITHIN 24 HOURS"
//         variant="coral"
//       />

//       <section className="relative max-w-6xl mx-auto px-5 md:px-8 -mt-8 md:-mt-10 z-10">
//         <div className="grid sm:grid-cols-3 gap-4">
//           {highlights.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               target={item.external ? "_blank" : undefined}
//               rel={item.external ? "noopener noreferrer" : undefined}
//               className="glass-strong rounded-2xl p-4 shadow-glass flex items-center gap-3 transition-transform duration-200 hover:-translate-y-1"
//             >
//               <span
//                 className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${item.color}`}
//               >
//                 <item.Icon size={18} />
//               </span>

//               <span className="min-w-0">
//                 <span className="block text-[11px] font-bold uppercase tracking-wide text-ink-soft/60">
//                   {item.label}
//                 </span>

//                 <span className="block text-sm font-semibold text-ink truncate">
//                   {item.value}
//                 </span>
//               </span>
//             </a>
//           ))}
//         </div>
//       </section>

//       <section className="grain relative py-16 md:py-24 overflow-hidden bg-white/50">
//         <GradientBlobs variant="lav" />
//         <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10">
//           <div className="space-y-6">
//             <ContactInfo />
//             <div className="relative rounded-4xl overflow-hidden glass shadow-lift h-64 md:h-72">
//               <Image
//                 src="/images/contact/snax-sa-storefront.webp"
//                 alt="Snax सा makhana packaging and storefront"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <ContactForm />
//         </div>
//       </section>

//       <section className="relative max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
//         <MapCard />
//       </section>

//       <Accordion />
//     </main>
//   );
// }


// app/contact/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
// import { Phone, MessageCircle, Mail } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapCard from "@/components/contact/MapCard";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Accordion from "@/components/faq/Accordion";

import {
  SITE_CONFIG,
  whatsappLinkWithMessage,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us | Snax सा",
  description:
    "Get in touch with Snax सा — questions, orders and everything in between.",
};

// const highlights = [
//   {
//     Icon: Phone,
//     label: "Call us",
//     value: SITE_CONFIG.phone,
//     href: SITE_CONFIG.phoneHref,
//     color: "bg-royal/15 text-royal",
//   },
//   {
//     Icon: MessageCircle,
//     label: "WhatsApp",
//     value: "Chat instantly",
//     href: whatsappLinkWithMessage(
//       "Hi Snax सा! I have a question."
//     ),
//     color: "bg-success/15 text-success",
//     external: true,
//   },
//   {
//     Icon: Mail,
//     label: "Email",
//     value: SITE_CONFIG.email,
//     href: `mailto:${SITE_CONFIG.email}`,
//     color: "bg-gold/20 text-gold",
//   },
// ];

export default function ContactPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        highlight="Makhana"
        description="Questions about an order, a bulk enquiry, or just want to say hi? We'd love to hear from you."
        pillLabel="WE REPLY WITHIN 24 HOURS"
        variant="coral"
        illustration={
          <div className="relative w-[420px] h-[420px] hidden lg:block">
            <Image
              src="/images/Snaxsa main/gallery/frames.png"
              alt="Snax सा 4 Flavours"
              fill
              priority
              className="object-contain rounded-[32px]"
              sizes="420px"
            />
          </div>
        }
      />

      {/* <section className="relative max-w-6xl mx-auto px-5 md:px-8 -mt-8 md:-mt-10 z-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="glass-strong rounded-2xl p-4 shadow-glass flex items-center gap-3 transition-transform duration-200 hover:-translate-y-1"
            >
              <span
                className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${item.color}`}
              >
                <item.Icon size={18} />
              </span>

              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-ink-soft/60">
                  {item.label}
                </span>

                <span className="block truncate text-sm font-semibold text-ink">
                  {item.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section> */}

      <section className="grain relative overflow-hidden bg-white/50 py-16 md:py-24">
        <GradientBlobs variant="lav" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <ContactInfo />

              <div className="overflow-hidden rounded-[32px] glass shadow-lift bg-white">
                <Image
                  src="/images/Snaxsa main/gallery/4flavours.png"
                  alt="Snax सा"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div className="self-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <MapCard />
      </section>

      <Accordion />
    </main>
  );
}