"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
type Props = {
  service: {
    number: string;
    title: string;
    description: string;
    image: {
      url: string;
      alt?: string;
    };
    icon: {
      url: string;
      alt?: string;
    };
  };
};

export default function ServiceCard({ service }: Props) {
  return (
    <div className="service_box">
      <div className="swiper mySwiper_cube">
        <div className="swiper-wrapper">
        <Swiper
            modules={[EffectCube, Mousewheel]}
            direction="vertical"
            effect="cube"
            grabCursor
            mousewheel
            initialSlide={1}
            className="mySwiper_cube"
        >
            <SwiperSlide>
                <div className="service_img_wrapper">
                <Image
                    src={service.image.url}
                    alt={service.image.alt || service.title}
                    width={1200}
                    height={500}
                    className="w-full h-[200px] object-cover"
                />
                </div>
            </SwiperSlide>

          {/* Content Side */}
          <SwiperSlide>
            <div className="service_content_wrapper px-8 py-8 flex items-center justify-between bg-white h-[200px]">

              <div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl flex gap-2 text-[#111111]">
                  <span>{service.number}</span>
                  <span>—</span>
                  <span>{service.title}</span>
                </h4>

                <p className="mt-4">
                  {service.description}
                </p>
              </div>

              <div className="service_icon">
                <Image
                  src={service.icon.url}
                  alt={service.icon.alt || service.title}
                  width={90}
                  height={90}
                />
              </div>

            </div>
          </SwiperSlide>

        </div>
      </div>
    </div>
  );
}