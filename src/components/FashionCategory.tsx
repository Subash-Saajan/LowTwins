"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

export default function FashionCategory() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Categories stagger animation
      if (categoriesRef.current) {
        gsap.fromTo(
          categoriesRef.current.querySelectorAll(":scope > a"),
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-5xl font-black tracking-tight">
            CATEGORIES
          </h2>
        </div>

        {/* Categories Grid */}
        <div ref={categoriesRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative active:scale-[0.98] transition-transform"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Category Name */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                <h3 className="text-white text-lg md:text-2xl font-bold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
