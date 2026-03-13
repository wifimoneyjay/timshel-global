"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-[#7a7a9e] tracking-widest uppercase">
          &copy; 2026 Timshel Global Services LLC
        </span>

        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-xs text-[#7a7a9e] tracking-widest uppercase hover:text-white transition-colors duration-300"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xs text-[#7a7a9e] tracking-widest uppercase hover:text-white transition-colors duration-300"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
