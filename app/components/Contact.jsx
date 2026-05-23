"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const footerRef = useRef(null);

  return (
    <footer
      id="contact-section"
      ref={footerRef}
      className="w-full bg-[#070707] border-t border-zinc-900 px-6 sm:px-8 md:px-16 lg:px-20 py-16 md:py-24 relative z-10 font-mono text-xs text-zinc-500 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        {/* Left Side: Communication Port */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-orange-500 block mb-1">
              {"//"} ESTABLISH CONNECTION
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-white uppercase">
              Let's Initialize
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-zinc-400">
            Available for technical direction, high-performance spatial frontend
            engineering, and immersive interactive UI contracts.
          </p>
          <div className="pt-4">
            <a
              href="mailto:your.email@gmail.com"
              className="inline-block bg-white text-black font-sans font-bold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-none"
            >
              PING MY ENGINE →
            </a>
          </div>
        </div>

        {/* Right Side: Network System Details */}
        <div className="lg:col-span-6 lg:text-right space-y-4 md:pt-12">
          <div>
            <span className="text-zinc-600 block">[LOCAL_TIME_ZONE]</span>
            <span className="text-white">INDIA // UTC +5:30</span>
          </div>
          <div>
            <span className="text-zinc-600 block">[CURRENT_STATUS]</span>
            <span className="text-green-400 animate-pulse">
              ● OPEN FOR PIPELINE CONSTRUX
            </span>
          </div>
          <div className="pt-6 border-t border-zinc-900 lg:flex lg:justify-end gap-6 text-zinc-400">
            <a
              href="https://github.com/krishnasai89"
              className="hover:text-orange-400 block cursor-none"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-sai-vellampalli/"
              className="hover:text-orange-400 block cursor-none"
            >
              LINKEDIN
            </a>
            <a href="#" className="hover:text-orange-400 block cursor-none">
              TWITTER
            </a>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
        <div>© 2026 KRISHNA SAI VELLAMPALLI. ALL RIGHTS RESERVED.</div>
        <div>SYS_VERSION_4.0.0 // PRODUCTION_READY</div>
      </div>
    </footer>
  );
}
