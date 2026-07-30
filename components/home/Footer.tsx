// // "use client";

// // import Link from "next/link";
// // import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
// // import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";
// // import Image from "next/image";

// // const flavourLinks = [
// //   { label: "Peri Punch", href: "/flavours" },
// //   { label: "Tangy Tingle", href: "/flavours" },
// //   { label: "Minty Pinch", href: "/flavours" },
// //   { label: "Snow Pepper Burst", href: "/flavours" },
// // ];

// // const quickLinks = [
// //   { label: "Home", href: "/" },
// //   { label: "About Us", href: "/about" },
// //   { label: "Flavours", href: "/flavours" },
// //   { label: "Health Benefits", href: "/benefits" },
// //   { label: "Gallery", href: "/gallery" },
// //   { label: "Bulk Orders", href: "/bulk-orders" },
// //   { label: "FAQ", href: "/faq" },
// // ];

// // const socialLinks = [
// //   { Icon: Instagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
// //   { Icon: Facebook, href: SITE_CONFIG.social.facebook || "#", label: "Facebook" },
// //   {
// //     Icon: MessageCircle,
// //     href: whatsappLinkWithMessage("Hi Snax सा! I'd like to know more."),
// //     label: "WhatsApp",
// //   },
// // ];

// // export default function Footer() {
// //   return (
// //     <footer className="grain relative bg-[linear-gradient(160deg,#4B0D20_0%,#6B102E_60%,#4B0D20_100%)] text-white mt-6 pt-16 pb-8 overflow-hidden">
// //       <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-coral/10 blur-3xl" aria-hidden />
// //       <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-royal-light/20 blur-3xl" aria-hidden />

// //       <div className="relative max-w-7xl mx-auto px-5 md:px-8">
// //         <div className="glass-dark rounded-3xl px-6 md:px-10 py-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-5">
// //           <div className="text-center md:text-left">
// //             <h3 className="font-display text-xl md:text-2xl font-bold">Join the Snax सा family</h3>
// //             <p className="text-white/70 text-sm mt-1">Get flavour drops, offers &amp; royal recipes in your inbox.</p>
// //           </div>
// //           <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
// //             <input
// //               type="email"
// //               required
// //               placeholder="Your email address"
// //               className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold"
// //             />
// //             <button
// //               type="submit"
// //               className="px-5 py-2.5 rounded-full bg-gold-shimmer text-ink font-semibold text-sm shrink-0 hover:brightness-105 transition"
// //             >
// //               Subscribe
// //             </button>
// //           </form>
// //         </div>

// //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
// //           <div>
// //             <Link href="/" className="flex items-center gap-2 mb-4">
// //               <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
// //                 <Image
// //                   src="/images/logo.png"
// //                   alt="Snax सा logo"
// //                   fill
// //                   className="object-contain p-1"
// //                 />
// //               </div>
// //               <span className="font-display text-xl font-bold">
// //                 Snax <span className="text-gradient-gold">सा</span>
// //               </span>
// //             </Link>
// //             <p className="text-white/70 text-sm leading-relaxed mb-5">
// //               Premium roasted makhana made with love in Jaipur, Rajasthan.
// //               Healthy Crunch. Royal Taste.
// //             </p>
// //             <div className="flex gap-3">
// //        {socialLinks.map((item) => (
// //   <a
// //     key={item.label}
// //     href={item.href}
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     aria-label={item.label}
// //     className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors"
// //   >
// //     <item.Icon size={16} />
// //   </a>
// // ))}
// //           </div>
// //         </div>

// //         <div>
// //           <h4 className="font-display font-semibold mb-4">Quick Links</h4>
// //           <ul className="space-y-2.5">
// //             {quickLinks.map((l) => (
// //               <li key={l.label}>
// //                 <Link href={l.href} className="text-white/70 text-sm hover:text-gold transition-colors">
// //                   {l.label}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         <div>
// //           <h4 className="font-display font-semibold mb-4">Our Flavours</h4>
// //           <ul className="space-y-2.5">
// //             {flavourLinks.map((l) => (
// //               <li key={l.label}>
// //                 <Link href={l.href} className="text-white/70 text-sm hover:text-gold transition-colors">
// //                   {l.label}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         <div>
// //           <h4 className="font-display font-semibold mb-4">Contact Us</h4>
// //           <ul className="space-y-3 text-sm text-white/70">
// //             <li className="flex items-start gap-2">
// //               <MapPin size={16} className="mt-0.5 shrink-0" /> {SITE_CONFIG.address}
// //             </li>
// //             <li className="flex items-start gap-2 flex-wrap">
// //               <Phone size={16} className="shrink-0 mt-0.5" />
// //               <span className="flex items-center gap-2 flex-wrap">
// //                 <a href={SITE_CONFIG.phoneHref} className="hover:text-gold transition-colors whitespace-nowrap">
// //                   {SITE_CONFIG.phone}
// //                 </a>
// //                 <span className="text-white/40">/</span>

// //                 href={`tel:+${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`}
// //                 className="hover:text-gold transition-colors whitespace-nowrap"
// //                   >
// //                 {SITE_CONFIG.phoneSecondary}
// //               </a>
// //             </span>
// //           </li>
// //           <li className="flex items-center gap-2">
// //             <Mail size={16} className="shrink-0" />
// //             <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-gold transition-colors">
// //               {SITE_CONFIG.email}
// //             </a>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //       </div >

// //     <div className="relative max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
// //       <p>© {new Date().getFullYear()} Snax सा. All rights reserved.</p>
// //       <p>Made with 🤍 in Jaipur, Rajasthan</p>
// //     </div>
// //     </footer >
// //   );
// // }





// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import {
//   Instagram,
//   Facebook,
//   MessageCircle,
//   MapPin,
//   Phone,
//   Mail,
// } from "lucide-react";
// import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";

// const flavourLinks = [
//   { label: "Peri Punch", href: "/order" },
//   { label: "Tangy Tingle", href: "/order" },
//   { label: "Minty Pinch", href: "/order" },
//   { label: "Snow Pepper Burst", href: "/order" },
// ];

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Flavours", href: "/order" },
//   { label: "Health Benefits", href: "/benefits" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Bulk Orders", href: "/bulk-orders" },
//   { label: "FAQ", href: "/faq" },
// ];

// const socialLinks = [
//   {
//     Icon: Instagram,
//     href: SITE_CONFIG.social.instagram,
//     label: "Instagram",
//   },
//   {
//     Icon: Facebook,
//     href: SITE_CONFIG.social.facebook || "#",
//     label: "Facebook",
//   },
//   {
//     Icon: MessageCircle,
//     href: whatsappLinkWithMessage(`Hi ${SITE_CONFIG.companyName}! I'd like to know more.`),

//     label: "WhatsApp",
//   },
// ];

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   return (
//     <footer className="grain relative bg-[linear-gradient(160deg,#4B0D20_0%,#6B102E_60%,#4B0D20_100%)] text-white mt-6 pt-16 pb-8 overflow-hidden">
//       <div
//         className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-coral/10 blur-3xl"
//         aria-hidden
//       />
//       <div
//         className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-royal-light/20 blur-3xl"
//         aria-hidden
//       />

//       <div className="relative max-w-7xl mx-auto px-5 md:px-8">
//         <div className="glass-dark rounded-3xl px-6 md:px-10 py-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-5">
//           <div className="text-center md:text-left">
//             <h3 className="font-display text-xl md:text-2xl font-bold">
//               Join the Snax सा family
//             </h3>
//             <p className="text-white/70 text-sm mt-1">
//               Get flavour drops, offers &amp; royal recipes in your inbox.
//             </p>
//           </div>

//           <form
//             className="flex w-full md:w-auto gap-2"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="email"
//               required
//               placeholder="Your email address"
//               className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold"
//             />
//             <button
//               type="submit"
//               className="px-5 py-2.5 rounded-full bg-gold-shimmer text-ink font-semibold text-sm shrink-0 hover:brightness-105 transition"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           <div>
//             <Link href="/" className="flex items-center gap-2 mb-4">
//               <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
//                 <Image
//                   src="/images/logo.png"
//                   alt="Snax सा logo"
//                   fill
//                   className="object-contain p-1"
//                 />
//               </div>

//               <span className="font-display text-xl font-bold">
//                 {SITE_CONFIG.companyName}
//               </span>
//             </Link>

//             <p className="text-white/70 text-sm leading-relaxed mb-5">
//               Premium roasted makhana made with love in Jaipur, Rajasthan.
//               Healthy Crunch. Royal Taste.
//             </p>

//             <div className="flex gap-3">
//               {socialLinks.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={item.label}
//                   className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors"
//                 >
//                   <item.Icon size={16} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="font-display font-semibold mb-4">Quick Links</h4>

//             <ul className="space-y-2.5">
//               {quickLinks.map((l) => (
//                 <li key={l.label}>
//                   <Link
//                     href={l.href}
//                     className="text-white/70 text-sm hover:text-gold transition-colors"
//                   >
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-display font-semibold mb-4">Our Flavours</h4>

//             <ul className="space-y-2.5">
//               {flavourLinks.map((l) => (
//                 <li key={l.label}>
//                   <Link
//                     href={l.href}
//                     className="text-white/70 text-sm hover:text-gold transition-colors"
//                   >
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-display font-semibold mb-4">Contact Us</h4>

//             <ul className="space-y-3 text-sm text-white/70">
//               <li className="flex items-start gap-2">
//                 <MapPin size={16} className="mt-0.5 shrink-0" />
//                 {SITE_CONFIG.address}
//               </li>

//               {/* <li className="flex items-start gap-2 flex-wrap">
//                 <Phone size={16} className="shrink-0 mt-0.5" />

//                 <span className="flex items-center gap-2 flex-wrap">
//                   <a
//                     href={SITE_CONFIG.phoneHref}
//                     className="hover:text-gold transition-colors whitespace-nowrap"
//                   >
//                     {SITE_CONFIG.phone}
//                   </a>

//                   <span className="text-white/40">/</span>

//                   <a
//                     href={`tel:+${SITE_CONFIG.phoneSecondary.replace(
//                       /\D/g,
//                       ""
//                     )}`}
//                     className="hover:text-gold transition-colors whitespace-nowrap"
//                   >
//                     {SITE_CONFIG.phoneSecondary}
//                   </a>
//                 </span>
//               </li> */}


//               <li className="flex items-start gap-2">
//                 <Phone size={16} className="shrink-0 mt-1" />

//                 <div className="flex flex-col">
//                   <a
//                     href={SITE_CONFIG.phoneHref}
//                     className="hover:text-gold transition-colors"
//                   >
//                     {SITE_CONFIG.phone}
//                   </a>

//                   <a
//                     href={`tel:+${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`}
//                     className="hover:text-gold transition-colors"
//                   >
//                     {SITE_CONFIG.phoneSecondary}
//                   </a>
//                 </div>
//               </li>

//               <li className="flex items-center gap-2">
//                 <Mail size={16} className="shrink-0" />
//                 <a
//                   href={`mailto:${SITE_CONFIG.email}`}
//                   className="hover:text-gold transition-colors"
//                 >
//                   {SITE_CONFIG.email}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
//         <p>
//           © {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.
//         </p>        <p>Made with 🤍 in Jaipur, Rajasthan</p>
//       </div>
//     </footer>
//   );
// }




"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";

const flavourLinks = [
  { label: "Peri Punch", href: "/order" },
  { label: "Tangy Tingle", href: "/order" },
  { label: "Minty Pinch", href: "/order" },
  { label: "Snow Pepper Burst", href: "/order" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Flavours", href: "/order" },
  { label: "Health Benefits", href: "/benefits" },
  { label: "Gallery", href: "/gallery" },
  { label: "Bulk Orders", href: "/bulk-orders" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  {
    Icon: Instagram,
    href: SITE_CONFIG.social.instagram,
    label: "Instagram",
  },
  {
    Icon: Facebook,
    href: SITE_CONFIG.social.facebook || "#",
    label: "Facebook",
  },
  {
    Icon: MessageCircle,
    href: whatsappLinkWithMessage(`Hi ${SITE_CONFIG.companyName}! I'd like to know more.`),
    label: "WhatsApp",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("🎉 Thanks for subscribing!");
        setEmail("");

        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } else {
        setSuccess(data.message);
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="grain relative bg-[linear-gradient(160deg,#4B0D20_0%,#6B102E_60%,#4B0D20_100%)] text-white mt-6 pt-16 pb-8 overflow-hidden">
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-coral/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-royal-light/20 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="glass-dark rounded-3xl px-6 md:px-10 py-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl font-bold">
              Join the Snax सा family
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Get flavour drops, offers &amp; royal recipes in your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <form
              className="flex gap-2"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-full bg-gold-shimmer text-ink font-semibold text-sm shrink-0 hover:brightness-105 transition disabled:opacity-50"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {success && (
              <p className="mt-2 text-center text-sm text-green-300 font-medium">
                {success}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Snax सा logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <span className="font-display text-xl font-bold">
                {SITE_CONFIG.companyName}
              </span>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Premium roasted makhana made with love in Jaipur, Rajasthan.
              Healthy Crunch. Royal Taste.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors"
                >
                  <item.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Our Flavours</h4>

            <ul className="space-y-2.5">
              {flavourLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {SITE_CONFIG.address}
              </li>

              <li className="flex items-start gap-2">
                <Phone size={16} className="shrink-0 mt-1" />

                <div className="flex flex-col">
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="hover:text-gold transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>

                  <a
                    href={`tel:+${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`}
                    className="hover:text-gold transition-colors"
                  >
                    {SITE_CONFIG.phoneSecondary}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.
        </p>
        <p>Made with 🤍 in Jaipur, Rajasthan</p>
      </div>
    </footer>
  );
}