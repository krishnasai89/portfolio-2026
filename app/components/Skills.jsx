"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsLineOne, skillsLineTwo } from "../data/skillsData";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  useEffect(() => {
    // Drop logic on mobile devices to protect touch scrolling performance
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const ctx = gsap.context(() => {
      // Row 1: Smoothly floats left on scroll
      gsap.fromTo(
        rowOneRef.current,
        { x: 30 },
        {
          x: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      // Row 2: Smoothly floats right on scroll
      gsap.fromTo(
        rowTwoRef.current,
        { x: -30 },
        {
          x: 30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const CardContent = ({ name, rating }) => (
    <>
      <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
        {"//"} CORE_ENGINE
      </div>
      <div className="text-xl lg:text-2xl font-bold tracking-tight text-white mt-4">
        {name}
      </div>
      <div className="mt-6 border-t border-white/5 pt-3 text-xs font-mono text-orange-400 font-semibold">
        {rating}
      </div>
    </>
  );

  return (
    <section
      id="skills-section"
      ref={containerRef}
      className="w-full py-16 md:py-28 bg-transparent overflow-hidden relative z-10 select-none"
    >
      {/* Header Tracker Container */}
      <div className="px-6 sm:px-8 md:px-16 lg:px-20 mb-12">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">
          {"//"} CAPABILITIES
        </span>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
          Production Tooling
        </h2>
      </div>

      {/* ====================================================================
          DESKTOP VIEWPORT: Fully Visible Grid with Edge-Safe Padding
          ==================================================================== */}
      <div className="hidden md:flex flex-col gap-6 w-full px-6 sm:px-8 md:px-16 lg:px-20 relative z-20">
        {/* Row One: Balanced multi-column setup */}
        <div className="w-full overflow-visible pointer-events-auto">
          <div
            ref={rowOneRef}
            className="grid grid-cols-4 gap-6 will-change-transform w-full"
          >
            {skillsLineOne.map((skill) => (
              <div
                key={`d1-${skill.id}`}
                className="glass-card h-44 p-6 rounded-2xl flex flex-col justify-between border border-white/10 backdrop-blur-md transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:bg-white/[0.05] hover:border-amber-500/30 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] will-change-transform cursor-none relative z-30"
              >
                <CardContent name={skill.name} rating={skill.rating} />
              </div>
            ))}
          </div>
        </div>

        {/* Row Two: Balanced multi-column setup */}
        <div className="w-full overflow-visible pointer-events-auto">
          <div
            ref={rowTwoRef}
            className="grid grid-cols-4 gap-6 will-change-transform w-full"
          >
            {skillsLineTwo.map((skill) => (
              <div
                key={`d2-${skill.id}`}
                className="glass-card h-44 p-6 rounded-2xl flex flex-col justify-between border border-white/10 backdrop-blur-md transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:bg-white/[0.05] hover:border-amber-500/30 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] will-change-transform cursor-none relative z-30"
              >
                <CardContent name={skill.name} rating={skill.rating} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====================================================================
          MOBILE VIEWPORT: Clean Bento Grid Layout
          ==================================================================== */}
      <div className="block md:hidden px-4">
        <div className="grid grid-cols-2 gap-3">
          {[...skillsLineOne, ...skillsLineTwo].map((skill) => (
            <div
              key={`m-${skill.id}`}
              className="glass-card p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col justify-between h-40"
            >
              <CardContent name={skill.name} rating={skill.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
