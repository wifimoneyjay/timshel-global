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
    name: "Jones Stadium South Endzone & Womble Football Complex — Texas Tech",
    sector: "Higher Education",
    sf: "300,000 SF · $210M",
    description:
      "Commissioning services for the Jones Stadium South Endzone and Womble Football Complex. 300,000+ SF including the Scovell Family Locker Room, expanded strength and conditioning weight room, and multi-purpose walkthrough room. Completed October 2024.",
  },
  {
    name: "Academic Science Building — Texas Tech University",
    sector: "Higher Education",
    sf: "131,000 GSF · $92M",
    description:
      "New construction commissioning for a three-story research facility with basement, including labs for Geosciences, Physics, Chemistry, Biology and Psychological Sciences. BSL 2 and BSL 3 laboratory and classroom space. Completed July 2024.",
  },
  {
    name: "Texas Tech School of Veterinary Medicine — Amarillo",
    sector: "Higher Education",
    sf: "$94M",
    description:
      "Commissioning Representative (CxR) and MEP coordination support for the construction of Texas Tech School of Veterinary Medicine. Coordinated machinal, electrical, and data services between multiple TTU organizations. Completed 2021.",
  },
  {
    name: "Summit Center Development — Midland, TX",
    sector: "Commercial",
    sf: "20 Acres · $90M",
    description:
      "Commissioning for the headquarters and shell spaces of the $90 million Summit Center. The development spans 20 acres with office space, retail shops, and restaurants. Tenants moving in summer 2024.",
  },
  {
    name: "Angelo State University — Central Plant Upgrade",
    sector: "Higher Education",
    sf: "17 Buildings · $34M",
    description:
      "Owner's Representative for campus-wide upgrade of central heating and cooling plant, piping, and distribution throughout the San Angelo campus. Controls upgraded on 17 buildings. Est. completion November 2025.",
  },
  {
    name: "Arnold Wing — Texas Tech Museum",
    sector: "Higher Education",
    sf: "$12M",
    description:
      "Commissioning Agent for a new 3-level addition to the Texas Tech Museum. Integration of newly added mechanical and electrical systems while keeping all existing HVAC operational. Sound quality critical for gallery spaces. Completed 2023.",
  },
  {
    name: "West Texas A&M University — Admin & Classroom Renovation",
    sector: "Higher Education",
    sf: "$36.5M",
    description:
      "Complete renovation of an existing building for administrative and classroom space in downtown Amarillo. Major mechanical systems prefabricated in a self-contained mechanical room installed on the roof. Completed 2018.",
  },
  {
    name: "UMC Health & Wellness Center — Lubbock",
    sector: "Healthcare",
    sf: "$15M+",
    description:
      "Commissioning Agent for new stand-alone UMC Health and Wellness center. Commissioned newly installed equipment and retro-commissioned existing systems including medical gas, compressed air, boiler and chiller systems, AHUs, BAS, and terminal units.",
  },
  {
    name: "U.S. Consulate — Karachi, Pakistan",
    sector: "International",
    sf: "3 Buildings",
    description:
      "Commissioning Authority (CxA) and Reliability Centered Maintenance (RCM) support for Phase II Housing and Support Facilities including Consulate General Residence, Marine Security Guard Quarters, and Staff Housing Building.",
  },
  {
    name: "U.S. Embassy — Skopje, Macedonia",
    sector: "International",
    sf: "6 Buildings",
    description:
      "CxA and RCM support for a New Embassy Compound including New Office Building, Utilities Building, General Services Office, Service Compound Access Control, and Marine Security Guard Quarters.",
  },
  {
    name: "Dumas ISD — Multiple Schools",
    sector: "K-12 Government",
    sf: "$97M Total",
    description:
      "Commissioning agent services for four projects: Dumas North Elementary ($32M, 2023), Dumas South Elementary ($34.3M, 2024), Cactus Elementary ($22.8M, 2024), and Dumas CATE Center ($8M, est. 2025).",
  },
  {
    name: "Lubbock High School — Central Plant Upgrades",
    sector: "K-12 Government",
    sf: "$7M",
    description:
      "Retro-commissioning of central plant upgrades for Lubbock ISD. Also retained as ongoing commissioning consultant. Completed July 2024.",
  },
  {
    name: "New Office Annex — U.S. Embassy, Kabul, Afghanistan",
    sector: "International",
    sf: "ECCI",
    description:
      "Commissioning Representative (CxR) and Reliability Centered Maintenance (RCM) support for the design/build of a New Office Annex and Housing as well as all support facilities.",
  },
  {
    name: "U.S. Embassy — Surabaya, Indonesia",
    sector: "International",
    sf: "3 Buildings",
    description:
      "Commissioning Authority (CxA) and RCM support for a New Consular Compound including New Office Building, Utilities Building, and Service Compound Access Control.",
  },
];

const sectors = [
  "All",
  "Higher Education",
  "International",
  "Healthcare",
  "Commercial",
  "K-12 Government",
];

const sectorGradients: Record<string, string> = {
  "Higher Education": "linear-gradient(135deg, rgba(74, 144, 217, 0.15), #08081a)",
  International: "linear-gradient(135deg, rgba(74, 144, 217, 0.2), #08081a)",
  Healthcare: "linear-gradient(135deg, rgba(74, 144, 217, 0.12), #08081a)",
  Commercial: "linear-gradient(135deg, rgba(74, 144, 217, 0.1), #08081a)",
  "K-12 Government": "linear-gradient(135deg, rgba(74, 144, 217, 0.1), #08081a)",
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
