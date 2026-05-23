"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SystemSpecs() {
  const [fps, setFps] = useState(120);
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Simulated Real-Time FPS fluctuator to mimic a live WebGL performance monitor
    const interval = setInterval(() => {
      setFps(() => Math.floor(Math.random() * 4) + 117); // Oscillates realistically between 117-120
    }, 400);

    // 2. GSAP Line Stream Reveal
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".spec-line",
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl mx-auto my-16 p-6 md:p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden font-mono text-xs text-zinc-400 select-none"
    >
      {/* Background Tech Decorative Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none -z-10" />

      {/* Header Diagnostic Line */}
      <div className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-white font-bold uppercase tracking-wider">
            SYSTEM DIAGNOSTIC LOG // GEN_2026
          </span>
        </div>
        <div className="text-[10px] text-zinc-500">
          LOC_ID // PORTFOLIO_CORE
        </div>
      </div>

      {/* Main Blueprint Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* LEFT COMPONENT: The Data Matrix Readout (Takes 7 columns) */}
        <div className="md:col-span-7 space-y-3">
          <div className="spec-line flex justify-between border-b border-zinc-900 pb-1">
            <span className="text-zinc-600">01 // ANIMATION_CORE</span>
            <span className="text-white font-semibold">
              GSAP 3.12+ (ScrollTrigger Architecture)
            </span>
          </div>
          <div className="spec-line flex justify-between border-b border-zinc-900 pb-1">
            <span className="text-zinc-600">02 // SCROLL_INTERTIA</span>
            <span className="text-white font-semibold">
              Lenis Native Window Wrapper (Decoupled)
            </span>
          </div>
          <div className="spec-line flex justify-between border-b border-zinc-900 pb-1">
            <span className="text-zinc-600">03 // RENDER_PIPELINE</span>
            <span className="text-white font-semibold">
              Three.js / WebGL Fragment Shaders
            </span>
          </div>
          <div className="spec-line flex justify-between border-b border-zinc-900 pb-1">
            <span className="text-zinc-600">04 // ORCHESTRATION</span>
            <span className="text-white font-semibold">
              Next.js App Router (Turbopack Compiled)
            </span>
          </div>
          <div className="spec-line flex justify-between border-b border-zinc-900 pb-1">
            <span className="text-zinc-600">05 // GRID_FRAMEWORK</span>
            <span className="text-white font-semibold">
              Tailwind CSS (Asymmetric Bento Utility)
            </span>
          </div>
          <div className="spec-line flex justify-between border-b border-zinc-900 pb-1">
            <span className="text-zinc-600">06 // FILE_INTEGRITY</span>
            <span className="text-orange-400 font-semibold">
              Pure Vanilla JSX Engine (Zero Templates)
            </span>
          </div>
        </div>

        {/* RIGHT COMPONENT: The Live Telemetry Instrument (Takes 5 columns) */}
        <div className="md:col-span-5 p-4 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col justify-between h-full min-h-[180px]">
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
              // HARDWARE ACCELERATION
            </div>
            <div className="text-sm font-bold text-white tracking-tight">
              GPU Thread Synchronization
            </div>
          </div>

          {/* Large Performance Value */}
          <div className="my-4">
            <div className="text-4xl font-black text-white tabular-nums flex items-baseline">
              {fps}{" "}
              <span className="text-xs font-normal text-zinc-500 ml-1">
                FPS
              </span>
            </div>
            <div className="w-full bg-zinc-900 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-orange-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${(fps / 120) * 100}%` }}
              />
            </div>
          </div>

          <div className="text-[9px] text-zinc-600 leading-normal">
            Status: OPTIMAL // Memory distribution running natively inside
            localized React rendering trees.
          </div>
        </div>
      </div>
    </div>
  );
}
