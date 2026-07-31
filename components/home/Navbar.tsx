// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, MessageCircle } from "lucide-react";
// import Button from "@/components/ui/Button";
// import MagneticButton from "@/components/ui/MagneticButton";
// import { cn } from "@/lib/utils";
// import { whatsappLinkWithMessage } from "@/lib/site-config";
// import Image from "next/image";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Order", href: "/order" },
//   { label: "Benefits", href: "/benefits" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Bulk Orders", href: "/bulk-orders" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         scrolled ? "py-2" : "py-4"
//       )}
//     >
//       <div
//         className={cn(
//           "max-w-7xl mx-auto px-4 transition-all duration-300",
//           scrolled ? "md:px-4" : "md:px-6"
//         )}
//       >
//         <nav
//           className={cn(
//             "flex items-center justify-between rounded-full transition-all duration-300 px-4 md:px-5",
//             scrolled ? "glass-strong shadow-glass py-2" : "bg-transparent py-2"
//           )}
//         >
//           <Link href="/" className="flex items-center gap-2 shrink-0">
//             <div className="relative w-10 h-10  rounded-full overflow-hidden bg-white">
//               <Image
//                 src="/images/logo.png"
//                 alt="Snax सा logo"
//                 fill
//                 className="object-contain p-1"
//               />
//             </div>
//             <span className="font-display text-2xl font-bold  text-maroon text-ink">
//               Snax <span className="text-gradient-gold">सा</span>
//             </span>
//           </Link>

//           <ul className="hidden lg:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-semibold text-ink-soft hover:text-coral transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="hidden lg:flex items-center gap-3">
//             <Button
//               variant="whatsapp"
//               size="sm"
//               icon={<MessageCircle size={16} />}
//               href={whatsappLinkWithMessage("Hi Snax सा! I'd like to place an order.")}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               WhatsApp
//             </Button>
//             <MagneticButton>
//               <Button variant="primary" size="sm" href="/order">
//                 Order Now
//               </Button>
//             </MagneticButton>
//           </div>

//           <button
//             className="lg:hidden p-2 rounded-full glass"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//             aria-expanded={open}
//           >
//             {open ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </nav>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden glass-strong overflow-hidden mt-2 mx-4 rounded-3xl shadow-glass"
//           >
//             <ul className="flex flex-col p-4 gap-1">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="block px-3 py-2.5 rounded-xl text-ink-soft font-semibold hover:bg-white/60 hover:text-coral transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//               <li className="flex gap-2 pt-2">
//                 <Button
//                   variant="whatsapp"
//                   size="sm"
//                   className="flex-1"
//                   icon={<MessageCircle size={16} />}
//                   href={whatsappLinkWithMessage("Hi Snax सा! I'd like to place an order.")}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   WhatsApp
//                 </Button>
//                 <Button variant="primary" size="sm" className="flex-1" href="/order" onClick={() => setOpen(false)}>
//                   Order Now
//                 </Button>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }














"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ShoppingBag } from "lucide-react";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { whatsappLinkWithMessage } from "@/lib/site-config";
import Image from "next/image";

const navLinks = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Flavours",    href: "/flavours" },
  { label: "Order",       href: "/order" },
  { label: "Benefits",    href: "/benefits" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Bulk Orders", href: "/bulk-orders" },
  { label: "Contact",     href: "/contact" },
];

// ─── Desktop Nav Link with animated underline ──────────────────────────────

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  const [hovered, setHovered] = useState(false);

  return (
    <li className="relative">
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative text-sm font-semibold transition-colors duration-200 py-1 block",
          isActive ? "text-coral" : "text-ink-soft hover:text-ink"
        )}
      >
        {label}

        {/* Hover underline — shows on hover when NOT active */}
        {!isActive && (
          <motion.span
            className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-ink-soft/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        )}

        {/* Active underline — gradient pill, always visible */}
        {isActive && (
          <motion.span
            layoutId="active-underline"
            className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #E91E63, #F9A825)",
            }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        )}
      </Link>
    </li>
  );
}

// ─── Mobile Nav Link ───────────────────────────────────────────────────────

function MobileNavLink({
  href,
  label,
  onClick,
  index,
}: {
  href: string;
  label: string;
  onClick: () => void;
  index: number;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.045, duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-sm transition-all",
          isActive
            ? "text-coral bg-coral/8"
            : "text-ink-soft hover:bg-white/60 hover:text-ink"
        )}
      >
        {label}
        {isActive && (
          <motion.span
            layoutId="mobile-active-dot"
            className="w-1.5 h-1.5 rounded-full bg-coral shrink-0"
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          />
        )}
      </Link>
    </motion.li>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 transition-all duration-300",
          scrolled ? "md:px-4" : "md:px-6"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between rounded-full transition-all duration-300 px-4 md:px-5",
            scrolled ? "glass-strong shadow-glass py-2" : "bg-transparent py-2"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative w-10 h-10 rounded-full overflow-hidden bg-white shadow-sm"
            >
              <Image
                src="/images/logo.png"
                alt="Snax सा logo"
                fill
                className="object-contain p-1"
              />
            </motion.div>
            <span className="font-display text-2xl font-bold text-ink">
              Snax <span className="text-gradient-gold">सा</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="whatsapp"
              size="sm"
              icon={<MessageCircle size={15} />}
              href={whatsappLinkWithMessage("Hi Snax सा! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Button>
            <MagneticButton>
              <Button
                variant="primary"
                size="sm"
                icon={<ShoppingBag size={14} />}
                href="/order"
              >
                Order Now
              </Button>
            </MagneticButton>
          </div>

          {/* Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-full glass"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden glass-strong overflow-hidden mt-2 mx-4 rounded-3xl shadow-glass"
          >
            <ul className="flex flex-col p-3 gap-0.5">
              {navLinks.map((link, i) => (
                <MobileNavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={() => setOpen(false)}
                  index={i}
                />
              ))}

              {/* Mobile CTAs */}
              <motion.li
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.045 + 0.05, duration: 0.3 }}
                className="flex gap-2 pt-3 mt-1 border-t border-ink/6"
              >
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="flex-1"
                  icon={<MessageCircle size={15} />}
                  href={whatsappLinkWithMessage("Hi Snax सा! I'd like to place an order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  icon={<ShoppingBag size={14} />}
                  href="/order"
                  onClick={() => setOpen(false)}
                >
                  Order Now
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}