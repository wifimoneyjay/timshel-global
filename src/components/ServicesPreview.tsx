"use client";

import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

const services = [
  {
    title: "New Construction Commissioning",
    description:
      "Fundamental and enhanced commissioning for new buildings. We verify every system performs as designed from day one.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Continuous Commissioning\u00AE",
    description:
      "Licensed through the Texas A&M Energy Systems Laboratory. Ongoing optimization of existing building systems for peak performance.",
    badge: "Texas A&M Licensed",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Owner\u2019s Representative Services",
    description:
      "Independent oversight protecting your interests through every phase of design and construction. Your advocate in the room.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040 12.02 12.02 0 00-3.022 9.48 12.001 12.001 0 0011.64 8.536 12.001 12.001 0 0011.64-8.536 12.02 12.02 0 00-3.022-9.48z" />
      </svg>
    ),
  },
  {
    title: "Data Center Commissioning",
    description:
      "Mission-critical facility validation. Tier-level verification and performance documentation for zero-downtime facilities.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Building Envelope Commissioning",
    description:
      "Thermal performance, moisture management, and air barrier verification. Protecting your building\u2019s first line of defense.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Energy Code Compliance",
    description:
      "Texas energy code analysis, documentation, and verification. Ensuring your project meets current IECC and ASHRAE standards.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <AnimatedSection>
        <div className="flex items-center space-x-4 mb-10">
          <div className="h-[1px] w-12 bg-[#4a90d9]" />
          <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white">
            Expertise &amp; Services
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <AnimatedSection key={service.title} delay={index * 0.1}>
            <Link href="/services" className="block group h-full">
              <div className="relative bg-[#141428]/80 backdrop-blur-sm border border-white/5 p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:bg-[#1a1a3a]/80 hover:border-[#4a90d9]/30 hover:shadow-[0_0_30px_rgba(74,144,217,0.1)]">
                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#4a90d9] to-transparent" />

                {/* Icon */}
                <div className="bg-[#08081a] w-12 h-12 rounded-full flex items-center justify-center border border-white/5 text-[#4a90d9] mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-serif text-white group-hover:text-[#4a90d9] transition-colors duration-300 mb-2">
                  {service.title}
                </h3>

                {service.badge && (
                  <span className="inline-block w-fit border border-[#4a90d9]/20 bg-[#4a90d9]/5 text-[#4a90d9] text-[9px] uppercase tracking-[0.2em] px-3 py-1 mb-4">
                    {service.badge}
                  </span>
                )}

                <p className="text-[#7a7a9e] text-sm font-light leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
