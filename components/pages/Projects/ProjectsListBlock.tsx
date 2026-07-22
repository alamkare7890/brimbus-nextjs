import Link from "next/link";
import { ProjectsListBlock } from "@/types/projects";
import ThemeButton from "@/components/common/ThemeButton";
type Props = {
  data: ProjectsListBlock;
};

export default function ProjectsListBanner({ data }: Props) {
  return (
    <section className="industries_banner py-20 lg:py-24 overflow-hidden">
      <div className="container_wrapper">
        <div className="max-w-5xl mx-auto text-center">
          {data.short_heading && (
            <h6
              className="text-base capitalize"
              dangerouslySetInnerHTML={{
                __html: data.short_heading,
              }}
            />
          )}

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-black"
            dangerouslySetInnerHTML={{
              __html: data.heading,
            }}
          />

          {data.description && (
            <div
              className="max-w-3xl mx-auto mt-4 md:mt-8 text-lg text-gray-500 leading-8"
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            />
          )}

          {data.button?.title && (
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
          )}
        </div>
      </div>
    </section>
  );
}