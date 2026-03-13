"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center px-6"
      >
        {/* Visual brand name — decorative, not the SEO H1 */}
        <span
          aria-hidden="true"
          className="block text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1,
            textShadow: "0 0 60px rgba(74, 144, 217, 0.15)",
          }}
        >
          TIMSHEL
          <br />
          GLOBAL
        </span>

        {/* SEO H1 — keyword-rich, visually styled as subtitle */}
        <h1 className="text-[#4a90d9] text-sm md:text-base tracking-[0.15em] uppercase font-medium mb-4 max-w-xl mx-auto">
          Building Commissioning &amp; Owner&apos;s Representative Services in Lubbock, Texas
        </h1>

        <p className="text-[#7a7a9e] text-xs md:text-sm tracking-[0.25em] uppercase font-medium">
          16 Years of Excellence &bull; 400+ Projects Completed
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#7a7a9e]">
          Scroll
        </span>
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7a7a9e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.div>
    </div>
  );
}
