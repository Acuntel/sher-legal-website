"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    const t = window.setTimeout(() => setShow(false), 1100);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-emerald-950"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(89,165,127,0.15),transparent_60%)]" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline gap-3"
            >
              <span className="font-serif text-5xl font-light tracking-tight text-canvas md:text-6xl">
                Sher
              </span>
              <span className="text-[11px] font-medium uppercase tracking-eyebrow text-emerald-300">
                LLP
              </span>
            </motion.div>

            <div className="relative mt-10 h-px w-48 overflow-hidden bg-canvas/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full bg-emerald-300/80"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
