"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds */
  delay?: number;
  /** Direction: "up" (default), "left", "right", "none" */
  from?: "up" | "left" | "right" | "none";
}

/**
 * FadeIn — wraps children in a scroll-triggered entrance animation.
 * Uses the already-installed motion package and respects user motion preferences.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  from = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const initial = prefersReducedMotion
    ? { opacity: 1, y: 0, x: 0 }
    : {
        opacity: 0,
        y: from === "up" ? 20 : 0,
        x: from === "left" ? -20 : from === "right" ? 20 : 0,
      };

  const animate = prefersReducedMotion || inView
    ? { opacity: 1, y: 0, x: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.45,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }
      }
    >
      {children}
    </motion.div>
  );
}
