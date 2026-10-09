"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  as?: "div" | "button";
}

export default function MagneticButton({
  children,
  className,
  as = "div",
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const springTransition = {
    type: "spring" as const,
    stiffness: 280,
    damping: 22,
    mass: 0.6,
  };

  const sharedProps = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 12 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: springTransition,
    whileHover: shouldReduceMotion
      ? {}
      : {
        y: -2,
        scale: 1.02,
        boxShadow:
          "0 10px 20px -8px rgba(0,0,0,0.16), 0 4px 8px -2px rgba(0,0,0,0.08)",
      },
    whileTap: shouldReduceMotion ? {} : { scale: 0.98, y: 0 },
    className: cn("inline-block will-change-transform", className),
  };

  if (as === "button") {
    return <motion.button {...sharedProps}>{children}</motion.button>;
  }

  return <motion.div {...sharedProps}>{children}</motion.div>;
}