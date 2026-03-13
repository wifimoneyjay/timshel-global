import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Services | Timshel Global — Building Commissioning & Owner's Representative",
  description:
    "Comprehensive building commissioning services including new construction Cx, Continuous Commissioning®, owner's representative, data center Cx, building envelope Cx, and energy code compliance.",
  alternates: { canonical: "https://timshelglobal.com/services" },
};

const services = [
  {
    number: "01",
    name: "New Construction Commissioning",
    description: [
      "New construction commissioning ensures that all building systems are designed, installed, tested, and capable of operating as intended. As your commissioning authority, we engage early in the design phase and remain involved through construction, functional testing, and post-occupancy.",
      "Our process follows ASHRAE Guideline 0 and Guideline 1.1, providing systematic verification that every system meets the Owner's Project Requirements (OPR). From initial design review through seasonal testing, we document every finding and resolution.",
    ],
    deliverables: [
      "Commissioning Plan",
      "OPR Documentation",
      "Basis of Design Review",
      "Pre-Functional Checklists",
      "Functional Performance Tests",
      "Issues Log & Resolution Tracking",
      "Final Commissioning Report",
      "Systems Manual",
    ],
    sectors: ["All sectors"],
    standards: ["ASHRAE Guideline 0", "ASHRAE Guideline 1.1", "LEED Enhanced Cx Credit", "IECC"],
  },
  {
    number: "02",
    name: "Continuous Commissioning®",
    badge: "Texas A&M ESL Licensed",
    description: [
      "Continuous Commissioning® (CC®) is an ongoing process developed by the Texas A&M Energy Systems Laboratory to optimize the operation of existing buildings. Unlike traditional commissioning, CC® goes beyond verifying original design intent — it optimizes building operations for current conditions and occupancy.",
      "As a licensed CC® provider through the Texas A&M ESL, we implement the full CC® process: benchmarking current performance, identifying optimization opportunities, implementing low-cost and no-cost improvements, and verifying sustained savings over time. Typical CC® projects achieve 10-30% energy savings within the first year.",
    ],
    deliverables: [
      "Energy Baseline Assessment",
      "CC® Implementation Plan",
      "Operational Optimization",
      "Energy Savings Verification",
      "Ongoing Monitoring & Reporting",
      "Sustained Performance Documentation",
    ],
    sectors: ["Higher Education", "Healthcare", "Commercial", "Government"],
    standards: ["Texas A&M ESL CC® Protocol"],
  },
  {
    number: "03",
    name: "Owner's Representative Services",
    description: [
      "As your Owner's Representative, we serve as your independent advocate through every phase of design and construction. We protect your interests by providing expert technical oversight, reviewing contractor submittals, attending progress meetings, and ensuring the project stays aligned with your goals.",
      "Our role is not to replace your design team or construction manager — it's to provide an independent set of eyes with the technical expertise to catch issues before they become expensive problems.",
    ],
    deliverables: [
      "Design Review & Recommendations",
      "Construction Observation Reports",
      "Submittal Review",
      "Progress Meeting Representation",
      "Change Order Review",
      "Substantial Completion Verification",
      "Punch List Management",
    ],
    sectors: ["All sectors"],
    standards: [],
  },
  {
    number: "04",
    name: "Data Center Commissioning",
    description: [
      "Data center commissioning requires a specialized approach that accounts for the mission-critical nature of these facilities. Downtime in a data center is measured in dollars per minute, which means every system must perform flawlessly from day one.",
      "We verify Tier-level compliance, test redundancy systems under real-world failure scenarios, and validate that cooling, power, and monitoring systems meet the exacting standards required for continuous operation.",
    ],
    deliverables: [
      "Tier Certification Documentation",
      "Integrated Systems Testing",
      "Redundancy & Failover Verification",
      "Power Chain Testing",
      "Precision Cooling Validation",
      "Environmental Monitoring Verification",
      "Load Bank Testing",
      "Emergency Generator Transfer Testing",
    ],
    sectors: ["Technology", "Data Centers"],
    standards: ["Uptime Institute Tier Standards", "ASHRAE TC 9.9"],
  },
  {
    number: "05",
    name: "Building Envelope Commissioning",
    description: [
      "The building envelope is your facility's first line of defense against the elements. Envelope commissioning verifies that the roof, walls, windows, and air barriers perform as designed — preventing moisture intrusion, thermal bridging, and air leakage that can compromise both building performance and occupant comfort.",
      "We review envelope design details, observe critical installation phases, and perform field testing to verify performance. This proactive approach catches construction defects before they become warranty claims.",
    ],
    deliverables: [
      "Envelope Design Review",
      "Installation Observation Reports",
      "Air Barrier Testing",
      "Water Penetration Testing",
      "Thermal Performance Verification",
      "Moisture Management Assessment",
      "Commissioning Report",
    ],
    sectors: ["All sectors"],
    standards: ["ASTM E2813", "ASHRAE 90.1"],
  },
  {
    number: "06",
    name: "Energy Code Compliance",
    description: [
      "Navigating Texas energy codes can be complex, especially as requirements evolve with each new edition of the IECC and updates to ASHRAE 90.1. We provide comprehensive energy code analysis, documentation, and verification to ensure your project meets all applicable requirements.",
      "Our involvement starts in design to verify compliance pathways and continues through construction to document installed conditions. We provide the third-party verification required by many jurisdictions.",
    ],
    deliverables: [
      "Energy Code Analysis",
      "Compliance Pathway Documentation",
      "COMcheck/REScheck Modeling",
      "Construction Verification",
      "Insulation Inspection Reports",
      "Mechanical Efficiency Documentation",
      "Lighting Power Density Verification",
    ],
    sectors: ["All sectors"],
    standards: ["IECC 2021", "ASHRAE 90.1-2019", "Texas Health & Safety Code Chapter 388"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#08081a] pt-36 pb-10 overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-12 bg-[#4a90d9]" />
              <span className="text-[#4a90d9] uppercase tracking-[0.3em] text-xs font-sans">Our Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-serif mb-8">
              Professional Services
            </h1>
            <p className="max-w-2xl text-lg font-sans font-light leading-relaxed text-[#7a7a9e]">
              Comprehensive commissioning and owner&apos;s representative services
              engineered to ensure the integrity of your building&apos;s systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <div className="bg-[#08081a] pb-20">
        {services.map((service) => (
          <section
            key={service.number}
            className="bg-[#08081a] border-t border-white/5"
          >
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-22">
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Left: Number & Header */}
                  <div className="lg:col-span-4">
                    <div className="flex flex-col gap-6">
                      <span className="text-8xl font-serif font-bold text-[#4a90d9]/10">
                        {service.number}
                      </span>
                      <h2 className="text-3xl md:text-4xl text-white font-serif leading-tight">
                        {service.name}
                      </h2>
                      {service.badge && (
                        <span className="w-fit border border-[#4a90d9]/30 bg-[#4a90d9]/5 px-4 py-1 text-[10px] uppercase tracking-widest font-bold text-[#4a90d9] font-sans">
                          {service.badge}
                        </span>
                      )}
                      <div className="h-[1px] w-12 bg-[#4a90d9]" />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-8">
                    <div className="space-y-6">
                      {/* Description */}
                      <div className="space-y-4">
                        {service.description.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-base font-sans font-light leading-relaxed text-[#7a7a9e]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Deliverables */}
                      <div className="pt-6 border-t border-white/5">
                        <h3 className="mb-6 text-xs font-sans font-bold uppercase tracking-widest text-white/60">
                          Core Deliverables
                        </h3>
                        <ul className="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-3 text-sm font-sans font-light text-[#7a7a9e]"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#4a90d9] flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer Info */}
                      <div className="pt-6 flex flex-wrap items-center gap-6">
                        {/* Sectors */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-[#7a7a9e] font-sans">
                            Sectors
                          </span>
                          {service.sectors.map((sector) => (
                            <span
                              key={sector}
                              className="rounded-full border border-white/10 bg-[#141428]/50 px-4 py-1 text-xs text-[#7a7a9e] font-sans"
                            >
                              {sector}
                            </span>
                          ))}
                        </div>

                        {/* Standards */}
                        {service.standards.length > 0 && (
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-[#7a7a9e] font-sans">
                              Standards
                            </span>
                            <span className="text-xs text-[#7a7a9e] font-sans">
                              {service.standards.join(" / ")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
}
