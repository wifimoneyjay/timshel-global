"use client";

import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    label: "Location",
    value: "Lubbock, Texas",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(806) 433-8115",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "david@timshelglobal.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section className="bg-[#141428] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left column - Info */}
          <AnimatedSection>
            <div className="flex flex-col justify-center h-full">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-[1px] w-12 bg-[#4a90d9]" />
                <span className="text-[#4a90d9] text-xs uppercase tracking-[0.3em] font-medium">
                  Get in Touch
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                Let&apos;s discuss your next project.
              </h2>

              <p className="text-[#7a7a9e] text-base font-light leading-relaxed mb-12 max-w-md">
                Whether you need commissioning for a new facility, ongoing
                optimization, or independent owner representation, we are ready
                to help ensure your building performs at its best.
              </p>

              <div className="flex flex-col gap-8">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#08081a] border border-white/5 flex items-center justify-center text-[#4a90d9] flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#7a7a9e] mb-1">
                        {detail.label}
                      </p>
                      <p className="text-white text-sm font-light">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right column - Form */}
          <AnimatedSection delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
