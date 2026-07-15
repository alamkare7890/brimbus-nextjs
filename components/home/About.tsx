"use client";

import Image from "next/image";
import ThemeButton from "../common/ThemeButton";
import type { AboutBlock } from "@/types/home";

type Props = {
  data: AboutBlock;
};

export default function AboutBrief({ data }: Props) {
  return (
    <section className="about_brief py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container_wrapper">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20">
          <div className="about_image">
            <Image
              src={data.about_image.url}
              alt={data.about_image.alt || ""}
              width={700}
              height={700}
              className="rounded-2xl w-full h-auto"
            />
          </div>

          <div className="about_content">
            <div className="border-b">
              <h5 className="py-3">{data.short_heading}</h5>
            </div>

            <h2
              text-split="true"
              letters-slide-up="true"
              scrub-each-word="true"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#282829] my-5"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

            <p>{data.description}</p>

            <div className="btn_wrapper mt-6">
              <ThemeButton
                href={data.button.url}
                className="theme_button theme_button_light bg-[#111111]"
              >
                <span className="button__spotlight"></span>

                <span className="button__text text-white">
                  {data.button.title}
                </span>
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}