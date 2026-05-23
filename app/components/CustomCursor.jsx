"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Bail immediately if the user is on a touch device
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;

    // Quick-setting setter functions bypass standard component redraw slowdowns
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Dynamic scale shifts when hovering over interactable assets
    const handleHoverStart = () =>
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: "rgba(249, 115, 22, 0.2)",
        borderColor: "#f97316",
      });
    const handleHoverEnd = () =>
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255,255,255,0.4)",
      });

    const targets = document.querySelectorAll("a, button, .stack-card");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", handleHoverStart);
      t.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", handleHoverStart);
        t.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 w-5 h-5 -ml-2.5 -mt-2.5 rounded-full border border-white/40 pointer-events-none z-[9999] will-change-transform mix-blend-difference"
    />
  );
}
