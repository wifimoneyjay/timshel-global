"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const projects = [
  {
    name: "Texas Tech University — Science Research Facility",
    sector: "Higher Education",
    size: "180,000 SF",
    image: "/project-university-real.jpg",
  },
  {
    name: "UMC Health System — Patient Tower Expansion",
    sector: "Healthcare",
    size: "240,000 SF",
    image: "/project-umc-real.webp",
  },
  {
    name: "Lubbock-Preston Smith International — Terminal Renovation",
    sector: "Aviation",
    size: "95,000 SF",
    image: "/project-airport-real.jpg",
  },
  {
    name: "Regional Data Center — Tier III Facility",
    sector: "Technology",
    size: "60,000 SF",
    image: "/project-datacenter.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <AnimatedSection>
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-[1px] w-12 bg-[#4a90d9]" />
          <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white">
            Featured Projects
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <AnimatedSection key={project.name} delay={index * 0.15}>
            <div className="group relative h-80 overflow-hidden bg-[#141428] border border-white/5 cursor-pointer">
              {/* Background image */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#08081a]/60 group-hover:bg-[#08081a]/40 transition-colors duration-500" />

              {/* Diagonal line grid overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 39px,
                    rgba(255, 255, 255, 1) 39px,
                    rgba(255, 255, 255, 1) 40px
                  )`,
                }}
              />

              {/* Content at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Sector + Size */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-[#4a90d9] text-[10px] uppercase tracking-widest font-medium">
                      {project.sector}
                    </span>
                    <span className="text-white/30 text-xs">&bull;</span>
                    <span className="text-white/50 text-[10px] uppercase tracking-widest">
                      {project.size}
                    </span>
                  </div>

                  {/* Project name */}
                  <h3 className="text-2xl font-serif text-white leading-snug mb-3">
                    {project.name}
                  </h3>

                  {/* Expanding underline */}
                  <div className="w-0 group-hover:w-12 h-[1px] bg-[#4a90d9] transition-all duration-500" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
