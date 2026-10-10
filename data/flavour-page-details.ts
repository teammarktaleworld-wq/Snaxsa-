export type FlavourPageDetails = {
  mood: string;
  heat: string;
  heatLevel: number;
  notes: string[];
  pairings: string[];
  story?: string;
  gallery: { src: string; label: string }[];
};

const detailRoot = "/images/product-assets/product-detail-set";

export const flavourPageDetails: Record<string, FlavourPageDetails> = {
  "peri-punch": {
    mood: "Bold & Unapologetic", heat: "Fiery Hot", heatLevel: 4,
    notes: ["Smoky heat", "Citrus finish", "Slow burn", "Savoury depth"],
    pairings: ["Chilled drinks", "Movie night", "Evening chai", "Nimbu paani"],
    story: "Peri Punch started as a dare: could we bring smoky, fruity peri-peri heat to a light makhana snack? After more than 40 batches and blind tastings, we found a layered heat, a bright citrus finish, and a savoury crunch that keeps you reaching back in.",
    gallery: [
      { src: `${detailRoot}/peri-punch/hero_cutout.png`, label: "Peri Punch jar" },
      { src: `${detailRoot}/peri-punch/1_jar.jpg`, label: "Peri Punch product jar" },
      { src: `${detailRoot}/peri-punch/2_explosion.jpg`, label: "Peri Punch flavour burst" },
      { src: `${detailRoot}/peri-punch/3_features.jpg`, label: "Peri Punch product highlights" },
      { src: `${detailRoot}/peri-punch/4_ingredients.jpg`, label: "Peri Punch ingredients and nutrition" },
      { src: `${detailRoot}/peri-punch/5_flavour.jpg`, label: "Peri Punch flavour profile" },
    ],
  },
  "tangy-tingle": {
    mood: "Bright & Crowd-Pleasing", heat: "Mild Tingle", heatLevel: 2,
    notes: ["Sun-ripened tomato", "Raw mango tang", "Bright & zesty", "Herby lift"],
    pairings: ["Evening tea", "Study session", "Road trips", "Buttermilk"],
    story: "Tangy Tingle began with the familiar taste of raw mango dusted with chaat masala and black salt. Tomato and amchur bring a bright, savoury tang that clings to every roasted makhana.",
    gallery: [
      { src: `${detailRoot}/tangy-tingle/3_features.jpg`, label: "Tangy Tingle product highlights" },
      { src: `${detailRoot}/tangy-tingle/4_ingredients.jpg`, label: "Tangy Tingle ingredients and nutrition" },
      { src: `${detailRoot}/tangy-tingle/HOLD_explosion_label-says-Tangy-Tomato.jpg`, label: "Tangy Tingle makhana burst" },
      { src: `${detailRoot}/tangy-tingle/5_flavour.jpg`, label: "Tangy Tingle flavour profile" },
    ],
  },
  "minty-pinch": {
    mood: "Cool & Effortless", heat: "No Heat", heatLevel: 1,
    notes: ["Cool mint", "Chaat masala", "Cooling exhale", "Clean finish"],
    pairings: ["Post-workout", "Summer evening", "Fresh juice", "On the go"],
    story: "Minty Pinch came from a palate-cleansing batch that turned into a favourite. Cooling mint and a savoury chaat masala base make it an easy pick for warm afternoons or a post-workout snack.",
    gallery: [
      { src: `${detailRoot}/minty-pinch/1_jar.jpg`, label: "Minty Pinch product jar" },
      { src: `${detailRoot}/minty-pinch/2_explosion.jpg`, label: "Minty Pinch makhana burst" },
      { src: `${detailRoot}/minty-pinch/3_features.jpg`, label: "Minty Pinch product highlights" },
      { src: `${detailRoot}/minty-pinch/4_ingredients.jpg`, label: "Minty Pinch ingredients and nutrition" },
      { src: `${detailRoot}/minty-pinch/5_flavour.jpg`, label: "Minty Pinch flavour profile" },
    ],
  },
  "snow-pepper": {
    mood: "Quiet & Complex", heat: "Peppery Warmth", heatLevel: 3,
    notes: ["Cracked pepper", "Pink salt crystals", "Slow warmth", "Mineral finish"],
    pairings: ["Evening reading", "Masala chai", "Office desk", "Late nights"],
    story: "Snow Pepper Burst keeps the flavour simple and bold. Cracked black pepper brings a warming bite, while Himalayan pink salt adds a savoury mineral note—without chilli heat.",
    gallery: [
      { src: `${detailRoot}/snow-pepper-burst/1_jar.jpg`, label: "Snow Pepper Burst product jar" },
      { src: `${detailRoot}/snow-pepper-burst/2_explosion.jpg`, label: "Snow Pepper Burst makhana burst" },
      { src: `${detailRoot}/snow-pepper-burst/3_features.jpg`, label: "Snow Pepper Burst product highlights" },
      { src: `${detailRoot}/snow-pepper-burst/4_ingredients.jpg`, label: "Snow Pepper Burst ingredients and nutrition" },
      { src: `${detailRoot}/snow-pepper-burst/5_flavour.jpg`, label: "Snow Pepper Burst flavour profile" },
    ],
  },
  "strawberry-bliss": {
    mood: "Sweet & Fruity", heat: "No Heat", heatLevel: 0,
    notes: ["Strawberry", "Cream", "Vanilla", "Sweet crunch"],
    pairings: ["Tea break", "Dessert plate", "Afternoon treat", "On the go"],
    gallery: [
      { src: `${detailRoot}/strawberry-bliss/1_jar.jpg`, label: "Strawberry Bliss product jar" },
      { src: `${detailRoot}/strawberry-bliss/Strawberry Bliss Makhana Burst.png`, label: "Strawberry Bliss flavour burst" },
      { src: `${detailRoot}/strawberry-bliss/3_features.jpg`, label: "Strawberry Bliss product highlights" },
      { src: `${detailRoot}/strawberry-bliss/4_ingredients.jpg`, label: "Strawberry Bliss ingredients and nutrition" },
      { src: `${detailRoot}/strawberry-bliss/5_flavour.jpg`, label: "Strawberry Bliss flavour profile" },
    ],
  },
  "creamy-twist": {
    mood: "Creamy & Savoury", heat: "No Heat", heatLevel: 0,
    notes: ["Creamy seasoning", "Onion", "Parsley", "Savoury crunch"],
    pairings: ["Movie night", "Evening chai", "Desk snack", "Sharing bowl"],
    gallery: [
      { src: `${detailRoot}/creamy-twist/1_jar.jpg`, label: "Creamy Twist product jar" },
      { src: `${detailRoot}/creamy-twist/Creamy Twist Makhana Explosion.png`, label: "Creamy Twist flavour burst" },
      { src: `${detailRoot}/creamy-twist/3_features.jpg`, label: "Creamy Twist product highlights" },
      { src: `${detailRoot}/creamy-twist/4_ingredients.jpg`, label: "Creamy Twist ingredients and nutrition" },
      { src: `${detailRoot}/creamy-twist/5_flavour.jpg`, label: "Creamy Twist flavour profile" },
    ],
  },
};
