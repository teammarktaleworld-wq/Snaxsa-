// // // C:\merge\snax-sa__\components\contact\ContactForm.tsx


// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Send, CheckCircle2, MessageCircle } from "lucide-react";
// // import Button from "@/components/ui/Button";
// // import { whatsappLinkWithMessage } from "@/lib/site-config";
// // import MagneticButton from "@/components/ui/MagneticButton";

// // export default function ContactForm() {
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setSubmitted(true);
// //   };

// //   if (submitted) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="glass rounded-3xl p-8 shadow-glass flex items-start gap-4"
// //       >
// //         <CheckCircle2 className="text-success shrink-0" size={28} />
// //         <div>
// //           <p className="font-display font-bold text-ink text-lg">Message sent!</p>
// //           <p className="text-sm text-ink-soft mt-1">
// //             Thanks for reaching out — we&apos;ll get back to you within a day.
// //           </p>
// //         </div>
// //       </motion.div>
// //     );
// //   }

// //   return (
// //     <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-4">
// //       <div className="grid sm:grid-cols-2 gap-4">
// //         <input
// //           required
// //           placeholder="Your Name"
// //           className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
// //         />
// //         <input
// //           required
// //           type="email"
// //           placeholder="Email Address"
// //           className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
// //         />
// //       </div>
// //       <input
// //         placeholder="Subject"
// //         className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
// //       />
// //       <textarea
// //         required
// //         rows={4}
// //         placeholder="Your Message"
// //         className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral resize-none"
// //       />
// //       <div className="flex flex-wrap gap-3">
// //         <Button type="submit" variant="primary" size="md" icon={<Send size={16} />}>
// //           Send Message
// //         </Button>
// //         <MagneticButton>
// //           <Button
// //             type="button"
// //             variant="whatsapp"
// //             size="md"
// //             icon={<MessageCircle size={16} />}
// //             href={whatsappLinkWithMessage("Hi Snax सा! I have a question.")}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Chat on WhatsApp
// //           </Button>
// //         </MagneticButton>
// //       </div>
// //     </form>
// //   );
// // }




// //



// // C:\merge\snax-sa__\components\contact\ContactForm.tsx

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Send, CheckCircle2, MessageCircle } from "lucide-react";
// import Button from "@/components/ui/Button";
// import { whatsappLinkWithMessage } from "@/lib/site-config";
// import MagneticButton from "@/components/ui/MagneticButton";

// export default function ContactForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setSubmitted(true);

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong.");
//     }

//     setLoading(false);
//   };

//   if (submitted) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="glass rounded-3xl p-8 shadow-glass flex items-start gap-4"
//       >
//         <CheckCircle2 className="text-success shrink-0" size={28} />
//         <div>
//           <p className="font-display font-bold text-ink text-lg">Message sent!</p>
//           <p className="text-sm text-ink-soft mt-1">
//             Thanks for reaching out — we&apos;ll get back to you within a day.
//           </p>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-4">
//       <div className="grid sm:grid-cols-2 gap-4">
//         <input
//           required
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
//         />
//         <input
//           required
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email Address"
//           className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
//         />
//       </div>
//       <input
//         type="tel"
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//         placeholder="Phone Number"
//         className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
//       />
//       <input
//         name="subject"
//         value={formData.subject}
//         onChange={handleChange}
//         placeholder="Subject"
//         className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral"
//       />
//       <textarea
//         required
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         rows={4}
//         placeholder="Your Message"
//         className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral resize-none"
//       />
//       <div className="flex flex-wrap gap-3">
//         <Button type="submit" variant="primary" size="md" icon={<Send size={16} />} disabled={loading}>
//           {loading ? "Sending..." : "Send Message"}
//         </Button>
//         <MagneticButton>
//           <Button
//             type="button"
//             variant="whatsapp"
//             size="md"
//             icon={<MessageCircle size={16} />}
//             href={whatsappLinkWithMessage("Hi Snax सा! I have a question.")}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Chat on WhatsApp
//           </Button>
//         </MagneticButton>
//       </div>
//     </form>
//   );
// }


// C:\Marktale-projectes\Snaxsa-\components\contact\ContactForm.tsx

"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageCircle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { whatsappLinkWithMessage } from "@/lib/site-config";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="glass rounded-3xl p-8 md:p-10 shadow-glass flex flex-col items-center text-center gap-3 min-h-[420px] justify-center">
        <span className="w-14 h-14 rounded-full bg-success/15 flex items-center justify-center">
          <CheckCircle2 className="text-success" size={28} />
        </span>
        <p className="font-display font-bold text-ink text-xl">Message sent!</p>
        <p className="text-sm text-ink-soft max-w-xs">
          Thanks for reaching out — we&apos;ll get back to you within a day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold text-royal hover:underline mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-2xl bg-white/70 border border-royal/10 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-shadow";
  const labelClass = "block text-xs font-semibold text-ink-soft mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 shadow-glass space-y-5">
      <div>
        <h2 className="font-display font-bold text-xl text-ink">Send us a message</h2>
        <p className="text-sm text-ink-soft mt-1">Fill in the form and we&apos;ll be in touch shortly.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" required name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone</label>
        <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" required name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Your Message" className={`${inputClass} resize-none`} />
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
        <Button
          type="submit"
          variant="primary"
          size="md"
          icon={loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
        <MagneticButton>
          <Button
            type="button"
            variant="whatsapp"
            size="md"
            icon={<MessageCircle size={16} />}
            href={whatsappLinkWithMessage("Hi Snax सा! I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </Button>
        </MagneticButton>
      </div>
    </form>
  );
}