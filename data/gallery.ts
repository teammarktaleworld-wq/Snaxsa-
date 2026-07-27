export interface GalleryItem {
  id: string;
  type: "image" | "quote";
  src?: string;
  caption?: string;
  quote?: string;
  height: "sm" | "md" | "lg";
  bg?: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", type: "image", src: "/images/hero-jaipur.png", caption: "Sunset over Hawa Mahal", height: "lg" },
  { id: "g2", type: "image", src: "/images/jar-peri.png", caption: "Peri Punch, fresh batch", height: "md" },
  { id: "g3", type: "quote", quote: "Healthy Crunch. Royal Taste.", height: "sm", bg: "bg-royal-gradient" },
  { id: "g4", type: "image", src: "/images/jars-trio.png", caption: "The full flavour line-up", height: "lg" },
  { id: "g5", type: "image", src: "/images/jar-minty.png", caption: "Minty Pinch for tea-time", height: "sm" },
  { id: "g6", type: "quote", quote: "#RoastedNotFried", height: "sm", bg: "bg-aurora-mint" },
  { id: "g7", type: "image", src: "/images/jar-tangy.png", caption: "Tangy Tingle, up close", height: "md" },
  { id: "g8", type: "image", src: "/images/jar-snowpepper.png", caption: "Snow Pepper Burst", height: "md" },
  { id: "g9", type: "quote", quote: "Made in Jaipur, loved everywhere", height: "sm", bg: "bg-aurora-coral" },
  { id: "g10", type: "image", src: "/images/jar-tangy2.png", caption: "Packed fresh, sealed tight", height: "sm" },
];
