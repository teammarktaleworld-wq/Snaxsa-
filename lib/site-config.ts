/**
 * Central, single source of truth for all business-identity values
 * (contact numbers, social links, email, address).
 *
 * Every value is read from a NEXT_PUBLIC_* environment variable first,
 * falling back to the real value provided by the business owner so the
 * site still works out of the box. To change any of these later, just
 * edit `.env.local` — no component code needs to change.
 */

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

const PHONE_PRIMARY = process.env.NEXT_PUBLIC_PHONE || "+91 88520 15567";
const PHONE_SECONDARY = process.env.NEXT_PUBLIC_PHONE_SECONDARY || "+91 95092 59962";

const WHATSAPP_PRIMARY = process.env.NEXT_PUBLIC_WHATSAPP || "+91 88520 15567";
const WHATSAPP_SECONDARY = process.env.NEXT_PUBLIC_WHATSAPP_SECONDARY || "+91 95092 59962";

export const SITE_CONFIG = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "Snax सा",

  phone: PHONE_PRIMARY,
  phoneSecondary: PHONE_SECONDARY,
  phoneHref: `tel:+${digitsOnly(PHONE_PRIMARY)}`,

  whatsapp: WHATSAPP_PRIMARY,
  whatsappSecondary: WHATSAPP_SECONDARY,
  whatsappHref: `https://wa.me/${digitsOnly(WHATSAPP_PRIMARY)}`,
  whatsappSecondaryHref: `https://wa.me/${digitsOnly(WHATSAPP_SECONDARY)}`,

  email: process.env.NEXT_PUBLIC_EMAIL || "hello@snaxsa.com",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "hello@snaxsa.com",

  address: process.env.NEXT_PUBLIC_ADDRESS || "Jaipur, Rajasthan, India",
  hours: process.env.NEXT_PUBLIC_HOURS || "Monday–Saturday, 9am–8pm IST",

  googleMap: process.env.NEXT_PUBLIC_GOOGLE_MAP || "",

  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM ||
      "https://www.instagram.com/snaxsa_makhaana?utm_source=qr&igsh=aDFiY3A5cjE2ZHpy",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE || "",
  },

  amazon: {
    classic: process.env.NEXT_PUBLIC_AMAZON_CLASSIC || "#",
    peri: process.env.NEXT_PUBLIC_AMAZON_PERI || "#",
    masala: process.env.NEXT_PUBLIC_AMAZON_MASALA || "#",
  },
} as const;

/** Pre-built WhatsApp deep link with a friendly prefilled message. */
export function whatsappLinkWithMessage(message: string, number: string = SITE_CONFIG.whatsapp) {
  return `https://wa.me/${digitsOnly(number)}?text=${encodeURIComponent(message)}`;
}
