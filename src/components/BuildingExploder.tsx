"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function BuildingExploder() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [playRequested, setPlayRequested] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const shouldPlay = playRequested ?? reduceMotion === false;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let isVisible = false;
    const updatePlayback = () => {
      if (isVisible && !document.hidden && shouldPlay && !hasError) {
        // Autoplay may be blocked; the play control remains available.
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0, rootMargin: "120px 0px" });
    observer.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [shouldPlay, hasError]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      setPlayRequested(false);
      video.pause();
    } else {
      setPlayRequested(true);
      void video.play().catch(() => {});
    }
  };

  return (
    <section className="relative py-16 md:py-24" aria-labelledby="building-process-heading">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
        <div className="group relative w-full overflow-hidden rounded-lg border border-white/5 bg-[#0a0a18] aspect-video">
          <video
            id="building-process-animation"
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/building-loop-smooth.mp4"
            poster="/frames/frame_0001.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Building animation revealing mechanical, electrical, plumbing, and structural systems"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => setHasError(true)}
          />
          {!hasError && (
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause building animation" : "Play building animation"}
              title={isPlaying ? "Pause building animation" : "Play building animation"}
              aria-controls="building-process-animation"
              className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full text-white/70 opacity-60 transition-opacity hover:text-white hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a90d9] md:opacity-0 md:group-hover:opacity-100"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                {isPlaying ? (
                  <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
                ) : (
                  <path d="m8 5 11 7-11 7V5Z" />
                )}
              </svg>
            </button>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#4a90d9] font-medium">Commissioning Process</p>
          <h2 id="building-process-heading" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            See What We See
          </h2>
          <p className="text-[#9999b3] text-base md:text-lg leading-relaxed max-w-md">
            Our commissioning process reveals every hidden system
            behind a building&apos;s walls. From HVAC ductwork and electrical
            routing to plumbing risers and fire protection — we verify
            that each component performs exactly as designed.
          </p>
          <div className="flex flex-col gap-3 mt-2">
            {[
              "Mechanical system verification",
              "Electrical & controls testing",
              "Envelope & energy performance",
              "Life safety system validation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a90d9]" />
                <span className="text-sm text-[#c8c8d8]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
