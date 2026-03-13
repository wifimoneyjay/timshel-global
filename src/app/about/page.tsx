import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "About | Timshel Global — David Sublett, PE",
  description:
    "Learn about Timshel Global Services and founder David Sublett, PE. 16 years of building commissioning experience, Texas A&M trained, 400+ projects completed across Texas.",
  alternates: { canonical: "https://timshelglobal.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#08081a] pt-36 pb-10 overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-12 bg-[#4a90d9]" />
              <span className="text-[#4a90d9] uppercase tracking-[0.3em] text-xs font-sans">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-serif mb-8">
              Legacy of Integrity
            </h1>
            <p className="max-w-2xl text-lg font-sans font-light leading-relaxed text-[#7a7a9e]">
              Engineering excellence, independently applied since 2010.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#08081a] pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-[1px] w-12 bg-[#4a90d9]" />
                  <span className="text-[#4a90d9] uppercase tracking-[0.3em] text-xs font-sans">Foundation</span>
                </div>
                <h2 className="text-4xl text-white font-serif leading-tight">
                  Founded on<br />Independence.
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-lg font-sans font-light leading-relaxed text-[#7a7a9e]">
                  Timshel Global Services was founded in 2010 by David Sublett, PE,
                  with a clear vision: provide building owners with truly independent
                  commissioning and oversight services.
                </p>
                <p className="text-base font-sans font-light leading-relaxed text-[#7a7a9e]">
                  Based in Lubbock, Texas, Timshel Global has completed over 400
                  projects across seven sectors — from university research
                  laboratories and hospital expansions to data centers and federal
                  aviation facilities. Our focus has never wavered: systematic,
                  data-driven verification of building systems. We don&apos;t design
                  buildings. We don&apos;t build them. We verify that they perform as
                  promised.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* David Sublett */}
      <section className="bg-[#08081a] py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo — offset frame design */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5]">
                  <div className="absolute inset-0 border border-[#4a90d9]/30 translate-x-4 translate-y-4" />
                  <div className="absolute inset-0 bg-[#141428] border border-white/10 overflow-hidden">
                    <img
                      src="/david-headshot.jpg"
                      alt="David Sublett, PE — Founder of Timshel Global Services"
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-7">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-[1px] w-12 bg-[#4a90d9]" />
                  <span className="text-[#4a90d9] uppercase tracking-[0.3em] text-xs font-sans">Leadership</span>
                </div>
                <h2 className="text-5xl text-white font-serif mb-2">
                  David Sublett, PE
                </h2>
                <p className="mb-8 text-xs uppercase tracking-widest font-sans font-medium text-[#4a90d9]">
                  Founder &amp; Principal Engineer
                </p>

                <div className="space-y-6">
                  <p className="text-lg font-sans font-light leading-relaxed text-[#7a7a9e]">
                    David holds a BS in Mechanical Engineering from
                    Texas A&amp;M University and trained under the Energy Systems Laboratory&apos;s
                    Continuous Commissioning&reg; program — one of the most rigorous
                    methodologies in the industry.
                  </p>
                  <p className="text-base font-sans font-light leading-relaxed text-[#7a7a9e]">
                    Before founding Timshel Global, David served as a Design
                    Engineer at Brown Consulting Engineers and progressed to Director
                    of International Operations at EMR. These roles gave him extensive
                    experience across mechanical systems design, project management,
                    and international facility operations.
                  </p>
                  <p className="text-base font-sans font-light leading-relaxed text-[#7a7a9e]">
                    As a licensed Professional Engineer in the State of Texas, David
                    brings 16 years of commissioning leadership to every project.
                    His hands-on approach and deep technical expertise have earned
                    the trust of institutions like Texas Tech University and UMC
                    Health System.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-white text-2xl font-bold font-serif">16+</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#7a7a9e]">Years Cx</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-white text-2xl font-bold font-serif">400+</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#7a7a9e]">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timshel Meaning */}
      <section className="bg-[#08081a] py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl italic text-white font-serif mb-8">
              The Meaning of Timshel
            </h2>
            <p className="mx-auto max-w-3xl text-xl italic font-sans font-light leading-relaxed text-[#7a7a9e]">
              &ldquo;Timshel&rdquo; is a Hebrew word meaning &ldquo;thou
              mayest&rdquo; &mdash; representing the freedom and responsibility of
              choice. It reflects our belief that building owners deserve the power
              to choose excellence for their facilities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="bg-[#08081a] py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[1px] w-12 bg-[#4a90d9]" />
                <span className="text-[#4a90d9] uppercase tracking-[0.3em] text-xs font-sans">Qualifications</span>
              </div>
              <h2 className="text-4xl md:text-6xl text-white font-serif">
                Credentials
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { abbr: "PE", label: "Professional Engineer" },
                { abbr: "CC\u00AE", label: "Licensed Provider" },
                { abbr: "CxA", label: "Commissioning Authority" },
                { abbr: "LEED AP", label: "LEED Accredited Prof." },
              ].map((cert) => (
                <div
                  key={cert.abbr}
                  className="bg-[#141428] border border-white/5 group flex flex-col items-center justify-center p-12 text-center hover:-translate-y-2 hover:border-[#4a90d9]/30 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-4xl font-bold text-white mb-4 font-serif group-hover:text-[#4a90d9] transition-colors duration-300">
                    {cert.abbr}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-sans font-medium text-[#7a7a9e] group-hover:text-white transition-colors duration-300">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Texas A&M Partnership */}
      <section className="bg-[#08081a] pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="bg-[#141428] border border-white/5 p-12 md:p-20 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
                <h2 className="text-3xl md:text-4xl text-white font-serif max-w-md leading-tight">
                  Continuous Commissioning&reg; Partnership
                </h2>
                <span className="border border-[#4a90d9]/30 bg-[#4a90d9]/5 px-6 py-2 text-[10px] uppercase tracking-widest font-bold text-[#4a90d9] font-sans">
                  Texas A&amp;M ESL Licensed
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                  <p className="text-lg font-sans font-light leading-relaxed text-[#7a7a9e]">
                    David Sublett trained directly under the Texas A&amp;M Energy
                    Systems Laboratory&apos;s Continuous Commissioning&reg; program,
                    and Timshel Global Services maintains an active license as a CC&reg;
                    provider.
                  </p>
                  <p className="mt-8 text-base font-sans font-light leading-relaxed text-[#7a7a9e]">
                    This license authorizes Timshel Global to deliver the
                    full CC&reg; process — from performance benchmarking and operational
                    optimization to sustained savings verification — using the
                    methodology developed and refined by Texas A&amp;M over decades of
                    applied research in building performance.
                  </p>
                </div>
                <div className="lg:col-span-4 flex items-center justify-center">
                  <div className="w-32 h-32 border border-[#4a90d9]/20 flex items-center justify-center rotate-45 group hover:border-[#4a90d9] transition-colors duration-500">
                    <span className="text-[#4a90d9] font-bold text-xl -rotate-45 font-serif">TAMU</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
