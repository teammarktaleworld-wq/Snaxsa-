import type { Config } from "tailwindcss";

/**
 * ZIP1 (snax-sa) exact design system.
 * Zip2's original token NAMES are kept (royal, coral, peach, lavender, sky,
 * mint, sunbeam, gold, ink, ink-soft, cream) so every existing component
 * keeps working untouched, but every value now resolves to the EXACT
 * ZIP1 palette / hex values. Primary brand roles map 1:1:
 *   royal  -> maroon (ZIP1 primary brand colour)
 *   coral  -> pink-hot (ZIP1 accent / CTA colour)
 *   gold   -> gold (ZIP1 gold, unchanged)
 *   ink    -> ink (ZIP1 body text colour)
 * Decorative-only tokens (peach, lavender, sky, mint, sunbeam) are tinted
 * from ZIP1's orange/purple/blue/gold/success hues so blobs & accents stay
 * inside the ZIP1 colour family instead of introducing new hues.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ---- Approved SnaxSa palette (exact) ----
        maroon: { DEFAULT: "#6B102E", dark: "#4B0D20" },
        sunbeam: { DEFAULT: "#FCD980", dark: "#F9A825" },
        pink: { hot: "#E91E63", rose: "#FF4F81" },
        graylight: "#F5F5F5",
        beige: "#F7E8D0",

        cream: "#FFF8F0",
        ink: "#2C2C2C",
        "ink-soft": "#6B5560",
        // "success" kept as a token name for existing component classes
        // (checkmarks / status dots) but recoloured to the approved gold
        // accent — no green is used anywhere in the palette.
        success: "#F9A825",

        gold: { DEFAULT: "#F9A825", light: "#FCD980" },

        coral: { DEFAULT: "#E91E63", dark: "#FF4F81" },
        royal: { DEFAULT: "#6B102E", light: "#8B3A52", dark: "#4B0D20" },

        // Decorative tint tokens below keep their original names (used across
        // many components for background-tint variety) but every hex value
        // is now drawn strictly from the approved palette — no purple, blue,
        // green, or orange remain anywhere in the theme.
        peach: { DEFAULT: "#FCD980", dark: "#E91E63" },
        lavender: { DEFAULT: "#FF4F81", dark: "#E91E63" },
        sky: { DEFAULT: "#FCD980", dark: "#F9A825" },
        mint: { DEFAULT: "#8B3A52", dark: "#6B102E" },

        // Intentional exception: WhatsApp's own brand green, used only for
        // WhatsApp CTAs/icons so they stay recognizable. Not part of the
        // SnaxSa palette — do not reuse this token elsewhere.
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -8px rgba(107,16,46,0.18)",
        lift: "0 20px 45px -14px rgba(107,16,46,0.28)",
        glow: "0 0 40px -5px rgba(233,30,99,0.35)",
        gold: "0 10px 30px -8px rgba(249,168,37,0.35)",
        glass: "0 8px 32px rgba(107,16,46,0.10)",
      },
      backgroundImage: {
        // ZIP1 exact gradients
        "hero-gradient":
          "linear-gradient(135deg, #FFF8F0 0%, #F7E8D0 45%, #FFD9E8 100%)",
        "maroon-gradient": "linear-gradient(135deg, #6B102E 0%, #4B0D20 100%)",
        "pink-gradient": "linear-gradient(135deg, #E91E63 0%, #FF4F81 100%)",
        "royal-gradient": "linear-gradient(135deg, #E91E63 0%, #FF4F81 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, #F9A825 0%, #FCD980 50%, #F9A825 100%)",
        "aurora-coral":
          "linear-gradient(135deg, #FCD980 0%, #E91E63 55%, #6B102E 120%)",
        "aurora-mint":
          "linear-gradient(135deg, #FF4F81 0%, #F9A825 65%, #F7E8D0 120%)",
        "hero-mesh":
          "radial-gradient(45% 55% at 12% 15%, rgba(249,168,37,0.35) 0%, transparent 60%), radial-gradient(50% 60% at 90% 10%, rgba(233,30,99,0.25) 0%, transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(247,232,208,0.6) 0%, transparent 60%), linear-gradient(180deg,#FFF8F0 0%,#F7E8D0 100%)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        potRock: {
          "0%,100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        blobMove: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-30px) scale(1.08)" },
          "66%": { transform: "translate(-15px,15px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 28s linear infinite",
        potRock: "potRock 3.5s ease-in-out infinite",
        blobMove: "blobMove 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
