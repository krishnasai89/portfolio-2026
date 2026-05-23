"use client";
import { useState } from "react";
import CanvasView from "./components/CanvasView";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import SystemSpecs from "./components/SystemSpecs";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import AIChatbot from "./components/AIChatbot"; // Import the widget

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden selection:bg-white selection:text-black">
      <CustomCursor />

      {/* The AI Concierge stands ready at all coordinates */}
      <AIChatbot />

      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      <CanvasView />
      <Navbar />

      <SmoothScroll>
        <div className="relative z-10 w-full flex flex-col md:pl-24 pb-24 md:pb-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <SystemSpecs />
        </div>
        <Contact />
      </SmoothScroll>
    </main>
  );
}
