"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 16, suffix: "+", label: "Years of Experience" },
  { target: 400, suffix: "+", label: "Projects Completed" },
  { target: 25, suffix: "M+", label: "SF Commissioned" },
  { target: 6, suffix: "", label: "Sectors Served" },
];

function easeOutExpo(t: number): number {
  return 1 - Math.pow(2, -10 * t);
}

function AnimatedCounter({
  target,
  suffix,
  delay,
}: {
  target: number;
  suffix: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      const duration = 2500;
      const startTime = performance.now() + delay;

      function animate(now: number) {
        const elapsed = now - startTime;
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        setCount(Math.round(easedProgress * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }
  }, [isInView, target, delay]);

  return (
    <div ref={ref}>
      <span className="text-4xl md:text-5xl font-serif text-[#4a90d9]">
        {count}
        {suffix}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full py-14 md:py-20 bg-[#141428] border-y border-white/5 relative overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#4a90d9 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                delay={index * 150}
              />
              <span className="text-sm text-[#7a7a9e] uppercase tracking-wider mt-3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
