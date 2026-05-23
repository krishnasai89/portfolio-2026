"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Instantiate a pure native root smooth scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky smooth inertia curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Synchronize Lenis movement updates directly with GSAP's master layout tickers
    function updateTimeline(time) {
      lenis.raf(time * 1000);
    }

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(updateTimeline);
    gsap.ticker.lagSmoothing(0);

    // Explicitly update all layout measurements on refresh cycles
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTimeline);
    };
  }, []);

  return <div className="w-full h-auto">{children}</div>;
}
