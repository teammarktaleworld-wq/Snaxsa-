"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

/** Wraps content with a subtle 3D hover-tilt + optional glare sweep. */
export default function TiltCard({
  children,
  className,
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springCfg = { stiffness: 200, damping: 20, mass: 0.4 };
  const rx = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), springCfg);
  const ry = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), springCfg);
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={cn("relative [perspective:1000px]", className)}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.5), transparent 45%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
}
