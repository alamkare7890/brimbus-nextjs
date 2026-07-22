"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "@/components/common/ThemeButton";
import { AboutServicesBlock, ServiceItem } from "@/types/about";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { getServicesByIds } from "@/lib/wordpress/services";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  data: AboutServicesBlock;
};

export default function AboutServices({ data }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const swiper = swiperRef.current;
    const section = sectionRef.current;

    if (!swiper || !section) return;

    const ctx = gsap.context(() => {
      gsap.to(swiper.wrapperEl, {
        x: () =>
          -(swiper.wrapperEl.scrollWidth - swiper.el.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [services]);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const result = await getServicesByIds(data.service_list);

      if (mounted) {
        setServices(result);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [data.service_list]);
  return (
    <section
      ref={sectionRef}
      className="service_block py-16 sm:py-20 md:pt-24 pb-0 lg:py-32"
    >
      <div className="container_wrapper">
        <div className="flex flex-wrap justify-between items-center mb-12 md:mb-16">
          <div className="header_content_wrapper w-full md:w-[60%]">
            <h6>{data.short_heading}</h6>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium"
              dangerouslySetInnerHTML={{
                __html: data.heading,
              }}
            />

            <div
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            />
          </div>

          <ThemeButton
            href={data.button.url}            
            className="theme_button theme_button_light bg-[#111111]"
          >
            <span className="button__spotlight" />
            <span className="button__text text-white">
              {data.button.title}
            </span>
          </ThemeButton>
        </div>

        <Swiper
          className="swiper-container serviceCards !overflow-visible"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1.2}
          spaceBetween={12}
          loop
          speed={0}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service_folio_box">
                <div className="service_content_box">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: service.title,
                    }}
                  />


                </div>
                {service.service_image && (
                  <Image
                    src={service.service_image}
                    alt={service.title || "Service image"}
                    width={600}
                    height={700}
                    className="w-full h-auto"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}