// // // // // // "use client";

// // // // // // import { useEffect, useRef, useState } from "react";
// // // // // // import { AnimatePresence, motion } from "framer-motion";
// // // // // // import { MessageCircle, X, Minus, Send, Sparkles } from "lucide-react";
// // // // // // import { ChatMessage, getBotReply } from "@/lib/chatbot";
// // // // // // import { cn } from "@/lib/utils";

// // // // // // const WELCOME: ChatMessage = {
// // // // // //   id: "welcome",
// // // // // //   role: "assistant",
// // // // // //   text:
// // // // // //     "Namaste! 🙏 I'm the Snax सा assistant. Ask me about our flavours, pricing, bulk orders, delivery, or how to reach our team.",
// // // // // // };

// // // // // // const SUGGESTIONS = ["Show me flavours", "Bulk order pricing", "Delivery in Jaipur", "Contact details"];

// // // // // // function uid() {
// // // // // //   return Math.random().toString(36).slice(2, 10);
// // // // // // }

// // // // // // export default function ChatWidget() {
// // // // // //   const [open, setOpen] = useState(false);
// // // // // //   const [minimized, setMinimized] = useState(false);
// // // // // //   const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
// // // // // //   const [input, setInput] = useState("");
// // // // // //   const [typing, setTyping] = useState(false);
// // // // // //   const scrollRef = useRef<HTMLDivElement>(null);

// // // // // //   useEffect(() => {
// // // // // //     if (!minimized) {
// // // // // //       scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
// // // // // //     }
// // // // // //   }, [messages, typing, minimized]);

// // // // // //   function send(text: string) {
// // // // // //     const trimmed = text.trim();
// // // // // //     if (!trimmed) return;

// // // // // //     const userMsg: ChatMessage = { id: uid(), role: "user", text: trimmed };
// // // // // //     setMessages((m) => [...m, userMsg]);
// // // // // //     setInput("");
// // // // // //     setTyping(true);

// // // // // //     // Simulated latency for a natural typing-indicator feel.
// // // // // //     // Swap this block for a call to your `/api/chat` route (see lib/chatbot.ts)
// // // // // //     // once this is wired up to the OpenAI API.
// // // // // //     const delay = 500 + Math.random() * 500;
// // // // // //     setTimeout(() => {
// // // // // //       const reply = getBotReply(trimmed);
// // // // // //       setMessages((m) => [...m, { id: uid(), role: "assistant", text: reply }]);
// // // // // //       setTyping(false);
// // // // // //     }, delay);
// // // // // //   }

// // // // // //   function handleSubmit(e: React.FormEvent) {
// // // // // //     e.preventDefault();
// // // // // //     send(input);
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
// // // // // //       <AnimatePresence>
// // // // // //         {open && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 24, scale: 0.95 }}
// // // // // //             animate={{
// // // // // //               opacity: 1,
// // // // // //               y: 0,
// // // // // //               scale: 1,
// // // // // //               height: minimized ? 64 : "min(600px, 75vh)",
// // // // // //             }}
// // // // // //             exit={{ opacity: 0, y: 24, scale: 0.95 }}
// // // // // //             transition={{ duration: 0.28, ease: "easeOut" }}
// // // // // //             className="mb-4 w-[92vw] max-w-[380px] overflow-hidden rounded-3xl glass-strong shadow-lift flex flex-col"
// // // // // //             style={{ transformOrigin: "bottom right" }}
// // // // // //           >
// // // // // //             {/* Header */}
// // // // // //             <div className="relative shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between">
// // // // // //               <div className="flex items-center gap-3">
// // // // // //                 <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
// // // // // //                   <Sparkles size={18} className="text-gold" />
// // // // // //                 </div>
// // // // // //                 <div>
// // // // // //                   <p className="font-display font-bold leading-tight">Snax सा Assistant</p>
// // // // // //                   <p className="text-[11px] text-white/70 flex items-center gap-1">
// // // // // //                     <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
// // // // // //                     Online now
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <div className="flex items-center gap-1">
// // // // // //                 <button
// // // // // //                   aria-label={minimized ? "Expand chat" : "Minimize chat"}
// // // // // //                   onClick={() => setMinimized((v) => !v)}
// // // // // //                   className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
// // // // // //                 >
// // // // // //                   <Minus size={16} />
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   aria-label="Close chat"
// // // // // //                   onClick={() => setOpen(false)}
// // // // // //                   className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
// // // // // //                 >
// // // // // //                   <X size={16} />
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {!minimized && (
// // // // // //               <>
// // // // // //                 {/* Messages */}
// // // // // //                 <div
// // // // // //                   ref={scrollRef}
// // // // // //                   className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3 bg-hero-gradient"
// // // // // //                 >
// // // // // //                   {messages.map((m) => (
// // // // // //                     <MessageBubble key={m.id} message={m} />
// // // // // //                   ))}
// // // // // //                   {typing && <TypingBubble />}

// // // // // //                   {messages.length <= 1 && (
// // // // // //                     <div className="flex flex-wrap gap-2 pt-1">
// // // // // //                       {SUGGESTIONS.map((s) => (
// // // // // //                         <button
// // // // // //                           key={s}
// // // // // //                           onClick={() => send(s)}
// // // // // //                           className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/70 border border-maroon/10 text-maroon hover:bg-white transition-colors"
// // // // // //                         >
// // // // // //                           {s}
// // // // // //                         </button>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>

// // // // // //                 {/* Input */}
// // // // // //                 <form
// // // // // //                   onSubmit={handleSubmit}
// // // // // //                   className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
// // // // // //                 >
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     value={input}
// // // // // //                     onChange={(e) => setInput(e.target.value)}
// // // // // //                     placeholder="Ask about flavours, orders, delivery…"
// // // // // //                     className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-pink-hot/40"
// // // // // //                   />
// // // // // //                   <button
// // // // // //                     type="submit"
// // // // // //                     aria-label="Send message"
// // // // // //                     disabled={!input.trim()}
// // // // // //                     className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
// // // // // //                   >
// // // // // //                     <Send size={16} />
// // // // // //                   </button>
// // // // // //                 </form>
// // // // // //               </>
// // // // // //             )}
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* Floating toggle button */}
// // // // // //       <motion.button
// // // // // //         aria-label={open ? "Close chat" : "Open chat"}
// // // // // //         onClick={() => {
// // // // // //           setOpen((v) => !v);
// // // // // //           setMinimized(false);
// // // // // //         }}
// // // // // //         whileHover={{ scale: 1.06 }}
// // // // // //         whileTap={{ scale: 0.94 }}
// // // // // //         className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-pink-gradient text-white shadow-glow flex items-center justify-center"
// // // // // //       >
// // // // // //         <AnimatePresence mode="wait" initial={false}>
// // // // // //           <motion.span
// // // // // //             key={open ? "close" : "chat"}
// // // // // //             initial={{ opacity: 0, rotate: -45 }}
// // // // // //             animate={{ opacity: 1, rotate: 0 }}
// // // // // //             exit={{ opacity: 0, rotate: 45 }}
// // // // // //             transition={{ duration: 0.18 }}
// // // // // //             className="flex items-center justify-center"
// // // // // //           >
// // // // // //             {open ? <X size={24} /> : <MessageCircle size={24} />}
// // // // // //           </motion.span>
// // // // // //         </AnimatePresence>
// // // // // //         {!open && (
// // // // // //           <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold border-2 border-white animate-pulse" />
// // // // // //         )}
// // // // // //       </motion.button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // function MessageBubble({ message }: { message: ChatMessage }) {
// // // // // //   const isUser = message.role === "user";
// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       initial={{ opacity: 0, y: 8 }}
// // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // //       transition={{ duration: 0.25 }}
// // // // // //       className={cn("flex items-end gap-2", isUser ? "justify-end" : "justify-start")}
// // // // // //     >
// // // // // //       {!isUser && (
// // // // // //         <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0 text-[11px] font-display font-bold text-gold">
// // // // // //           स
// // // // // //         </div>
// // // // // //       )}
// // // // // //       <div
// // // // // //         className={cn(
// // // // // //           "max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
// // // // // //           isUser
// // // // // //             ? "bg-pink-gradient text-white rounded-br-sm shadow-card"
// // // // // //             : "bg-white text-ink rounded-bl-sm shadow-card border border-maroon/5"
// // // // // //         )}
// // // // // //       >
// // // // // //         {message.text}
// // // // // //       </div>
// // // // // //       {isUser && (
// // // // // //         <div className="w-7 h-7 rounded-full bg-graylight border border-maroon/10 flex items-center justify-center shrink-0 text-[11px] font-bold text-maroon">
// // // // // //           You
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // }

// // // // // // function TypingBubble() {
// // // // // //   return (
// // // // // //     <div className="flex items-end gap-2 justify-start">
// // // // // //       <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0 text-[11px] font-display font-bold text-gold">
// // // // // //         स
// // // // // //       </div>
// // // // // //       <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white shadow-card border border-maroon/5 flex items-center gap-1">
// // // // // //         {[0, 1, 2].map((i) => (
// // // // // //           <motion.span
// // // // // //             key={i}
// // // // // //             className="w-1.5 h-1.5 rounded-full bg-maroon/50"
// // // // // //             animate={{ y: [0, -4, 0] }}
// // // // // //             transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // "use client";

// // // // // import { useEffect, useRef, useState } from "react";
// // // // // import { AnimatePresence, motion } from "framer-motion";
// // // // // import { X, Send } from "lucide-react";
// // // // // import { SITE_CONFIG } from "@/lib/site-config";
// // // // // import { cn } from "@/lib/utils";

// // // // // /**
// // // // //  * Snax सा — Business Inquiry Assistant
// // // // //  * ---------------------------------------------------------------------
// // // // //  * A simple, premium "contact-us style" chat widget (not an FAQ bot).
// // // // //  * It answers a short list of common business questions and otherwise
// // // // //  * guides the visitor to the team's real contact details — all pulled
// // // // //  * live from SITE_CONFIG, never hardcoded here.
// // // // //  * ---------------------------------------------------------------------
// // // // //  */

// // // // // interface Message {
// // // // //   id: string;
// // // // //   role: "user" | "bot";
// // // // //   text: string;
// // // // //   time: string;
// // // // // }

// // // // // function uid() {
// // // // //   return Math.random().toString(36).slice(2, 10);
// // // // // }

// // // // // function now() {
// // // // //   return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
// // // // // }

// // // // // // ---------------------------------------------------------------------
// // // // // // Contact block — built entirely from SITE_CONFIG, never hardcoded.
// // // // // // ---------------------------------------------------------------------
// // // // // function contactBlock() {
// // // // //   return [
// // // // //     `📞 Phone: ${SITE_CONFIG.phone}`,
// // // // //     `📧 Email: ${SITE_CONFIG.email}`,
// // // // //     `📱 WhatsApp: ${SITE_CONFIG.whatsapp}`,
// // // // //     `📍 Address: ${SITE_CONFIG.address}`,
// // // // //     `📷 Instagram: ${SITE_CONFIG.social.instagram}`,
// // // // //   ].join("\n");
// // // // // }

// // // // // const FALLBACK = () =>
// // // // //   `I'm not sure about that. Please contact our team and we'll help you.\n\n${contactBlock()}`;

// // // // // // ---------------------------------------------------------------------
// // // // // // Business-inquiry reply rules (keyword based, no LLM, no FAQ cards).
// // // // // // ---------------------------------------------------------------------
// // // // // interface Rule {
// // // // //   keywords: string[];
// // // // //   reply: () => string;
// // // // // }

// // // // // const RULES: Rule[] = [
// // // // //   {
// // // // //     keywords: ["hi", "hello", "hey", "namaste"],
// // // // //     reply: () =>
// // // // //       `Namaste! 🙏 Welcome to ${SITE_CONFIG.companyName}. How can I help you today — orders, delivery, bulk enquiries, or contact details?`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["what is snax", "about you", "who are you", "tell me about", "what do you sell", "what do you do"],
// // // // //     reply: () =>
// // // // //       `${SITE_CONFIG.companyName} is a premium roasted makhana (fox nut) snack brand — healthy, crunchy and full of flavour. We're based in ${SITE_CONFIG.address}.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["order", "buy", "purchase"],
// // // // //     reply: () =>
// // // // //       `You can order directly via WhatsApp at ${SITE_CONFIG.whatsapp}, or call us at ${SITE_CONFIG.phone} — our team will help you place your order right away.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["deliver", "delivery", "shipping", "ship"],
// // // // //     reply: () =>
// // // // //       `Yes, we do! Message us on WhatsApp at ${SITE_CONFIG.whatsapp} with your location and we'll confirm delivery availability and timelines.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["bulk", "wholesale", "large order"],
// // // // //     reply: () =>
// // // // //       `We'd love to fulfil your bulk order! Please reach out to our team at ${SITE_CONFIG.phone} or ${SITE_CONFIG.email} and we'll share pricing and details.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["corporate", "gifting", "gift"],
// // // // //     reply: () =>
// // // // //       `We offer premium corporate gifting! Contact us at ${SITE_CONFIG.email} or WhatsApp ${SITE_CONFIG.whatsapp} to discuss your requirements.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["franchise", "distributor", "reseller", "stockist", "partner"],
// // // // //     reply: () =>
// // // // //       `We're open to franchise and partnership opportunities! Please email us at ${SITE_CONFIG.email} and our team will get back to you.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["instagram", "insta"],
// // // // //     reply: () => `You can follow us on Instagram here: ${SITE_CONFIG.social.instagram}`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["whatsapp"],
// // // // //     reply: () => `You can reach us on WhatsApp at ${SITE_CONFIG.whatsapp}.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["phone", "call", "number", "mobile"],
// // // // //     reply: () => `You can call us at ${SITE_CONFIG.phone}.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["email", "mail"],
// // // // //     reply: () => `Our email is ${SITE_CONFIG.email} — we usually reply within a day.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["store", "located", "location", "address", "based", "where are you"],
// // // // //     reply: () => `You can find us at 📍 ${SITE_CONFIG.address}.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["hours", "timing", "open", "when are you open"],
// // // // //     reply: () => `🕒 Our business hours are: ${SITE_CONFIG.hours}.`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["contact", "reach you", "get in touch", "details"],
// // // // //     reply: () => `Here are our contact details:\n\n${contactBlock()}`,
// // // // //   },
// // // // //   {
// // // // //     keywords: ["thank"],
// // // // //     reply: () => `You're most welcome! 😊 Is there anything else I can help you with?`,
// // // // //   },
// // // // // ];

// // // // // function getReply(userText: string): string {
// // // // //   const text = userText.toLowerCase();
// // // // //   for (const rule of RULES) {
// // // // //     if (rule.keywords.some((k) => text.includes(k))) return rule.reply();
// // // // //   }
// // // // //   return FALLBACK();
// // // // // }

// // // // // const WELCOME_TEXT = `Namaste! 🙏 I'm the ${SITE_CONFIG.companyName} assistant. Ask me about orders, delivery, bulk or corporate enquiries — or how to reach our team.`;

// // // // // const SUGGESTIONS = ["How can I order?", "Bulk order", "Do you deliver?", "Contact details"];

// // // // // // ---------------------------------------------------------------------
// // // // // // Mascot — a small original character mark (not copied from any source)
// // // // // // ---------------------------------------------------------------------
// // // // // function Mascot({ size = 26 }: { size?: number }) {
// // // // //   return (
// // // // //     <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //       <defs>
// // // // //         <linearGradient id="mascotBody" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
// // // // //           <stop stopColor="#E91E63" />
// // // // //           <stop offset="1" stopColor="#6B102E" />
// // // // //         </linearGradient>
// // // // //       </defs>
// // // // //       <circle cx="20" cy="20" r="19" fill="url(#mascotBody)" />
// // // // //       <circle cx="13.5" cy="19" r="3.1" fill="#fff" />
// // // // //       <circle cx="26.5" cy="19" r="3.1" fill="#fff" />
// // // // //       <circle cx="14.3" cy="19.6" r="1.5" fill="#2C2C2C" />
// // // // //       <circle cx="27.3" cy="19.6" r="1.5" fill="#2C2C2C" />
// // // // //       <circle cx="10.3" cy="24.2" r="2" fill="#FF4F81" opacity="0.65" />
// // // // //       <circle cx="29.7" cy="24.2" r="2" fill="#FF4F81" opacity="0.65" />
// // // // //       <path d="M14 25.3c2 2.4 10 2.4 12 0" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
// // // // //       <path d="M28 7.5l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1 1-2.4z" fill="#FCD980" />
// // // // //     </svg>
// // // // //   );
// // // // // }

// // // // // export default function ChatWidget() {
// // // // //   const [open, setOpen] = useState(false);
// // // // //   const [messages, setMessages] = useState<Message[]>([
// // // // //     { id: "welcome", role: "bot", text: WELCOME_TEXT, time: now() },
// // // // //   ]);
// // // // //   const [input, setInput] = useState("");
// // // // //   const [typing, setTyping] = useState(false);
// // // // //   const scrollRef = useRef<HTMLDivElement>(null);

// // // // //   useEffect(() => {
// // // // //     scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
// // // // //   }, [messages, typing, open]);

// // // // //   function send(text: string) {
// // // // //     const trimmed = text.trim();
// // // // //     if (!trimmed) return;

// // // // //     setMessages((m) => [...m, { id: uid(), role: "user", text: trimmed, time: now() }]);
// // // // //     setInput("");
// // // // //     setTyping(true);

// // // // //     const delay = 550 + Math.random() * 500;
// // // // //     setTimeout(() => {
// // // // //       setMessages((m) => [...m, { id: uid(), role: "bot", text: getReply(trimmed), time: now() }]);
// // // // //       setTyping(false);
// // // // //     }, delay);
// // // // //   }

// // // // //   function handleSubmit(e: React.FormEvent) {
// // // // //     e.preventDefault();
// // // // //     send(input);
// // // // //   }

// // // // //   return (
// // // // //     <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
// // // // //       {/* Chat panel */}
// // // // //       <AnimatePresence>
// // // // //         {open && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 28, scale: 0.94 }}
// // // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // // //             exit={{ opacity: 0, y: 20, scale: 0.95 }}
// // // // //             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
// // // // //             style={{ transformOrigin: "bottom right" }}
// // // // //             className="mb-4 w-[92vw] max-w-[380px] h-[min(600px,72vh)] overflow-hidden rounded-3xl glass-strong shadow-lift flex flex-col"
// // // // //           >
// // // // //             {/* Header */}
// // // // //             <div className="relative shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between">
// // // // //               <div className="flex items-center gap-3">
// // // // //                 <div className="relative w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
// // // // //                   <Mascot size={22} />
// // // // //                   <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-gold border-2 border-maroon" />
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <p className="font-display font-bold leading-tight">{SITE_CONFIG.companyName} Support</p>
// // // // //                   <p className="text-[11px] text-white/70 flex items-center gap-1.5">
// // // // //                     <span className="relative flex h-1.5 w-1.5">
// // // // //                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
// // // // //                       <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
// // // // //                     </span>
// // // // //                     Online now
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <button
// // // // //                 aria-label="Close chat"
// // // // //                 onClick={() => setOpen(false)}
// // // // //                 className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
// // // // //               >
// // // // //                 <X size={16} />
// // // // //               </button>
// // // // //             </div>

// // // // //             {/* Messages */}
// // // // //             <div
// // // // //               ref={scrollRef}
// // // // //               className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3 bg-hero-gradient"
// // // // //             >
// // // // //               {messages.map((m) => (
// // // // //                 <MessageBubble key={m.id} message={m} />
// // // // //               ))}
// // // // //               {typing && <TypingBubble />}

// // // // //               {messages.length <= 1 && (
// // // // //                 <div className="flex flex-wrap gap-2 pt-1">
// // // // //                   {SUGGESTIONS.map((s) => (
// // // // //                     <button
// // // // //                       key={s}
// // // // //                       onClick={() => send(s)}
// // // // //                       className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/70 border border-maroon/10 text-maroon hover:bg-white transition-colors"
// // // // //                     >
// // // // //                       {s}
// // // // //                     </button>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>

// // // // //             {/* Input */}
// // // // //             <form
// // // // //               onSubmit={handleSubmit}
// // // // //               className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
// // // // //             >
// // // // //               <input
// // // // //                 type="text"
// // // // //                 value={input}
// // // // //                 onChange={(e) => setInput(e.target.value)}
// // // // //                 placeholder="Type your question…"
// // // // //                 className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-pink-hot/40"
// // // // //               />
// // // // //               <button
// // // // //                 type="submit"
// // // // //                 aria-label="Send message"
// // // // //                 disabled={!input.trim()}
// // // // //                 className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
// // // // //               >
// // // // //                 <Send size={16} />
// // // // //               </button>
// // // // //             </form>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       {/* Floating mascot toggle */}
// // // // //       <div className="relative group">
// // // // //         {!open && (
// // // // //           <>
// // // // //             <motion.div
// // // // //               className="absolute -inset-1.5 rounded-full pointer-events-none"
// // // // //               style={{
// // // // //                 background: "conic-gradient(from 0deg, #F9A825, #E91E63, #6B102E, #F9A825)",
// // // // //                 filter: "blur(9px)",
// // // // //                 opacity: 0.65,
// // // // //               }}
// // // // //               animate={{ rotate: 360 }}
// // // // //               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
// // // // //             />
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: 8 }}
// // // // //               animate={{ opacity: 1, x: 0 }}
// // // // //               transition={{ delay: 0.6 }}
// // // // //               className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-maroon shadow-card opacity-0 group-hover:opacity-100 transition-opacity"
// // // // //             >
// // // // //               Chat with us 👋
// // // // //             </motion.div>
// // // // //           </>
// // // // //         )}

// // // // //         <motion.button
// // // // //           aria-label={open ? "Close chat" : "Open chat"}
// // // // //           onClick={() => setOpen((v) => !v)}
// // // // //           animate={open ? { y: 0 } : { y: [0, -6, 0] }}
// // // // //           transition={open ? { duration: 0.2 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
// // // // //           whileHover={{ scale: 1.07 }}
// // // // //           whileTap={{ scale: 0.93 }}
// // // // //           className="relative w-16 h-16 rounded-full bg-pink-gradient shadow-glow flex items-center justify-center ring-4 ring-white/50"
// // // // //         >
// // // // //           <AnimatePresence mode="wait" initial={false}>
// // // // //             <motion.span
// // // // //               key={open ? "close" : "mascot"}
// // // // //               initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
// // // // //               animate={{ opacity: 1, rotate: 0, scale: 1 }}
// // // // //               exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
// // // // //               transition={{ duration: 0.2 }}
// // // // //               className="flex items-center justify-center text-white"
// // // // //             >
// // // // //               {open ? <X size={24} /> : <Mascot size={32} />}
// // // // //             </motion.span>
// // // // //           </AnimatePresence>
// // // // //           {!open && (
// // // // //             <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white animate-pulse" />
// // // // //           )}
// // // // //         </motion.button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function MessageBubble({ message }: { message: Message }) {
// // // // //   const isUser = message.role === "user";
// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0, y: 8 }}
// // // // //       animate={{ opacity: 1, y: 0 }}
// // // // //       transition={{ duration: 0.25 }}
// // // // //       className={cn("flex flex-col", isUser ? "items-end" : "items-start")}
// // // // //     >
// // // // //       <div className={cn("flex items-end gap-2", isUser ? "flex-row-reverse" : "flex-row")}>
// // // // //         {!isUser && (
// // // // //           <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// // // // //             <Mascot size={16} />
// // // // //           </div>
// // // // //         )}
// // // // //         <div
// // // // //           className={cn(
// // // // //             "max-w-[240px] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
// // // // //             isUser
// // // // //               ? "bg-pink-gradient text-white rounded-br-sm shadow-card"
// // // // //               : "bg-white text-ink rounded-bl-sm shadow-card border border-maroon/5"
// // // // //           )}
// // // // //         >
// // // // //           {message.text}
// // // // //         </div>
// // // // //       </div>
// // // // //       <span className={cn("text-[10px] text-ink-soft/60 mt-1 px-1", isUser ? "mr-1" : "ml-9")}>
// // // // //         {message.time}
// // // // //       </span>
// // // // //     </motion.div>
// // // // //   );
// // // // // }

// // // // // function TypingBubble() {
// // // // //   return (
// // // // //     <div className="flex items-end gap-2 justify-start">
// // // // //       <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// // // // //         <Mascot size={16} />
// // // // //       </div>
// // // // //       <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white shadow-card border border-maroon/5 flex items-center gap-1">
// // // // //         {[0, 1, 2].map((i) => (
// // // // //           <motion.span
// // // // //             key={i}
// // // // //             className="w-1.5 h-1.5 rounded-full bg-maroon/50"
// // // // //             animate={{ y: [0, -4, 0] }}
// // // // //             transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
// // // // //           />
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // "use client";

// // // // import { useEffect, useRef, useState } from "react";
// // // // import { AnimatePresence, motion } from "framer-motion";
// // // // import { X, Send, Phone, Mail, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";
// // // // import { SITE_CONFIG } from "@/lib/site-config";
// // // // import { flavours } from "@/data/flavours";
// // // // import { cn } from "@/lib/utils";

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // Types
// // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // interface Message {
// // // //   id: string;
// // // //   role: "user" | "bot";
// // // //   text: string;
// // // //   time: string;
// // // //   card?: "contact" | "flavour-list" | { type: "flavour-detail"; id: string };
// // // // }

// // // // function uid() {
// // // //   return Math.random().toString(36).slice(2, 10);
// // // // }

// // // // function nowStr() {
// // // //   return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // Reply logic
// // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // type BotReply = {
// // // //   text: string;
// // // //   card?: Message["card"];
// // // // };

// // // // const RULES: Array<{ keywords: string[]; reply: () => BotReply }> = [
// // // //   {
// // // //     keywords: ["hi", "hello", "hey", "namaste", "khamma", "hola", "start"],
// // // //     reply: () => ({
// // // //       text: `Khamma Ghani! 🙏\nWelcome to ${SITE_CONFIG.companyName}.\nHow can I help you today?`,
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["about", "who are you", "what is snax", "what do you sell", "what do you do", "tell me"],
// // // //     reply: () => ({
// // // //       text: `${SITE_CONFIG.companyName} is a premium roasted makhana (fox nut) snack brand — healthy, crunchy, and bursting with bold Indian flavours. 🌿\n\nWe're proudly made in Rajasthan and crafted for snackers who don't want to compromise on taste or health.`,
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["healthy", "health", "nutrition", "protein", "benefits", "good for"],
// // // //     reply: () => ({
// // // //       text: `Makhana (fox nuts) are one of nature's best superfoods! 💪\n\n✅ High in protein\n✅ Low in calories & fat\n✅ Rich in antioxidants\n✅ Gluten-free & vegan-friendly\n✅ No artificial preservatives\n\nSnax सा packs all that goodness into bold, irresistible flavours!`,
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["flavour", "flavor", "taste", "variety", "options", "products", "product"],
// // // //     reply: () => ({
// // // //       text: `We have ${flavours.length} amazing flavours for you to explore! 🎉\nTap any flavour below to know more:`,
// // // //       card: "flavour-list",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["price", "cost", "how much", "rate", "pricing"],
// // // //     reply: () => ({
// // // //       text: `Our flavours are priced between ₹${Math.min(...flavours.map((f) => f.price))} – ₹${Math.max(...flavours.map((f) => f.price))} per ${flavours[0].weight}.\n\nTap "Flavours" to see each flavour's details and pricing! 😊`,
// // // //       card: "flavour-list",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["order", "buy", "purchase", "how to order"],
// // // //     reply: () => ({
// // // //       text: `Ordering is easy! 🛒\n\nSimply contact our team via Phone or WhatsApp and we'll take care of everything for you.`,
// // // //       card: "contact",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["deliver", "delivery", "shipping", "ship", "dispatch"],
// // // //     reply: () => ({
// // // //       text: `Yes, we deliver! 🚚\n\nMessage us on WhatsApp with your location and we'll confirm availability & timelines.`,
// // // //       card: "contact",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["bulk", "wholesale", "large order", "big order"],
// // // //     reply: () => ({
// // // //       text: `We'd love to fulfil your bulk order! 📦\n\nPlease reach out to our team and we'll share pricing and details:`,
// // // //       card: "contact",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["corporate", "gifting", "gift", "corporate gift"],
// // // //     reply: () => ({
// // // //       text: `We offer premium corporate gifting options! 🎁\n\nContact us to discuss your requirements and we'll create a custom package for you:`,
// // // //       card: "contact",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["franchise", "distributor", "reseller", "stockist", "partner", "dealership"],
// // // //     reply: () => ({
// // // //       text: `We're open to franchise and partnership opportunities! 🤝\n\nPlease reach out and our team will get back to you:`,
// // // //       card: "contact",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["contact", "reach", "get in touch", "details", "info", "information"],
// // // //     reply: () => ({
// // // //       text: `Here are all our contact details:`,
// // // //       card: "contact",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["phone", "call", "number", "mobile", "telephone"],
// // // //     reply: () => ({
// // // //       text: `You can call us anytime at:`,
// // // //       card: "contact",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["whatsapp"],
// // // //     reply: () => ({
// // // //       text: `You can reach us instantly on WhatsApp:`,
// // // //       card: "contact",
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["email", "mail"],
// // // //     reply: () => ({
// // // //       text: `Our email address is:\n📧 ${SITE_CONFIG.email}\n\nWe usually respond within a day!`,
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["instagram", "insta", "social media", "social", "follow"],
// // // //     reply: () => ({
// // // //       text: `Follow us on Instagram for the latest flavours, offers & behind-the-scenes! 📸\n\n👉 ${SITE_CONFIG.social.instagram}`,
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["location", "address", "store", "where", "based", "office"],
// // // //     reply: () => ({
// // // //       text: `📍 You can find us at:\n${SITE_CONFIG.address}`,
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["hours", "timing", "open", "when", "time", "schedule"],
// // // //     reply: () => ({
// // // //       text: `🕒 Our business hours are:\n${SITE_CONFIG.hours}\n\nFeel free to reach out anytime on WhatsApp!`,
// // // //     }),
// // // //   },
// // // //   {
// // // //     keywords: ["thank", "thanks", "great", "awesome", "perfect", "nice"],
// // // //     reply: () => ({
// // // //       text: `You're most welcome! 😊\n\nIs there anything else I can help you with?`,
// // // //     }),
// // // //   },
// // // // ];

// // // // function getReply(userText: string): BotReply {
// // // //   const text = userText.toLowerCase();
// // // //   for (const rule of RULES) {
// // // //     if (rule.keywords.some((k) => text.includes(k))) return rule.reply();
// // // //   }
// // // //   return {
// // // //     text: `I'm sorry, I couldn't understand that. 🙏\n\nPlease contact our team for more information:`,
// // // //     card: "contact",
// // // //   };
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // Mascot SVG — original Snax सा mascot character
// // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // function Mascot({ size = 28 }: { size?: number }) {
// // // //   return (
// // // //     <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //       <defs>
// // // //         <radialGradient id="mg1" cx="40%" cy="35%" r="65%" gradientUnits="userSpaceOnUse">
// // // //           <stop stopColor="#E91E63" />
// // // //           <stop offset="1" stopColor="#6B102E" />
// // // //         </radialGradient>
// // // //       </defs>
// // // //       {/* Body */}
// // // //       <circle cx="24" cy="24" r="22" fill="url(#mg1)" />
// // // //       {/* Turban */}
// // // //       <path d="M8 18 C8 10 16 6 24 6 C32 6 40 10 40 18" stroke="#F9A825" strokeWidth="3.5" strokeLinecap="round" fill="none" />
// // // //       <circle cx="24" cy="6.5" r="3" fill="#F9A825" />
// // // //       {/* Eyes */}
// // // //       <ellipse cx="18" cy="22" rx="3.5" ry="3.8" fill="white" />
// // // //       <ellipse cx="30" cy="22" rx="3.5" ry="3.8" fill="white" />
// // // //       <circle cx="19" cy="22.5" r="2" fill="#2C1A1A" />
// // // //       <circle cx="31" cy="22.5" r="2" fill="#2C1A1A" />
// // // //       <circle cx="19.8" cy="21.5" r="0.7" fill="white" />
// // // //       <circle cx="31.8" cy="21.5" r="0.7" fill="white" />
// // // //       {/* Rosy cheeks */}
// // // //       <ellipse cx="12.5" cy="27" rx="3" ry="2" fill="#FF6B8A" opacity="0.6" />
// // // //       <ellipse cx="35.5" cy="27" rx="3" ry="2" fill="#FF6B8A" opacity="0.6" />
// // // //       {/* Smile */}
// // // //       <path d="M17 30 Q24 35.5 31 30" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
// // // //     </svg>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // Inline Cards
// // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // function ContactCard({ onSend }: { onSend: (text: string) => void }) {
// // // //   return (
// // // //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// // // //       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
// // // //         📋 Contact Details
// // // //       </div>
// // // //       <div className="px-4 py-3 space-y-2.5">
// // // //         <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // // //             <Phone size={13} className="text-maroon" />
// // // //           </span>
// // // //           <span className="font-medium">{SITE_CONFIG.phone}</span>
// // // //         </a>
// // // //         {SITE_CONFIG.phoneSecondary && (
// // // //           <a href={`tel:${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // // //             <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // // //               <Phone size={13} className="text-maroon" />
// // // //             </span>
// // // //             <span className="font-medium">{SITE_CONFIG.phoneSecondary}</span>
// // // //           </a>
// // // //         )}
// // // //         <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // // //             <MessageCircle size={13} className="text-maroon" />
// // // //           </span>
// // // //           <span className="font-medium">WhatsApp Us</span>
// // // //         </a>
// // // //         <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // // //             <Mail size={13} className="text-maroon" />
// // // //           </span>
// // // //           <span className="font-medium">{SITE_CONFIG.email}</span>
// // // //         </a>
// // // //         <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // // //             <Instagram size={13} className="text-maroon" />
// // // //           </span>
// // // //           <span className="font-medium">Follow on Instagram</span>
// // // //         </a>
// // // //         <div className="flex items-center gap-2.5 text-xs text-ink/60">
// // // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
// // // //             <MapPin size={13} className="text-maroon/60" />
// // // //           </span>
// // // //           <span>{SITE_CONFIG.address}</span>
// // // //         </div>
// // // //         <div className="flex items-center gap-2.5 text-xs text-ink/60">
// // // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
// // // //             <Clock size={13} className="text-maroon/60" />
// // // //           </span>
// // // //           <span>{SITE_CONFIG.hours}</span>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // const FLAVOUR_EMOJIS: Record<string, string> = {
// // // //   "peri-punch": "🌶",
// // // //   "tangy-tingle": "🍅",
// // // //   "minty-pinch": "🌿",
// // // //   "snow-pepper": "🧂",
// // // // };

// // // // function FlavourListCard({ onSelect }: { onSelect: (id: string) => void }) {
// // // //   return (
// // // //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// // // //       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
// // // //         ✨ Our Flavours
// // // //       </div>
// // // //       <div className="px-3 py-2 space-y-1.5">
// // // //         {flavours.map((f) => (
// // // //           <button
// // // //             key={f.id}
// // // //             onClick={() => onSelect(f.id)}
// // // //             className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-maroon/4 hover:bg-maroon/10 transition-colors text-left group"
// // // //           >
// // // //             <div className="flex items-center gap-2.5">
// // // //               <span className="text-base">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
// // // //               <div>
// // // //                 <p className="text-xs font-bold text-ink group-hover:text-maroon transition-colors">{f.name}</p>
// // // //                 <p className="text-[10px] text-ink-soft">{f.tagline}</p>
// // // //               </div>
// // // //             </div>
// // // //             <span className="text-xs font-bold text-maroon shrink-0">₹{f.price}</span>
// // // //           </button>
// // // //         ))}
// // // //       </div>
// // // //       <p className="text-[10px] text-ink-soft/60 text-center pb-2.5">Tap a flavour to know more</p>
// // // //     </div>
// // // //   );
// // // // }

// // // // function FlavourDetailCard({ flavourId, onSend }: { flavourId: string; onSend: (t: string) => void }) {
// // // //   const f = flavours.find((x) => x.id === flavourId);
// // // //   if (!f) return null;

// // // //   return (
// // // //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// // // //       <div
// // // //         className="px-4 py-3 text-white"
// // // //         style={{ background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})` }}
// // // //       >
// // // //         <div className="flex items-center gap-2">
// // // //           <span className="text-xl">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
// // // //           <div>
// // // //             <p className="text-sm font-bold leading-tight">{f.name}</p>
// // // //             <p className="text-[10px] opacity-80">{f.tagline}</p>
// // // //           </div>
// // // //           {f.badge && (
// // // //             <span className="ml-auto text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full">{f.badge}</span>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //       <div className="px-4 py-3 space-y-2">
// // // //         <p className="text-[11px] text-ink-soft leading-relaxed">{f.description}</p>
// // // //         <div className="flex gap-2">
// // // //           <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
// // // //             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">Price</p>
// // // //             <p className="text-sm font-bold text-maroon">₹{f.price}</p>
// // // //           </div>
// // // //           <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
// // // //             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">Pack Size</p>
// // // //             <p className="text-sm font-bold text-ink">{f.weight}</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="pt-1 border-t border-maroon/8">
// // // //           <p className="text-[10px] text-ink-soft/60 mb-1.5">For orders & more info:</p>
// // // //           <div className="flex gap-2">
// // // //             <a href={SITE_CONFIG.phoneHref} className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-maroon rounded-lg py-1.5 hover:opacity-90 transition-opacity">
// // // //               <Phone size={10} /> Call
// // // //             </a>
// // // //             <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-[#25D366] rounded-lg py-1.5 hover:opacity-90 transition-opacity">
// // // //               <MessageCircle size={10} /> WhatsApp
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // Message Bubble
// // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // function MessageBubble({
// // // //   message,
// // // //   onFlavourSelect,
// // // //   onSend,
// // // // }: {
// // // //   message: Message;
// // // //   onFlavourSelect: (id: string) => void;
// // // //   onSend: (t: string) => void;
// // // // }) {
// // // //   const isUser = message.role === "user";
// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, y: 10 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ duration: 0.26 }}
// // // //       className={cn("flex flex-col", isUser ? "items-end" : "items-start")}
// // // //     >
// // // //       <div className={cn("flex items-end gap-2", isUser ? "flex-row-reverse" : "flex-row")}>
// // // //         {!isUser && (
// // // //           <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// // // //             <Mascot size={18} />
// // // //           </div>
// // // //         )}
// // // //         <div className="flex flex-col gap-1.5">
// // // //           {message.text && (
// // // //             <div
// // // //               className={cn(
// // // //                 "max-w-[220px] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
// // // //                 isUser
// // // //                   ? "bg-pink-gradient text-white rounded-br-sm shadow-card"
// // // //                   : "bg-white text-ink rounded-bl-sm shadow-card border border-maroon/5"
// // // //               )}
// // // //             >
// // // //               {message.text}
// // // //             </div>
// // // //           )}
// // // //           {/* Cards */}
// // // //           {message.card === "contact" && <ContactCard onSend={onSend} />}
// // // //           {message.card === "flavour-list" && <FlavourListCard onSelect={onFlavourSelect} />}
// // // //           {message.card &&
// // // //             typeof message.card === "object" &&
// // // //             message.card.type === "flavour-detail" && (
// // // //               <FlavourDetailCard flavourId={message.card.id} onSend={onSend} />
// // // //             )}
// // // //         </div>
// // // //       </div>
// // // //       <span className={cn("text-[10px] text-ink-soft/50 mt-1 px-1", isUser ? "mr-1" : "ml-9")}>
// // // //         {message.time}
// // // //       </span>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // function TypingBubble() {
// // // //   return (
// // // //     <div className="flex items-end gap-2">
// // // //       <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// // // //         <Mascot size={18} />
// // // //       </div>
// // // //       <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white shadow-card border border-maroon/5 flex items-center gap-1">
// // // //         {[0, 1, 2].map((i) => (
// // // //           <motion.span
// // // //             key={i}
// // // //             className="w-1.5 h-1.5 rounded-full bg-maroon/50"
// // // //             animate={{ y: [0, -4, 0] }}
// // // //             transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // Quick suggestions
// // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // const SUGGESTIONS = ["Our Flavours", "How to Order?", "Bulk Order", "Contact Details"];

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // Main ChatWidget
// // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // const WELCOME: Message = {
// // // //   id: "welcome",
// // // //   role: "bot",
// // // //   text: `👋 Khamma Ghani!\nWelcome to ${SITE_CONFIG.companyName}.\nHow can I help you today?`,
// // // //   time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
// // // // };

// // // // export default function ChatWidget() {
// // // //   const [open, setOpen] = useState(false);
// // // //   const [messages, setMessages] = useState<Message[]>([WELCOME]);
// // // //   const [input, setInput] = useState("");
// // // //   const [typing, setTyping] = useState(false);
// // // //   const scrollRef = useRef<HTMLDivElement>(null);

// // // //   useEffect(() => {
// // // //     scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
// // // //   }, [messages, typing, open]);

// // // //   function send(text: string) {
// // // //     const trimmed = text.trim();
// // // //     if (!trimmed) return;

// // // //     setMessages((m) => [...m, { id: uid(), role: "user", text: trimmed, time: nowStr() }]);
// // // //     setInput("");
// // // //     setTyping(true);

// // // //     const delay = 550 + Math.random() * 450;
// // // //     setTimeout(() => {
// // // //       const { text: replyText, card } = getReply(trimmed);
// // // //       setMessages((m) => [
// // // //         ...m,
// // // //         { id: uid(), role: "bot", text: replyText, time: nowStr(), card },
// // // //       ]);
// // // //       setTyping(false);
// // // //     }, delay);
// // // //   }

// // // //   function handleFlavourSelect(id: string) {
// // // //     const f = flavours.find((x) => x.id === id);
// // // //     if (!f) return;

// // // //     setMessages((m) => [
// // // //       ...m,
// // // //       { id: uid(), role: "user", text: `Tell me about ${f.name}`, time: nowStr() },
// // // //     ]);
// // // //     setTyping(true);
// // // //     setTimeout(() => {
// // // //       setMessages((m) => [
// // // //         ...m,
// // // //         {
// // // //           id: uid(),
// // // //           role: "bot",
// // // //           text: `Here are the details for ${f.name}: `,
// // // //           time: nowStr(),
// // // //           card: { type: "flavour-detail", id },
// // // //         },
// // // //       ]);
// // // //       setTyping(false);
// // // //     }, 600);
// // // //   }

// // // //   return (
// // // //     <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
// // // //       {/* Chat panel */}
// // // //       <AnimatePresence>
// // // //         {open && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 28, scale: 0.93 }}
// // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //             exit={{ opacity: 0, y: 20, scale: 0.95 }}
// // // //             transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
// // // //             style={{ transformOrigin: "bottom right" }}
// // // //             className="mb-4 w-[92vw] max-w-[380px] h-[min(600px,74vh)] overflow-hidden rounded-3xl shadow-lift flex flex-col"
// // // //           // Glassmorphism shell
// // // //           >
// // // //             {/* Frosted glass background */}
// // // //             <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_48px_rgba(107,16,46,0.18)]" />

// // // //             <div className="relative flex flex-col h-full">
// // // //               {/* Header */}
// // // //               <div className="shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between rounded-t-3xl">
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
// // // //                     <Mascot size={26} />
// // // //                     {/* Turban gem glow */}
// // // //                     <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-gold border-2 border-maroon/60 shadow-[0_0_6px_2px_rgba(249,168,37,0.6)]" />
// // // //                   </div>
// // // //                   <div>
// // // //                     <p className="font-display font-bold leading-tight text-[15px]">{SITE_CONFIG.companyName} Support</p>
// // // //                     <p className="text-[11px] text-white/70 flex items-center gap-1.5">
// // // //                       <span className="relative flex h-1.5 w-1.5">
// // // //                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-80" />
// // // //                         <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
// // // //                       </span>
// // // //                       Online now
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <button
// // // //                   aria-label="Close chat"
// // // //                   onClick={() => setOpen(false)}
// // // //                   className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
// // // //                 >
// // // //                   <X size={16} />
// // // //                 </button>
// // // //               </div>

// // // //               {/* Messages */}
// // // //               <div
// // // //                 ref={scrollRef}
// // // //                 className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3"
// // // //                 style={{ background: "linear-gradient(170deg, rgba(255,240,245,0.7) 0%, rgba(255,255,255,0.6) 100%)" }}
// // // //               >
// // // //                 {messages.map((m) => (
// // // //                   <MessageBubble
// // // //                     key={m.id}
// // // //                     message={m}
// // // //                     onFlavourSelect={handleFlavourSelect}
// // // //                     onSend={send}
// // // //                   />
// // // //                 ))}
// // // //                 {typing && <TypingBubble />}

// // // //                 {/* Quick suggestions — only when just the welcome message */}
// // // //                 {messages.length <= 1 && !typing && (
// // // //                   <motion.div
// // // //                     initial={{ opacity: 0, y: 6 }}
// // // //                     animate={{ opacity: 1, y: 0 }}
// // // //                     transition={{ delay: 0.4 }}
// // // //                     className="flex flex-wrap gap-2 pt-1"
// // // //                   >
// // // //                     {SUGGESTIONS.map((s) => (
// // // //                       <button
// // // //                         key={s}
// // // //                         onClick={() => send(s)}
// // // //                         className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-maroon/15 text-maroon hover:bg-maroon hover:text-white transition-all shadow-sm"
// // // //                       >
// // // //                         {s}
// // // //                       </button>
// // // //                     ))}
// // // //                   </motion.div>
// // // //                 )}
// // // //               </div>

// // // //               {/* Input */}
// // // //               <form
// // // //                 onSubmit={(e) => { e.preventDefault(); send(input); }}
// // // //                 className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
// // // //               >
// // // //                 <input
// // // //                   type="text"
// // // //                   value={input}
// // // //                   onChange={(e) => setInput(e.target.value)}
// // // //                   placeholder="Type your question…"
// // // //                   className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/20"
// // // //                 />
// // // //                 <button
// // // //                   type="submit"
// // // //                   aria-label="Send"
// // // //                   disabled={!input.trim()}
// // // //                   className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
// // // //                 >
// // // //                   <Send size={15} />
// // // //                 </button>
// // // //               </form>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* Floating mascot toggle button */}
// // // //       <div className="relative group">
// // // //         {/* Spinning conic glow ring — only when closed */}
// // // //         {!open && (
// // // //           <motion.div
// // // //             className="absolute -inset-2 rounded-full pointer-events-none"
// // // //             style={{
// // // //               background: "conic-gradient(from 0deg, #F9A825 0%, #E91E63 33%, #6B102E 66%, #F9A825 100%)",
// // // //               filter: "blur(10px)",
// // // //               opacity: 0.55,
// // // //             }}
// // // //             animate={{ rotate: 360 }}
// // // //             transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
// // // //           />
// // // //         )}

// // // //         {/* Tooltip */}
// // // //         {!open && (
// // // //           <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // // //             Chat with us 👋
// // // //           </div>
// // // //         )}

// // // //         <motion.button
// // // //           aria-label={open ? "Close chat" : "Open chat"}
// // // //           onClick={() => setOpen((v) => !v)}
// // // //           animate={open ? {} : { y: [0, -7, 0] }}
// // // //           transition={open ? { duration: 0.2 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
// // // //           whileHover={{ scale: 1.08 }}
// // // //           whileTap={{ scale: 0.92 }}
// // // //           className="relative w-16 h-16 rounded-full bg-pink-gradient shadow-glow flex items-center justify-center ring-4 ring-white/60"
// // // //         >
// // // //           <AnimatePresence mode="wait" initial={false}>
// // // //             <motion.span
// // // //               key={open ? "close" : "mascot"}
// // // //               initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
// // // //               animate={{ opacity: 1, rotate: 0, scale: 1 }}
// // // //               exit={{ opacity: 0, rotate: 45, scale: 0.75 }}
// // // //               transition={{ duration: 0.22 }}
// // // //               className="flex items-center justify-center text-white"
// // // //             >
// // // //               {open ? <X size={24} /> : <Mascot size={34} />}
// // // //             </motion.span>
// // // //           </AnimatePresence>

// // // //           {/* Gold notification dot */}
// // // //           {!open && (
// // // //             <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white shadow animate-pulse" />
// // // //           )}
// // // //         </motion.button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }







// // // "use client";

// // // import { useEffect, useRef, useState } from "react";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import { X, Send, Phone, Mail, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";
// // // import { SITE_CONFIG } from "@/lib/site-config";
// // // import { flavours } from "@/data/flavours";
// // // import { cn } from "@/lib/utils";

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // Types
// // // // ─────────────────────────────────────────────────────────────────────────────

// // // interface Message {
// // //   id: string;
// // //   role: "user" | "bot";
// // //   text: string;
// // //   time: string;
// // //   card?: "contact" | "flavour-list" | { type: "flavour-detail"; id: string };
// // // }

// // // function uid() {
// // //   return Math.random().toString(36).slice(2, 10);
// // // }

// // // function nowStr() {
// // //   return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // Reply logic
// // // // ─────────────────────────────────────────────────────────────────────────────

// // // type BotReply = {
// // //   text: string;
// // //   card?: Message["card"];
// // // };

// // // const RULES: Array<{ keywords: string[]; reply: () => BotReply }> = [
// // //   {
// // //     keywords: ["hi", "hello", "hey", "namaste", "khamma", "hola", "start"],
// // //     reply: () => ({
// // //       text: `Khamma Ghani! 🙏\nWelcome to ${SITE_CONFIG.companyName}.\nHow can I help you today?`,
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["about", "who are you", "what is snax", "what do you sell", "what do you do", "tell me"],
// // //     reply: () => ({
// // //       text: `${SITE_CONFIG.companyName} is a premium roasted makhana (fox nut) snack brand — healthy, crunchy, and bursting with bold Indian flavours. 🌿\n\nWe're proudly made in Rajasthan and crafted for snackers who don't want to compromise on taste or health.`,
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["healthy", "health", "nutrition", "protein", "benefits", "good for"],
// // //     reply: () => ({
// // //       text: `Makhana (fox nuts) are one of nature's best superfoods! 💪\n\n✅ High in protein\n✅ Low in calories & fat\n✅ Rich in antioxidants\n✅ Gluten-free & vegan-friendly\n✅ No artificial preservatives\n\nSnax सा packs all that goodness into bold, irresistible flavours!`,
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["flavour", "flavor", "taste", "variety", "options", "products", "product"],
// // //     reply: () => ({
// // //       text: `We have ${flavours.length} amazing flavours for you to explore! 🎉\nTap any flavour below to know more:`,
// // //       card: "flavour-list",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["price", "cost", "how much", "rate", "pricing"],
// // //     reply: () => ({
// // //       text: `Our flavours are priced between ₹${Math.min(...flavours.map((f) => f.price))} – ₹${Math.max(...flavours.map((f) => f.price))} per ${flavours[0].weight}.\n\nTap "Flavours" to see each flavour's details and pricing! 😊`,
// // //       card: "flavour-list",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["order", "buy", "purchase", "how to order"],
// // //     reply: () => ({
// // //       text: `Ordering is easy! 🛒\n\nSimply contact our team via Phone or WhatsApp and we'll take care of everything for you.`,
// // //       card: "contact",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["deliver", "delivery", "shipping", "ship", "dispatch"],
// // //     reply: () => ({
// // //       text: `Yes, we deliver! 🚚\n\nMessage us on WhatsApp with your location and we'll confirm availability & timelines.`,
// // //       card: "contact",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["bulk", "wholesale", "large order", "big order"],
// // //     reply: () => ({
// // //       text: `We'd love to fulfil your bulk order! 📦\n\nPlease reach out to our team and we'll share pricing and details:`,
// // //       card: "contact",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["corporate", "gifting", "gift", "corporate gift"],
// // //     reply: () => ({
// // //       text: `We offer premium corporate gifting options! 🎁\n\nContact us to discuss your requirements and we'll create a custom package for you:`,
// // //       card: "contact",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["franchise", "distributor", "reseller", "stockist", "partner", "dealership"],
// // //     reply: () => ({
// // //       text: `We're open to franchise and partnership opportunities! 🤝\n\nPlease reach out and our team will get back to you:`,
// // //       card: "contact",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["contact", "reach", "get in touch", "details", "info", "information"],
// // //     reply: () => ({
// // //       text: `Here are all our contact details:`,
// // //       card: "contact",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["phone", "call", "number", "mobile", "telephone"],
// // //     reply: () => ({
// // //       text: `You can call us anytime at:`,
// // //       card: "contact",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["whatsapp"],
// // //     reply: () => ({
// // //       text: `You can reach us instantly on WhatsApp:`,
// // //       card: "contact",
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["email", "mail"],
// // //     reply: () => ({
// // //       text: `Our email address is:\n📧 ${SITE_CONFIG.email}\n\nWe usually respond within a day!`,
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["instagram", "insta", "social media", "social", "follow"],
// // //     reply: () => ({
// // //       text: `Follow us on Instagram for the latest flavours, offers & behind-the-scenes! 📸\n\n👉 ${SITE_CONFIG.social.instagram}`,
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["location", "address", "store", "where", "based", "office"],
// // //     reply: () => ({
// // //       text: `📍 You can find us at:\n${SITE_CONFIG.address}`,
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["hours", "timing", "open", "when", "time", "schedule"],
// // //     reply: () => ({
// // //       text: `🕒 Our business hours are:\n${SITE_CONFIG.hours}\n\nFeel free to reach out anytime on WhatsApp!`,
// // //     }),
// // //   },
// // //   {
// // //     keywords: ["thank", "thanks", "great", "awesome", "perfect", "nice"],
// // //     reply: () => ({
// // //       text: `You're most welcome! 😊\n\nIs there anything else I can help you with?`,
// // //     }),
// // //   },
// // // ];

// // // function getReply(userText: string): BotReply {
// // //   const text = userText.toLowerCase();
// // //   for (const rule of RULES) {
// // //     if (rule.keywords.some((k) => text.includes(k))) return rule.reply();
// // //   }
// // //   return {
// // //     text: `I'm sorry, I couldn't understand that. 🙏\n\nPlease contact our team for more information:`,
// // //     card: "contact",
// // //   };
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // Mascot SVG — original Snax सा mascot character
// // // // ─────────────────────────────────────────────────────────────────────────────

// // // function Mascot({ size = 28 }: { size?: number }) {
// // //   return (
// // //     <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //       <defs>
// // //         <radialGradient id="mg1" cx="40%" cy="35%" r="65%" gradientUnits="userSpaceOnUse">
// // //           <stop stopColor="#E91E63" />
// // //           <stop offset="1" stopColor="#6B102E" />
// // //         </radialGradient>
// // //       </defs>
// // //       {/* Body */}
// // //       <circle cx="24" cy="24" r="22" fill="url(#mg1)" />
// // //       {/* Turban */}
// // //       <path d="M8 18 C8 10 16 6 24 6 C32 6 40 10 40 18" stroke="#F9A825" strokeWidth="3.5" strokeLinecap="round" fill="none" />
// // //       <circle cx="24" cy="6.5" r="3" fill="#F9A825" />
// // //       {/* Eyes */}
// // //       <ellipse cx="18" cy="22" rx="3.5" ry="3.8" fill="white" />
// // //       <ellipse cx="30" cy="22" rx="3.5" ry="3.8" fill="white" />
// // //       <circle cx="19" cy="22.5" r="2" fill="#2C1A1A" />
// // //       <circle cx="31" cy="22.5" r="2" fill="#2C1A1A" />
// // //       <circle cx="19.8" cy="21.5" r="0.7" fill="white" />
// // //       <circle cx="31.8" cy="21.5" r="0.7" fill="white" />
// // //       {/* Rosy cheeks */}
// // //       <ellipse cx="12.5" cy="27" rx="3" ry="2" fill="#FF6B8A" opacity="0.6" />
// // //       <ellipse cx="35.5" cy="27" rx="3" ry="2" fill="#FF6B8A" opacity="0.6" />
// // //       {/* Smile */}
// // //       <path d="M17 30 Q24 35.5 31 30" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
// // //     </svg>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // Inline Cards
// // // // ─────────────────────────────────────────────────────────────────────────────

// // // function ContactCard({ onSend }: { onSend: (text: string) => void }) {
// // //   return (
// // //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// // //       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
// // //         📋 Contact Details
// // //       </div>
// // //       <div className="px-4 py-3 space-y-2.5">
// // //         <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // //             <Phone size={13} className="text-maroon" />
// // //           </span>
// // //           <span className="font-medium">{SITE_CONFIG.phone}</span>
// // //         </a>
// // //         {SITE_CONFIG.phoneSecondary && (
// // //           <a href={`tel:${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // //             <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // //               <Phone size={13} className="text-maroon" />
// // //             </span>
// // //             <span className="font-medium">{SITE_CONFIG.phoneSecondary}</span>
// // //           </a>
// // //         )}
// // //         <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // //             <MessageCircle size={13} className="text-maroon" />
// // //           </span>
// // //           <span className="font-medium">WhatsApp Us</span>
// // //         </a>
// // //         <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // //             <Mail size={13} className="text-maroon" />
// // //           </span>
// // //           <span className="font-medium">{SITE_CONFIG.email}</span>
// // //         </a>
// // //         <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// // //             <Instagram size={13} className="text-maroon" />
// // //           </span>
// // //           <span className="font-medium">Follow on Instagram</span>
// // //         </a>
// // //         <div className="flex items-center gap-2.5 text-xs text-ink/60">
// // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
// // //             <MapPin size={13} className="text-maroon/60" />
// // //           </span>
// // //           <span>{SITE_CONFIG.address}</span>
// // //         </div>
// // //         <div className="flex items-center gap-2.5 text-xs text-ink/60">
// // //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
// // //             <Clock size={13} className="text-maroon/60" />
// // //           </span>
// // //           <span>{SITE_CONFIG.hours}</span>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // const FLAVOUR_EMOJIS: Record<string, string> = {
// // //   "peri-punch": "🌶",
// // //   "tangy-tingle": "🍅",
// // //   "minty-pinch": "🌿",
// // //   "snow-pepper": "🧂",
// // // };

// // // function FlavourListCard({ onSelect }: { onSelect: (id: string) => void }) {
// // //   return (
// // //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// // //       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
// // //         ✨ Our Flavours
// // //       </div>
// // //       <div className="px-3 py-2 space-y-1.5">
// // //         {flavours.map((f) => (
// // //           <button
// // //             key={f.id}
// // //             onClick={() => onSelect(f.id)}
// // //             className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-maroon/4 hover:bg-maroon/10 transition-colors text-left group"
// // //           >
// // //             <div className="flex items-center gap-2.5">
// // //               <span className="text-base">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
// // //               <div>
// // //                 <p className="text-xs font-bold text-ink group-hover:text-maroon transition-colors">{f.name}</p>
// // //                 <p className="text-[10px] text-ink-soft">{f.tagline}</p>
// // //               </div>
// // //             </div>
// // //             <span className="text-xs font-bold text-maroon shrink-0">₹{f.price}</span>
// // //           </button>
// // //         ))}
// // //       </div>
// // //       <p className="text-[10px] text-ink-soft/60 text-center pb-2.5">Tap a flavour to know more</p>
// // //     </div>
// // //   );
// // // }

// // // function FlavourDetailCard({ flavourId, onSend }: { flavourId: string; onSend: (t: string) => void }) {
// // //   const f = flavours.find((x) => x.id === flavourId);
// // //   if (!f) return null;

// // //   return (
// // //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// // //       <div
// // //         className="px-4 py-3 text-white"
// // //         style={{ background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})` }}
// // //       >
// // //         <div className="flex items-center gap-2">
// // //           <span className="text-xl">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
// // //           <div>
// // //             <p className="text-sm font-bold leading-tight">{f.name}</p>
// // //             <p className="text-[10px] opacity-80">{f.tagline}</p>
// // //           </div>
// // //           {f.badge && (
// // //             <span className="ml-auto text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full">{f.badge}</span>
// // //           )}
// // //         </div>
// // //       </div>
// // //       <div className="px-4 py-3 space-y-2">
// // //         <p className="text-[11px] text-ink-soft leading-relaxed">{f.description}</p>
// // //         <div className="flex gap-2">
// // //           <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
// // //             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">Price</p>
// // //             <p className="text-sm font-bold text-maroon">₹{f.price}</p>
// // //           </div>
// // //           <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
// // //             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">Pack Size</p>
// // //             <p className="text-sm font-bold text-ink">{f.weight}</p>
// // //           </div>
// // //         </div>
// // //         <div className="pt-1 border-t border-maroon/8">
// // //           <p className="text-[10px] text-ink-soft/60 mb-1.5">For orders & more info:</p>
// // //           <div className="flex gap-2">
// // //             <a href={SITE_CONFIG.phoneHref} className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-maroon rounded-lg py-1.5 hover:opacity-90 transition-opacity">
// // //               <Phone size={10} /> Call
// // //             </a>
// // //             <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-[#25D366] rounded-lg py-1.5 hover:opacity-90 transition-opacity">
// // //               <MessageCircle size={10} /> WhatsApp
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // Message Bubble
// // // // ─────────────────────────────────────────────────────────────────────────────

// // // function MessageBubble({
// // //   message,
// // //   onFlavourSelect,
// // //   onSend,
// // // }: {
// // //   message: Message;
// // //   onFlavourSelect: (id: string) => void;
// // //   onSend: (t: string) => void;
// // // }) {
// // //   const isUser = message.role === "user";
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 10 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.26 }}
// // //       className={cn("flex flex-col", isUser ? "items-end" : "items-start")}
// // //     >
// // //       <div className={cn("flex items-end gap-2", isUser ? "flex-row-reverse" : "flex-row")}>
// // //         {!isUser && (
// // //           <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// // //             <Mascot size={18} />
// // //           </div>
// // //         )}
// // //         <div className="flex flex-col gap-1.5">
// // //           {message.text && (
// // //             <div
// // //               className={cn(
// // //                 "max-w-[220px] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
// // //                 isUser
// // //                   ? "bg-pink-gradient text-white rounded-br-sm shadow-card"
// // //                   : "bg-white text-ink rounded-bl-sm shadow-card border border-maroon/5"
// // //               )}
// // //             >
// // //               {message.text}
// // //             </div>
// // //           )}
// // //           {/* Cards */}
// // //           {message.card === "contact" && <ContactCard onSend={onSend} />}
// // //           {message.card === "flavour-list" && <FlavourListCard onSelect={onFlavourSelect} />}
// // //           {message.card &&
// // //             typeof message.card === "object" &&
// // //             message.card.type === "flavour-detail" && (
// // //               <FlavourDetailCard flavourId={message.card.id} onSend={onSend} />
// // //             )}
// // //         </div>
// // //       </div>
// // //       <span className={cn("text-[10px] text-ink-soft/50 mt-1 px-1", isUser ? "mr-1" : "ml-9")}>
// // //         {message.time}
// // //       </span>
// // //     </motion.div>
// // //   );
// // // }

// // // function TypingBubble() {
// // //   return (
// // //     <div className="flex items-end gap-2">
// // //       <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// // //         <Mascot size={18} />
// // //       </div>
// // //       <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white shadow-card border border-maroon/5 flex items-center gap-1">
// // //         {[0, 1, 2].map((i) => (
// // //           <motion.span
// // //             key={i}
// // //             className="w-1.5 h-1.5 rounded-full bg-maroon/50"
// // //             animate={{ y: [0, -4, 0] }}
// // //             transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // Quick suggestions
// // // // ─────────────────────────────────────────────────────────────────────────────

// // // const SUGGESTIONS = ["Our Flavours", "How to Order?", "Bulk Order", "Contact Details"];

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // Main ChatWidget
// // // // ─────────────────────────────────────────────────────────────────────────────

// // // const WELCOME: Message = {
// // //   id: "welcome",
// // //   role: "bot",
// // //   text: `👋 Khamma Ghani!\nWelcome to ${SITE_CONFIG.companyName}.\nHow can I help you today?`,
// // //   time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
// // // };

// // // export default function ChatWidget() {
// // //   const [open, setOpen] = useState(false);
// // //   const [messages, setMessages] = useState<Message[]>([WELCOME]);
// // //   const [input, setInput] = useState("");
// // //   const [typing, setTyping] = useState(false);
// // //   const scrollRef = useRef<HTMLDivElement>(null);

// // //   // ── Proactive teaser bubble (same engagement workflow as the reference widget) ──
// // //   const [teaserVisible, setTeaserVisible] = useState(false);
// // //   const [teaserDismissed, setTeaserDismissed] = useState(false);

// // //   useEffect(() => {
// // //     const t = setTimeout(() => {
// // //       if (!teaserDismissed && !open) setTeaserVisible(true);
// // //     }, 3000);
// // //     return () => clearTimeout(t);
// // //   }, [teaserDismissed, open]);

// // //   useEffect(() => {
// // //     if (open) setTeaserVisible(false);
// // //   }, [open]);

// // //   const handleTeaserDismiss = () => {
// // //     setTeaserVisible(false);
// // //     setTeaserDismissed(true);
// // //   };

// // //   const handleTeaserClick = () => {
// // //     setTeaserVisible(false);
// // //     setOpen(true);
// // //   };

// // //   useEffect(() => {
// // //     scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
// // //   }, [messages, typing, open]);

// // //   function send(text: string) {
// // //     const trimmed = text.trim();
// // //     if (!trimmed) return;

// // //     setMessages((m) => [...m, { id: uid(), role: "user", text: trimmed, time: nowStr() }]);
// // //     setInput("");
// // //     setTyping(true);

// // //     const delay = 550 + Math.random() * 450;
// // //     setTimeout(() => {
// // //       const { text: replyText, card } = getReply(trimmed);
// // //       setMessages((m) => [
// // //         ...m,
// // //         { id: uid(), role: "bot", text: replyText, time: nowStr(), card },
// // //       ]);
// // //       setTyping(false);
// // //     }, delay);
// // //   }

// // //   function handleFlavourSelect(id: string) {
// // //     const f = flavours.find((x) => x.id === id);
// // //     if (!f) return;

// // //     setMessages((m) => [
// // //       ...m,
// // //       { id: uid(), role: "user", text: `Tell me about ${f.name}`, time: nowStr() },
// // //     ]);
// // //     setTyping(true);
// // //     setTimeout(() => {
// // //       setMessages((m) => [
// // //         ...m,
// // //         {
// // //           id: uid(),
// // //           role: "bot",
// // //           text: `Here are the details for ${f.name}: `,
// // //           time: nowStr(),
// // //           card: { type: "flavour-detail", id },
// // //         },
// // //       ]);
// // //       setTyping(false);
// // //     }, 600);
// // //   }

// // //   return (
// // //     <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
// // //       {/* Chat panel */}
// // //       <AnimatePresence>
// // //         {open && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 28, scale: 0.93 }}
// // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // //             exit={{ opacity: 0, y: 20, scale: 0.95 }}
// // //             transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
// // //             style={{ transformOrigin: "bottom right" }}
// // //             className="mb-4 w-[92vw] max-w-[380px] h-[min(600px,74vh)] overflow-hidden rounded-3xl shadow-lift flex flex-col"
// // //           // Glassmorphism shell
// // //           >
// // //             {/* Frosted glass background */}
// // //             <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_48px_rgba(107,16,46,0.18)]" />

// // //             <div className="relative flex flex-col h-full">
// // //               {/* Header */}
// // //               <div className="shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between rounded-t-3xl">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
// // //                     <Mascot size={26} />
// // //                     {/* Turban gem glow */}
// // //                     <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-gold border-2 border-maroon/60 shadow-[0_0_6px_2px_rgba(249,168,37,0.6)]" />
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-display font-bold leading-tight text-[15px]">{SITE_CONFIG.companyName} Support</p>
// // //                     <p className="text-[11px] text-white/70 flex items-center gap-1.5">
// // //                       <span className="relative flex h-1.5 w-1.5">
// // //                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-80" />
// // //                         <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
// // //                       </span>
// // //                       Online now
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //                 <button
// // //                   aria-label="Close chat"
// // //                   onClick={() => setOpen(false)}
// // //                   className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
// // //                 >
// // //                   <X size={16} />
// // //                 </button>
// // //               </div>

// // //               {/* Messages */}
// // //               <div
// // //                 ref={scrollRef}
// // //                 className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3"
// // //                 style={{ background: "linear-gradient(170deg, rgba(255,240,245,0.7) 0%, rgba(255,255,255,0.6) 100%)" }}
// // //               >
// // //                 {messages.map((m) => (
// // //                   <MessageBubble
// // //                     key={m.id}
// // //                     message={m}
// // //                     onFlavourSelect={handleFlavourSelect}
// // //                     onSend={send}
// // //                   />
// // //                 ))}
// // //                 {typing && <TypingBubble />}

// // //                 {/* Quick suggestions — only when just the welcome message */}
// // //                 {messages.length <= 1 && !typing && (
// // //                   <motion.div
// // //                     initial={{ opacity: 0, y: 6 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ delay: 0.4 }}
// // //                     className="flex flex-wrap gap-2 pt-1"
// // //                   >
// // //                     {SUGGESTIONS.map((s) => (
// // //                       <button
// // //                         key={s}
// // //                         onClick={() => send(s)}
// // //                         className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-maroon/15 text-maroon hover:bg-maroon hover:text-white transition-all shadow-sm"
// // //                       >
// // //                         {s}
// // //                       </button>
// // //                     ))}
// // //                   </motion.div>
// // //                 )}
// // //               </div>

// // //               {/* Input */}
// // //               <form
// // //                 onSubmit={(e) => { e.preventDefault(); send(input); }}
// // //                 className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
// // //               >
// // //                 <input
// // //                   type="text"
// // //                   value={input}
// // //                   onChange={(e) => setInput(e.target.value)}
// // //                   placeholder="Type your question…"
// // //                   className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/20"
// // //                 />
// // //                 <button
// // //                   type="submit"
// // //                   aria-label="Send"
// // //                   disabled={!input.trim()}
// // //                   className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
// // //                 >
// // //                   <Send size={15} />
// // //                 </button>
// // //               </form>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* Floating mascot toggle button */}
// // //       <div className="relative group">
// // //         {/* ── Proactive teaser speech bubble (auto-appears once, dismissible) ── */}
// // //         <AnimatePresence>
// // //           {teaserVisible && !open && (
// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0.85, y: 8 }}
// // //               animate={{ opacity: 1, scale: 1, y: 0 }}
// // //               exit={{ opacity: 0, scale: 0.85, y: 8 }}
// // //               transition={{ type: "spring", stiffness: 260, damping: 20 }}
// // //               className="absolute bottom-full right-0 mb-4 w-56 cursor-pointer"
// // //               onClick={handleTeaserClick}
// // //             >
// // //               <div className="relative bg-white rounded-2xl shadow-lift px-4 py-3 border border-maroon/10">
// // //                 <button
// // //                   aria-label="Dismiss"
// // //                   onClick={(e) => { e.stopPropagation(); handleTeaserDismiss(); }}
// // //                   className="absolute -top-2 -right-2 bg-maroon/10 hover:bg-maroon/20 rounded-full p-1 transition-colors"
// // //                 >
// // //                   <X size={11} className="text-maroon" />
// // //                 </button>
// // //                 <div className="flex items-start gap-2">
// // //                   <span className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// // //                     <Mascot size={16} />
// // //                   </span>
// // //                   <p className="text-xs font-medium text-ink leading-snug">
// // //                     👋 Bhookh lagi kya? Poochho hume flavours ke baare mein!
// // //                   </p>
// // //                 </div>
// // //                 <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-white border-r border-b border-maroon/10 transform rotate-45" />
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* Spinning conic glow ring — only when closed */}
// // //         {!open && (
// // //           <motion.div
// // //             className="absolute -inset-2 rounded-full pointer-events-none"
// // //             style={{
// // //               background: "conic-gradient(from 0deg, #F9A825 0%, #E91E63 33%, #6B102E 66%, #F9A825 100%)",
// // //               filter: "blur(10px)",
// // //               opacity: 0.55,
// // //             }}
// // //             animate={{ rotate: 360 }}
// // //             transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
// // //           />
// // //         )}

// // //         {/* Hover tooltip — hidden while the teaser bubble is showing to avoid overlap */}
// // //         {!open && !teaserVisible && (
// // //           <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// // //             Chat with us 👋
// // //           </div>
// // //         )}

// // //         <motion.button
// // //           aria-label={open ? "Close chat" : "Open chat"}
// // //           onClick={() => setOpen((v) => !v)}
// // //           animate={open ? {} : { y: [0, -7, 0] }}
// // //           transition={open ? { duration: 0.2 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
// // //           whileHover={{ scale: 1.08 }}
// // //           whileTap={{ scale: 0.92 }}
// // //           className="relative w-16 h-16 rounded-full bg-pink-gradient shadow-glow flex items-center justify-center ring-4 ring-white/60"
// // //         >
// // //           <AnimatePresence mode="wait" initial={false}>
// // //             <motion.span
// // //               key={open ? "close" : "mascot"}
// // //               initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
// // //               animate={{ opacity: 1, rotate: 0, scale: 1 }}
// // //               exit={{ opacity: 0, rotate: 45, scale: 0.75 }}
// // //               transition={{ duration: 0.22 }}
// // //               className="flex items-center justify-center text-white"
// // //             >
// // //               {open ? <X size={24} /> : <Mascot size={34} />}
// // //             </motion.span>
// // //           </AnimatePresence>

// // //           {/* Gold notification dot */}
// // //           {!open && (
// // //             <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white shadow animate-pulse" />
// // //           )}
// // //         </motion.button>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { X, Send, Phone, Mail, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";
// // import { SITE_CONFIG } from "@/lib/site-config";
// // import { flavours } from "@/data/flavours";
// // import { cn } from "@/lib/utils";
// // import Image from "next/image";

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Types
// // // ─────────────────────────────────────────────────────────────────────────────

// // interface Message {
// //   id: string;
// //   role: "user" | "bot";
// //   text: string;
// //   time: string;
// //   card?: "contact" | "flavour-list" | { type: "flavour-detail"; id: string };
// // }

// // function uid() {
// //   return Math.random().toString(36).slice(2, 10);
// // }

// // function nowStr() {
// //   return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Reply logic
// // // ─────────────────────────────────────────────────────────────────────────────

// // type BotReply = {
// //   text: string;
// //   card?: Message["card"];
// // };

// // const RULES: Array<{ keywords: string[]; reply: () => BotReply }> = [
// //   {
// //     keywords: ["hi", "hello", "hey", "namaste", "khamma", "hola", "start"],
// //     reply: () => ({
// //       text: `Khamma Ghani! 🙏\nWelcome to ${SITE_CONFIG.companyName}.\nHow can I help you today?`,
// //     }),
// //   },
// //   {
// //     keywords: ["about", "who are you", "what is snax", "what do you sell", "what do you do", "tell me"],
// //     reply: () => ({
// //       text: `${SITE_CONFIG.companyName} is a premium roasted makhana (fox nut) snack brand — healthy, crunchy, and bursting with bold Indian flavours. 🌿\n\nWe're proudly made in Rajasthan and crafted for snackers who don't want to compromise on taste or health.`,
// //     }),
// //   },
// //   {
// //     keywords: ["healthy", "health", "nutrition", "protein", "benefits", "good for"],
// //     reply: () => ({
// //       text: `Makhana (fox nuts) are one of nature's best superfoods! 💪\n\n✅ High in protein\n✅ Low in calories & fat\n✅ Rich in antioxidants\n✅ Gluten-free & vegan-friendly\n✅ No artificial preservatives\n\nSnax सा packs all that goodness into bold, irresistible flavours!`,
// //     }),
// //   },
// //   {
// //     keywords: ["flavour", "flavor", "taste", "variety", "options", "products", "product"],
// //     reply: () => ({
// //       text: `We have ${flavours.length} amazing flavours for you to explore! 🎉\nTap any flavour below to know more:`,
// //       card: "flavour-list",
// //     }),
// //   },
// //   {
// //     keywords: ["price", "cost", "how much", "rate", "pricing"],
// //     reply: () => ({
// //       text: `Our flavours are priced between ₹${Math.min(...flavours.map((f) => f.price))} – ₹${Math.max(...flavours.map((f) => f.price))} per ${flavours[0].weight}.\n\nTap "Flavours" to see each flavour's details and pricing! 😊`,
// //       card: "flavour-list",
// //     }),
// //   },
// //   {
// //     keywords: ["order", "buy", "purchase", "how to order"],
// //     reply: () => ({
// //       text: `Ordering is easy! 🛒\n\nSimply contact our team via Phone or WhatsApp and we'll take care of everything for you.`,
// //       card: "contact",
// //     }),
// //   },
// //   {
// //     keywords: ["deliver", "delivery", "shipping", "ship", "dispatch"],
// //     reply: () => ({
// //       text: `Yes, we deliver! 🚚\n\nMessage us on WhatsApp with your location and we'll confirm availability & timelines.`,
// //       card: "contact",
// //     }),
// //   },
// //   {
// //     keywords: ["bulk", "wholesale", "large order", "big order"],
// //     reply: () => ({
// //       text: `We'd love to fulfil your bulk order! 📦\n\nPlease reach out to our team and we'll share pricing and details:`,
// //       card: "contact",
// //     }),
// //   },
// //   {
// //     keywords: ["corporate", "gifting", "gift", "corporate gift"],
// //     reply: () => ({
// //       text: `We offer premium corporate gifting options! 🎁\n\nContact us to discuss your requirements and we'll create a custom package for you:`,
// //       card: "contact",
// //     }),
// //   },
// //   {
// //     keywords: ["franchise", "distributor", "reseller", "stockist", "partner", "dealership"],
// //     reply: () => ({
// //       text: `We're open to franchise and partnership opportunities! 🤝\n\nPlease reach out and our team will get back to you:`,
// //       card: "contact",
// //     }),
// //   },
// //   {
// //     keywords: ["contact", "reach", "get in touch", "details", "info", "information"],
// //     reply: () => ({
// //       text: `Here are all our contact details:`,
// //       card: "contact",
// //     }),
// //   },
// //   {
// //     keywords: ["phone", "call", "number", "mobile", "telephone"],
// //     reply: () => ({
// //       text: `You can call us anytime at:`,
// //       card: "contact",
// //     }),
// //   },
// //   {
// //     keywords: ["whatsapp"],
// //     reply: () => ({
// //       text: `You can reach us instantly on WhatsApp:`,
// //       card: "contact",
// //     }),
// //   },
// //   {
// //     keywords: ["email", "mail"],
// //     reply: () => ({
// //       text: `Our email address is:\n📧 ${SITE_CONFIG.email}\n\nWe usually respond within a day!`,
// //     }),
// //   },
// //   {
// //     keywords: ["instagram", "insta", "social media", "social", "follow"],
// //     reply: () => ({
// //       text: `Follow us on Instagram for the latest flavours, offers & behind-the-scenes! 📸\n\n👉 ${SITE_CONFIG.social.instagram}`,
// //     }),
// //   },
// //   {
// //     keywords: ["location", "address", "store", "where", "based", "office"],
// //     reply: () => ({
// //       text: `📍 You can find us at:\n${SITE_CONFIG.address}`,
// //     }),
// //   },
// //   {
// //     keywords: ["hours", "timing", "open", "when", "time", "schedule"],
// //     reply: () => ({
// //       text: `🕒 Our business hours are:\n${SITE_CONFIG.hours}\n\nFeel free to reach out anytime on WhatsApp!`,
// //     }),
// //   },
// //   {
// //     keywords: ["thank", "thanks", "great", "awesome", "perfect", "nice"],
// //     reply: () => ({
// //       text: `You're most welcome! 😊\n\nIs there anything else I can help you with?`,
// //     }),
// //   },
// // ];

// // function getReply(userText: string): BotReply {
// //   const text = userText.toLowerCase();
// //   for (const rule of RULES) {
// //     if (rule.keywords.some((k) => text.includes(k))) return rule.reply();
// //   }
// //   return {
// //     text: `I'm sorry, I couldn't understand that. 🙏\n\nPlease contact our team for more information:`,
// //     card: "contact",
// //   };
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Mascot SVG — original Snax सा mascot character
// // // ─────────────────────────────────────────────────────────────────────────────

// // function Mascot({ size = 28 }: { size?: number }) {
// //   return (
// //     <div
// //       style={{ width: size, height: size }}
// //       className="relative overflow-hidden rounded-full"
// //     >
// //       <Image
// //         src="/public/images/chatbuticon.png"

// //         alt="Snax-Sa Chatbot"
// //         fill
// //         className="object-contain"
// //         priority
// //       />
// //     </div>
// //   );
// // }
// // // ─────────────────────────────────────────────────────────────────────────────
// // // Inline Cards
// // // ─────────────────────────────────────────────────────────────────────────────

// // function ContactCard({ onSend }: { onSend: (text: string) => void }) {
// //   return (
// //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// //       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
// //         📋 Contact Details
// //       </div>
// //       <div className="px-4 py-3 space-y-2.5">
// //         <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //             <Phone size={13} className="text-maroon" />
// //           </span>
// //           <span className="font-medium">{SITE_CONFIG.phone}</span>
// //         </a>
// //         {SITE_CONFIG.phoneSecondary && (
// //           <a href={`tel:${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// //             <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //               <Phone size={13} className="text-maroon" />
// //             </span>
// //             <span className="font-medium">{SITE_CONFIG.phoneSecondary}</span>
// //           </a>
// //         )}
// //         <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //             <MessageCircle size={13} className="text-maroon" />
// //           </span>
// //           <span className="font-medium">WhatsApp Us</span>
// //         </a>
// //         <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //             <Mail size={13} className="text-maroon" />
// //           </span>
// //           <span className="font-medium">{SITE_CONFIG.email}</span>
// //         </a>
// //         <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group">
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //             <Instagram size={13} className="text-maroon" />
// //           </span>
// //           <span className="font-medium">Follow on Instagram</span>
// //         </a>
// //         <div className="flex items-center gap-2.5 text-xs text-ink/60">
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
// //             <MapPin size={13} className="text-maroon/60" />
// //           </span>
// //           <span>{SITE_CONFIG.address}</span>
// //         </div>
// //         <div className="flex items-center gap-2.5 text-xs text-ink/60">
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
// //             <Clock size={13} className="text-maroon/60" />
// //           </span>
// //           <span>{SITE_CONFIG.hours}</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const FLAVOUR_EMOJIS: Record<string, string> = {
// //   "peri-punch": "🌶",
// //   "tangy-tingle": "🍅",
// //   "minty-pinch": "🌿",
// //   "snow-pepper": "🧂",
// // };

// // function FlavourListCard({ onSelect }: { onSelect: (id: string) => void }) {
// //   return (
// //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// //       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
// //         ✨ Our Flavours
// //       </div>
// //       <div className="px-3 py-2 space-y-1.5">
// //         {flavours.map((f) => (
// //           <button
// //             key={f.id}
// //             onClick={() => onSelect(f.id)}
// //             className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-maroon/4 hover:bg-maroon/10 transition-colors text-left group"
// //           >
// //             <div className="flex items-center gap-2.5">
// //               <span className="text-base">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
// //               <div>
// //                 <p className="text-xs font-bold text-ink group-hover:text-maroon transition-colors">{f.name}</p>
// //                 <p className="text-[10px] text-ink-soft">{f.tagline}</p>
// //               </div>
// //             </div>
// //             <span className="text-xs font-bold text-maroon shrink-0">₹{f.price}</span>
// //           </button>
// //         ))}
// //       </div>
// //       <p className="text-[10px] text-ink-soft/60 text-center pb-2.5">Tap a flavour to know more</p>
// //     </div>
// //   );
// // }

// // function FlavourDetailCard({ flavourId, onSend }: { flavourId: string; onSend: (t: string) => void }) {
// //   const f = flavours.find((x) => x.id === flavourId);
// //   if (!f) return null;

// //   return (
// //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// //       <div
// //         className="px-4 py-3 text-white"
// //         style={{ background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})` }}
// //       >
// //         <div className="flex items-center gap-2">
// //           <span className="text-xl">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
// //           <div>
// //             <p className="text-sm font-bold leading-tight">{f.name}</p>
// //             <p className="text-[10px] opacity-80">{f.tagline}</p>
// //           </div>
// //           {f.badge && (
// //             <span className="ml-auto text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full">{f.badge}</span>
// //           )}
// //         </div>
// //       </div>
// //       <div className="px-4 py-3 space-y-2">
// //         <p className="text-[11px] text-ink-soft leading-relaxed">{f.description}</p>
// //         <div className="flex gap-2">
// //           <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
// //             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">Price</p>
// //             <p className="text-sm font-bold text-maroon">₹{f.price}</p>
// //           </div>
// //           <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
// //             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">Pack Size</p>
// //             <p className="text-sm font-bold text-ink">{f.weight}</p>
// //           </div>
// //         </div>
// //         <div className="pt-1 border-t border-maroon/8">
// //           <p className="text-[10px] text-ink-soft/60 mb-1.5">For orders & more info:</p>
// //           <div className="flex gap-2">
// //             <a href={SITE_CONFIG.phoneHref} className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-maroon rounded-lg py-1.5 hover:opacity-90 transition-opacity">
// //               <Phone size={10} /> Call
// //             </a>
// //             <a href={SITE_CONFIG.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-[#25D366] rounded-lg py-1.5 hover:opacity-90 transition-opacity">
// //               <MessageCircle size={10} /> WhatsApp
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Message Bubble
// // // ─────────────────────────────────────────────────────────────────────────────

// // function MessageBubble({
// //   message,
// //   onFlavourSelect,
// //   onSend,
// // }: {
// //   message: Message;
// //   onFlavourSelect: (id: string) => void;
// //   onSend: (t: string) => void;
// // }) {
// //   const isUser = message.role === "user";
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 10 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.26 }}
// //       className={cn("flex flex-col", isUser ? "items-end" : "items-start")}
// //     >
// //       <div className={cn("flex items-end gap-2", isUser ? "flex-row-reverse" : "flex-row")}>
// //         {!isUser && (
// //           <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// //             <Mascot size={24} />
// //           </div>
// //         )}
// //         <div className="flex flex-col gap-1.5">
// //           {message.text && (
// //             <div
// //               className={cn(
// //                 "max-w-[220px] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
// //                 isUser
// //                   ? "bg-pink-gradient text-white rounded-br-sm shadow-card"
// //                   : "bg-white text-ink rounded-bl-sm shadow-card border border-maroon/5"
// //               )}
// //             >
// //               {message.text}
// //             </div>
// //           )}
// //           {/* Cards */}
// //           {message.card === "contact" && <ContactCard onSend={onSend} />}
// //           {message.card === "flavour-list" && <FlavourListCard onSelect={onFlavourSelect} />}
// //           {message.card &&
// //             typeof message.card === "object" &&
// //             message.card.type === "flavour-detail" && (
// //               <FlavourDetailCard flavourId={message.card.id} onSend={onSend} />
// //             )}
// //         </div>
// //       </div>
// //       <span className={cn("text-[10px] text-ink-soft/50 mt-1 px-1", isUser ? "mr-1" : "ml-9")}>
// //         {message.time}
// //       </span>
// //     </motion.div>
// //   );
// // }

// // function TypingBubble() {
// //   return (
// //     <div className="flex items-end gap-2">
// //       <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// //         <Mascot size={26} />
// //       </div>
// //       <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white shadow-card border border-maroon/5 flex items-center gap-1">
// //         {[0, 1, 2].map((i) => (
// //           <motion.span
// //             key={i}
// //             className="w-1.5 h-1.5 rounded-full bg-maroon/50"
// //             animate={{ y: [0, -4, 0] }}
// //             transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Quick chips — always visible above the input, one-tap shortcuts to common asks
// // // ─────────────────────────────────────────────────────────────────────────────

// // const QUICK_CHIPS = ["Our Flavours", "Price", "How to Order?", "Bulk Order", "Contact Details"];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Main ChatWidget
// // // ─────────────────────────────────────────────────────────────────────────────

// // const WELCOME: Message = {
// //   id: "welcome",
// //   role: "bot",
// //   text: `👋 Khamma Ghani!\nWelcome to ${SITE_CONFIG.companyName}.\nHow can I help you today?`,
// //   time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
// // };

// // export default function ChatWidget() {
// //   const [open, setOpen] = useState(false);
// //   const [messages, setMessages] = useState<Message[]>([WELCOME]);
// //   const [input, setInput] = useState("");
// //   const [typing, setTyping] = useState(false);
// //   const scrollRef = useRef<HTMLDivElement>(null);

// //   // ── Proactive teaser bubble (same engagement workflow as the reference widget) ──
// //   const [teaserVisible, setTeaserVisible] = useState(false);
// //   const [teaserDismissed, setTeaserDismissed] = useState(false);

// //   useEffect(() => {
// //     const t = setTimeout(() => {
// //       if (!teaserDismissed && !open) setTeaserVisible(true);
// //     }, 3000);
// //     return () => clearTimeout(t);
// //   }, [teaserDismissed, open]);

// //   useEffect(() => {
// //     if (open) setTeaserVisible(false);
// //   }, [open]);

// //   const handleTeaserDismiss = () => {
// //     setTeaserVisible(false);
// //     setTeaserDismissed(true);
// //   };

// //   const handleTeaserClick = () => {
// //     setTeaserVisible(false);
// //     setOpen(true);
// //   };

// //   useEffect(() => {
// //     scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
// //   }, [messages, typing, open]);

// //   function send(text: string) {
// //     const trimmed = text.trim();
// //     if (!trimmed) return;

// //     setMessages((m) => [...m, { id: uid(), role: "user", text: trimmed, time: nowStr() }]);
// //     setInput("");
// //     setTyping(true);

// //     async function send(text: string) {
// //       const trimmed = text.trim();
// //       if (!trimmed) return;

// //       setInput("");

// //       setMessages((m) => [
// //         ...m,
// //         {
// //           id: uid(),
// //           role: "user",
// //           text: trimmed,
// //           time: nowStr(),
// //         },
// //       ]);

// //       setTyping(true);

// //       try {
// //         const res = await fetch("/api/chat", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             message: trimmed,
// //           }),
// //         });

// //         const data = await res.json();

// //         setMessages((m) => [
// //           ...m,
// //           {
// //             id: uid(),
// //             role: "bot",
// //             text: data.reply,
// //             time: nowStr(),
// //           },
// //         ]);
// //       } catch (err) {
// //         console.error(err);

// //         setMessages((m) => [
// //           ...m,
// //           {
// //             id: uid(),
// //             role: "bot",
// //             text: "Sorry, I'm having trouble responding right now.",
// //             time: nowStr(),
// //           },
// //         ]);
// //       } finally {
// //         setTyping(false);
// //       }
// //     }
// //     function handleFlavourSelect(id: string) {
// //       const f = flavours.find((x) => x.id === id);
// //       if (!f) return;

// //       setMessages((m) => [
// //         ...m,
// //         { id: uid(), role: "user", text: `Tell me about ${f.name}`, time: nowStr() },
// //       ]);
// //       setTyping(true);
// //       setTimeout(() => {
// //         setMessages((m) => [
// //           ...m,
// //           {
// //             id: uid(),
// //             role: "bot",
// //             text: `Here are the details for ${f.name}: `,
// //             time: nowStr(),
// //             card: { type: "flavour-detail", id },
// //           },
// //         ]);
// //         setTyping(false);
// //       }, 600);
// //     }

// //     return (
// //       <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
// //         {/* Chat panel */}
// //         <AnimatePresence>
// //           {open && (
// //             <motion.div
// //               initial={{ opacity: 0, y: 28, scale: 0.93 }}
// //               animate={{ opacity: 1, y: 0, scale: 1 }}
// //               exit={{ opacity: 0, y: 20, scale: 0.95 }}
// //               transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
// //               style={{ transformOrigin: "bottom right" }}
// //               className="mb-4 w-[92vw] max-w-[380px] h-[min(600px,74vh)] overflow-hidden rounded-3xl shadow-lift flex flex-col"
// //             // Glassmorphism shell
// //             >
// //               {/* Frosted glass background */}
// //               <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_48px_rgba(107,16,46,0.18)]" />

// //               <div className="relative flex flex-col h-full">
// //                 {/* Header */}
// //                 <div className="shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between rounded-t-3xl">
// //                   <div className="flex items-center gap-3">
// //                     <div className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
// //                       <Mascot size={36} />
// //                       {/* Turban gem glow */}
// //                       <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-gold border-2 border-maroon/60 shadow-[0_0_6px_2px_rgba(249,168,37,0.6)]" />
// //                     </div>
// //                     <div>
// //                       <p className="font-display font-bold leading-tight text-[15px]">{SITE_CONFIG.companyName} Support</p>
// //                       <p className="text-[11px] text-white/70 flex items-center gap-1.5">
// //                         <span className="relative flex h-1.5 w-1.5">
// //                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-80" />
// //                           <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
// //                         </span>
// //                         Online now
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <button
// //                     aria-label="Close chat"
// //                     onClick={() => setOpen(false)}
// //                     className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
// //                   >
// //                     <X size={16} />
// //                   </button>
// //                 </div>

// //                 {/* Messages */}
// //                 <div
// //                   ref={scrollRef}
// //                   className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3"
// //                   style={{ background: "linear-gradient(170deg, rgba(255,240,245,0.7) 0%, rgba(255,255,255,0.6) 100%)" }}
// //                 >
// //                   {messages.map((m) => (
// //                     <MessageBubble
// //                       key={m.id}
// //                       message={m}
// //                       onFlavourSelect={handleFlavourSelect}
// //                       onSend={send}
// //                     />
// //                   ))}
// //                   {typing && <TypingBubble />}
// //                 </div>

// //                 {/* Quick chips — always visible, one tap sends the chip text */}
// //                 <div className="shrink-0 flex flex-wrap gap-2 px-4 pt-2.5 pb-1 border-t border-maroon/10 bg-white/70">
// //                   {QUICK_CHIPS.map((chip) => (
// //                     <button
// //                       key={chip}
// //                       type="button"
// //                       onClick={() => send(chip)}
// //                       className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-maroon/15 text-maroon hover:bg-maroon hover:text-white transition-all shadow-sm"
// //                     >
// //                       {chip}
// //                     </button>
// //                   ))}
// //                 </div>

// //                 {/* Input */}
// //                 <form
// //                   onSubmit={(e) => { e.preventDefault(); send(input); }}
// //                   className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
// //                 >
// //                   <input
// //                     type="text"
// //                     value={input}
// //                     onChange={(e) => setInput(e.target.value)}
// //                     placeholder="Type your question…"
// //                     className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/20"
// //                   />
// //                   <button
// //                     type="submit"
// //                     aria-label="Send"
// //                     disabled={!input.trim()}
// //                     className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
// //                   >
// //                     <Send size={15} />
// //                   </button>
// //                 </form>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Floating mascot toggle button */}
// //         <div className="relative group">
// //           {/* ── Proactive teaser speech bubble (auto-appears once, dismissible) ── */}
// //           <AnimatePresence>
// //             {teaserVisible && !open && (
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.85, y: 8 }}
// //                 animate={{ opacity: 1, scale: 1, y: 0 }}
// //                 exit={{ opacity: 0, scale: 0.85, y: 8 }}
// //                 transition={{ type: "spring", stiffness: 260, damping: 20 }}
// //                 className="absolute bottom-full right-0 mb-4 w-56 cursor-pointer"
// //                 onClick={handleTeaserClick}
// //               >
// //                 <div className="relative bg-white rounded-2xl shadow-lift px-4 py-3 border border-maroon/10">
// //                   <button
// //                     aria-label="Dismiss"
// //                     onClick={(e) => { e.stopPropagation(); handleTeaserDismiss(); }}
// //                     className="absolute -top-2 -right-2 bg-maroon/10 hover:bg-maroon/20 rounded-full p-1 transition-colors"
// //                   >
// //                     <X size={11} className="text-maroon" />
// //                   </button>
// //                   <div className="flex items-start gap-2">
// //                     <span className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// //                       <Mascot size={16} />
// //                     </span>
// //                     <p className="text-xs font-medium text-ink leading-snug">
// //                       👋 Bhookh lagi kya? Poochho hume flavours ke baare mein!
// //                     </p>
// //                   </div>
// //                   <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-white border-r border-b border-maroon/10 transform rotate-45" />
// //                 </div>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>

// //           {/* Spinning conic glow ring — only when closed */}
// //           {!open && (
// //             <motion.div
// //               className="absolute -inset-2 rounded-full pointer-events-none"
// //               style={{
// //                 background: "conic-gradient(from 0deg, #F9A825 0%, #E91E63 33%, #6B102E 66%, #F9A825 100%)",
// //                 filter: "blur(10px)",
// //                 opacity: 0.55,
// //               }}
// //               animate={{ rotate: 360 }}
// //               transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
// //             />
// //           )}

// //           {/* Hover tooltip — hidden while the teaser bubble is showing to avoid overlap */}
// //           {!open && !teaserVisible && (
// //             <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// //               Chat with us 👋
// //             </div>
// //           )}

// //           <motion.button
// //             aria-label={open ? "Close chat" : "Open chat"}
// //             onClick={() => setOpen((v) => !v)}
// //             animate={open ? {} : { y: [0, -7, 0] }}
// //             transition={open ? { duration: 0.2 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
// //             whileHover={{ scale: 1.08 }}
// //             whileTap={{ scale: 0.92 }}
// //             // className="relative w-20 h-20 rounded-full bg-pink-gradient shadow-glow flex items-center justify-center ring-4 ring-white/60"
// //             className="relative w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center ring-4 ring-[#F9A825]/30 hover:scale-105 transition-all duration-300"
// //           >
// //             <AnimatePresence mode="wait" initial={false}>
// //               <motion.span
// //                 key={open ? "close" : "mascot"}
// //                 initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
// //                 animate={{ opacity: 1, rotate: 0, scale: 1 }}
// //                 exit={{ opacity: 0, rotate: 45, scale: 0.75 }}
// //                 transition={{ duration: 0.22 }}
// //                 className="flex items-center justify-center text-white"
// //               >
// //                 {open ? <X size={24} /> : <Mascot size={54} />}
// //               </motion.span>
// //             </AnimatePresence>

// //             {/* Gold notification dot */}
// //             {!open && (
// //               <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white shadow animate-pulse" />
// //             )}
// //           </motion.button>
// //         </div>
// //       </div>
// //     );
// //   }
// // }





// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { X, Send, Phone, Mail, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";
// import { SITE_CONFIG } from "@/lib/site-config";
// import { flavours } from "@/data/flavours";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// // ─────────────────────────────────────────────────────────────────────────────
// // Types
// // ─────────────────────────────────────────────────────────────────────────────

// interface Message {
//   id: string;
//   role: "user" | "bot";
//   text: string;
//   time: string;
//   card?: "contact" | "flavour-list" | { type: "flavour-detail"; id: string };
// }

// function uid() {
//   return Math.random().toString(36).slice(2, 10);
// }

// function nowStr() {
//   return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Mascot — original Snax सा mascot character (image based)
// // ─────────────────────────────────────────────────────────────────────────────

// function Mascot({ size = 28 }: { size?: number }) {
//   return (
//     <div style={{ width: size, height: size }} className="relative overflow-hidden rounded-full">
//       <Image
//         src="/images/chatbuticon.png"
//         alt="Snax-Sa Chatbot"
//         fill
//         className="object-contain"
//         priority
//       />
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Inline Cards
// // ─────────────────────────────────────────────────────────────────────────────

// function ContactCard() {
//   return (
//     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
//       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
//         📋 Contact Details
//       </div>
//       <div className="px-4 py-3 space-y-2.5">
//         <a
//           href={SITE_CONFIG.phoneHref}
//           className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
//         >
//           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
//             <Phone size={13} className="text-maroon" />
//           </span>
//           <span className="font-medium">{SITE_CONFIG.phone}</span>
//         </a>
//         {SITE_CONFIG.phoneSecondary && (
//           <a
//             href={`tel:${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`}
//             className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
//           >
//             <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
//               <Phone size={13} className="text-maroon" />
//             </span>
//             <span className="font-medium">{SITE_CONFIG.phoneSecondary}</span>
//           </a>
//         )}
//         <a
//           href={SITE_CONFIG.whatsappHref}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
//         >
//           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
//             <MessageCircle size={13} className="text-maroon" />
//           </span>
//           <span className="font-medium">WhatsApp Us</span>
//         </a>
//         <a
//           href={`mailto:${SITE_CONFIG.email}`}
//           className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
//         >
//           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
//             <Mail size={13} className="text-maroon" />
//           </span>
//           <span className="font-medium">{SITE_CONFIG.email}</span>
//         </a>
//         <a
//           href={SITE_CONFIG.social.instagram}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
//         >
//           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
//             <Instagram size={13} className="text-maroon" />
//           </span>
//           <span className="font-medium">Follow on Instagram</span>
//         </a>
//         <div className="flex items-center gap-2.5 text-xs text-ink/60">
//           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
//             <MapPin size={13} className="text-maroon/60" />
//           </span>
//           <span>{SITE_CONFIG.address}</span>
//         </div>
//         <div className="flex items-center gap-2.5 text-xs text-ink/60">
//           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
//             <Clock size={13} className="text-maroon/60" />
//           </span>
//           <span>{SITE_CONFIG.hours}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// const FLAVOUR_EMOJIS: Record<string, string> = {
//   "peri-punch": "🌶",
//   "tangy-tingle": "🍅",
//   "minty-pinch": "🌿",
//   "snow-pepper": "🧂",
// };

// function FlavourListCard({ onSelect }: { onSelect: (id: string) => void }) {
//   return (
//     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
//       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
//         ✨ Our Flavours
//       </div>
//       <div className="px-3 py-2 space-y-1.5">
//         {flavours.map((f) => (
//           <button
//             key={f.id}
//             onClick={() => onSelect(f.id)}
//             className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-maroon/4 hover:bg-maroon/10 transition-colors text-left group"
//           >
//             <div className="flex items-center gap-2.5">
//               <span className="text-base">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
//               <div>
//                 <p className="text-xs font-bold text-ink group-hover:text-maroon transition-colors">
//                   {f.name}
//                 </p>
//                 <p className="text-[10px] text-ink-soft">{f.tagline}</p>
//               </div>
//             </div>
//             <span className="text-xs font-bold text-maroon shrink-0">₹{f.price}</span>
//           </button>
//         ))}
//       </div>
//       <p className="text-[10px] text-ink-soft/60 text-center pb-2.5">Tap a flavour to know more</p>
//     </div>
//   );
// }

// function FlavourDetailCard({ flavourId }: { flavourId: string }) {
//   const f = flavours.find((x) => x.id === flavourId);
//   if (!f) return null;

//   return (
//     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
//       <div
//         className="px-4 py-3 text-white"
//         style={{ background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})` }}
//       >
//         <div className="flex items-center gap-2">
//           <span className="text-xl">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
//           <div>
//             <p className="text-sm font-bold leading-tight">{f.name}</p>
//             <p className="text-[10px] opacity-80">{f.tagline}</p>
//           </div>
//           {f.badge && (
//             <span className="ml-auto text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
//               {f.badge}
//             </span>
//           )}
//         </div>
//       </div>
//       <div className="px-4 py-3 space-y-2">
//         <p className="text-[11px] text-ink-soft leading-relaxed">{f.description}</p>
//         <div className="flex gap-2">
//           <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
//             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">Price</p>
//             <p className="text-sm font-bold text-maroon">₹{f.price}</p>
//           </div>
//           <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
//             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">
//               Pack Size
//             </p>
//             <p className="text-sm font-bold text-ink">{f.weight}</p>
//           </div>
//         </div>
//         <div className="pt-1 border-t border-maroon/8">
//           <p className="text-[10px] text-ink-soft/60 mb-1.5">For orders &amp; more info:</p>
//           <div className="flex gap-2">
//             <a
//               href={SITE_CONFIG.phoneHref}
//               className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-maroon rounded-lg py-1.5 hover:opacity-90 transition-opacity"
//             >
//               <Phone size={10} /> Call
//             </a>
//             <a
//               href={SITE_CONFIG.whatsappHref}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-[#25D366] rounded-lg py-1.5 hover:opacity-90 transition-opacity"
//             >
//               <MessageCircle size={10} /> WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Message Bubble
// // ─────────────────────────────────────────────────────────────────────────────

// function MessageBubble({
//   message,
//   onFlavourSelect,
// }: {
//   message: Message;
//   onFlavourSelect: (id: string) => void;
// }) {
//   const isUser = message.role === "user";
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.26 }}
//       className={cn("flex flex-col", isUser ? "items-end" : "items-start")}
//     >
//       <div className={cn("flex items-end gap-2", isUser ? "flex-row-reverse" : "flex-row")}>
//         {!isUser && (
//           <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
//             <Mascot size={24} />
//           </div>
//         )}
//         <div className="flex flex-col gap-1.5">
//           {message.text && (
//             <div
//               className={cn(
//                 "max-w-[220px] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
//                 isUser
//                   ? "bg-pink-gradient text-white rounded-br-sm shadow-card"
//                   : "bg-white text-ink rounded-bl-sm shadow-card border border-maroon/5"
//               )}
//             >
//               {message.text}
//             </div>
//           )}
//           {/* Cards */}
//           {message.card === "contact" && <ContactCard />}
//           {message.card === "flavour-list" && <FlavourListCard onSelect={onFlavourSelect} />}
//           {message.card &&
//             typeof message.card === "object" &&
//             message.card.type === "flavour-detail" && (
//               <FlavourDetailCard flavourId={message.card.id} />
//             )}
//         </div>
//       </div>
//       <span className={cn("text-[10px] text-ink-soft/50 mt-1 px-1", isUser ? "mr-1" : "ml-9")}>
//         {message.time}
//       </span>
//     </motion.div>
//   );
// }

// function TypingBubble() {
//   return (
//     <div className="flex items-end gap-2">
//       <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
//         <Mascot size={26} />
//       </div>
//       <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white shadow-card border border-maroon/5 flex items-center gap-1">
//         {[0, 1, 2].map((i) => (
//           <motion.span
//             key={i}
//             className="w-1.5 h-1.5 rounded-full bg-maroon/50"
//             animate={{ y: [0, -4, 0] }}
//             transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Quick chips — always visible above the input, one-tap shortcuts to common asks
// // ─────────────────────────────────────────────────────────────────────────────

// const QUICK_CHIPS = [
//   "Our Flavours",
//   "Delivery",
//   "Bulk Orders",
//   "Contact Details",
// ];
// // ─────────────────────────────────────────────────────────────────────────────
// // Local intent matching — these stay OFF the AI. If the user's message matches
// // one of these, we show a card directly instead of calling /api/chat. This is
// // what powers the quick chips (and any typed message using similar words).
// // ─────────────────────────────────────────────────────────────────────────────

// type LocalReply = {
//   text: string;
//   card?: Message["card"];
// };

// const LOCAL_RULES: Array<{ keywords: string[]; reply: () => LocalReply }> = [
//   {
//     keywords: ["our flavours", "flavour", "flavor", "taste", "variety", "products", "product"],
//     reply: () => ({
//       text: `We have ${flavours.length} amazing flavours for you to explore! 🎉\nTap any flavour below to know more:`,
//       card: "flavour-list",
//     }),
//   },
//   {
//     keywords: ["price", "cost", "how much", "rate", "pricing"],
//     reply: () => ({
//       text: `Our flavours are priced between ₹${Math.min(
//         ...flavours.map((f) => f.price)
//       )} – ₹${Math.max(...flavours.map((f) => f.price))} per ${flavours[0].weight}.\n\nTap a flavour below for details! 😊`,
//       card: "flavour-list",
//     }),
//   },
//   {
//     keywords: ["how to order", "order", "buy", "purchase"],
//     reply: () => ({
//       text: `Ordering is easy! 🛒\n\nSimply contact our team via Phone or WhatsApp and we'll take care of everything for you.`,
//       card: "contact",
//     }),
//   },
//   {
//     keywords: ["bulk order", "bulk", "wholesale", "large order"],
//     reply: () => ({
//       text: `We'd love to fulfil your bulk order! 📦\n\nPlease reach out to our team and we'll share pricing and details:`,
//       card: "contact",
//     }),
//   },
//   {
//     keywords: ["contact details", "contact", "reach", "get in touch", "whatsapp", "phone number"],
//     reply: () => ({
//       text: `Here are all our contact details:`,
//       card: "contact",
//     }),
//   },
// ];

// function matchLocalReply(userText: string): LocalReply | null {
//   const text = userText.toLowerCase().trim();
//   for (const rule of LOCAL_RULES) {
//     if (rule.keywords.some((k) => text.includes(k))) return rule.reply();
//   }
//   return null;
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Main ChatWidget
// // ─────────────────────────────────────────────────────────────────────────────

// const WELCOME: Message = {
//   id: "welcome",
//   role: "bot",
//   text: `👋 Khamma Ghani!\nWelcome to ${SITE_CONFIG.companyName}.\nHow can I help you today?`,
//   time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
// };

// export default function ChatWidget() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([WELCOME]);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // ── Proactive teaser bubble (auto-appears once, dismissible) ──
//   const [teaserVisible, setTeaserVisible] = useState(false);
//   const [teaserDismissed, setTeaserDismissed] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => {
//       if (!teaserDismissed && !open) setTeaserVisible(true);
//     }, 3000);
//     return () => clearTimeout(t);
//   }, [teaserDismissed, open]);

//   useEffect(() => {
//     if (open) setTeaserVisible(false);
//   }, [open]);

//   const handleTeaserDismiss = () => {
//     setTeaserVisible(false);
//     setTeaserDismissed(true);
//   };

//   const handleTeaserClick = () => {
//     setTeaserVisible(false);
//     setOpen(true);
//   };

//   useEffect(() => {
//     scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
//   }, [messages, typing, open]);

//   // ── Send a message: local card intents are handled instantly (no AI call);
//   //    everything else goes to /api/chat (Groq). ──
//   async function send(text: string) {
//     const trimmed = text.trim();
//     if (!trimmed) return;

//     setInput("");

//     setMessages((m) => [
//       ...m,
//       {
//         id: uid(),
//         role: "user",
//         text: trimmed,
//         time: nowStr(),
//       },
//     ]);

//     // 1) Check local card intents first (quick chips + similar keywords)
//     const localReply = matchLocalReply(trimmed);
//     if (localReply) {
//       setTyping(true);
//       setTimeout(() => {
//         setMessages((m) => [
//           ...m,
//           {
//             id: uid(),
//             role: "bot",
//             text: localReply.text,
//             time: nowStr(),
//             card: localReply.card,
//           },
//         ]);
//         setTyping(false);
//       }, 450);
//       return;
//     }

//     // 2) Otherwise, fall back to the AI (Groq)
//     setTyping(true);

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: trimmed }),
//       });

//       const data = await res.json();

//       setMessages((m) => [
//         ...m,
//         {
//           id: uid(),
//           role: "bot",
//           text: data.reply,
//           time: nowStr(),
//         },
//       ]);
//     } catch (err) {
//       console.error(err);
//       setMessages((m) => [
//         ...m,
//         {
//           id: uid(),
//           role: "bot",
//           text: "Sorry, I'm having trouble responding right now.",
//           time: nowStr(),
//         },
//       ]);
//     } finally {
//       setTyping(false);
//     }
//   }

//   function handleFlavourSelect(id: string) {
//     const f = flavours.find((x) => x.id === id);
//     if (!f) return;

//     setMessages((m) => [
//       ...m,
//       { id: uid(), role: "user", text: `Tell me about ${f.name}`, time: nowStr() },
//     ]);
//     setTyping(true);
//     setTimeout(() => {
//       setMessages((m) => [
//         ...m,
//         {
//           id: uid(),
//           role: "bot",
//           text: `Here are the details for ${f.name}: `,
//           time: nowStr(),
//           card: { type: "flavour-detail", id },
//         },
//       ]);
//       setTyping(false);
//     }, 600);
//   }

//   return (
//     <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
//       {/* Chat panel */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: 28, scale: 0.93 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
//             style={{ transformOrigin: "bottom right" }}
//             className="mb-4 w-[92vw] max-w-[380px] h-[min(600px,74vh)] overflow-hidden rounded-3xl shadow-lift flex flex-col relative"
//           >
//             {/* Frosted glass background */}
//             <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_48px_rgba(107,16,46,0.18)]" />

//             <div className="relative flex flex-col h-full">
//               {/* Header */}
//               <div className="shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between rounded-t-3xl">
//                 <div className="flex items-center gap-3">
//                   <div className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
//                     <Mascot size={36} />
//                     <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-gold border-2 border-maroon/60 shadow-[0_0_6px_2px_rgba(249,168,37,0.6)]" />
//                   </div>
//                   <div>
//                     <p className="font-display font-bold leading-tight text-[15px]">
//                       {SITE_CONFIG.companyName} Support
//                     </p>
//                     <p className="text-[11px] text-white/70 flex items-center gap-1.5">
//                       <span className="relative flex h-1.5 w-1.5">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-80" />
//                         <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
//                       </span>
//                       Online now
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   aria-label="Close chat"
//                   onClick={() => setOpen(false)}
//                   className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
//                 >
//                   <X size={16} />
//                 </button>
//               </div>

//               {/* Messages */}
//               <div
//                 ref={scrollRef}
//                 className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3"
//                 style={{
//                   background:
//                     "linear-gradient(170deg, rgba(255,240,245,0.7) 0%, rgba(255,255,255,0.6) 100%)",
//                 }}
//               >
//                 {messages.map((m) => (
//                   <MessageBubble key={m.id} message={m} onFlavourSelect={handleFlavourSelect} />
//                 ))}
//                 {typing && <TypingBubble />}
//               </div>

//               {/* Quick chips — always visible, one tap sends the chip text */}
//               <div className="shrink-0 flex flex-wrap gap-2 px-4 pt-2.5 pb-1 border-t border-maroon/10 bg-white/70">
//                 {QUICK_CHIPS.map((chip) => (
//                   <button
//                     key={chip}
//                     type="button"
//                     onClick={() => send(chip)}
//                     className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-maroon/15 text-maroon hover:bg-maroon hover:text-white transition-all shadow-sm"
//                   >
//                     {chip}
//                   </button>
//                 ))}
//               </div>

//               {/* Input */}
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   send(input);
//                 }}
//                 className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
//               >
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder="Type your question…"
//                   className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/20"
//                 />
//                 <button
//                   type="submit"
//                   aria-label="Send"
//                   disabled={!input.trim()}
//                   className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
//                 >
//                   <Send size={15} />
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Floating mascot toggle button */}
//       <div className="relative group">
//         {/* Proactive teaser speech bubble */}
//         <AnimatePresence>
//           {teaserVisible && !open && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85, y: 8 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.85, y: 8 }}
//               transition={{ type: "spring", stiffness: 260, damping: 20 }}
//               className="absolute bottom-full right-0 mb-4 w-56 cursor-pointer"
//               onClick={handleTeaserClick}
//             >
//               <div className="relative bg-white rounded-2xl shadow-lift px-4 py-3 border border-maroon/10">
//                 <button
//                   aria-label="Dismiss"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleTeaserDismiss();
//                   }}
//                   className="absolute -top-2 -right-2 bg-maroon/10 hover:bg-maroon/20 rounded-full p-1 transition-colors"
//                 >
//                   <X size={11} className="text-maroon" />
//                 </button>
//                 <div className="flex items-start gap-2">
//                   <span className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
//                     <Mascot size={16} />
//                   </span>
//                   <p className="text-xs font-medium text-ink leading-snug">
//                     ✨ Looking for the perfect healthy snack?

//                   </p>
//                 </div>
//                 <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-white border-r border-b border-maroon/10 transform rotate-45" />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Spinning conic glow ring — only when closed */}
//         {!open && (
//           <motion.div
//             className="absolute -inset-2 rounded-full pointer-events-none"
//             style={{
//               background:
//                 "conic-gradient(from 0deg, #F9A825 0%, #E91E63 33%, #6B102E 66%, #F9A825 100%)",
//               filter: "blur(10px)",
//               opacity: 0.55,
//             }}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
//           />
//         )}

//         {/* Hover tooltip — hidden while the teaser bubble is showing to avoid overlap */}
//         {!open && !teaserVisible && (
//           <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//             Chat with us 👋
//           </div>
//         )}

//         <motion.button
//           aria-label={open ? "Close chat" : "Open chat"}
//           onClick={() => setOpen((v) => !v)}
//           animate={open ? {} : { y: [0, -7, 0] }}
//           transition={open ? { duration: 0.2 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.92 }}
//           className="relative w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center ring-4 ring-[#F9A825]/30 hover:scale-105 transition-all duration-300"
//         >
//           <AnimatePresence mode="wait" initial={false}>
//             <motion.span
//               key={open ? "close" : "mascot"}
//               initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
//               animate={{ opacity: 1, rotate: 0, scale: 1 }}
//               exit={{ opacity: 0, rotate: 45, scale: 0.75 }}
//               transition={{ duration: 0.22 }}
//               className="flex items-center justify-center text-white"
//             >
//               {open ? <X size={24} /> : <Mascot size={54} />}
//             </motion.span>
//           </AnimatePresence>

//           {/* Gold notification dot */}
//           {!open && (
//             <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white shadow animate-pulse" />
//           )}
//         </motion.button>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Phone, Mail, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { flavours } from "@/data/flavours";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  time: string;
  card?: "contact" | "flavour-list" | { type: "flavour-detail"; id: string };
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function nowStr() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

// ─────────────────────────────────────────────────────────────────────────────
// Mascot — original Snax सा mascot character (image based)
// ─────────────────────────────────────────────────────────────────────────────

function Mascot({ size = 28 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative overflow-hidden rounded-full">
      <Image
        src="/images/chatbuticon.png"
        alt="Snax-Sa Chatbot"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Inline Cards
// ─────────────────────────────────────────────────────────────────────────────

function ContactCard() {
  return (
    <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
      <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
        📋 Contact Details
      </div>
      <div className="px-4 py-3 space-y-2.5">
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
        >
          <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
            <Phone size={13} className="text-maroon" />
          </span>
          <span className="font-medium">{SITE_CONFIG.phone}</span>
        </a>
        {SITE_CONFIG.phoneSecondary && (
          <a
            href={`tel:${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`}
            className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
          >
            <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
              <Phone size={13} className="text-maroon" />
            </span>
            <span className="font-medium">{SITE_CONFIG.phoneSecondary}</span>
          </a>
        )}
        <a
          href={SITE_CONFIG.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
        >
          <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
            <MessageCircle size={13} className="text-maroon" />
          </span>
          <span className="font-medium">WhatsApp Us</span>
        </a>
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
        >
          <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
            <Mail size={13} className="text-maroon" />
          </span>
          <span className="font-medium">{SITE_CONFIG.email}</span>
        </a>
        <a
          href={SITE_CONFIG.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
        >
          <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
            <Instagram size={13} className="text-maroon" />
          </span>
          <span className="font-medium">Follow on Instagram</span>
        </a>
        <div className="flex items-center gap-2.5 text-xs text-ink/60">
          <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
            <MapPin size={13} className="text-maroon/60" />
          </span>
          <span>{SITE_CONFIG.address}</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs text-ink/60">
          <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0">
            <Clock size={13} className="text-maroon/60" />
          </span>
          <span>{SITE_CONFIG.hours}</span>
        </div>
      </div>
    </div>
  );
}

const FLAVOUR_EMOJIS: Record<string, string> = {
  "peri-punch": "🌶",
  "tangy-tingle": "🍅",
  "minty-pinch": "🌿",
  "snow-pepper": "🧂",
};

function FlavourListCard({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
      <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
        ✨ Our Flavours
      </div>
      <div className="px-3 py-2 space-y-1.5">
        {flavours.map((f) => (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-maroon/4 hover:bg-maroon/10 transition-colors text-left group"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
              <div>
                <p className="text-xs font-bold text-ink group-hover:text-maroon transition-colors">
                  {f.name}
                </p>
                <p className="text-[10px] text-ink-soft">{f.tagline}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-maroon shrink-0">₹{f.price}</span>
          </button>
        ))}
      </div>
      <p className="text-[10px] text-ink-soft/60 text-center pb-2.5">Tap a flavour to know more</p>
    </div>
  );
}

function FlavourDetailCard({ flavourId }: { flavourId: string }) {
  const f = flavours.find((x) => x.id === flavourId);
  if (!f) return null;

  return (
    <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
      <div
        className="px-4 py-3 text-white"
        style={{ background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})` }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{FLAVOUR_EMOJIS[f.id] || "🫙"}</span>
          <div>
            <p className="text-sm font-bold leading-tight">{f.name}</p>
            <p className="text-[10px] opacity-80">{f.tagline}</p>
          </div>
          {f.badge && (
            <span className="ml-auto text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
              {f.badge}
            </span>
          )}
        </div>
      </div>
      <div className="px-4 py-3 space-y-2">
        <p className="text-[11px] text-ink-soft leading-relaxed">{f.description}</p>
        <div className="flex gap-2">
          <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
            <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">Price</p>
            <p className="text-sm font-bold text-maroon">₹{f.price}</p>
          </div>
          <div className="flex-1 bg-maroon/4 rounded-xl px-3 py-2 text-center">
            <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">
              Pack Size
            </p>
            <p className="text-sm font-bold text-ink">{f.weight}</p>
          </div>
        </div>
        <div className="pt-1 border-t border-maroon/8">
          <p className="text-[10px] text-ink-soft/60 mb-1.5">For orders &amp; more info:</p>
          <div className="flex gap-2">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-maroon rounded-lg py-1.5 hover:opacity-90 transition-opacity"
            >
              <Phone size={10} /> Call
            </a>
            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-[#25D366] rounded-lg py-1.5 hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={10} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Message Bubble
// ─────────────────────────────────────────────────────────────────────────────

function MessageBubble({
  message,
  onFlavourSelect,
}: {
  message: Message;
  onFlavourSelect: (id: string) => void;
}) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.26 }}
      className={cn("flex flex-col", isUser ? "items-end" : "items-start")}
    >
      <div className={cn("flex items-end gap-2", isUser ? "flex-row-reverse" : "flex-row")}>
        {!isUser && (
          <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
            <Mascot size={24} />
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          {message.text && (
            <div
              className={cn(
                "max-w-[220px] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
                isUser
                  ? "bg-pink-gradient text-white rounded-br-sm shadow-card"
                  : "bg-white text-ink rounded-bl-sm shadow-card border border-maroon/5"
              )}
            >
              {message.text}
            </div>
          )}
          {/* Cards */}
          {message.card === "contact" && <ContactCard />}
          {message.card === "flavour-list" && <FlavourListCard onSelect={onFlavourSelect} />}
          {message.card &&
            typeof message.card === "object" &&
            message.card.type === "flavour-detail" && (
              <FlavourDetailCard flavourId={message.card.id} />
            )}
        </div>
      </div>
      <span className={cn("text-[10px] text-ink-soft/50 mt-1 px-1", isUser ? "mr-1" : "ml-9")}>
        {message.time}
      </span>
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
        <Mascot size={26} />
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white shadow-card border border-maroon/5 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-maroon/50"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Quick chips — always visible above the input, one-tap shortcuts to common asks
// ─────────────────────────────────────────────────────────────────────────────

const QUICK_CHIPS = ["Our Flavours", "Delivery", "Bulk Orders", "Contact Details"];

// ─────────────────────────────────────────────────────────────────────────────
// Local intent matching — these stay OFF the AI. If the user's message matches
// one of these, we show a card directly instead of calling /api/chat. This is
// what powers the quick chips (and any typed message using similar words).
// ─────────────────────────────────────────────────────────────────────────────

type LocalReply = {
  text: string;
  card?: Message["card"];
};

const LOCAL_RULES: Array<{ keywords: string[]; reply: () => LocalReply }> = [
  {
    keywords: ["our flavours", "flavour", "flavor", "taste", "variety", "products", "product"],
    reply: () => ({
      text: `We have ${flavours.length} amazing flavours for you to explore! 🎉\nTap any flavour below to know more:`,
      card: "flavour-list",
    }),
  },
  {
    keywords: ["contact details", "contact", "reach", "get in touch", "whatsapp", "phone number"],
    reply: () => ({
      text: `Here are all our contact details:`,
      card: "contact",
    }),
  },
];

function matchLocalReply(userText: string): LocalReply | null {
  const text = userText.toLowerCase().trim();
  for (const rule of LOCAL_RULES) {
    if (rule.keywords.some((k) => text.includes(k))) return rule.reply();
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main ChatWidget
// ─────────────────────────────────────────────────────────────────────────────

const WELCOME: Message = {
  id: "welcome",
  role: "bot",
  text: `👋 Welcome to ${SITE_CONFIG.companyName}!\n\nI'm your AI assistant.\n\nAsk me about:\n• Flavours\n• Delivery\n• Bulk Orders\n• Contact Details`,
  time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ── Proactive teaser bubble (auto-appears once, dismissible) ──
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!teaserDismissed && !open) setTeaserVisible(true);
    }, 3000);
    return () => clearTimeout(t);
  }, [teaserDismissed, open]);

  useEffect(() => {
    if (open) setTeaserVisible(false);
  }, [open]);

  const handleTeaserDismiss = () => {
    setTeaserVisible(false);
    setTeaserDismissed(true);
  };

  const handleTeaserClick = () => {
    setTeaserVisible(false);
    setOpen(true);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  // ── Send a message: local card intents are handled instantly (no AI call);
  //    everything else goes to /api/chat (Groq). ──
  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setInput("");

    setMessages((m) => [
      ...m,
      {
        id: uid(),
        role: "user",
        text: trimmed,
        time: nowStr(),
      },
    ]);

    // 1) Check local card intents first (quick chips + similar keywords)
    const localReply = matchLocalReply(trimmed);
    if (localReply) {
      setTyping(true);
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          {
            id: uid(),
            role: "bot",
            text: localReply.text,
            time: nowStr(),
            card: localReply.card,
          },
        ]);
        setTyping(false);
      }, 450);
      return;
    }

    // 2) Otherwise, fall back to the AI (Groq)
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: "bot",
          text: data.reply,
          time: nowStr(),
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: "bot",
          text: "Sorry, I'm unable to respond right now.\n\nPlease contact us directly through WhatsApp or Phone.",
          time: nowStr(),
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  function handleFlavourSelect(id: string) {
    const f = flavours.find((x) => x.id === id);
    if (!f) return;

    setMessages((m) => [
      ...m,
      { id: uid(), role: "user", text: `Tell me about ${f.name}`, time: nowStr() },
    ]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: "bot",
          text: `Here are the details for ${f.name}: `,
          time: nowStr(),
          card: { type: "flavour-detail", id },
        },
      ]);
      setTyping(false);
    }, 600);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "bottom right" }}
            className="mb-4 w-[92vw] max-w-[380px] h-[min(600px,74vh)] overflow-hidden rounded-3xl shadow-lift flex flex-col relative"
          >
            {/* Frosted glass background */}
            <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_48px_rgba(107,16,46,0.18)]" />

            <div className="relative flex flex-col h-full">
              {/* Header */}
              <div className="shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between rounded-t-3xl">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Mascot size={36} />
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-gold border-2 border-maroon/60 shadow-[0_0_6px_2px_rgba(249,168,37,0.6)]" />
                  </div>
                  <div>
                    <p className="font-display font-bold leading-tight text-[15px]">
                      {SITE_CONFIG.companyName} Support
                    </p>
                    <p className="text-[11px] text-white/70 flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-80" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                      </span>
                      Online now
                    </p>
                  </div>
                </div>
                <button
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3"
                style={{
                  background:
                    "linear-gradient(170deg, rgba(255,240,245,0.7) 0%, rgba(255,255,255,0.6) 100%)",
                }}
              >
                {messages.map((m) => (
                  <MessageBubble key={m.id} message={m} onFlavourSelect={handleFlavourSelect} />
                ))}
                {typing && <TypingBubble />}
              </div>

              {/* Quick chips — always visible, one tap sends the chip text */}
              <div className="shrink-0 flex flex-wrap gap-2 px-4 pt-2.5 pb-1 border-t border-maroon/10 bg-white/70">
                {QUICK_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => send(chip)}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-maroon/15 text-maroon hover:bg-maroon hover:text-white transition-all shadow-sm"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question…"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/20"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  disabled={!input.trim()}
                  className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
                >
                  <Send size={15} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating mascot toggle button */}
      <div className="relative group">
        {/* Proactive teaser speech bubble */}
        <AnimatePresence>
          {teaserVisible && !open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute bottom-full right-0 mb-4 w-56 cursor-pointer"
              onClick={handleTeaserClick}
            >
              <div className="relative bg-white rounded-2xl shadow-lift px-4 py-3 border border-maroon/10">
                <button
                  aria-label="Dismiss"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTeaserDismiss();
                  }}
                  className="absolute -top-2 -right-2 bg-maroon/10 hover:bg-maroon/20 rounded-full p-1 transition-colors"
                >
                  <X size={11} className="text-maroon" />
                </button>
                <div className="flex items-start gap-2">
                  <span className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
                    <Mascot size={16} />
                  </span>
                  <p className="text-xs font-medium text-ink leading-snug">
                    👋 Welcome to {SITE_CONFIG.companyName}!
                    <br />
                    Need help choosing the perfect flavour? Ask me about
                    products, delivery or bulk orders.
                  </p>
                </div>
                <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-white border-r border-b border-maroon/10 transform rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spinning conic glow ring — only when closed */}
        {!open && (
          <motion.div
            className="absolute -inset-2 rounded-full pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg, #F9A825 0%, #E91E63 33%, #6B102E 66%, #F9A825 100%)",
              filter: "blur(10px)",
              opacity: 0.55,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Hover tooltip — hidden while the teaser bubble is showing to avoid overlap */}
        {!open && !teaserVisible && (
          <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Chat with us 👋
          </div>
        )}

        <motion.button
          aria-label={open ? "Close chat" : "Open chat"}
          onClick={() => setOpen((v) => !v)}
          animate={open ? {} : { y: [0, -7, 0] }}
          transition={open ? { duration: 0.2 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center ring-4 ring-[#F9A825]/30 hover:scale-105 transition-all duration-300"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "mascot"}
              initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.75 }}
              transition={{ duration: 0.22 }}
              className="flex items-center justify-center text-white"
            >
              {open ? <X size={24} /> : <Mascot size={54} />}
            </motion.span>
          </AnimatePresence>

          {/* Gold notification dot */}
          {!open && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white shadow animate-pulse" />
          )}
        </motion.button>
      </div>
    </div>
  );
}