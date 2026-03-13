"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 70;
const FRAME_PATH = (i: number) =>
  `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

export default function BuildingExploder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);
  const rafRef = useRef<number>(0);

  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) setAllLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) setAllLoaded(true);
      };
      images.push(img);
    }
    framesRef.current = images;
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = framesRef.current[frameIndex];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = cw / ch;

    let sx = 0,
      sy = 0,
      sw = img.naturalWidth,
      sh = img.naturalHeight;
    if (imgAspect > canvasAspect) {
      sw = img.naturalHeight * canvasAspect;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = img.naturalWidth / canvasAspect;
      sy = (img.naturalHeight - sh) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    if (lastFrameRef.current >= 0) {
      drawFrame(lastFrameRef.current);
    }
  }, [drawFrame]);

  // Scroll-driven frame animation
  useEffect(() => {
    if (!allLoaded) return;
    resizeCanvas();

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportH = window.innerHeight;

        // Progress: 0 when section top enters viewport bottom, 1 when section bottom exits viewport top
        const scrollRange = sectionHeight + viewportH;
        const scrolled = viewportH - rect.top;
        let progress = scrolled / scrollRange;
        progress = Math.max(0, Math.min(1, progress));

        const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));

        if (frameIndex !== lastFrameRef.current) {
          lastFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [allLoaded, drawFrame, resizeCanvas]);

  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          {/* Canvas side */}
          <div className="relative w-full overflow-hidden rounded-lg border border-white/5 bg-[#0a0a18] md:min-h-[500px] lg:min-h-[600px]"
               style={{ aspectRatio: "16 / 10" }}>
            {!allLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-3">
                <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4a90d9] rounded-full transition-all duration-300"
                    style={{ width: `${loadPercent}%` }}
                  />
                </div>
                <span className="text-xs text-[#7a7a9e] tracking-widest uppercase">
                  Loading {loadPercent}%
                </span>
              </div>
            )}
            <canvas
              ref={canvasRef}
              className="w-full h-full block"
              style={{ opacity: allLoaded ? 1 : 0 }}
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#4a90d9] font-medium">
              Commissioning Process
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              See What We See
            </h2>
            <p className="text-[#9999b3] text-base md:text-lg leading-relaxed max-w-md">
              Our commissioning process reveals every hidden system
              behind a building&apos;s walls. From HVAC ductwork and electrical
              routing to plumbing risers and fire protection — we verify
              that each component performs exactly as designed.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a90d9]" />
                <span className="text-sm text-[#c8c8d8]">
                  Mechanical system verification
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a90d9]" />
                <span className="text-sm text-[#c8c8d8]">
                  Electrical &amp; controls testing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a90d9]" />
                <span className="text-sm text-[#c8c8d8]">
                  Envelope &amp; energy performance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a90d9]" />
                <span className="text-sm text-[#c8c8d8]">
                  Life safety system validation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
