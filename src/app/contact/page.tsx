import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact | Timshel Global — Get in Touch",
  description:
    "Contact Timshel Global Services for building commissioning, owner's representative services, and energy code compliance. Based in Lubbock, Texas. (806) 433-8115.",
  alternates: { canonical: "https://timshelglobal.com/contact" },
};

export default function ContactPage() {
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
                <span className="text-[#4a90d9] uppercase tracking-[0.3em] text-xs font-sans">Inquiries</span>
              </div>
              <h1 className="text-5xl md:text-7xl text-white font-serif mb-8">
                Get in Touch
              </h1>
              <p className="max-w-2xl text-lg font-sans font-light leading-relaxed text-[#7a7a9e]">
                Ready to optimize your building&apos;s performance? We typically
                respond to all project inquiries within 24 hours.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Two-Column Layout: left = info, right = form */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-[1px] w-12 bg-[#4a90d9]" />
                <span className="text-[#4a90d9] uppercase tracking-[0.3em] text-xs font-sans">Contact</span>
              </div>
              <h2 className="text-3xl text-white font-serif mb-8">
                Timshel Global<br />Services LLC
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#08081a] border border-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#7a7a9e] font-sans mb-2">Headquarters</p>
                    <p className="text-base font-sans font-light leading-relaxed text-white/80">
                      13813 Quinton Ave<br />
                      Lubbock, TX 79424
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#08081a] border border-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#7a7a9e] font-sans mb-2">Direct Line</p>
                    <a
                      href="tel:+18064338115"
                      className="text-xl font-sans font-light text-white/80 hover:text-[#4a90d9] transition-colors duration-300"
                    >
                      (806) 433-8115
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#08081a] border border-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#7a7a9e] font-sans mb-2">Email</p>
                    <a
                      href="mailto:david@timshelglobal.com"
                      className="text-base font-sans font-light text-white/80 hover:text-[#4a90d9] transition-colors duration-300"
                    >
                      david@timshelglobal.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#4a90d9]/30" />
                <span className="text-[10px] uppercase tracking-widest text-[#7a7a9e] font-sans">Licensed in Texas</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.4}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
