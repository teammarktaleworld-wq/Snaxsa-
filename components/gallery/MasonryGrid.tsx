// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import { galleryItems } from "@/data/gallery";
// // // import Reveal from "@/components/ui/Reveal";
// // // import { cn } from "@/lib/utils";

// // // const heightClass = {
// // //   sm: "h-56",
// // //   md: "h-72",
// // //   lg: "h-96",
// // // };

// // // export default function MasonryGrid() {
// // //   return (
// // //     <section className="grain relative py-16 md:py-24">
// // //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// // //         <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
// // //           {galleryItems.map((item, i) => (
// // //             <Reveal key={item.id} delay={(i % 6) * 0.06} className="break-inside-avoid">
// // //               <motion.div
// // //                 whileHover={{ scale: 1.02, y: -4 }}
// // //                 transition={{ type: "spring", stiffness: 250, damping: 20 }}
// // //                 className={cn(
// // //                   "relative rounded-3xl overflow-hidden shadow-glass group",
// // //                   heightClass[item.height]
// // //                 )}
// // //               >
// // //                 {item.type === "image" && item.src && (
// // //                   <>
// // //                     <Image
// // //                       src={item.src}
// // //                       alt={item.caption ?? "Snax सा gallery photo"}
// // //                       fill
// // //                       className="object-cover group-hover:scale-110 transition-transform duration-500"
// // //                     />
// // //                     <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
// // //                       <p className="text-white text-sm font-semibold">{item.caption}</p>
// // //                     </div>
// // //                   </>
// // //                 )}
// // //                 {item.type === "quote" && (
// // //                   <div
// // //                     className={cn(
// // //                       "w-full h-full flex items-center justify-center p-6 text-center",
// // //                       item.bg
// // //                     )}
// // //                   >
// // //                     <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
// // //                       {item.quote}
// // //                     </p>
// // //                   </div>
// // //                 )}
// // //               </motion.div>
// // //             </Reveal>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }







// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import { galleryItems } from "@/data/gallery";
// // // import Reveal from "@/components/ui/Reveal";
// // // import { cn } from "@/lib/utils";

// // // const heightClass = {
// // //   sm: "h-56",
// // //   md: "h-72",
// // //   lg: "h-96",
// // // };

// // // export default function MasonryGrid() {
// // //   return (
// // //     <section className="grain relative py-16 md:py-24">
// // //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// // //         <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
// // //           {galleryItems.map((item, i) => (
// // //             <Reveal key={item.id} delay={(i % 6) * 0.06} className="break-inside-avoid">
// // //               <motion.div
// // //                 whileHover={{ scale: 1.02, y: -4 }}
// // //                 transition={{ type: "spring", stiffness: 250, damping: 20 }}
// // //                 className={cn(
// // //                   "relative rounded-3xl overflow-hidden shadow-glass group",
// // //                   heightClass[item.height]
// // //                 )}
// // //               >
// // //                 {item.type === "image" && item.src && (
// // //                   <>
// // //                     <div className="flex h-full items-center justify-center p-6">
// // //                       <Image
// // //                         src={item.src}
// // //                         alt={item.caption ?? "Snax-Sa gallery photo"}
// // //                         width={500}
// // //                         height={500}
// // //                         className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
// // //                       />
// // //                     </div>
// // //                     <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
// // //                       <p className="text-white text-sm font-semibold">{item.caption}</p>
// // //                     </div>
// // //                   </>
// // //                 )}
// // //                 {item.type === "quote" && (
// // //                   <div
// // //                     className={cn(
// // //                       "w-full h-full flex items-center justify-center p-6 text-center",
// // //                       item.bg
// // //                     )}
// // //                   >
// // //                     <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
// // //                       {item.quote}
// // //                     </p>
// // //                   </div>
// // //                 )}
// // //               </motion.div>
// // //             </Reveal>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // // "use client";

// // // import Image from "next/image";
// // // import { galleryItems } from "@/data/gallery";
// // // import { cn } from "@/lib/utils";

// // // export default function GalleryGrid() {
// // //   return (
// // //     <section className="grain relative py-16 md:py-24">
// // //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
// // //           {galleryItems.map((item) => (
// // //             <div
// // //               key={item.id}
// // //               // className="group relative aspect-[4/5]   hover:shadow-lg transition-shadow duration-300"
// // //               // className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-transparent transition-shadow duration-300"
// // //               // className="group relative min-h-[380px] rounded-2xl overflow-hidden bg-[#F8F5F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" 
// // //               // className="group relative min-h-[380px] rounded-lg overflow-hidden bg-[#F8F5F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"    
// // //               className="group relative min-h-[380px] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"                    >
// // //               {item.type === "image" && item.src && (
// // //                 <>

// // //                   <div className="absolute inset-4 flex items-center justify-center">
// // //                     <div className="flex h-full w-full items-center justify-center p-4">
// // //                       <div className="overflow-hidden rounded-2xl">
// // //                         <Image
// // //                           src={item.src}
// // //                           alt={item.caption ?? "Snax-Sa gallery photo"}
// // //                           width={320}
// // //                           height={320}
// // //                           className="object-contain transition-transform duration-500 group-hover:scale-105"
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
// // //                     <p className="text-white text-sm font-semibold">{item.caption}</p>
// // //                   </div>
// // //                 </>
// // //               )}

// // //               {item.type === "quote" && (
// // //                 <div
// // //                   className={cn(
// // //                     "w-full h-full flex items-center justify-center p-6 text-center",
// // //                     item.bg
// // //                   )}
// // //                 >
// // //                   <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
// // //                     {item.quote}
// // //                   </p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // // "use client";

// // // import Image from "next/image";
// // // import { galleryItems } from "@/data/gallery";
// // // import { cn } from "@/lib/utils";

// // // export default function GalleryGrid() {
// // //   return (
// // //     <section className="grain relative py-16 md:py-24">
// // //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
// // //           {galleryItems.map((item) => {
// // //             const isPoster =
// // //               item.id === "g3" ||
// // //               item.id === "g6";

// // //             return (
// // //               <div
// // //                 key={item.id}
// // //                 className="group relative min-h-[380px] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
// // //               >
// // //                 {item.type === "image" && item.src && (
// // //                   <>
// // //                     <div className="absolute inset-4 flex items-center justify-center">
// // //                       <div
// // //                         className={cn(
// // //                           "w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105",
// // //                           isPoster ? "object-contain" : "object-contain"
// // //                         )}
// // //                       >
// // //                         <div className="overflow-hidden rounded-2xl">
// // //                           <Image
// // //                             src={item.src}
// // //                             alt={item.caption ?? "Snax-Sa gallery photo"}
// // //                             width={320}
// // //                             height={320}
// // //                             className={cn(
// // //                               "transition-transform duration-500 group-hover:scale-105",
// // //                               isPoster
// // //                                 ? "object-cover w-full h-full rounded-2xl"
// // //                                 : "object-contain"
// // //                             )}
// // //                           />
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                     <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
// // //                       <p className="text-white text-sm font-semibold">{item.caption}</p>
// // //                     </div>
// // //                   </>
// // //                 )}

// // //                 {item.type === "quote" && (
// // //                   <div
// // //                     className={cn(
// // //                       "w-full h-full flex items-center justify-center p-6 text-center",
// // //                       item.bg
// // //                     )}
// // //                   >
// // //                     <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
// // //                       {item.quote}
// // //                     </p>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // // "use client";

// // // import Image from "next/image";
// // // import { galleryItems } from "@/data/gallery";
// // // import { cn } from "@/lib/utils";

// // // export default function GalleryGrid() {
// // //   return (
// // //     <section className="grain relative py-16 md:py-24">
// // //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
// // //           {galleryItems.map((item) => (
// // //             <div
// // //               key={item.id}
// // //               className="group relative min-h-[380px] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
// // //             >
// // //               {item.type === "image" && item.src && (
// // //                 <>
// // //                   <div className="absolute inset-4 flex items-center justify-center">
// // //                     <div className="flex h-full w-full items-center justify-center p-4">
// // //                       <Image
// // //                         src={item.src}
// // //                         alt={item.caption ?? "Snax-Sa gallery photo"}
// // //                         width={320}
// // //                         height={320}
// // //                         className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
// // //                     <p className="text-white text-sm font-semibold">{item.caption}</p>
// // //                   </div>
// // //                 </>
// // //               )}

// // //               {item.type === "quote" && (
// // //                 <div
// // //                   className={cn(
// // //                     "w-full h-full flex items-center justify-center p-6 text-center",
// // //                     item.bg
// // //                   )}
// // //                 >
// // //                   <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
// // //                     {item.quote}
// // //                   </p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import Image from "next/image";
// // import { galleryItems } from "@/data/gallery";
// // import { cn } from "@/lib/utils";

// // // Images that already have a filled/square background,
// // // so rounding must be applied via wrapper clipping instead of on the <Image> itself.
// // const WRAPPER_CLIP_IDS = ["g3", "g6"];

// // export default function GalleryGrid() {
// //   return (
// //     <section className="grain relative py-16 md:py-24">
// //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
// //           {galleryItems.map((item) => {
// //             const needsWrapperRadius = WRAPPER_CLIP_IDS.includes(item.id);

// //             return (
// //               <div
// //                 key={item.id}
// //                 className="group relative min-h-[380px] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
// //               >
// //                 {item.type === "image" && item.src && (
// //                   <>
// //                     <div className="absolute inset-4 flex items-center justify-center">
// //                       <div className="flex h-full w-full items-center justify-center p-4">
// //                         <div
// //                           className={cn(
// //                             "w-full h-full",
// //                             needsWrapperRadius && "rounded-2xl overflow-hidden"
// //                           )}
// //                         >
// //                           <Image
// //                             src={item.src}
// //                             alt={item.caption ?? "Snax-Sa gallery photo"}
// //                             width={320}
// //                             height={320}
// //                             className={cn(
// //                               "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105",
// //                               !needsWrapperRadius && "rounded-2xl"
// //                             )}
// //                           />
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
// //                       <p className="text-white text-sm font-semibold">{item.caption}</p>
// //                     </div>
// //                   </>
// //                 )}

// //                 {item.type === "quote" && (
// //                   <div
// //                     className={cn(
// //                       "w-full h-full flex items-center justify-center p-6 text-center",
// //                       item.bg
// //                     )}
// //                   >
// //                     <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
// //                       {item.quote}
// //                     </p>
// //                   </div>
// //                 )}
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import Image from "next/image";
// import { galleryItems } from "@/data/gallery";
// import { cn } from "@/lib/utils";

// export default function GalleryGrid() {
//   return (
//     <section className="grain relative py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-5 md:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
//           {galleryItems.map((item) => (
//             <div
//               key={item.id}
//               className="group relative min-h-[380px] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
//             >
//               {item.type === "image" && item.src && (
//                 <>
//                   <div className="absolute inset-4 flex items-center justify-center">
//                     <div className="flex h-full w-full items-center justify-center p-4">
//                       <Image
//                         src={item.src}
//                         alt={item.caption ?? "Snax-Sa gallery photo"}
//                         width={320}
//                         height={320}
//                         className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
//                       />
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                     <p className="text-white text-sm font-semibold">{item.caption}</p>
//                   </div>
//                 </>
//               )}

//               {item.type === "quote" && (
//                 <div
//                   className={cn(
//                     "w-full h-full flex items-center justify-center p-6 text-center",
//                     item.bg
//                   )}
//                 >
//                   <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
//                     {item.quote}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
















"use client";

import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function GalleryGrid() {
  return (
    <section className="grain relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative min-h-[380px] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {item.type === "image" && item.src && (
                <>
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="relative h-full w-full p-4">
                      {/* Fixed-size wrapper: radius + clipping ALWAYS happens here,
                          not on the <Image>, so every card looks identical no matter
                          what aspect ratio the source image has. */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.caption ?? "Snax-Sa gallery photo"}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-semibold">{item.caption}</p>
                  </div>
                </>
              )}

              {item.type === "quote" && (
                <div
                  className={cn(
                    "w-full h-full flex items-center justify-center p-6 text-center",
                    item.bg
                  )}
                >
                  <p className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
                    {item.quote}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}