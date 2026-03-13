"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const TOTAL_FRAMES = 70;
const FRAME_PATH = (i: number) =>
  `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

export default function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);
  const rafRef = useRef<number>(0);

  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;
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
  }, [mounted, isMobile]);

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

    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
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
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    if (lastFrameRef.current >= 0) {
      drawFrame(lastFrameRef.current);
    }
  }, [drawFrame]);

  useEffect(() => {
    if (!mounted || isMobile || !allLoaded) return;
    resizeCanvas();

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const rect = container.getBoundingClientRect();
        const containerTop = -rect.top;
        const scrollRange = container.offsetHeight - window.innerHeight;

        let progress = containerTop / scrollRange;
        progress = Math.max(0, Math.min(1, progress));

        const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
        const scale = 1.0 + progress * 0.15; // Subtle scale
        canvas.style.transform = `scale(${scale})`;
        canvas.style.transformOrigin = "center center";

        const textOverlay = document.getElementById("hero-text-overlay");
        if (textOverlay) {
          textOverlay.style.opacity = String(Math.max(0, 1 - progress * 2.5));
          textOverlay.style.transform = `translateY(${-progress * 100}px)`;
        }

        const gradOverlay = document.getElementById("hero-gradient-overlay");
        if (gradOverlay) {
          gradOverlay.style.opacity = String(1 - progress);
        }

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
  }, [mounted, isMobile, allLoaded, drawFrame, resizeCanvas]);

  const HeroContent = () => (
    <div className="flex flex-col items-center justify-center z-10 px-6 max-w-6xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h1
          className="text-white mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            letterSpacing: "0.3em",
            lineHeight: 1,
            fontWeight: 500,
          }}
        >
          TIMSHEL<br />GLOBAL
        </h1>
        
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-[1px] w-12 bg-accent-copper/40" />
          <p
            className="uppercase tracking-[0.4em] text-[10px] md:text-[12px] font-medium text-accent-blue"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Engineering Excellence
          </p>
          <div className="h-[1px] w-12 bg-accent-copper/40" />
        </div>

        <p
          className="text-center text-[#c8c8d8] max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Independent building commissioning and owner&apos;s representative services. 
          Verifying performance, ensuring integrity, and protecting your interests 
          through every phase of construction.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#6a6a82] font-medium">
          <span>Lubbock, Texas</span>
          <span className="hidden md:inline text-accent-copper opacity-40">&bull;</span>
          <span>16 Years Experience</span>
          <span className="hidden md:inline text-accent-copper opacity-40">&bull;</span>
          <span>400+ Projects</span>
        </div>
      </motion.div>
    </div>
  );

  if (!mounted) {
    return (
      <div className="relative w-full h-[100vh] bg-[#0a0a14] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/frames/frame_0001.jpg')] bg-cover bg-center opacity-30" />
        <HeroContent />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${FRAME_PATH(1)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "kenBurns 30s ease-in-out infinite alternate",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0a0a14 0%, transparent 50%, #0a0a14 100%)",
          }}
        />
        <HeroContent />
        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-pulse">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#6a6a82]">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent-blue/60 to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "300vh" }}>
      {/* Loading indicator */}
      {!allLoaded && (
        <div className="fixed top-0 left-0 z-[60] w-full h-1 bg-[#0a0a14]">
          <div
            style={{
              width: `${(loadedCount / TOTAL_FRAMES) * 100}%`,
              height: "100%",
              backgroundColor: "#d4845a",
              transition: "width 0.3s ease-out",
            }}
          />
        </div>
      )}

      {/* Sticky viewport */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden bg-[#0a0a14]">
        <div className="absolute inset-0 opacity-40">
           <canvas
             ref={canvasRef}
             style={{ width: "100%", height: "100vh", display: "block" }}
           />
        </div>

        {/* Overlays */}
        <div
          id="hero-gradient-overlay"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 0%, rgba(10,10,20,0.8) 100%), linear-gradient(to top, #0a0a14 0%, transparent 40%, #0a0a14 100%)",
          }}
        />

        {/* Text overlay */}
        <div
          id="hero-text-overlay"
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <HeroContent />

          {/* Scroll indicator */}
          <div
            className="absolute bottom-12 flex flex-col items-center gap-3"
            style={{ animation: "pulse-soft 2.5s ease-in-out infinite" }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#6a6a82]">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-accent-copper/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
