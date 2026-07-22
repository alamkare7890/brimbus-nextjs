import Link from "next/link";
import { ContactBannerBlock } from "@/types/contact";
import ThemeButton from "@/components/common/ThemeButton";

type Props = {
  data: ContactBannerBlock;
};

export default function ContactBanner({ data }: Props) {
  return (
    <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-32 pt-40 md:pt-56 relative contact_banner">
      <div className="container_wrapper">
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="contact_content w-full md:w-1/2">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 font-medium text-black"
              dangerouslySetInnerHTML={{
                __html: data.heading,
              }}
            />

            {data.button?.title && (
              <div className="btn_wrapper mt-6 hidden md:block">
                <ThemeButton
                  href={data.button.url}
                  target={data.button.target || "_self"}
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

          {/* Right Content */}
          <div className="contact_content w-full md:w-1/2">
            <div
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            />

            {data.button?.title && (
              <div className="btn_wrapper mt-6 block md:hidden">
                <ThemeButton
                  href={data.button.url}
                  target={data.button.target || "_self"}
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
      </div>
    </section>
  );
}