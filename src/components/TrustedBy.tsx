"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const partners: { name: string; logo: string; invert?: boolean; bigger?: boolean; biggest?: boolean }[] = [
  {
    name: "Texas Tech University",
    logo: "/logo-texas-tech.png",
    bigger: true,
  },
  {
    name: "UMC Health System",
    logo: "/logo-umc.png",
  },
  {
    name: "Lubbock ISD",
    logo: "/logo-lubbock-isd.png",
    invert: true,
  },
  {
    name: "Federal Aviation Administration",
    logo: "/logo-faa.png",
    bigger: true,
  },
  {
    name: "Texas A&M ESL",
    logo: "/logo-tamu-seal.png",
    bigger: true,
  },
  {
    name: "City of Lubbock",
    logo: "/logo-city-lubbock.png",
  },
];

export default function TrustedBy() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <AnimatedSection>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-[#4a90d9]" />
            <h2 className="text-xs uppercase font-semibold tracking-[0.3em] text-[#7a7a9e]">
              Valued Partnerships
            </h2>
            <div className="h-[1px] w-12 bg-[#4a90d9]" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.08}>
              <div className="group flex items-center justify-center border transition-all duration-500 p-6 h-28 md:h-32 bg-white/90 border-white/20 hover:bg-white hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-sm">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={70}
                  className={`w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-500 ${
                    partner.invert ? "brightness-0" : ""
                  } ${partner.biggest ? "max-h-28" : partner.bigger ? "max-h-24" : "max-h-16"}`}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
