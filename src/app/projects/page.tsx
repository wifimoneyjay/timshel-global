"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

interface Project {
  name: string;
  sector: string;
  sf: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Texas Tech University — Science Research Facility",
    sector: "Higher Education",
    sf: "180,000 SF",
    description:
      "New construction commissioning for a multi-story research facility including complex lab HVAC, fume hood systems, and building automation controls.",
  },
  {
    name: "UMC Health System — Patient Tower Expansion",
    sector: "Healthcare",
    sf: "240,000 SF",
    description:
      "Enhanced commissioning for a critical care tower including medical gas systems, surgical suite HVAC, and redundant power distribution.",
  },
  {
    name: "Lubbock-Preston Smith International — Terminal Renovation",
    sector: "Aviation",
    sf: "95,000 SF",
    description:
      "Commissioning of renovated terminal HVAC, fire alarm, and building automation systems with phased occupied construction.",
  },
  {
    name: "Lubbock ISD — New High School Campus",
    sector: "K-12 Government",
    sf: "120,000 SF",
    description:
      "Fundamental commissioning per IECC requirements including split systems, VAV air handlers, lighting controls, and energy management.",
  },
  {
    name: "Regional Tier III Data Center",
    sector: "Data Centers",
    sf: "60,000 SF",
    description:
      "Mission-critical commissioning including redundancy verification, generator transfer testing, precision cooling, and environmental monitoring.",
  },
  {
    name: "Federal Aviation Administration — Regional Facility",
    sector: "Aviation",
    sf: "85,000 SF",
    description:
      "Owner's representative services and enhanced commissioning for a secure federal facility with specialized power and communications infrastructure.",
  },
  {
    name: "West Texas Hotel & Conference Center",
    sector: "Hospitality",
    sf: "150,000 SF",
    description:
      "Continuous Commissioning® implementation for an existing hospitality facility achieving 18% energy reduction in year one.",
  },
  {
    name: "Multi-Tenant Office Complex — Continuous Commissioning®",
    sector: "Commercial",
    sf: "200,000 SF",
    description:
      "Existing building optimization through the Texas A&M ESL CC® process. Identified and resolved 47 operational deficiencies.",
  },
];

const sectors = [
  "All",
  "Aviation",
  "Commercial",
  "Higher Education",
  "K-12 Government",
  "Healthcare",
  "Hospitality",
  "Technology",
  "Data Centers",
];

const sectorGradients: Record<string, string> = {
  Aviation: "linear-gradient(135deg, rgba(74, 144, 217, 0.2), #08081a)",
  Commercial: "linear-gradient(135deg, rgba(74, 144, 217, 0.1), #08081a)",
  "Higher Education": "linear-gradient(135deg, rgba(74, 144, 217, 0.15), #08081a)",
  "K-12 Government": "linear-gradient(135deg, rgba(74, 144, 217, 0.1), #08081a)",
  Healthcare: "linear-gradient(135deg, rgba(74, 144, 217, 0.12), #08081a)",
  Hospitality: "linear-gradient(135deg, rgba(74, 144, 217, 0.08), #08081a)",
  Technology: "linear-gradient(135deg, rgba(74, 144, 217, 0.18), #08081a)",
  "Data Centers": "linear-gradient(135deg, rgba(74, 144, 217, 0.25), #08081a)",
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.sector === activeFilter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#08081a] pb-20">
        {/* Hero */}
        <section className="pt-36 pb-10 overflow-hidden">
          <div className="mx-auto max-w-5xl px-6">
            <AnimatedSection>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[1px] w-12 bg-[#4a90d9]" />
                <span className="text-[#4a90d9] uppercase tracking-[0.3em] text-xs font-sans">Portfolio</span>
              </div>
              <h1 className="text-5xl md:text-7xl text-white font-serif mb-8">
                Select Works
              </h1>
              <p className="max-w-2xl text-lg font-sans font-light leading-relaxed text-[#7a7a9e]">
                A representative selection of building commissioning projects
                demonstrating our technical depth across industries.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 py-8">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-sans font-bold transition-all duration-300 cursor-pointer ${
                  activeFilter === sector
                    ? "bg-[#4a90d9] text-white"
                    : "border border-white/10 text-[#7a7a9e] hover:text-white hover:border-[#4a90d9] bg-[#141428]/50"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#141428] border border-white/5 group flex flex-col h-full overflow-hidden hover:-translate-y-2 hover:border-[#4a90d9]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Area */}
                <div className="aspect-[16/10] relative overflow-hidden bg-[#0d0d1a]">
                  <div
                    className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                    style={{ background: sectorGradients[project.sector] || "linear-gradient(135deg, rgba(74,144,217,0.05), #08081a)" }}
                  />

                  {/* Diagonal lines grid overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(45deg, rgba(74, 144, 217, 0.3) 0, rgba(74, 144, 217, 0.3) 1px, transparent 0, transparent 50%)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center p-8 opacity-15 group-hover:opacity-30 transition-opacity duration-700">
                    <span className="text-white text-9xl font-bold italic font-serif">
                      {project.sf.split(" ")[0]}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-xs tracking-widest text-[#4a90d9] uppercase font-sans font-bold">
                      {project.sector}
                    </span>
                    <span className="text-white/20 text-[10px] tracking-widest font-bold font-sans">TIMSHEL</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4 text-xs font-sans text-[#7a7a9e]">
                    <span className="tracking-widest text-[#4a90d9] uppercase font-bold">{project.sector}</span>
                    <span className="text-white/20">&bull;</span>
                    <span>{project.sf}</span>
                  </div>

                  <h3 className="text-2xl text-white font-serif mb-6 group-hover:text-[#4a90d9] transition-colors duration-300 leading-tight flex-grow">
                    {project.name}
                  </h3>

                  <p className="text-sm font-sans font-light leading-relaxed text-[#7a7a9e] line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#7a7a9e] group-hover:text-white transition-colors duration-300 font-sans relative">
                      View Case Study
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#4a90d9] group-hover:w-full transition-all duration-300" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
