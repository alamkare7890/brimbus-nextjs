"use client";
import { useEffect, useState } from "react";
import ThemeButton from "../common/ThemeButton";

import ServiceCard from "../common/ServiceCard";

import type { OurServices, ServiceItem } from "@/types/home";
import { getServicesByIds } from "@/lib/wordpress/services";

type Props = {
  data: OurServices;
};

export default function ServicesSection({ data }: Props) {

  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    async function load() {
      const result = await getServicesByIds(data.service_list);
      setServices(result);
    }

    load();
  }, [data.service_list]);
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

        <div className="service_wrapper flex flex-col gap-6 md:gap-9">

          {services.map((service: ServiceItem, index: number) => (
            <ServiceCard
              key={service.id}
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