// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Send, CheckCircle2, MessageCircle } from "lucide-react";
// // import Button from "@/components/ui/Button";
// // import SectionHeading from "@/components/ui/SectionHeading";
// // import GradientBlobs from "@/components/ui/GradientBlobs";
// // import Reveal from "@/components/ui/Reveal";
// // import GiftBox from "@/components/ui/GiftBox";
// // import { whatsappLinkWithMessage } from "@/lib/site-config";

// // const occasions = ["Corporate Gifting", "Wedding Favours", "Events & Conferences", "Festive Gift Boxes"];

// // export default function EnquiryForm() {
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setSubmitted(true);
// //   };

// //   return (
// //     <section className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
// //       <GradientBlobs variant="mint" />
// //       <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
// //         <Reveal>
// //           <GiftBox />
// //         </Reveal>

// //         <Reveal delay={0.1}>
// //           <SectionHeading
// //             eyebrow="Get a Quote"
// //             title="Tell Us About"
// //             highlight="Your Order"
// //             align="left"
// //             subtitle="Share a few details and our team will get back to you with pricing within 24 hours."
// //             className="mb-8"
// //           />

// //           {submitted ? (
// //             <motion.div
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               className="glass rounded-3xl p-8 shadow-glass flex items-start gap-4"
// //             >
// //               <CheckCircle2 className="text-gold shrink-0" size={28} />
// //               <div>
// //                 <p className="font-display font-bold text-ink text-lg">Thank you!</p>
// //                 <p className="text-sm text-ink-soft mt-1">
// //                   Your enquiry has been noted. Our team will reach out on WhatsApp or email shortly.
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ) : (
// //             <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-4">
// //               <div className="grid sm:grid-cols-2 gap-4">
// //                 <input
// //                   required
// //                   placeholder="Full Name"
// //                   className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
// //                 />
// //                 <input
// //                   required
// //                   type="tel"
// //                   placeholder="Phone Number"
// //                   className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
// //                 />
// //               </div>
// //               <select
// //                 required
// //                 defaultValue=""
// //                 className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm text-ink-soft focus:outline-none focus:ring-2 focus:ring-coral"
// //               >
// //                 <option value="" disabled>
// //                   Select Occasion
// //                 </option>
// //                 {occasions.map((o) => (
// //                   <option key={o} value={o}>
// //                     {o}
// //                   </option>
// //                 ))}
// //               </select>
// //               <input
// //                 required
// //                 placeholder="Approximate Quantity (e.g. 100 jars)"
// //                 className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
// //               />
// //               <textarea
// //                 rows={3}
// //                 placeholder="Anything else we should know? (optional)"
// //                 className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral resize-none"
// //               />
// //               <div className="flex flex-wrap gap-3 pt-1">
// //                 <Button type="submit" variant="primary" size="md" icon={<Send size={16} />} className="w-full sm:w-auto">
// //                   Submit Enquiry
// //                 </Button>
// //                 <Button
// //                   variant="whatsapp"
// //                   size="md"
// //                   icon={<MessageCircle size={16} />}
// //                   href={whatsappLinkWithMessage("Hi Snax सा! I'd like a bulk order quote.")}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-full sm:w-auto"
// //                 >
// //                   Or WhatsApp Us
// //                 </Button>
// //               </div>
// //             </form>
// //           )}
// //         </Reveal>
// //       </div>
// //     </section>
// //   );
// // }




// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Send, CheckCircle2, MessageCircle } from "lucide-react";
// import Button from "@/components/ui/Button";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GradientBlobs from "@/components/ui/GradientBlobs";
// import Reveal from "@/components/ui/Reveal";
// import GiftBox from "@/components/ui/GiftBox";
// import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";

// const occasions = ["Corporate Gifting", "Wedding Favours", "Events & Conferences", "Festive Gift Boxes"];

// export default function EnquiryForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     occasion: "",
//     quantity: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch("/api/bulk-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setSubmitted(true);

//         setForm({
//           name: "",
//           phone: "",
//           occasion: "",
//           quantity: "",
//           message: "",
//         });
//       } else {
//         setMessage(data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="grain relative py-20 md:py-28 overflow-hidden bg-white/50">
//       <GradientBlobs variant="mint" />
//       <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
//         <Reveal>
//           <GiftBox />
//         </Reveal>

//         <Reveal delay={0.1}>
//           <SectionHeading
//             eyebrow="Get a Quote"
//             title="Tell Us About"
//             highlight="Your Order"
//             align="left"
//             subtitle="Share a few details and our team will get back to you with pricing within 24 hours."
//             className="mb-8"
//           />

//           {submitted ? (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="glass rounded-3xl p-8 shadow-glass flex items-start gap-4"
//             >
//               <CheckCircle2 className="text-gold shrink-0" size={28} />
//               <div>
//                 <p className="font-display font-bold text-ink text-lg">Thank you!</p>
//                 <p className="text-sm text-ink-soft mt-1">
//                   Your enquiry has been noted. Our team will reach out on WhatsApp or email shortly.
//                 </p>
//               </div>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-4">
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <input
//                   required
//                   placeholder="Full Name"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
//                 />
//                 <input
//                   required
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
//                 />
//               </div>
//               <select
//                 required
//                 value={form.occasion}
//                 onChange={(e) => setForm({ ...form, occasion: e.target.value })}
//                 className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm text-ink-soft focus:outline-none focus:ring-2 focus:ring-coral"
//               >
//                 <option value="" disabled>
//                   Select Occasion
//                 </option>
//                 {occasions.map((o) => (
//                   <option key={o} value={o}>
//                     {o}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 required
//                 placeholder="Approximate Quantity (e.g. 100 jars)"
//                 value={form.quantity}
//                 onChange={(e) => setForm({ ...form, quantity: e.target.value })}
//                 className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
//               />
//               <textarea
//                 rows={3}
//                 placeholder="Anything else we should know? (optional)"
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral resize-none"
//               />
//               {message && (
//                 <p className="text-sm text-red-500">{message}</p>
//               )}
//               <div className="flex flex-wrap gap-3 pt-1">
//                 <Button
//                   type="submit"
//                   variant="primary"
//                   size="md"
//                   disabled={loading}
//                   icon={<Send size={16} />}
//                   className="w-full sm:w-auto"
//                 >
//                   {loading ? "Submitting..." : "Submit Enquiry"}
//                 </Button>
//                 <Button
//                   variant="whatsapp"
//                   size="md"
//                   icon={<MessageCircle size={16} />}
//                   href={whatsappLinkWithMessage(`Hi ${SITE_CONFIG.companyName}! I'd like a bulk order quote.`)}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full sm:w-auto"
//                 >
//                   Or WhatsApp Us
//                 </Button>
//               </div>
//             </form>
//           )}
//         </Reveal>
//       </div>
//     </section>
//   );
// }





















"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import Reveal from "@/components/ui/Reveal";
import { SITE_CONFIG, whatsappLinkWithMessage } from "@/lib/site-config";

const occasions = [
  "Corporate Gifting",
  "Wedding Favours",
  "Events & Conferences",
  "Festive Gift Boxes",
  "Schools & Colleges",
  "Parties & Celebrations",
  "Other",
];

const contactDetails = [
  {
    icon: <Phone size={16} />,
    label: "Call / WhatsApp",
    value: "+91 98765 43210",
    color: "#25D366",
  },
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "bulk@snaxsa.com",
    color: "#E91E63",
  },
  {
    icon: <MapPin size={16} />,
    label: "Based In",
    value: "Jaipur, Rajasthan",
    color: "#F57C00",
  },
];

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    occasion: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/bulk-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", phone: "", occasion: "", quantity: "", message: "" });
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="grain relative py-20 md:py-28 overflow-hidden bg-white/50"
    >
      <GradientBlobs variant="mint" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Get a Quote"
          title="Tell Us About"
          highlight="Your Order"
          subtitle="Share a few details and our team will reply within 24 hours."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

          {/* ── LEFT: contact info + assurances ── */}
          <Reveal>
            <div className="flex flex-col gap-6">
              {/* Contact cards */}
              <div className="flex flex-col gap-3">
                {contactDetails.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-ink/6 shadow-sm"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{ background: c.color }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40">{c.label}</p>
                      <p className="text-sm font-semibold text-ink">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Assurance chips */}
              <div className="rounded-3xl bg-gradient-to-br from-maroon/5 to-gold/5 border border-maroon/10 p-5">
                <p className="text-xs font-black uppercase tracking-widest text-maroon/60 mb-4">
                  Our Promise
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "✦ Reply within 24 hours",
                    "✦ No minimum order hassle below 50 jars",
                    "✦ Custom labels & branding at no hidden cost",
                    "✦ Fresh roasted, not pre-packed",
                    "✦ Pan India shipping with tracking",
                  ].map((p) => (
                    <p key={p} className="text-xs font-semibold text-ink/70">{p}</p>
                  ))}
                </div>
              </div>

              {/* WhatsApp shortcut */}
              <a
                href={whatsappLinkWithMessage(`Hi ${SITE_CONFIG.companyName}! I'd like a bulk order quote.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold text-white transition-all hover:scale-[1.02] shadow-lg"
                style={{
                  background: "linear-gradient(135deg,#25D366,#128C7E)",
                  boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                }}
              >
                <MessageCircle size={16} />
                Skip the form — WhatsApp us directly
              </a>
            </div>
          </Reveal>

          {/* ── RIGHT: form ── */}
          <Reveal delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-10 shadow-glass flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h3 className="font-display font-bold text-ink text-2xl">Thank you!</h3>
                <p className="text-sm text-ink-soft max-w-sm">
                  Your enquiry has been received. Our team will reach out on WhatsApp or email within 24 hours with a custom quote.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-royal/10 text-sm placeholder:text-ink-soft/40 focus:outline-none focus:ring-2 focus:ring-coral transition"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone / WhatsApp Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-royal/10 text-sm placeholder:text-ink-soft/40 focus:outline-none focus:ring-2 focus:ring-coral transition"
                  />
                </div>
                <select
                  required
                  value={form.occasion}
                  onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-royal/10 text-sm text-ink-soft focus:outline-none focus:ring-2 focus:ring-coral transition"
                >
                  <option value="" disabled>Select Occasion</option>
                  {occasions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <input
                  required
                  placeholder="Approximate Quantity (e.g. 100 jars)"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-royal/10 text-sm placeholder:text-ink-soft/40 focus:outline-none focus:ring-2 focus:ring-coral transition"
                />
                <textarea
                  rows={4}
                  placeholder="Branding requirements, flavour preferences, delivery date, or anything else..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-royal/10 text-sm placeholder:text-ink-soft/40 focus:outline-none focus:ring-2 focus:ring-coral transition resize-none"
                />
                {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#E91E63,#F57C00)",
                    boxShadow: "0 8px 24px rgba(233,30,99,0.30)",
                  }}
                >
                  <Send size={16} />
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}