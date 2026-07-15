"use client";

import Link from "next/link";
import ServiceCard from "./ServiceCard";

type Props = {
  data: {
    short_heading: string;
    heading: string;
    button: {
      text: string;
      url: string;
    };
    services: any[];
  };
};

export default function ServicesSection({ data }: Props) {
  return (
    <section className="our_service bg-[#FBF9EF] py-16 sm:py-20 md:py-24 lg:py-32">

      <div className="container_wrapper">

        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-16">

          <div className="header_content_wrapper text-center md:text-start w-full md:w-[60%]">

            <h6 className="text-base text-[#111111] capitalize">
              {data.short_heading}
            </h6>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-[#282829]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

          </div>

          <div className="mx-auto md:mr-0 mt-6 text-center md:text-start">

            <Link
              href={data.button.url}
              className="theme_button theme_button_light bg-[#111111]"
            >
              <span className="button__spotlight"></span>

              <span className="button__text text-white">
                {data.button.text}
              </span>

            </Link>

          </div>

        </div>

        <div className="service_wrapper flex flex-col gap-6 md:gap-9">

          {data.services.map((service, index) => (
            <ServiceCard
              key={index}
              service={{
                ...service,
                number: String(index + 1).padStart(2, "0"),
              }}
            />
          ))}

        </div>

      </div>

    </section>
  );
}