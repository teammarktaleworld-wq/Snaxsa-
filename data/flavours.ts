
// Snaxsa__\data\flavours.ts
import { Flavour } from "@/types";
import { SITE_CONFIG } from "@/lib/site-config";

export const flavours: Flavour[] = [
  {
    id: "peri-punch",
    name: "Peri Punch",
    tagline: "Spicy & Tangy",
    image: "/images/peri/jar-peri.png",
    colorFrom: "#E91E63",
    colorTo: "#6B102E",
    badge: "Bestseller",
    description:
      "A bold peri-peri seasoning coats every roasted makhana in this fan-favourite — smoky, spicy and moreish, with a citrusy kick at the finish.",
    ingredients: [
      "Roasted Makhana",
      "Peri Peri Seasoning",
      "Rock Salt",
      "Chilli Flakes",
      "Sunflower Oil",
    ],
    price: 229,
    weight: "85g",
    protein: "9.7g / 100g",
    shelfLife: "6 months",
    amazonUrl: SITE_CONFIG.amazon.peri,
  },
  {
    id: "tangy-tingle",
    name: "Tangy Tingle",
    tagline: "Zesty & Bright",
    image: "/images/tangy/jar-tangy.png",
    colorFrom: "#FCD980",
    colorTo: "#F9A825",
    description:
      "Sun-ripened tomato and a hint of tang make this the brightest jar on the shelf — a crowd-pleaser at every tea-time table.",
    ingredients: [
      "Roasted Makhana",
      "Tomato Powder",
      "Amchur",
      "Black Salt",
      "Sunflower Oil",
    ],
    price: 229,
    weight: "85g",
    protein: "9.5g / 100g",
    shelfLife: "6 months",
    amazonUrl: SITE_CONFIG.amazon.classic,
  },
  {
    id: "minty-pinch",
    name: "Minty Pinch",
    tagline: "Cool & Refreshing",
    image: "/images/mintypinch.jpeg",
    colorFrom: "#FF4F81",
    colorTo: "#6B102E",
    description:
      "A cooling mint seasoning with a light herby lift — the go-to jar for post-workout snacking and long summer evenings.",
    ingredients: [
      "Roasted Makhana",
      "Mint Powder",
      "Chaat Masala",
      "Sea Salt",
      "Sunflower Oil",
    ],
    price: 229,
    weight: "85g",
    protein: "9.6g / 100g",
    shelfLife: "6 months",
    amazonUrl: SITE_CONFIG.amazon.classic,
  },
  {
    id: "snow-pepper",
    name: "Snow Pepper Burst",
    tagline: "Bold & Peppery",
    image: "/images/pepperburst/pepperbursts.png",
    colorFrom: "#F7E8D0",
    colorTo: "#6B102E",
    description:
      "Cracked black pepper and Himalayan pink salt, kept simple and bold — for purists who like their crunch with a peppery bite.",
    ingredients: [
      "Roasted Makhana",
      "Cracked Black Pepper",
      "Himalayan Pink Salt",
      "Sunflower Oil",
    ],
    price: 229,
    weight: "85g",
    protein: "9.8g / 100g",
    shelfLife: "6 months",
    amazonUrl: SITE_CONFIG.amazon.classic,
  },
];
