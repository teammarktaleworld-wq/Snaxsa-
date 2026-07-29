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
  {
    id: "g1",
    type: "image",
    src: "/images/hero-jaipur.png",
    caption: "Sunset over Hawa Mahal",
    height: "lg",
  },

  {
    id: "g2",
    type: "image",
    src: "/images/peri/jar-peri.png",
    caption: "Peri Punch, fresh batch",
    height: "md",
  },

  {
    id: "g3",
    type: "quote",
    src: "/images/mintypinch2.jpeg",
    quote: "Healthy Crunch. Royal Taste.",
    height: "sm",
    bg: "bg-royal-gradient",
  },

  {
    id: "g4",
    type: "image",
    src: "/images/jars-trio.png",
    caption: "The full flavour line-up",
    height: "lg",
  },

  {
    id: "g5",
    type: "image",
    src: "/images/mintypinch.jpeg",
    caption: "Minty Pinch for tea-time",
    height: "sm",
  },

  {
    id: "g6",
    type: "quote",
    src: "/images/woman.jpeg",
    quote: "#RoastedNotFried",
    height: "sm",
    bg: "bg-aurora-mint",
  },

  {
    id: "g7",
    type: "image",
    src: "/images/tangy/jar-tangy.png",
    caption: "Tangy Tingle, up close",
    height: "md",
  },

  {
    id: "g8",
    type: "image",
    src: "/images/pepperburst/pepperbursts.png",
    caption: "Snow Pepper Burst",
    height: "md",
  },

  {
    id: "g9",
    type: "quote",
    quote: "Made in Jaipur, loved everywhere",
    src: "/images/trawel.png",
    height: "sm",
    bg: "bg-aurora-coral",
  },

  {
    id: "g10",
    type: "image",
    src: "/images/tangy/masalatangy.png", // agar ye file hai
    caption: "Packed fresh, sealed tight",
    height: "sm",
  },
];
