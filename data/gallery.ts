// // export interface GalleryItem {
// //   id: string;
// //   type: "image" | "quote";
// //   src?: string;
// //   caption?: string;
// //   quote?: string;
// //   height: "sm" | "md" | "lg";
// //   bg?: string;
// // }

// // export const galleryItems: GalleryItem[] = [
// //   {
// //     id: "g1",
// //     type: "image",
// //     src: "/images/hero-jaipur.png",
// //     caption: "Sunset over Hawa Mahal",
// //     height: "lg",
// //   },

// //   {
// //     id: "g2",
// //     type: "image",
// //     src: "/images/peri/jar-peri.png",
// //     caption: "Peri Punch, fresh batch",
// //     height: "md",
// //   },

// //   {
// //     id: "g3",
// //     type: "image",
// //     src: "/images/mintypinch2.jpeg",
// //     caption: "Healthy Crunch. Royal Taste.",
// //     height: "md",
// //   },

// //   {
// //     id: "g4",
// //     type: "image",
// //     src: "/images/jars-trio.png",
// //     caption: "The full flavour line-up",
// //     height: "lg",
// //   },

// //   {
// //     id: "g5",
// //     type: "image",
// //     src: "/images/mintypinch.jpeg",
// //     caption: "Minty Pinch for tea-time",
// //     height: "sm",
// //   },

// //   {
// //     id: "g6",
// //     type: "image",
// //     src: "/images/woman.jpeg",
// //     caption: "Everyday healthy snacking",
// //     height: "md",
// //   },

// //   {
// //     id: "g7",
// //     type: "image",
// //     src: "/images/tangy/jar-tangy.png",
// //     caption: "Tangy Tingle, up close",
// //     height: "md",
// //   },

// //   {
// //     id: "g8",
// //     type: "image",
// //     src: "/images/pepperburst/pepperbursts.png",
// //     caption: "Snow Pepper Burst",
// //     height: "md",
// //   },

// //   {
// //     id: "g9",
// //     type: "image",
// //     src: "/images/trawel.png",
// //     caption: "Made in Jaipur, loved everywhere",
// //     height: "md",
// //   },

// //   {
// //     id: "g11",
// //     type: "image",
// //     src: "/images/tangy/masalatangy.png",
// //     caption: "Packed fresh, sealed tight",
// //     height: "md",
// //   },
// // ];

// export interface GalleryItem {
//   id: string;
//   type: "image" | "quote";
//   src?: string;
//   caption?: string;
//   quote?: string;
//   height: "sm" | "md" | "lg";
//   bg?: string;
//   rounded?: boolean;
// }

// export const galleryItems: GalleryItem[] = [
//   {
//     id: "g1",
//     type: "image",
//     src: "/images/hero-jaipur.png",
//     caption: "Sunset over Hawa Mahal",
//     height: "lg",
//   },

//   {
//     id: "g2",
//     type: "image",
//     src: "/images/peri/jar-peri.png",
//     caption: "Peri Punch, fresh batch",
//     height: "md",
//   },

//   {
//     id: "g3",
//     type: "image",
//     src: "/images/mintypinch2.jpeg",
//     caption: "Healthy Crunch. Royal Taste.",
//     height: "md",
//     rounded: true,
//   },

//   {
//     id: "g4",
//     type: "image",
//     src: "/images/jars-trio.png",
//     caption: "The full flavour line-up",
//     height: "lg",
//   },

//   {
//     id: "g5",
//     type: "image",
//     src: "/images/mintypinch.jpeg",
//     caption: "Minty Pinch for tea-time",
//     height: "sm",
//   },

//   {
//     id: "g6",
//     type: "image",
//     src: "/images/woman.jpeg",
//     caption: "Everyday healthy snacking",
//     height: "md",
//     rounded: true,
//   },

//   {
//     id: "g7",
//     type: "image",
//     src: "/images/tangy/jar-tangy.png",
//     caption: "Tangy Tingle, up close",
//     height: "md",
//   },

//   {
//     id: "g8",
//     type: "image",
//     src: "/images/pepperburst/pepperbursts.png",
//     caption: "Snow Pepper Burst",
//     height: "md",
//   },

//   {
//     id: "g9",
//     type: "image",
//     src: "/images/trawel.png",
//     caption: "Made in Jaipur, loved everywhere",
//     height: "md",
//   },

//   {
//     id: "g11",
//     type: "image",
//     src: "/images/tangy/masalatangy.png",
//     caption: "Packed fresh, sealed tight",
//     height: "md",
//   },
// ];

export interface GalleryItem {
  id: string;
  type: "image" | "quote";
  src?: string;
  caption?: string;
  quote?: string;
  bg?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    type: "image",
    src: "/images/Snaxsa main/gallery/4flavours.png",
    caption: "Sunset over Hawa Mahal",
  },
  {
    id: "g2",
    type: "image",
    src: "/images/product-assets/product-detail-set/peri-punch/1_jar.jpg",
    caption: "Peri Punch, fresh batch",
  },
  {
    id: "g3",
    type: "image",
    src: "/images/Snaxsa main/gallery/office.png",
    caption: "Healthy Crunch. Royal Taste.",
  },
  {
    id: "g4",
    type: "image",
    src: "/images/Snaxsa main/gallery/quadproductimage.png",
    caption: "The full flavour line-up",
  },
  {
    id: "g5",
    type: "image",
    src: "/images/product-assets/product-detail-set/minty-pinch/1_jar.jpg",
    caption: "Minty Pinch for tea-time",
  },
  {
    id: "g6",
    type: "image",
    src: "/images/Snaxsa main/gallery/Child.png",
    caption: "Everyday healthy snacking",
  },
  {
    id: "g7",
    type: "image",
    src: "/images/product-assets/product-detail-set/tangy-tingle/1_jar.jpg",
    caption: "Tangy Tingle, up close",
  },
  {
    id: "g8",
    type: "image",
    src: "/images/product-assets/product-detail-set/snow-pepper-burst/1_jar.jpg",
    caption: "Snow Pepper Burst",
  },
  // {
  //   id: "g9",
  //   type: "image",
  //   src: "/images/trawel.png",
  //   caption: "Made in Jaipur, loved everywhere",
  // },
  {
    id: "g10",
    type: "image",
    src: "/images/Snaxsa main/Tangy/Tangy-tingle-alone.webp",
    caption: "Packed fresh, sealed tight",
  },
  {
    id: "g11",
    type: "image",
    src: "/images/Snaxsa main/gallery/woman.png",
    caption: "Packed fresh, sealed tight",
  },
];
