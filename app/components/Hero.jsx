"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title-line", {
        yPercent: 100,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
      }).from(
        ".hero-meta",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.05,
        },
        "-=0.6",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen flex flex-col justify-between p-4 sm:p-8 md:p-16 lg:p-20 relative z-10  overflow-hidden select-none"
    >
      {/* Top Header Wrapper: Responsive Branding & Persistent Asset Node */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full font-mono text-xs uppercase tracking-widest text-zinc-500 gap-2 border-b border-zinc-900 pb-4 sm:border-0 sm:pb-0">
        <div>// KRISHNA SAI VELLAMPALLI</div>
        <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
          <span className="hidden md:inline">
            CREATIVE PORTFOLIO &copy;2026
          </span>
          {/* Top Right Resume Anchor Point */}
          <a
            href="/resume.pdf"
            download="Krishna_Sai_Vellampalli_Resume.pdf"
            className="text-orange-400 hover:text-white border border-orange-400/30 hover:border-white px-3 py-1 rounded-full transition-all duration-200 bg-orange-400/5 backdrop-blur-sm"
          >
            GET_RESUME.PDF ↓
          </a>
        </div>
      </div>

      {/* Center Asymmetric Text Block */}
      <div className="my-auto max-w-7xl w-full py-12 md:py-0">
        <div
          className="overflow-hidden h-fit py-1 md:py-2"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <h1 className="hero-title-line text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5vw] font-black uppercase leading-[0.85] tracking-tighter text-white">
            INTERACTIVE
          </h1>
        </div>
        <div
          className="overflow-hidden h-fit py-1 md:py-2"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <h1
            className="hero-title-line text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5vw] font-black uppercase leading-[0.85] tracking-tighter text-transparent"
            style={{
              WebkitTextStroke: "1px #f5f5f5",
              MozTextStroke: "1px #f5f5f5",
            }}
          >
            DEVELOPMENT
          </h1>
        </div>
      </div>

      {/* Bottom Context Metadata Block */}
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6 lg:gap-12 pt-8 border-t border-zinc-800 font-mono text-xs sm:text-sm">
        <div className="hero-meta font-mono text-xs">
          <span className="text-zinc-600 block mb-2 font-bold uppercase tracking-widest">
            01 // INTERACTIVE FOCUS
          </span>
          <p className="text-zinc-300 leading-relaxed max-w-sm font-sans text-sm font-light">
            Building clean websites for deep projects like the Srimad Bhagavad
            Gita. I take massive ideas and turn them into simple, interactive
            pages that are easy to look at and navigate.
          </p>
        </div>

        <div className="hero-meta font-mono text-xs">
          <span className="text-zinc-600 block mb-2 font-bold uppercase tracking-widest">
            02 // HOW I BUILD
          </span>
          <p className="text-zinc-300 leading-relaxed max-w-sm font-sans text-sm font-light">
            I build with Next.js using clean, plain JavaScript. No confusing
            TypeScript rules—just lightweight code, smooth animations, and solid
            responsive layouts that run fast on computers and phones.
          </p>
        </div>

        {/* Column 3: Split interactive action node for Resume & System Status */}
        {/* Column 3: Split interactive action node for Video Intro & System Status */}
        <div className="hero-meta flex flex-col justify-between items-start md:items-end gap-6 md:gap-0 font-mono text-xs">
          <div className="w-full md:text-right">
            <span className="text-zinc-600 block mb-2 font-bold uppercase tracking-widest">
              003 // IDENTITY_VERIFICATION
            </span>
            {/* Interactive Modal Trigger Element */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-orange-400 font-bold border-b border-zinc-700 hover:border-orange-400 pb-1 transition-colors group bg-transparent border-0 p-0 cursor-none select-none outline-none text-xs tracking-wide"
            >
              Initialize Visual Dossier
              <span className="transform group-hover:scale-110 transition-transform">
                ▶
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-orange-400 font-bold tracking-wider text-[11px] bg-orange-500/5 px-3 py-1.5 rounded border border-orange-500/10 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            AVAILABLE FOR PRODUCTION_2026
          </div>

          {/* ====================================================================
      PREMIUM OVERLAY MODAL: Plays the Self Introduction Video
      ==================================================================== */}
          {isVideoOpen && (
            <div
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-12 animate-fadeIn"
              onClick={() => setIsVideoOpen(false)} // Closes view if recruiter clicks onto the blank backdrop space
            >
              <div
                className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden relative shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()} // Halts bubble loops so clicking inside the video doesn't break views
              >
                {/* Decorative Top Control Strip Bar */}
                <div className="w-full border-b border-zinc-900 bg-black/40 px-6 py-4 flex justify-between items-center text-[10px] text-zinc-500 font-mono tracking-widest">
                  <div>STREAMING_NODE // TRANSMISSION_01.MP4</div>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="text-zinc-400 hover:text-orange-500 font-bold bg-transparent border-0 transition-colors uppercase cursor-none text-[11px]"
                  >
                    [ DISCONNECT // ✕ ]
                  </button>
                </div>

                {/* Video Playback Matrix Frame */}
                <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                  <video
                    src="/introduction.mp4" // House your introduction file right inside your public folder directory
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
