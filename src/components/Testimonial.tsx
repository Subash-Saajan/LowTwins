"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Text animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll("h2, .stat-item"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=800&h=1000&fit=crop"
              alt="Drip Fashion"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6 md:space-y-8 lg:pl-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-white">
              DRIP IS
              <br />
              NOT A
              <br />
              <span className="text-red-500">CHOICE</span>
              <br />
              IT&apos;S A LIFESTYLE
            </h2>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 pt-4 md:pt-6">
              <div className="stat-item">
                <p className="text-3xl md:text-5xl font-black text-red-500">12K+</p>
                <p className="text-xs md:text-sm text-gray-500">Drip Gang</p>
              </div>
              <div className="stat-item">
                <p className="text-3xl md:text-5xl font-black text-white">500+</p>
                <p className="text-xs md:text-sm text-gray-500">Dark Pieces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
