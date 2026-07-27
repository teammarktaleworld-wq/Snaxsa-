// "use client";

// import { motion } from "framer-motion";
// import { MessageCircle } from "lucide-react";
// import { whatsappLinkWithMessage } from "@/lib/site-config";

// export default function FloatingWhatsApp() {
//   return (
//     <motion.a
//       href={whatsappLinkWithMessage("Hi Snax सा! I'd like to know more about your makhana flavours.")}
//       target="_blank"
//       rel="noopener noreferrer"
//       initial={{ scale: 0, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ delay: 1, type: "spring" }}
//       whileHover={{ scale: 1.08 }}
//       className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)]"
//       aria-label="Chat on WhatsApp"
//     >
//       <MessageCircle size={26} className="text-white" fill="white" />
//       <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
//     </motion.a>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLinkWithMessage } from "@/lib/site-config";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLinkWithMessage("Hi Snax सा! I'd like to know more about your makhana flavours.")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
    </motion.a>
  );
}