"use client";

import { useSplitText } from "../../hooks/useSplitText";

import PanoramaSlider from "../common/PanoramaSlider";
import ThemeButton from "../common/ThemeButton";

import type { HomeBannerBlock } from "@/types/home";
type Props = {
  data: HomeBannerBlock;
};
 

export default function Hero({ data }: Props) {
  useSplitText();
  return (
    <section className="home_banner pt-40 lg:pt-48 pb-12 md:pb-24">
      <div className="container_wrapper">
        <div className="banner_content max-w-[1000px] text-center mb-8 mx-auto">
          <h1
            text-split="true"
            letters-slide-up="true"
            letters-hover="true"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-[#282829]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          <div className="btn_wrapper mt-6">
            <ThemeButton
              href={data.button.url}
              className="theme_button theme_button_light bg-[#111111]"
            >
              <span className="button__spotlight"></span>

              <span className="button__text text-[#FFFFFF]">
                {data.button.title}
              </span>
            </ThemeButton>
          </div>
        </div>
      </div>

      <PanoramaSlider images={data.banner_sliders} />
    </section>
  );
}