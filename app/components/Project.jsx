"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { localProjects } from "../data/projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".stack-card");
    if (cards.length === 0) return;

    let ctx = gsap.context(() => {
      // ====================================================================
      // DESKTOP SYSTEM: Premium 3D Overlapping Stacking Deck
      // ====================================================================
      if (window.matchMedia("(min-width: 768px)").matches) {
        // 1. Pre-initialize structural depth layers and offsets
        cards.forEach((card, index) => {
          gsap.set(card, {
            zIndex: index + 1,
            transformOrigin: "center top",
          });

          if (index > 0) {
            // Position incoming cards completely below the screen baseline
            gsap.set(card, {
              yPercent: 120,
              scale: 0.9,
              rotationX: -10, // Gives an elegant 3D tilt look
            });
          }
        });

        // 2. Build the master scrubbing timeline bound to the pinning container
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top", // Lock section flush at the very top of screen
            end: () => `+=${cards.length * 130}%`, // Clean vertical scrolling footprint duration
            scrub: 1,
            pin: true,
            pinSpacing: true, // Holds subsequent sections (like the footer) perfectly downward
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // 3. Chain spatial transformations across your project cards sequentially
        for (let i = 1; i < cards.length; i++) {
          const card = cards[i];
          const previousCards = cards.slice(0, i);
          const stepLabel = `slide-${i}`;

          // Animate the current card climbing up to stack over the previous one
          tl.to(
            card,
            {
              yPercent: 0,
              scale: 1,
              rotationX: 0,
              duration: 2,
              ease: "power1.inOut",
            },
            stepLabel,
          );

          // Simultaneously apply deep 3D perspective shrinking to ALL background cards beneath it
          previousCards.forEach((prevCard, pIdx) => {
            const currentDepth = i - pIdx;

            tl.to(
              prevCard,
              {
                scale: 0.96 - currentDepth * 0.03, // Shrinks layers incrementally back in space
                yPercent: -8 * currentDepth, // Subtle upward elevation pull for a neat stack alignment
                opacity: Math.max(0.2, 1 - currentDepth * 0.35), // Smooth fade out gradient
                duration: 2,
                ease: "power1.inOut",
              },
              stepLabel,
            );
          });

          // Minor breathing space buffer inside the master scrub sequence
          tl.to({}, { duration: 0.4 });
        }
      } else {
        // ====================================================================
        // MOBILE SYSTEM: Lightweight Parallax Card Stream
        // ====================================================================
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0.1, y: 50, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 55%",
                scrub: 0.5,
              },
            },
          );
        });
      }
    }, containerRef);

    return () => {
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="works-section"
      ref={containerRef}
      className="w-full bg-transparent relative z-10 select-none"
    >
      {/* Editorial Title Block Grid Header */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-10 pt-20 flex flex-col md:flex-row justify-between items-start md:items-end ">
        <div>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">
            // MONOGRAPHS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Major Architectures
          </h2>
        </div>
        <p className="text-zinc-500 font-mono text-xs mt-4 md:mt-0 max-w-xs leading-relaxed">
          Interactive installations translating complex classical epistemology
          into a premium 3D stacking overlay experience.
        </p>
      </div>

      {/* ====================================================================
          MAIN VIEWPORT PORT: Handles Desktop 3D Stack & Mobile Vertical Flow
          ==================================================================== */}
      <div
        ref={cardsWrapperRef}
        className="relative w-full h-auto md:h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20 py-16 md:py-0 overflow-hidden"
        style={{ perspective: "1800px" }} // Drives intense 3D axis depth calculations
      >
        <div className="w-full max-w-5xl relative flex flex-col gap-8 md:gap-0 md:h-[65vh]">
          {localProjects.map((project) => (
            <div
              key={project.id}
              className="stack-card w-full h-auto md:h-full rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col justify-between md:absolute md:top-0 md:left-0 border border-white/10 will-change-transform"
              style={{
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0.005) 100%)`,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 40px 120px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* Internal Accent Glow Layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-25 blur-3xl rounded-3xl -z-10`}
              />

              {/* Card Meta Header Row */}
              <div className="flex justify-between items-start border-b border-white/10 pb-4 sm:pb-6">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs text-orange-400 font-bold uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight text-white uppercase">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-xl sm:text-2xl font-black text-zinc-700 select-none">
                  /{project.link}
                </span>
              </div>

              {/* Main Explanatory Copy Block */}
              <div className="my-6 md:my-auto max-w-3xl">
                <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Technical Specifications Footer Row */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono text-[9px] sm:text-xs px-2.5 py-1 rounded-full border border-white/5 bg-white/5 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button className="group flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white hover:text-orange-400 transition-colors bg-transparent border-0 cursor-none">
                  Explore Systems Architecture
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
