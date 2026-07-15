"use client";

import Image from "next/image";
import type { works_gallery } from "@/types/home";

type Props = {
  data: works_gallery;
};

export default function ProjectCard({ project, className = "" }: Props) {

  return (
    <div className={`portfolio_box ${className}`}>
        <div className="portfolio_img overflow-hidden rounded-2xl">
          {/* <Image
            src={project.image.url}
            alt={project.image.alt || project.post_title}
            width={900}
            height={700}
            className="rounded-2xl w-full h-auto transition duration-500 hover:scale-105"
          /> */}
        </div>

        <div className="border-b border-[#FFFFFF30] pt-5 pb-3">
          <h3 className="text-3xl md:text-4xl font-serif text-white pb-1">
            {project.post_title}
          </h3>

          <p className="text-sm text-white">
            {project.post_excerpt}
          </p>
        </div>
    </div>
  );
}