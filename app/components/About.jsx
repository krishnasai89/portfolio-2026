"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal: highlights words as they enter the viewport
      const words = textRef.current.querySelectorAll(".reveal-word");

      gsap.fromTo(
        words,
        { opacity: 0.15, y: 5 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper template for text reveal wrapping
  const splitText = (text) => {
    return text.split(" ").map((word, idx) => (
      <span
        key={idx}
        className="reveal-word inline-block mr-[0.3em] will-change-transform"
      >
        {word}
      </span>
    ));
  };

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full bg-transparent px-4 sm:px-8 md:px-16 lg:px-20 py-24 md:py-40 relative z-10"
    >
      {/* Structural Header Tag */}
      <div className="mb-12 md:mb-20 border-b border-zinc-800 pb-6">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">
          // IDENTITY METRICS
        </span>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
          System Architect
        </h2>
      </div>

      {/* Asymmetric Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: The Glass Metrics Card */}
        <div className="lg:col-span-4 glass-card p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -z-10 group-hover:bg-orange-500/20 transition-colors duration-500" />

          <div className="font-mono text-[10px] text-orange-400 tracking-widest uppercase mb-6">
            [NODE_PROG_2026]
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-zinc-500 font-mono text-xs block mb-1">
                NAME
              </span>
              <div className="text-lg font-bold tracking-tight text-white">
                Krishna Sai Vellampalli
              </div>
            </div>
            <div>
              <span className="text-zinc-500 font-mono text-xs block mb-1">
                ROLE
              </span>
              <div className="text-lg font-bold tracking-tight text-white">
                Independent Frontend Developer
              </div>
            </div>
            <div>
              <span className="text-zinc-500 font-mono text-xs block mb-1">
                LOCATION
              </span>
              <div className="text-lg font-bold tracking-tight text-white">
                India // Remote
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 font-mono text-[11px] text-zinc-400 space-y-2">
            <div className="flex justify-between">
              <span>FEATURED WORK:</span>
              <span className="text-white">Gita Node, Visvaguru</span>
            </div>
            <div className="flex justify-between">
              <span>STACK CORES:</span>
              <span className="text-white">Next.js / Plain JSX</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Large Scale Narrative Reveal */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <h3
            ref={textRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight md:leading-snug"
          >
            {splitText(
              "I build interactive web layouts that make deep, meaningful ideas easy for everyone to see and explore. I write clear, plain JavaScript code from scratch to create responsive sites that run smoothly on both desktop monitors and phones.",
            )}
          </h3>

          <p className="mt-8 text-sm md:text-base font-mono text-zinc-500 leading-relaxed max-w-xl">
            I work entirely alone on my own builds—handling everything from the
            screen layouts to the scroll animations. Instead of copying
            templates, I focus on building lightweight code structures that hold
            users' attention while keeping performance clean.
          </p>
        </div>
      </div>
    </section>
  );
}
