import Image from "next/image";
import ThemeButton from "@/components/common/ThemeButton";
import { AboutOverviewBlock } from "@/types/about";


type Props = {
  data: AboutOverviewBlock;
};


export default function AboutOverview({ data }: Props) {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container_wrapper">
        <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-12 lg:gap-16">

          <div className="about_image w-full md:w-1/2 lg:w-1/3">
            <Image
              src={data.image}
              alt={data.heading}
              width={500}
              height={700}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="about_content w-full md:w-1/2 lg:w-2/3">
            <div className="border-b border-gray-200">
              <h5
                className="py-3 text-lg font-medium text-[#282829]"
                dangerouslySetInnerHTML={{
                  __html: data.short_heading,
                }}
              />
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#282829] my-5"
              dangerouslySetInnerHTML={{
                __html: data.heading,
              }}
            />

            <div
              className="text-[#4B4B4B] leading-8"
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            />

            {data.button && (
              <div className="mt-8">
                <ThemeButton
                  href={data.button.url}                  
                  className="inline-flex items-center rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800"
                >
                  Learn More
                </ThemeButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}