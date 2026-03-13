"use client";

import AnimatedSection from "./AnimatedSection";

const sectors = [
  "Aviation",
  "Commercial",
  "Higher Education",
  "K-12 Government",
  "Healthcare",
  "Technology",
  "Data Centers",
];

export default function SectorGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white text-center mb-10">
          Sectors We Serve
        </h2>

      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="flex flex-wrap justify-center gap-4">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="px-6 py-3 border border-white/10 rounded-full text-sm tracking-wider text-[#7a7a9e] hover:text-white hover:border-[#4a90d9] bg-[#141428]/50 backdrop-blur-sm transition-all duration-300 cursor-default"
            >
              {sector}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
