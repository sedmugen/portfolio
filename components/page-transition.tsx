"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full flex-1 flex flex-col relative">
      <motion.div
        key={pathname}
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 12, filter: "blur(4px)" }
        }
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: -8, filter: "blur(2px)" }
        }
        transition={{
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1], // Smooth luxury cubic bezier
        }}
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
