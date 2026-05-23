"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const [counter, setCounter] = useState(0);
  const panelRef = useRef(null);

  useEffect(() => {
    // Simulated precise initialization sequence
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Varied step increments create a realistic data parsing illusion
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      gsap.to(panelRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
    }
  }, [counter, onComplete]);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[999] bg-[#070707] text-white flex flex-col justify-between p-6 md:p-16 font-mono select-none"
    >
      <div className="flex justify-between w-full text-xs text-zinc-500 uppercase tracking-widest">
        <div>// SYSTEM INITIALIZATION LOGIC</div>
        <div>ALGO_REV_2026</div>
      </div>

      <div className="w-full max-w-7xl">
        <div className="text-zinc-600 text-xs mb-2 tracking-widest uppercase">
          // BOOTING CORE CORE_MODULES...
        </div>
        <div className="text-[15vw] font-black leading-none tracking-tighter tabular-nums flex items-baseline">
          {counter}
          <span className="text-sm font-normal text-orange-500 ml-2">%</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-xs text-zinc-500 border-t border-zinc-900 pt-6">
        <div>COGNITIVE LAYOUTS // NO_TS_PROTOTYPE</div>
        <div>KRISHNA SAI VELLAMPALLI ARCHIVE</div>
      </div>
    </div>
  );
}
