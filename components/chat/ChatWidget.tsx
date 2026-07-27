"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Minus, Send, Sparkles } from "lucide-react";
import { ChatMessage, getBotReply } from "@/lib/chatbot";
import { cn } from "@/lib/utils";

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text:
    "Namaste! 🙏 I'm the Snax सा assistant. Ask me about our flavours, pricing, bulk orders, delivery, or how to reach our team.",
};

const SUGGESTIONS = ["Show me flavours", "Bulk order pricing", "Delivery in Jaipur", "Contact details"];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!minimized) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, typing, minimized]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: uid(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    // Simulated latency for a natural typing-indicator feel.
    // Swap this block for a call to your `/api/chat` route (see lib/chatbot.ts)
    // once this is wired up to the OpenAI API.
    const delay = 500 + Math.random() * 500;
    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setMessages((m) => [...m, { id: uid(), role: "assistant", text: reply }]);
      setTyping(false);
    }, delay);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: minimized ? 64 : "min(600px, 75vh)",
            }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mb-4 w-[92vw] max-w-[380px] overflow-hidden rounded-3xl glass-strong shadow-lift flex flex-col"
            style={{ transformOrigin: "bottom right" }}
          >
            {/* Header */}
            <div className="relative shrink-0 bg-maroon-gradient text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Sparkles size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-display font-bold leading-tight">Snax सा Assistant</p>
                  <p className="text-[11px] text-white/70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
                    Online now
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  aria-label={minimized ? "Expand chat" : "Minimize chat"}
                  onClick={() => setMinimized((v) => !v)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <button
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div
                  ref={scrollRef}
                  className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3 bg-hero-gradient"
                >
                  {messages.map((m) => (
                    <MessageBubble key={m.id} message={m} />
                  ))}
                  {typing && <TypingBubble />}

                  {messages.length <= 1 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {SUGGESTIONS.map((s) => (
                        <button
                          key={s}
                          onClick={() => send(s)}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/70 border border-maroon/10 text-maroon hover:bg-white transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Input */}
                <form
                  onSubmit={handleSubmit}
                  className="shrink-0 flex items-center gap-2 p-3 border-t border-maroon/10 bg-white/70"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about flavours, orders, delivery…"
                    className="flex-1 px-4 py-2.5 rounded-full bg-white border border-maroon/10 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-pink-hot/40"
                  />
                  <button
                    type="submit"
                    aria-label="Send message"
                    disabled={!input.trim()}
                    className="w-10 h-10 shrink-0 rounded-full bg-pink-gradient text-white flex items-center justify-center shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => {
          setOpen((v) => !v);
          setMinimized(false);
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-pink-gradient text-white shadow-glow flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.18 }}
            className="flex items-center justify-center"
          >
            {open ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.span>
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("flex items-end gap-2", isUser ? "justify-end" : "justify-start")}
    >
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0 text-[11px] font-display font-bold text-gold">
          स
        </div>
      )}
      <div
        className={cn(
          "max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
          isUser
            ? "bg-pink-gradient text-white rounded-br-sm shadow-card"
            : "bg-white text-ink rounded-bl-sm shadow-card border border-maroon/5"
        )}
      >
        {message.text}
      </div>
      {isUser && (
        <div className="w-7 h-7 rounded-full bg-graylight border border-maroon/10 flex items-center justify-center shrink-0 text-[11px] font-bold text-maroon">
          You
        </div>
      )}
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2 justify-start">
      <div className="w-7 h-7 rounded-full bg-maroon-gradient flex items-center justify-center shrink-0 text-[11px] font-display font-bold text-gold">
        स
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
