"use client";

import AnimatedSection from "./AnimatedSection";

export default function WhyTimshel() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Photo column */}
        <AnimatedSection>
          <div className="relative max-w-md mx-auto md:mx-0">
            {/* Offset blue border frame */}
            <div className="absolute inset-0 border border-[#4a90d9]/30 translate-x-4 translate-y-4" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/david-headshot.jpg"
                alt="David Sublett, PE"
                className="w-full h-full object-cover grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-700"
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                <p className="font-serif italic text-white text-lg">David Sublett, PE</p>
                <p className="text-[#4a90d9] text-sm tracking-wider">Founder</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Text column */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-[#4a90d9]" />
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white">
              Our Foundation
            </h2>
          </div>

          <p className="text-[#7a7a9e] text-base leading-relaxed font-light mb-6">
            Timshel Global was founded on a simple conviction: buildings should perform exactly as
            they were designed to. For over 16 years, we have served as an independent voice in the
            construction process — verifying systems, protecting owners, and ensuring that every
            facility meets its full potential from day one.
          </p>

          <p className="text-[#7a7a9e] text-base leading-relaxed font-light">
            As one of a select group of firms licensed for the Continuous Commissioning&reg; process
            through the Texas A&amp;M Energy Systems Laboratory, we bring a level of rigor and
            specialization that most firms simply cannot. Commissioning and owner representation is
            all we do — and that singular focus is what makes the difference.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
