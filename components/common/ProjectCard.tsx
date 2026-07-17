"use client";
import { useEffect} from "react";
import Image from "next/image";
import type { ProjectItem } from "@/types/home";

type Props = {
  data: ProjectItem;
};

export default function ProjectCard({ project, className = "" }: Props) {
  useEffect(() => {
    const sections = document.querySelectorAll(".portfolio_box");
    const cursorproject = document.querySelector(".custom-cursor");

    if (!cursorproject) return;

    const xTo = gsap.quickTo(cursorproject, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorproject, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const handlers: {
      section: Element;
      enter: () => void;
      leave: () => void;
      move: (e: MouseEvent) => void;
    }[] = [];

    sections.forEach((section) => {
      const enter = () => {
        gsap.to(cursorproject, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(cursorproject, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const move = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      section.addEventListener("mouseenter", enter);
      section.addEventListener("mouseleave", leave);
      section.addEventListener("mousemove", move);

      handlers.push({ section, enter, leave, move });
    });

    return () => {
      handlers.forEach(({ section, enter, leave, move }) => {
        section.removeEventListener("mouseenter", enter);
        section.removeEventListener("mouseleave", leave);
        section.removeEventListener("mousemove", move);
      });
    };
  }, []);
  return (
    
    <div className={`portfolio_box ${className}`}>
            <div className="custom-cursor">
        <p>Expand</p>
        <span>+</span>
      </div>
        <div className="portfolio_img overflow-hidden rounded-2xl">
          <Image
            src={project.featured_image}
            alt={project.title}
            width={900}
            height={700}
            className="rounded-2xl w-full h-auto transition duration-500 hover:scale-105"
          />
        </div>

        <div className="border-b border-[#FFFFFF30] pt-5 pb-3">
          <h3 className="text-3xl md:text-4xl font-serif text-white pb-1">
            {project.title}
          </h3>

          <p className="text-sm text-white">
            {project.excerpt}
          </p>
        </div>
    </div>
  );
}