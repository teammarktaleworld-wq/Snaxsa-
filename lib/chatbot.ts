/**
 * Snax सा AI Assistant — response engine.
 *
 * This module is intentionally isolated from the UI (ChatWidget.tsx) so the
 * matching logic below can be swapped for a real OpenAI API call later
 * with minimal changes. See `getBotReply()` at the bottom — that is the
 * single function the UI calls, and the only function you need to replace.
 *
 * ---------------------------------------------------------------------
 * HOW TO CONNECT THIS TO THE OPENAI API LATER
 * ---------------------------------------------------------------------
 * 1. Create an API route, e.g. `app/api/chat/route.ts`, that accepts the
 *    conversation history and calls the OpenAI Chat Completions endpoint
 *    server-side (keep your API key server-side only, never in the client).
 * 2. In that route, pass `SYSTEM_PROMPT` below as the system message, plus
 *    the structured `COMPANY_INFO` as grounding context.
 * 3. Replace the body of `getBotReply()` with a `fetch("/api/chat", ...)`
 *    call to that route and return the model's reply.
 * 4. Everything else (UI, typing indicator, message list) stays the same.
 * ---------------------------------------------------------------------
 */

import { SITE_CONFIG } from "./site-config";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}

// ---------------------------------------------------------------------
// Structured company knowledge (also usable as grounding context for a
// future LLM call — see SYSTEM_PROMPT below).
// ---------------------------------------------------------------------
export const COMPANY_INFO = {
  name: "Snax सा",
  tagline: "Healthy Crunch. Royal Taste.",
  description:
    "Premium roasted (never fried) makhana / fox nuts, made in small batches in Jaipur, Rajasthan. High in protein, zero preservatives, gluten free.",
  phone: SITE_CONFIG.phone,
  whatsapp: SITE_CONFIG.whatsapp,
  email: SITE_CONFIG.email,
  address: SITE_CONFIG.address,
  hours: SITE_CONFIG.hours,
  social: {
    instagram: SITE_CONFIG.social.instagram,
    facebook: SITE_CONFIG.social.facebook || "facebook.com/snaxsa",
  },
  delivery:
    "Free delivery within Jaipur, usually within 24-48 hours of order confirmation. We're expanding beyond Jaipur soon — message us on WhatsApp with your pin code to check availability.",
  flavours: [
    { name: "Peri Punch", tagline: "Spicy & Tangy", price: 249, weight: "100g" },
    { name: "Tangy Tingle", tagline: "Zesty & Bright", price: 229, weight: "100g" },
    { name: "Minty Pinch", tagline: "Cool & Refreshing", price: 229, weight: "100g" },
    { name: "Snow Pepper Burst", tagline: "Bold & Peppery", price: 249, weight: "100g" },
  ],
  bulkOrders: [
    { label: "Corporate Gifting", minOrder: "50 jars" },
    { label: "Wedding Favours", minOrder: "100 jars" },
    { label: "Events & Conferences", minOrder: "75 jars" },
    { label: "Festive Gift Boxes", minOrder: "25 boxes" },
  ],
};

export const SYSTEM_PROMPT = `You are the friendly, helpful AI assistant for Snax सा (${COMPANY_INFO.description}). Answer questions about products, flavours, pricing, bulk/corporate orders, delivery, franchise or business enquiries, contact details and FAQs using only the information you're given. If you don't know an answer, politely share the company's contact details and encourage the person to reach out directly. Keep replies short, warm and on-brand.`;

// ---------------------------------------------------------------------
// Lightweight keyword-based matching (placeholder logic pre-OpenAI wiring)
// ---------------------------------------------------------------------
interface Rule {
  keywords: string[];
  reply: () => string;
}

const contactFallback = () =>
  `I don't have that on hand, but our team would love to help directly! 📞 ${COMPANY_INFO.phone} (WhatsApp too) · ✉️ ${COMPANY_INFO.email} · 📍 ${COMPANY_INFO.address}. We're around ${COMPANY_INFO.hours}.`;

const rules: Rule[] = [
  {
    keywords: ["hi", "hello", "hey", "namaste"],
    reply: () =>
      `Namaste! 🙏 I'm the Snax सा assistant. I can help with flavours, pricing, bulk orders, delivery or contact details — what would you like to know?`,
  },
  {
    keywords: ["flavour", "flavor", "taste", "variety", "varieties", "options"],
    reply: () =>
      `We make 4 signature flavours: ${COMPANY_INFO.flavours
        .map((f) => `${f.name} (${f.tagline})`)
        .join(", ")}. Each jar is ${COMPANY_INFO.flavours[0].weight}. Want details on any one of them?`,
  },
  {
    keywords: ["price", "cost", "how much", "rate", "pricing"],
    reply: () =>
      `Our jars are priced at ₹${Math.min(...COMPANY_INFO.flavours.map((f) => f.price))}–₹${Math.max(
        ...COMPANY_INFO.flavours.map((f) => f.price)
      )} for a ${COMPANY_INFO.flavours[0].weight} jar, depending on the flavour. For bulk or gifting pricing, our team can share a custom quote — just reach out on WhatsApp!`,
  },
  {
    keywords: ["product", "makhana", "fox nut", "what do you sell", "what is snax"],
    reply: () => `${COMPANY_INFO.description} We currently offer ${COMPANY_INFO.flavours.length} flavours — want to hear about them?`,
  },
  {
    keywords: ["category", "categories"],
    reply: () =>
      `Our range covers everyday snacking jars plus bulk categories: ${COMPANY_INFO.bulkOrders
        .map((b) => b.label)
        .join(", ")}.`,
  },
  {
    keywords: ["bulk", "wholesale", "corporate", "wedding", "event", "gift box", "gifting"],
    reply: () =>
      `We love bulk & gifting orders! Options include ${COMPANY_INFO.bulkOrders
        .map((b) => `${b.label} (min. ${b.minOrder})`)
        .join(", ")}. Custom branding is available for corporate orders of 50+ jars. Head to our Bulk Orders page or WhatsApp us to get a quote.`,
  },
  {
    keywords: ["franchise", "partner", "partnership", "distributor", "reseller", "stockist"],
    reply: () =>
      `We're always open to franchise, distribution and partnership conversations! Please share a few details by email at ${COMPANY_INFO.email} or WhatsApp ${COMPANY_INFO.whatsapp}, and our business team will get back to you.`,
  },
  {
    keywords: ["business", "enquiry", "enquire", "inquiry", "b2b", "collab", "collaboration"],
    reply: () =>
      `Happy to help with business enquiries — the fastest route is emailing ${COMPANY_INFO.email} or messaging us on WhatsApp at ${COMPANY_INFO.whatsapp}.`,
  },
  {
    keywords: ["delivery", "ship", "shipping", "deliver"],
    reply: () => COMPANY_INFO.delivery,
  },
  {
    keywords: ["phone", "call", "number", "contact number", "mobile"],
    reply: () => `You can call or WhatsApp us at ${COMPANY_INFO.phone}.`,
  },
  {
    keywords: ["email", "mail"],
    reply: () => `Our email is ${COMPANY_INFO.email} — we usually reply within a day.`,
  },
  {
    keywords: ["address", "location", "office", "where are you", "based"],
    reply: () => `We're based in ${COMPANY_INFO.address}.`,
  },
  {
    keywords: ["hours", "timing", "open", "when are you open"],
    reply: () => `Our team is available ${COMPANY_INFO.hours}.`,
  },
  {
    keywords: ["social", "instagram", "facebook", "follow"],
    reply: () => `Find us on Instagram at ${COMPANY_INFO.social.instagram} and Facebook at ${COMPANY_INFO.social.facebook}!`,
  },
  {
    keywords: ["faq", "question", "help"],
    reply: () =>
      `Sure — you can browse our full FAQ page on the site, or ask me directly about products, delivery, bulk orders or contact details.`,
  },
  {
    keywords: ["preservative", "fried", "roast", "gluten", "protein", "healthy", "ingredient"],
    reply: () =>
      `Every jar is roasted (never fried), made with zero preservatives, naturally gluten free and high in protein — real seasoning, real crunch.`,
  },
  {
    keywords: ["amazon"],
    reply: () =>
      `Select flavours are available on Amazon — look for the "Buy on Amazon" button on each flavour's card on our Flavours page. For anything not yet listed, you can order directly on WhatsApp at ${COMPANY_INFO.whatsapp}.`,
  },
  {
    keywords: ["return", "refund", "replacement", "damaged", "wrong item"],
    reply: () =>
      `As a packaged food product we can't accept returns once a jar is opened. If your order arrives damaged or incorrect, message us on WhatsApp within 48 hours with a photo and we'll sort out a replacement or refund.`,
  },
  {
    keywords: ["store", "storage", "shelf life", "expiry", "expire", "how long does it last"],
    reply: () =>
      `Keep the jar sealed in a cool, dry place away from sunlight, and reseal it tightly after opening. Unopened, each jar has a shelf life of around 6 months from the roast date.`,
  },
  {
    keywords: ["thank", "thanks"],
    reply: () => `You're very welcome! Anything else I can help with? 😊`,
  },
];

export function getBotReply(userText: string): string {
  const text = userText.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some((k) => text.includes(k))) {
      return rule.reply();
    }
  }
  return contactFallback();
}
