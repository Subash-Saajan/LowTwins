"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll("h2, form"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section ref={sectionRef} className="py-14 md:py-24 bg-red-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-black tracking-tight mb-6 md:mb-8">
            JOIN THE DRIP GANG
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-4 py-3.5 md:py-4 bg-black/30 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-sm md:text-base"
              required
            />
            <button
              type="submit"
              className="px-6 md:px-8 py-3.5 md:py-4 bg-black text-white font-bold hover:bg-neutral-900 transition-all active:scale-95 text-sm md:text-base"
            >
              JOIN NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
