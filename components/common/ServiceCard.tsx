"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import type { ServiceItem } from "@/types/home";


type Props = {
  service: ServiceItem;
};

export default function ServiceCard({ service }: Props) {
  return (
    <div className="service_box">
      <Swiper
        modules={[EffectCube, Mousewheel]}
        direction="vertical"
        effect="cube"
        grabCursor={true}
        mousewheel={true}
        initialSlide={1}
        className="mySwiper_cube"
      >
        <SwiperSlide>
          <div className="service_img_wrapper">
            <Image
              src={service.featured_image}
              alt={service.title}
              width={600}
              height={200}
              className="w-full h-[200px] object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service_content_wrapper px-8 py-8 flex items-center justify-between bg-white h-[200px]">
              <h4 className="text-2xl sm:text-3xl md:text-4xl flex gap-2 text-[#111111]">
                <span>{service.number}</span>
                <span>—</span>
                <span>{service.title}</span>
              </h4>

              <p className="mt-4">{service.excerpt}</p>

            <div className="service_icon">
              <Image
                src={service.featured_image}
                alt={service.title}
                width={60}
                height={60}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}