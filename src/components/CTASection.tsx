"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
          Ready to commission your next project?
        </h2>

        <p className="text-[#7a7a9e] text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Let us bring independent oversight and engineering rigor to your next build.
          Based in Lubbock, serving all of Texas.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#4a90d9] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#3a7bc2] transition-all duration-300"
        >
          Get in Touch
        </Link>
      </AnimatedSection>
    </section>
  );
}
