"use client";

import ProjectCard from "../common/ProjectCard";

import ThemeButton from "../common/ThemeButton";



import type { ProjectBlock } from "@/types/home";
type Props = {
  data: ProjectBlock;
};
export default function ProjectSection({ data }: Props) {
  const gridClasses = [
    "md:col-start-1 md:col-end-3",
    "md:col-start-3 md:col-end-4",
    "md:col-start-4 md:col-end-5",
    "md:row-start-2 md:col-start-1 md:col-end-2",
    "md:row-start-2 md:col-start-2 md:col-end-4",
    "md:row-start-2 md:col-start-4 md:col-end-5",
  ];


  return (
    <section className="project_block py-16 sm:py-20 md:py-24 lg:py-32 bg-[#111111]">

      <div className="custom-cursor">
        <p>Expand</p>
        <span>+</span>
      </div>

      <div className="container_wrapper">

        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-16">

          <div className="header_content_wrapper text-center md:text-start w-full md:w-[60%]">

            <h6 className="text-base text-white capitalize">
              {data.short_heading}
            </h6>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-white"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

          </div>

          <div className="mx-auto md:mr-0 mt-6 text-center md:text-start">

            <ThemeButton
              href={data.button.url}
              className="theme_button theme_button_dark bg-white"
            >
              <span className="button__spotlight" />

              <span className="button__text text-[#111111]">
                {data.button.title}
              </span>

            </ThemeButton>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-8 md:gap-6 xl:gap-9">

          {data.works_gallery.map((project, index) => (
            
            <ProjectCard
              key={index}
              project={project}
              className={gridClasses[index] || ""}
            />
          ))}

        </div>

      </div>
    </section>
  );
}