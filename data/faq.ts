export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "f0a",
    category: "Product",
    question: "What is makhana?",
    answer:
      "Makhana (fox nuts) are popped lotus seeds, traditionally used in Indian kitchens during fasts and festivals. We roast them fresh and season each batch with our signature flavours for an everyday, guilt-free crunch.",
  },
  {
    id: "f1",
    category: "Product",
    question: "Is your makhana roasted or fried?",
    answer:
      "Every jar of Snax सा is roasted, never fried. We slow-roast small batches to lock in the crunch without the extra oil.",
  },
  {
    id: "f2",
    category: "Product",
    question: "Do your snacks contain any preservatives?",
    answer:
      "No. Snax सा is made with zero preservatives and zero artificial colours — just roasted makhana and real seasoning.",
  },
  {
    id: "f2a",
    category: "Product",
    question: "What ingredients are in each jar?",
    answer:
      "Every flavour starts with roasted makhana and rock salt, plus a small set of real seasoning ingredients specific to that flavour — no fillers or artificial additives. The full ingredient list is printed on each pack and shown on every flavour's product card.",
  },
  {
    id: "f3",
    category: "Product",
    question: "Are your flavours gluten free?",
    answer:
      "Yes, all four flavours — Peri Punch, Tangy Tingle, Minty Pinch and Snow Pepper Burst — are naturally gluten free.",
  },
  {
    id: "f3a",
    category: "Product",
    question: "How should I store it, and what's the shelf life?",
    answer:
      "Keep the jar sealed in a cool, dry place away from direct sunlight, and reseal it tightly after each use to keep the crunch intact. Unopened, each jar has a shelf life of around 6 months from the roast date printed on the pack.",
  },
  {
    id: "f4",
    category: "Orders",
    question: "How long does delivery take in Jaipur?",
    answer:
      "Orders within Jaipur are typically delivered free of charge within 24-48 hours of confirmation.",
  },
  {
    id: "f5",
    category: "Orders",
    question: "Do you deliver outside Jaipur?",
    answer:
      "We're expanding beyond Jaipur soon. Message us on WhatsApp with your pin code and we'll confirm if we can currently ship to you.",
  },
  {
    id: "f6",
    category: "Orders",
    question: "What's the best way to place an order?",
    answer:
      "The fastest way is WhatsApp — tap the WhatsApp button anywhere on the site and our team will help you place your order directly.",
  },
  {
    id: "f6a",
    category: "Orders",
    question: "Is Snax सा available on Amazon?",
    answer:
      "Select flavours are available on Amazon — look for the \"Buy on Amazon\" button on each flavour's card. For flavours not yet listed, order directly via WhatsApp.",
  },
  {
    id: "f6b",
    category: "Orders",
    question: "What's your returns policy?",
    answer:
      "As a packaged food product, we can't accept returns once a jar is opened. If your order arrives damaged, incorrect, or with a sealing issue, message us on WhatsApp within 48 hours of delivery with a photo and we'll sort out a replacement or refund.",
  },
  {
    id: "f7",
    category: "Bulk & Gifting",
    question: "Can I get custom branding on jars for corporate gifting?",
    answer:
      "Yes, custom labels and branded packaging are available for corporate orders of 50 jars or more. Visit our Bulk Orders page to enquire.",
  },
  {
    id: "f8",
    category: "Bulk & Gifting",
    question: "What is the minimum order for wedding favours?",
    answer:
      "Wedding favour orders start at 100 jars, with flexible flavour mixes and custom tags available.",
  },
];
