
// // Snaxsa__\data\flavours.ts
// import { Flavour } from "@/types";
// import { SITE_CONFIG } from "@/lib/site-config";

// export const flavours: Flavour[] = [
//   {
//     id: "peri-punch",
//     name: "Peri Punch",
//     tagline: "Spicy & Tangy",
//     image: "/images/peri/jar-peri.png",
//     colorFrom: "#E91E63",
//     colorTo: "#6B102E",
//     badge: "Bestseller",
//     description:
//       "A bold peri-peri seasoning coats every roasted makhana in this fan-favourite — smoky, spicy and moreish, with a citrusy kick at the finish.",
//     ingredients: [
//       "Roasted Makhana",
//       "Peri Peri Seasoning",
//       "Rock Salt",
//       "Chilli Flakes",
//       "Olive Oil",
//     ],
//     price: 229,
//     weight: "85g",
//     protein: "9.7g / 100g",
//     shelfLife: "6 months",
//     amazonUrl: SITE_CONFIG.amazon.peri,
//   },
//   {
//     id: "tangy-tingle",
//     name: "Tangy Tingle",
//     tagline: "Zesty & Bright",
//     image: "/images/tangy/jar-tangy.png",
//     colorFrom: "#FCD980",
//     colorTo: "#F9A825",
//     description:
//       "Sun-ripened tomato and a hint of tang make this the brightest jar on the shelf — a crowd-pleaser at every tea-time table.",
//     ingredients: [
//       "Roasted Makhana",
//       "Tomato Powder",
//       "Amchur",
//       "Black Salt",
//       "Olive Oil",
//     ],
//     price: 229,
//     weight: "85g",
//     protein: "9.5g / 100g",
//     shelfLife: "6 months",
//     amazonUrl: SITE_CONFIG.amazon.classic,
//   },
//   {
//     id: "minty-pinch",
//     name: "Minty Pinch",
//     tagline: "Cool & Refreshing",
//     image: "/images/mintypinch.jpeg",
//     colorFrom: "#FF4F81",
//     colorTo: "#6B102E",
//     description:
//       "A cooling mint seasoning with a light herby lift — the go-to jar for post-workout snacking and long summer evenings.",
//     ingredients: [
//       "Roasted Makhana",
//       "Mint Powder",
//       "Chaat Masala",
//       "Sea Salt",
//       "Olive Oil",
//     ],
//     price: 229,
//     weight: "85g",
//     protein: "9.6g / 100g",
//     shelfLife: "6 months",
//     amazonUrl: SITE_CONFIG.amazon.classic,
//   },
//   {
//     id: "snow-pepper",
//     name: "Snow Pepper Burst",
//     tagline: "Bold & Peppery",
//     image: "/images/pepperburst/pepperbursts.png",
//     colorFrom: "#F7E8D0",
//     colorTo: "#6B102E",
//     description:
//       "Cracked black pepper and Himalayan pink salt, kept simple and bold — for purists who like their crunch with a peppery bite.",
//     ingredients: [
//       "Roasted Makhana",
//       "Cracked Black Pepper",
//       "Himalayan Pink Salt",
//       "Olive Oil",
//     ],
//     price: 229,
//     weight: "85g",
//     protein: "9.8g / 100g",
//     shelfLife: "6 months",
//     amazonUrl: SITE_CONFIG.amazon.classic,
//   },
// ];















// Snaxsa__\data\flavours.ts
import { Flavour } from "@/types";
import { SITE_CONFIG } from "@/lib/site-config";

export const flavours: Flavour[] = [
  {
    id: "peri-punch",
    name: "Peri Punch",
    tagline: "Spicy & Tangy",
    image: "/images/product-assets/jars/peri-punch-jar.png",
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
      "Olive Oil",
    ],
    price: 229,
    weight: "75g",
    weightPrices: { "75g": 229, "40g": 139 },
    protein: "9.7g / 100g",
    shelfLife: "6 months",
    amazonUrl: SITE_CONFIG.amazon.peri,
  },
  {
    id: "tangy-tingle",
    name: "Tangy Tingle",
    tagline: "Zesty & Bright",
    image: "/images/product-assets/jars/tangy-tingle-jar.png",
    colorFrom: "#FCD980",
    colorTo: "#F9A825",
    description:
      "Sun-ripened tomato and a hint of tang make this the brightest jar on the shelf — a crowd-pleaser at every tea-time table.",
    ingredients: [
      "Roasted Makhana",
      "Tomato Powder",
      "Amchur",
      "Black Salt",
      "Olive Oil",
    ],
    price: 229,
    weight: "75g",
    weightPrices: { "75g": 229, "40g": 139 },
    protein: "9.5g / 100g",
    shelfLife: "6 months",
    amazonUrl: SITE_CONFIG.amazon.classic,
  },
  {
    id: "minty-pinch",
    name: "Minty Pinch",
    tagline: "Cool & Refreshing",
    image: "/images/product-assets/product-detail-set/minty-pinch/1_jar.jpg",
    colorFrom: "#FF4F81",
    colorTo: "#6B102E",
    description:
      "A cooling mint seasoning with a light herby lift — the go-to jar for post-workout snacking and long summer evenings.",
    ingredients: [
      "Roasted Makhana",
      "Mint Powder",
      "Chaat Masala",
      "Sea Salt",
      "Olive Oil",
    ],
    price: 229,
    weight: "75g",
    weightPrices: { "75g": 229, "40g": 139 },
    protein: "9.6g / 100g",
    shelfLife: "6 months",
    amazonUrl: SITE_CONFIG.amazon.classic,
  },
  {
    id: "snow-pepper",
    name: "Snow Pepper Burst",
    tagline: "Bold & Peppery",
    image: "/images/product-assets/product-detail-set/snow-pepper-burst/1_jar.jpg",
    colorFrom: "#F7E8D0",
    colorTo: "#6B102E",
    description:
      "Cracked black pepper and Himalayan pink salt, kept simple and bold — for purists who like their crunch with a peppery bite.",
    ingredients: [
      "Roasted Makhana",
      "Cracked Black Pepper",
      "Himalayan Pink Salt",
      "Olive Oil",
    ],
    price: 229,
    weight: "75g",
    weightPrices: { "75g": 229, "40g": 139 },
    protein: "9.8g / 100g",
    shelfLife: "6 months",
    amazonUrl: SITE_CONFIG.amazon.classic,
  },
  {
    id: "strawberry-bliss",
    name: "Strawberry Bliss",
    tagline: "Sweet & Fruity",
    image: "/images/product-assets/jars/strawberry-bliss-jar.png",
    colorFrom: "#E84372",
    colorTo: "#F7A6BD",
    description: "A sweet, fruity makhana treat with strawberry, cream, and vanilla notes for a gentle dessert-like crunch.",
    ingredients: ["Makhana", "Olive Oil", "Sugar", "Whole Milk Powder", "Corn Starch", "Beetroot Powder", "Strawberry, Cream & Vanilla Flavouring"],
    price: 229,
    weight: "75g",
    weightPrices: { "75g": 229, "40g": 139 },
    protein: "9.2g / 100g",
    shelfLife: "Not specified",
  },
  {
    id: "creamy-twist",
    name: "Creamy Twist",
    tagline: "Creamy & Savoury",
    image: "/images/product-assets/jars/creamy-twist-jar.png",
    colorFrom: "#8B5AB5",
    colorTo: "#D7BCEB",
    description: "A smooth, savoury cream and onion-style seasoning brings a rich, herby twist to a light roasted crunch.",
    ingredients: ["Makhana", "Olive Oil", "Sugar", "Iodized Salt", "Onion Powder", "Cream Analogue", "Whey Powder", "Herbs (Parsley)"],
    price: 229,
    weight: "75g",
    weightPrices: { "75g": 229, "40g": 139 },
    protein: "9.2g / 100g",
    shelfLife: "Not specified",
  },
];
