"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { whatsappLinkWithMessage } from "@/lib/site-config";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Flavours", href: "/flavours" },
  { label: "Benefits", href: "/benefits" },
  { label: "Gallery", href: "/gallery" },
  { label: "Bulk Orders", href: "/bulk-orders" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
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
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-10 h-10  rounded-full overflow-hidden bg-white">
              <Image
                src="/images/logo.png"
                alt="Snax सा logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="font-display text-2xl font-bold  text-maroon text-ink">
              Snax <span className="text-gradient-gold">सा</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-ink-soft hover:text-coral transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="whatsapp"
              size="sm"
              icon={<MessageCircle size={16} />}
              href={whatsappLinkWithMessage("Hi Snax सा! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Button>
            <MagneticButton>
              <Button variant="primary" size="sm" href="/flavours">
                Order Now
              </Button>
            </MagneticButton>
          </div>

          <button
            className="lg:hidden p-2 rounded-full glass"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong overflow-hidden mt-2 mx-4 rounded-3xl shadow-glass"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-ink-soft font-semibold hover:bg-white/60 hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="flex-1"
                  icon={<MessageCircle size={16} />}
                  href={whatsappLinkWithMessage("Hi Snax सा! I'd like to place an order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Button>
                <Button variant="primary" size="sm" className="flex-1" href="/flavours" onClick={() => setOpen(false)}>
                  Order Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
