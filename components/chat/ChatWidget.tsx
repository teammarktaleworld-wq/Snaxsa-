

// // // C:\Marktale-projectes\Snaxsa-\components\chat\ChatWidget.tsx

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
// // // Mascot — original Snax सा mascot character (image based)
// // // ─────────────────────────────────────────────────────────────────────────────

// // function Mascot({ size = 28 }: { size?: number }) {
// //   return (
// //     <div style={{ width: size, height: size }} className="relative overflow-hidden rounded-full">
// //       <Image
// //         src="/images/chatbuticon.png"
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

// // function ContactCard() {
// //   return (
// //     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
// //       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
// //         📋 Contact Details
// //       </div>
// //       <div className="px-4 py-3 space-y-2.5">
// //         <a
// //           href={SITE_CONFIG.phoneHref}
// //           className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
// //         >
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //             <Phone size={13} className="text-maroon" />
// //           </span>
// //           <span className="font-medium">{SITE_CONFIG.phone}</span>
// //         </a>
// //         {SITE_CONFIG.phoneSecondary && (
// //           <a
// //             href={`tel:${SITE_CONFIG.phoneSecondary.replace(/\D/g, "")}`}
// //             className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
// //           >
// //             <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //               <Phone size={13} className="text-maroon" />
// //             </span>
// //             <span className="font-medium">{SITE_CONFIG.phoneSecondary}</span>
// //           </a>
// //         )}
// //         <a
// //           href={SITE_CONFIG.whatsappHref}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
// //         >
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //             <MessageCircle size={13} className="text-maroon" />
// //           </span>
// //           <span className="font-medium">WhatsApp Us</span>
// //         </a>
// //         <a
// //           href={`mailto:${SITE_CONFIG.email}`}
// //           className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
// //         >
// //           <span className="w-7 h-7 rounded-full bg-maroon/8 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
// //             <Mail size={13} className="text-maroon" />
// //           </span>
// //           <span className="font-medium">{SITE_CONFIG.email}</span>
// //         </a>
// //         <a
// //           href={SITE_CONFIG.social.instagram}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="flex items-center gap-2.5 text-xs text-ink hover:text-maroon transition-colors group"
// //         >
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
// //                 <p className="text-xs font-bold text-ink group-hover:text-maroon transition-colors">
// //                   {f.name}
// //                 </p>
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

// // function FlavourDetailCard({ flavourId }: { flavourId: string }) {
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
// //             <span className="ml-auto text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
// //               {f.badge}
// //             </span>
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
// //             <p className="text-[9px] text-ink-soft/60 font-semibold uppercase tracking-wide">
// //               Pack Size
// //             </p>
// //             <p className="text-sm font-bold text-ink">{f.weight}</p>
// //           </div>
// //         </div>
// //         <div className="pt-1 border-t border-maroon/8">
// //           <p className="text-[10px] text-ink-soft/60 mb-1.5">For orders &amp; more info:</p>
// //           <div className="flex gap-2">
// //             <a
// //               href={SITE_CONFIG.phoneHref}
// //               className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-maroon rounded-lg py-1.5 hover:opacity-90 transition-opacity"
// //             >
// //               <Phone size={10} /> Call
// //             </a>
// //             <a
// //               href={SITE_CONFIG.whatsappHref}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-[#25D366] rounded-lg py-1.5 hover:opacity-90 transition-opacity"
// //             >
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
// // }: {
// //   message: Message;
// //   onFlavourSelect: (id: string) => void;
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
// //           {message.card === "contact" && <ContactCard />}
// //           {message.card === "flavour-list" && <FlavourListCard onSelect={onFlavourSelect} />}
// //           {message.card &&
// //             typeof message.card === "object" &&
// //             message.card.type === "flavour-detail" && (
// //               <FlavourDetailCard flavourId={message.card.id} />
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

// // const QUICK_CHIPS = ["Our Flavours", "Delivery", "Bulk Orders", "Contact Details"];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Local intent matching — these stay OFF the AI. If the user's message matches
// // // one of these, we show a card directly instead of calling /api/chat. This is
// // // what powers the quick chips (and any typed message using similar words).
// // // ─────────────────────────────────────────────────────────────────────────────

// // type LocalReply = {
// //   text: string;
// //   card?: Message["card"];
// // };

// // const LOCAL_RULES: Array<{ keywords: string[]; reply: () => LocalReply }> = [
// //   {
// //     keywords: ["our flavours", "flavour", "flavor", "taste", "variety", "products", "product"],
// //     reply: () => ({
// //       text: `We have ${flavours.length} amazing flavours for you to explore! 🎉\nTap any flavour below to know more:`,
// //       card: "flavour-list",
// //     }),
// //   },
// //   {
// //     keywords: ["contact details", "contact", "reach", "get in touch", "whatsapp", "phone number"],
// //     reply: () => ({
// //       text: `Here are all our contact details:`,
// //       card: "contact",
// //     }),
// //   },
// // ];

// // function matchLocalReply(userText: string): LocalReply | null {
// //   const text = userText.toLowerCase().trim();
// //   for (const rule of LOCAL_RULES) {
// //     if (rule.keywords.some((k) => text.includes(k))) return rule.reply();
// //   }
// //   return null;
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Main ChatWidget
// // // ─────────────────────────────────────────────────────────────────────────────

// // const WELCOME: Message = {
// //   id: "welcome",
// //   role: "bot",
// //   text: `👋 Welcome to ${SITE_CONFIG.companyName}!\n\nI'm your AI assistant.\n\nAsk me about:\n• Flavours\n• Delivery\n• Bulk Orders\n• Contact Details`,
// //   time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
// // };

// // export default function ChatWidget() {
// //   const [open, setOpen] = useState(false);
// //   const [messages, setMessages] = useState<Message[]>([WELCOME]);
// //   const [input, setInput] = useState("");
// //   const [typing, setTyping] = useState(false);
// //   const scrollRef = useRef<HTMLDivElement>(null);

// //   // ── Proactive teaser bubble (auto-appears once, dismissible) ──
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

// //   // ── Send a message: local card intents are handled instantly (no AI call);
// //   //    everything else goes to /api/chat (Groq). ──
// //   async function send(text: string) {
// //     const trimmed = text.trim();
// //     if (!trimmed) return;

// //     setInput("");

// //     setMessages((m) => [
// //       ...m,
// //       {
// //         id: uid(),
// //         role: "user",
// //         text: trimmed,
// //         time: nowStr(),
// //       },
// //     ]);

// //     // 1) Check local card intents first (quick chips + similar keywords)
// //     const localReply = matchLocalReply(trimmed);
// //     if (localReply) {
// //       setTyping(true);
// //       setTimeout(() => {
// //         setMessages((m) => [
// //           ...m,
// //           {
// //             id: uid(),
// //             role: "bot",
// //             text: localReply.text,
// //             time: nowStr(),
// //             card: localReply.card,
// //           },
// //         ]);
// //         setTyping(false);
// //       }, 450);
// //       return;
// //     }

// //     // 2) Otherwise, fall back to the AI (Groq)
// //     setTyping(true);

// //     try {
// //       const res = await fetch("/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ message: trimmed }),
// //       });

// //       const data = await res.json();

// //       setMessages((m) => [
// //         ...m,
// //         {
// //           id: uid(),
// //           role: "bot",
// //           text: data.reply,
// //           time: nowStr(),
// //         },
// //       ]);
// //     } catch (err) {
// //       console.error(err);
// //       setMessages((m) => [
// //         ...m,
// //         {
// //           id: uid(),
// //           role: "bot",
// //           text: "Sorry, I'm unable to respond right now.\n\nPlease contact us directly through WhatsApp or Phone.",
// //           time: nowStr(),
// //         },
// //       ]);
// //     } finally {
// //       setTyping(false);
// //     }
// //   }

// //   function handleFlavourSelect(id: string) {
// //     const f = flavours.find((x) => x.id === id);
// //     if (!f) return;

// //     setMessages((m) => [
// //       ...m,
// //       { id: uid(), role: "user", text: `Tell me about ${f.name}`, time: nowStr() },
// //     ]);
// //     setTyping(true);
// //     setTimeout(() => {
// //       setMessages((m) => [
// //         ...m,
// //         {
// //           id: uid(),
// //           role: "bot",
// //           text: `Here are the details for ${f.name}: `,
// //           time: nowStr(),
// //           card: { type: "flavour-detail", id },
// //         },
// //       ]);
// //       setTyping(false);
// //     }, 600);
// //   }

// //   return (
// //     <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
// //       {/* Chat panel */}
// //       <AnimatePresence>
// //         {open && (
// //           <motion.div
// //             initial={{ opacity: 0, y: 28, scale: 0.93 }}
// //             animate={{ opacity: 1, y: 0, scale: 1 }}
// //             exit={{ opacity: 0, y: 20, scale: 0.95 }}
// //             transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
// //             style={{ transformOrigin: "bottom right" }}
// //             className="mb-4 w-[92vw] max-w-[380px] h-[min(600px,74vh)] overflow-hidden rounded-3xl shadow-lift flex flex-col relative"
// //           >
// //             {/* Frosted glass background */}
// //             <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_48px_rgba(107,16,46,0.18)]" />

// //             <div className="relative flex flex-col h-full">
// //               {/* Header */}
// //               <div className="shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between rounded-t-3xl">
// //                 <div className="flex items-center gap-3">
// //                   <div className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
// //                     <Mascot size={36} />
// //                     <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-gold border-2 border-maroon/60 shadow-[0_0_6px_2px_rgba(249,168,37,0.6)]" />
// //                   </div>
// //                   <div>
// //                     <p className="font-display font-bold leading-tight text-[15px]">
// //                       {SITE_CONFIG.companyName} Support
// //                     </p>
// //                     <p className="text-[11px] text-white/70 flex items-center gap-1.5">
// //                       <span className="relative flex h-1.5 w-1.5">
// //                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-80" />
// //                         <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
// //                       </span>
// //                       Online now
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <button
// //                   aria-label="Close chat"
// //                   onClick={() => setOpen(false)}
// //                   className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
// //                 >
// //                   <X size={16} />
// //                 </button>
// //               </div>

// //               {/* Messages */}
// //               <div
// //                 ref={scrollRef}
// //                 className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3"
// //                 style={{
// //                   background:
// //                     "linear-gradient(170deg, rgba(255,240,245,0.7) 0%, rgba(255,255,255,0.6) 100%)",
// //                 }}
// //               >
// //                 {messages.map((m) => (
// //                   <MessageBubble key={m.id} message={m} onFlavourSelect={handleFlavourSelect} />
// //                 ))}
// //                 {typing && <TypingBubble />}
// //               </div>

// //               {/* Quick chips — always visible, one tap sends the chip text */}
// //               <div className="shrink-0 flex flex-wrap gap-2 px-4 pt-2.5 pb-1 border-t border-maroon/10 bg-white/70">
// //                 {QUICK_CHIPS.map((chip) => (
// //                   <button
// //                     key={chip}
// //                     type="button"
// //                     onClick={() => send(chip)}
// //                     className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-maroon/15 text-maroon hover:bg-maroon hover:text-white transition-all shadow-sm"
// //                   >
// //                     {chip}
// //                   </button>
// //                 ))}
// //               </div>

// //               {/* Input */}
// //               <form
// //                 onSubmit={(e) => {
// //                   e.preventDefault();
// //                   send(input);
// //                 }}
// //                 className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
// //               >
// //                 <input
// //                   type="text"
// //                   value={input}
// //                   onChange={(e) => setInput(e.target.value)}
// //                   placeholder="Type your question…"
// //                   className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/20"
// //                 />
// //                 <button
// //                   type="submit"
// //                   aria-label="Send"
// //                   disabled={!input.trim()}
// //                   className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
// //                 >
// //                   <Send size={15} />
// //                 </button>
// //               </form>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Floating mascot toggle button */}
// //       <div className="relative group">
// //         {/* Proactive teaser speech bubble */}
// //         <AnimatePresence>
// //           {teaserVisible && !open && (
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.85, y: 8 }}
// //               animate={{ opacity: 1, scale: 1, y: 0 }}
// //               exit={{ opacity: 0, scale: 0.85, y: 8 }}
// //               transition={{ type: "spring", stiffness: 260, damping: 20 }}
// //               className="absolute bottom-full right-0 mb-4 w-56 cursor-pointer"
// //               onClick={handleTeaserClick}
// //             >
// //               <div className="relative bg-white rounded-2xl shadow-lift px-4 py-3 border border-maroon/10">
// //                 <button
// //                   aria-label="Dismiss"
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleTeaserDismiss();
// //                   }}
// //                   className="absolute -top-2 -right-2 bg-maroon/10 hover:bg-maroon/20 rounded-full p-1 transition-colors"
// //                 >
// //                   <X size={11} className="text-maroon" />
// //                 </button>
// //                 <div className="flex items-start gap-2">
// //                   <span className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0">
// //                     <Mascot size={16} />
// //                   </span>
// //                   <p className="text-xs font-medium text-ink leading-snug">
// //                     👋 Welcome to {SITE_CONFIG.companyName}!
// //                     <br />
// //                     Need help choosing the perfect flavour? Ask me about
// //                     products, delivery or bulk orders.
// //                   </p>
// //                 </div>
// //                 <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-white border-r border-b border-maroon/10 transform rotate-45" />
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Spinning conic glow ring — only when closed */}
// //         {!open && (
// //           <motion.div
// //             className="absolute -inset-2 rounded-full pointer-events-none"
// //             style={{
// //               background:
// //                 "conic-gradient(from 0deg, #F9A825 0%, #E91E63 33%, #6B102E 66%, #F9A825 100%)",
// //               filter: "blur(10px)",
// //               opacity: 0.55,
// //             }}
// //             animate={{ rotate: 360 }}
// //             transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
// //           />
// //         )}

// //         {/* Hover tooltip — hidden while the teaser bubble is showing to avoid overlap */}
// //         {!open && !teaserVisible && (
// //           <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-maroon shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// //             Chat with us 👋
// //           </div>
// //         )}

// //         <motion.button
// //           aria-label={open ? "Close chat" : "Open chat"}
// //           onClick={() => setOpen((v) => !v)}
// //           animate={open ? {} : { y: [0, -7, 0] }}
// //           transition={open ? { duration: 0.2 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
// //           whileHover={{ scale: 1.08 }}
// //           whileTap={{ scale: 0.92 }}
// //           className="relative w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center ring-4 ring-[#F9A825]/30 hover:scale-105 transition-all duration-300"
// //         >
// //           <AnimatePresence mode="wait" initial={false}>
// //             <motion.span
// //               key={open ? "close" : "mascot"}
// //               initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
// //               animate={{ opacity: 1, rotate: 0, scale: 1 }}
// //               exit={{ opacity: 0, rotate: 45, scale: 0.75 }}
// //               transition={{ duration: 0.22 }}
// //               className="flex items-center justify-center text-white"
// //             >
// //               {open ? <X size={24} /> : <Mascot size={54} />}
// //             </motion.span>
// //           </AnimatePresence>

// //           {/* Gold notification dot */}
// //           {!open && (
// //             <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold border-2 border-white shadow animate-pulse" />
// //           )}
// //         </motion.button>
// //       </div>
// //     </div>
// //   );
// // }



// // C:\Marktale-projectes\Snaxsa-\components\chat\ChatWidget.tsx

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { X, Send, Phone, Mail, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";
// import { SITE_CONFIG } from "@/lib/site-config";
// import { flavours } from "@/data/flavours";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";

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

// // NOTE: emoji map no longer used for the flavour list card (replaced with real
// // images below), kept here only in case FlavourDetailCard or anything else
// // still references it.
// const FLAVOUR_EMOJIS: Record<string, string> = {
//   "peri-punch": "🌶",
//   "tangy-tingle": "🍅",
//   "minty-pinch": "🌿",
//   "snow-pepper": "🧂",
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // FlavourListCard — now image based + fully clickable, links to the order page
// // (or flavour detail page) instead of just opening the in-chat detail card.
// //
// // IMPORTANT: this expects each flavour object (from "@/data/flavours") to have
// // an `image` field, e.g.:
// //   { id: "peri-punch", name: "Peri Punch", image: "/images/pepperburst/pepperbursts.png", ... }
// // Temporarily you can point every flavour's `image` to the same placeholder
// // path and swap in real images later — no other code needs to change.
// // ─────────────────────────────────────────────────────────────────────────────

// function FlavourListCard({ onSelect }: { onSelect: (id: string) => void }) {
//   return (
//     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
//       <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
//         ✨ Our Flavours
//       </div>
//       <div className="px-3 py-2 space-y-1.5">
//         {flavours.map((f) => (
//           <Link
//             key={f.id}
//             href={`/order?flavour=${f.id}`}
//             onClick={() => onSelect(f.id)}
//             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-maroon/4 hover:bg-maroon/10 transition-colors group"
//           >
//             <Image
//               src={f.image ?? "/images/pepperburst/pepperbursts.png"}
//               alt={f.name}
//               width={50}
//               height={50}
//               className="rounded-xl object-cover shrink-0"
//             />
//             <div className="flex-1 min-w-0">
//               <p className="text-xs font-bold text-ink group-hover:text-maroon transition-colors truncate">
//                 {f.name}
//               </p>
//               <p className="text-[10px] text-ink-soft truncate">{f.tagline}</p>
//             </div>
//             <span className="text-xs font-bold text-maroon shrink-0">₹{f.price}</span>
//           </Link>
//         ))}
//       </div>
//       <p className="text-[10px] text-ink-soft/60 text-center pb-2.5">Tap a flavour to view product</p>
//     </div>
//   );
// }

// function FlavourDetailCard({ flavourId }: { flavourId: string }) {
//   const f = flavours.find((x) => x.id === flavourId);
//   if (!f) return null;

//   return (
//     <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
//       {/* Image banner on top of the detail card */}
//       <div className="relative w-full h-28">
//         <Image
//           src={f.image ?? "/images/pepperburst/pepperbursts.png"}
//           alt={f.name}
//           fill
//           className="object-cover"
//         />
//         {f.badge && (
//           <span className="absolute top-2 right-2 text-[9px] font-bold bg-black/40 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
//             {f.badge}
//           </span>
//         )}
//       </div>
//       <div
//         className="px-4 py-3 text-white"
//         style={{ background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})` }}
//       >
//         <div className="flex items-center gap-2">
//           <div>
//             <p className="text-sm font-bold leading-tight">{f.name}</p>
//             <p className="text-[10px] opacity-80">{f.tagline}</p>
//           </div>
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
//           <Link
//             href={`/order?flavour=${f.id}`}
//             className="flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-maroon rounded-lg py-1.5 hover:opacity-90 transition-opacity mb-2"
//           >
//             View Product →
//           </Link>
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

// const QUICK_CHIPS = ["Our Flavours", "Delivery", "Bulk Orders", "Contact Details"];

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
//   text: `👋 Welcome to ${SITE_CONFIG.companyName}!\n\nI'm your AI assistant.\n\nAsk me about:\n• Flavours\n• Delivery\n• Bulk Orders\n• Contact Details`,
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
//           text: "Sorry, I'm unable to respond right now.\n\nPlease contact us directly through WhatsApp or Phone.",
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
//                     👋 Welcome to {SITE_CONFIG.companyName}!
//                     <br />
//                     Need help choosing the perfect flavour? Ask me about
//                     products, delivery or bulk orders.
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


// C:\Marktale-projectes\Snaxsa-\components\chat\ChatWidget.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Send,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Instagram,
  Clock,
  Truck,
  Gift,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { flavours } from "@/data/flavours";
import { COMPANY_INFO } from "@/lib/chatbot";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  time: string;
  card?:
  | "contact"
  | "flavour-list"
  | "delivery"
  | "bulk-orders"
  | { type: "flavour-detail"; id: string };
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
          <span className="font-medium">Follow us on Instagram</span>
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

function DeliveryCard() {
  return (
    <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
      <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold flex items-center gap-1.5">
        <Truck size={13} /> Delivery Info
      </div>
      <div className="px-4 py-3 space-y-2.5">
        <p className="text-xs text-ink leading-relaxed">{COMPANY_INFO.delivery}</p>
        <a
          href={SITE_CONFIG.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white bg-[#25D366] rounded-lg py-2 hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={12} /> Check My Pin Code
        </a>
      </div>
    </div>
  );
}

function BulkOrderCard() {
  return (
    <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
      <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold flex items-center gap-1.5">
        <Gift size={13} /> Bulk &amp; Gifting Orders
      </div>
      <div className="px-3 py-2 space-y-1.5">
        {COMPANY_INFO.bulkOrders.map((b) => (
          <div
            key={b.label}
            className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-maroon/4"
          >
            <p className="text-xs font-bold text-ink">{b.label}</p>
            <span className="text-[10px] text-ink-soft shrink-0">Min. {b.minOrder}</span>
          </div>
        ))}
      </div>
      <div className="px-4 pb-3">
        <a
          href={SITE_CONFIG.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white bg-[#25D366] rounded-lg py-2 hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={12} /> Get a Custom Quote
        </a>
      </div>
    </div>
  );
}

// NOTE: emoji map no longer used for the flavour list card (replaced with real
// images below), kept here only in case FlavourDetailCard or anything else
// still references it.
const FLAVOUR_EMOJIS: Record<string, string> = {
  "peri-punch": "🌶",
  "tangy-tingle": "🍅",
  "minty-pinch": "🌿",
  "snow-pepper": "🧂",
};

// ─────────────────────────────────────────────────────────────────────────────
// FlavourListCard — now image based + fully clickable, links to the order page
// (or flavour detail page) instead of just opening the in-chat detail card.
//
// IMPORTANT: this expects each flavour object (from "@/data/flavours") to have
// an `image` field, e.g.:
//   { id: "peri-punch", name: "Peri Punch", image: "/images/pepperburst/pepperbursts.png", ... }
// Temporarily you can point every flavour's `image` to the same placeholder
// path and swap in real images later — no other code needs to change.
// ─────────────────────────────────────────────────────────────────────────────

function FlavourListCard({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
      <div className="bg-maroon-gradient px-4 py-2.5 text-white text-xs font-bold">
        ✨ Our Flavours
      </div>
      <div className="px-3 py-2 space-y-1.5">
        {flavours.map((f) => (
          <Link
            key={f.id}
            href={`/order?flavour=${f.id}`}
            onClick={() => onSelect(f.id)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-maroon/4 hover:bg-maroon/10 transition-colors group"
          >
            <Image
              src={f.image ?? "/images/pepperburst/pepperbursts.png"}
              alt={f.name}
              width={50}
              height={50}
              className="rounded-xl object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-ink group-hover:text-maroon transition-colors truncate">
                {f.name}
              </p>
              <p className="text-[10px] text-ink-soft truncate">{f.tagline}</p>
            </div>
            <span className="text-xs font-bold text-maroon shrink-0">₹{f.price}</span>
          </Link>
        ))}
      </div>
      <p className="text-[10px] text-ink-soft/60 text-center pb-2.5">Tap a flavour to view product</p>
    </div>
  );
}

function FlavourDetailCard({ flavourId }: { flavourId: string }) {
  const f = flavours.find((x) => x.id === flavourId);
  if (!f) return null;

  return (
    <div className="mt-2 bg-white rounded-2xl border border-maroon/10 shadow-card overflow-hidden w-[240px]">
      {/* Image banner on top of the detail card */}
      <div className="relative w-full h-28">
        <Image
          src={f.image ?? "/images/pepperburst/pepperbursts.png"}
          alt={f.name}
          fill
          className="object-cover"
        />
        {f.badge && (
          <span className="absolute top-2 right-2 text-[9px] font-bold bg-black/40 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
            {f.badge}
          </span>
        )}
      </div>
      <div
        className="px-4 py-3 text-white"
        style={{ background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})` }}
      >
        <div className="flex items-center gap-2">
          <div>
            <p className="text-sm font-bold leading-tight">{f.name}</p>
            <p className="text-[10px] opacity-80">{f.tagline}</p>
          </div>
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
          <Link
            href={`/order?flavour=${f.id}`}
            className="flex items-center justify-center gap-1 text-[10px] font-semibold text-white bg-maroon rounded-lg py-1.5 hover:opacity-90 transition-opacity mb-2"
          >
            View Product →
          </Link>
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
          {message.card === "delivery" && <DeliveryCard />}
          {message.card === "bulk-orders" && <BulkOrderCard />}
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
  {
    keywords: ["delivery", "ship", "shipping", "deliver", "pin code", "pincode"],
    reply: () => ({
      text: `Here's how our delivery works:`,
      card: "delivery",
    }),
  },
  {
    keywords: [
      "bulk orders",
      "bulk order",
      "bulk",
      "wholesale",
      "corporate",
      "wedding",
      "gift box",
      "gifting",
    ],
    reply: () => ({
      text: `We love bulk & gifting orders! Here are our options:`,
      card: "bulk-orders",
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