"use client";
import { useState, useRef, useEffect } from "react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm Krishna's AI Assistant. Ask me anything about his skills, projects, or availability!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat window on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Pre-programmed smart answers about your portfolio data
  const getAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    if (
      lowerQuery.includes("skill") ||
      lowerQuery.includes("tool") ||
      lowerQuery.includes("tech")
    ) {
      return "Krishna specializes in Plain JavaScript frontend architectures. His production toolkit includes Next.js, GSAP (for high-fidelity scroll animations), Three.js/WebGL (for 3D viewports), and Tailwind CSS for responsive bento grids.";
    }
    if (
      lowerQuery.includes("project") ||
      lowerQuery.includes("work") ||
      lowerQuery.includes("gita") ||
      lowerQuery.includes("visvaguru")
    ) {
      return "Krishna has engineered two major solo architectures: \n1. [/GITA_NODE] Srimad Bhagavad Gita layout engine built to translate classical text mapping.\n2. [/VISVA_ARCHIVE] Visvaguru Digital Archive, a smooth, high-performance historical visualization bento grid.";
    }
    if (
      lowerQuery.includes("experience") ||
      lowerQuery.includes("job") ||
      lowerQuery.includes("work history")
    ) {
      return "Krishna operates as an Independent Frontend Developer. He has zero traditional office job experience, but excels at building production-grade, highly complex interactive systems completely from scratch by himself.";
    }
    if (
      lowerQuery.includes("contact") ||
      lowerQuery.includes("hire") ||
      lowerQuery.includes("email")
    ) {
      return "You can connect with Krishna instantly by clicking the 'PING MY ENGINE' button in the contact footer, or email him directly at your.email@gmail.com. He is currently available for remote technical UI contracts!";
    }
    if (
      lowerQuery.includes("gsap") ||
      lowerQuery.includes("animation") ||
      lowerQuery.includes("scrolltrigger")
    ) {
      return "Yes! Krishna is highly proficient with GSAP and ScrollTrigger. He specializes in building seamless, high-performance web experiences—like the 3D parallax layers on his project cards—fully synced with smooth scrolling mechanics.";
    }

    // 2. General Skills Rule (Keep this below the specific one)
    if (
      lowerQuery.includes("skill") ||
      lowerQuery.includes("tool") ||
      lowerQuery.includes("tech")
    ) {
      return "Krishna specializes in Plain JavaScript frontend architectures. His production toolkit includes Next.js, GSAP, Three.js/WebGL, and Tailwind CSS.";
    }

    return "I am optimized to discuss Krishna's engineering parameters. Try asking: 'What are his skills?', 'Tell me about his projects', or 'Is he looking for work?'";
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // 1. Append user message to the stack
    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);
    if (!textToSend) setInputValue("");

    // 2. Simulate standard AI thinking delay loop
    setTimeout(() => {
      const aiReply = getAIResponse(text);
      setMessages((prev) => [...prev, { role: "assistant", text: aiReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-24 lg:bottom-6 right-6 z-[99999] font-sans">
      {/* ====================================================================
          FLOATING TRIGGER ACTION BUTTON (Bottom Right Corner Circle)
          ==================================================================== */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-orange-500/10 hover:bg-orange-800/80 text-white flex items-center justify-center text-lg hover:text-2xl shadow-xl border border-orange-400/20 transition-transform duration-300 hover:scale-110 cursor-none select-none outline-none select-none"
        style={{ boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {/* ====================================================================
          FLOATING AI CHAT WINDOW MASK
          ==================================================================== */}
      {isOpen && (
        <div
          className="absolute bottom-18 right-0 w-[85vw] sm:w-[380px] h-[480px] rounded-3xl border border-white/10 bg-[#0d0d0d]/95 backdrop-blur-2xl flex flex-col overflow-hidden shadow-2xl animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header Layout */}
          <div className="px-5 py-4 border-b border-zinc-900 bg-black/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <div className="font-mono text-xs text-white uppercase tracking-wider font-bold">
              KRISHNA_AI_CORE v4.0
            </div>
          </div>

          {/* Chat Messages Log Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs whitespace-pre-line leading-relaxed ${
                    msg.role === "user"
                      ? "bg-orange-500 text-white rounded-tr-none"
                      : "bg-zinc-900 text-zinc-300 rounded-tl-none border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Click Sample Question Suggestions Bubbles */}
          <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-zinc-900/50 bg-black/20">
            <button
              onClick={() => handleSendMessage("What are his skills?")}
              className="text-[10px] bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 px-2.5 py-1 rounded-full cursor-none transition-colors"
            >
              🛠️ View Skills
            </button>
            <button
              onClick={() => handleSendMessage("Tell me about his projects")}
              className="text-[10px] bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 px-2.5 py-1 rounded-full cursor-none transition-colors"
            >
              📁 Major Works
            </button>
          </div>

          {/* Text Input Footer Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-black/60 border-t border-zinc-900 flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about skills, projects..."
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-orange-500 placeholder-zinc-600"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-xl text-xs font-bold cursor-none transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
