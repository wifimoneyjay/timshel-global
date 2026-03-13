"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_KEY");
    formData.append("subject", "New Lead — Timshel Global Website");
    formData.append("from_name", "Timshel Global Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#08081a] border border-white/5 p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
      >
        <div className="w-16 h-16 bg-[#4a90d9]/10 flex items-center justify-center mb-8 border border-[#4a90d9]/30 rounded-full">
          <svg className="w-8 h-8 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-4xl text-white font-serif mb-4">
          Thank You
        </h3>
        <p className="text-base font-sans font-light text-[#7a7a9e] max-w-sm mx-auto leading-relaxed">
          Your inquiry has been received. We will be in touch within 24 hours to discuss your project.
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full bg-[#141428] border border-white/10 px-4 py-3 text-white placeholder-[#4a4a62] focus:border-[#4a90d9] focus:outline-none transition-all duration-300 font-sans font-light text-sm";

  const labelClasses = "text-xs tracking-widest text-[#7a7a9e] uppercase font-sans block mb-2";

  return (
    <div className="bg-[#08081a] border border-white/5 relative overflow-hidden">
      {/* Blue gradient line at top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#4a90d9] via-[#4a90d9]/50 to-transparent" />

      <div className="p-10 md:p-14">
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <h2 className="text-white text-3xl font-serif mb-4">
              Start a Conversation
            </h2>
            <p className="text-[#7a7a9e] text-sm font-sans font-light">Fields marked with * are required.</p>
          </div>

          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelClasses}>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Row 2: Phone + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelClasses}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Company</label>
              <input
                type="text"
                name="company"
                placeholder="Enter company name"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Row 3: Project Type + Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelClasses}>Project Type</label>
              <select
                name="projectType"
                className={`${inputClasses} appearance-none cursor-pointer`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237a7a9e' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select type
                </option>
                <option value="new-construction-cx">New Construction Cx</option>
                <option value="existing-building-cx">Existing Building Cx</option>
                <option value="owners-representative">
                  Owner&apos;s Representative
                </option>
                <option value="data-center-cx">Data Center Cx</option>
                <option value="building-envelope-cx">Building Envelope Cx</option>
                <option value="energy-code-compliance">
                  Energy Code Compliance
                </option>
                <option value="assessment">Assessment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className={labelClasses}>Estimated Size</label>
              <select
                name="projectSize"
                className={`${inputClasses} appearance-none cursor-pointer`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237a7a9e' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select SF range
                </option>
                <option value="under-50k">Under 50K SF</option>
                <option value="50k-100k">50K-100K SF</option>
                <option value="100k-500k">100K-500K SF</option>
                <option value="500k-plus">500K+ SF</option>
              </select>
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="mb-10">
            <label className={labelClasses}>Project Description *</label>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              required
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-400 text-sm mb-6">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#4a90d9] hover:bg-[#3a7bc2] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 text-sm tracking-widest uppercase font-sans transition-all duration-300 cursor-pointer"
          >
            {submitting ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
