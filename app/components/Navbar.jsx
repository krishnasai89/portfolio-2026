"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  const navItems = [
    { label: "Home", target: "top", icon: "🏡" },
    { label: "About", target: "#about-section", icon: "👨🏻‍🦱" },
    { label: "Skills", target: "#skills-section", icon: "🛠️" },
    { label: "Works", target: "#works-section", icon: "📁" },
    { label: "Contact", target: "#contact-section", icon: "📨" },
  ];

  // Intercept the click event and calculate positions smoothly
  const handleScrollTo = (e, target) => {
    e.preventDefault(); // Stop standard browser jump mechanics

    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(target);
    if (!element) return;

    // Use a tiny timeout to ensure coordinate lookups clear our transformation calculations
    setTimeout(() => {
      // Find where the element sits inside the layout document
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      // Offset slightly so the text doesn't slam directly into the top edge
      const offsetPosition = elementPosition - window.innerHeight * 0.05;

      // Scroll the native window, which smoothly updates our SmoothScroll translation layer
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 10);
  };

  return (
    <nav
      ref={navRef}
      className="fixed z-50 font-mono text-xs uppercase tracking-widest
        bottom-0 left-0 right-0 w-full px-4 pb-4 pt-2 glass-card border-t border-white/10 backdrop-blur-lg
        md:bottom-auto md:top-0 md:left-0 md:w-24 md:h-screen md:p-0 md:border-t-0 md:border-r md:border-white/5 md:bg-transparent md:backdrop-blur-none md:flex md:flex-col md:justify-between md:items-center"
    >
      {/* Desktop Only Identity Badge */}
      <div className="hidden md:flex items-center justify-center h-24 w-full border-b border-white/5 font-black text-sm tracking-tighter text-orange-500">
        KV // 26
      </div>

      {/* Interactive Links Container */}
      <div className="flex justify-around items-center w-full md:flex-col md:gap-8 md:my-auto">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={(e) => handleScrollTo(e, item.target)}
            className="group flex flex-col items-center justify-center py-2 px-3 text-zinc-400 hover:text-white transition-colors duration-200 relative bg-transparent border-0 outline-none select-none cursor-pointer"
          >
            <span className="text-lg md:text-xl font-bold mb-1 transform group-hover:scale-110 transition-transform duration-200 ">
              {item.icon}
            </span>
            <span className="text-[9px] md:text-[10px] tracking-normal opacity-70 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>

            <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-orange-500 group-hover:h-6 transition-all duration-200" />
          </button>
        ))}
      </div>

      <div className="hidden md:block pb-8 text-zinc-600 [writing-mode:vertical-lr] select-none rotate-180">
        SYS_ONLINE // GEN_0.4
      </div>
    </nav>
  );
}
