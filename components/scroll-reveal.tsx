"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article" | "header" | "footer";
}

export function ScrollReveal({
  children,
  className,
  as = "section",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as] || motion.section;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={scrollRevealVariants}
      className={cn("transform-gpu", className)}
    >
      {children}
    </MotionComponent>
  );
}
