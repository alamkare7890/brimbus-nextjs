"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import type { ProjectItem } from "@/types/home";

type Props = {
  project: ProjectItem;
  className?: string;
};

export default function ProjectCard({
  project,
  className = "",
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = boxRef.current;
    const cursor = cursorRef.current;

    if (!section || !cursor) return;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const enter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const move = (event: Event) => {
      const e = event as MouseEvent;
      xTo(e.clientX);
      yTo(e.clientY);
    };

    section.addEventListener("mouseenter", enter);
    section.addEventListener("mouseleave", leave);
    section.addEventListener("mousemove", move);

    return () => {
      section.removeEventListener("mouseenter", enter);
      section.removeEventListener("mouseleave", leave);
      section.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`portfolio_box relative ${className}`}
    >
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-50 opacity-0 scale-0"
      >
        <p>Expand</p>
        <span>+</span>
      </div>

      <div className="portfolio_img overflow-hidden rounded-2xl">
        <Image
          src={project.featured_image}
          alt={project.title}
          width={900}
          height={700}
          className="w-full h-auto rounded-2xl transition duration-500 hover:scale-105"
        />
      </div>

      <div className="border-b border-[#FFFFFF30] pt-5 pb-3">
        <h3 className="pb-1 font-serif text-3xl text-white md:text-4xl">
          {project.title}
        </h3>

        <p className="text-sm text-white">
          {project.excerpt}
        </p>
      </div>
    </div>
  );
}