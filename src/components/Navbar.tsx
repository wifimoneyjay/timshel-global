"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08081a]/90 backdrop-blur-md py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="text-white text-xl md:text-2xl font-serif tracking-[0.3em] transition-colors duration-300 group-hover:text-[#4a90d9]">
            TIMSHEL<span className="text-[#4a90d9]">.</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-widest text-[#7a7a9e] hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1px] w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-[#08081a] flex flex-col items-center justify-center"
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 flex flex-col justify-center items-center gap-[6px] w-8 h-8"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <span className="block h-[1px] w-6 bg-white rotate-45 translate-y-[3px]" />
              <span className="block h-[1px] w-6 bg-white -rotate-45 -translate-y-[4px]" />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-3xl font-serif tracking-widest text-white hover:text-[#4a90d9] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
