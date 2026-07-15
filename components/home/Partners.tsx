"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/free-mode";

import type { PartnersBlock } from "@/types/home";

type Props = {
  data: PartnersBlock;
};

export default function Partners({ data }: Props) {
  const swiper1 = useRef<SwiperType | null>(null);
  const swiper2 = useRef<SwiperType | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let scrollTimer: NodeJS.Timeout;

    const trigger = ScrollTrigger.create({
      trigger: ".global_partners",
      start: "top bottom",
      end: "bottom top",

      onUpdate: (self) => {
        if (!swiper1.current || !swiper2.current) return;

        const velocity = self.getVelocity();

        // Scroll Down
        if (velocity > 0) {
          swiper1.current.params.autoplay!.reverseDirection = true;
          swiper2.current.params.autoplay!.reverseDirection = false;
        }

        // Scroll Up
        else {
          swiper1.current.params.autoplay!.reverseDirection = false;
          swiper2.current.params.autoplay!.reverseDirection = true;
        }

        swiper1.current.params.speed = 1000;
        swiper2.current.params.speed = 1000;

        swiper1.current.autoplay.start();
        swiper2.current.autoplay.start();

        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
          swiper1.current!.params.autoplay!.reverseDirection = false;
          swiper2.current!.params.autoplay!.reverseDirection = true;

          swiper1.current!.params.speed = 5000;
          swiper2.current!.params.speed = 5000;

          swiper1.current!.autoplay.start();
          swiper2.current!.autoplay.start();
        }, 200);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="global_partners relative pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      <div className="partner_heading_wrapper text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#282829]">
          {data.heading}
        </h2>
      </div>

      {/* Row 1 */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        onSwiper={(swiper) => (swiper1.current = swiper)}
        className="partner_row-1 mb-8"
        slidesPerView="auto"
        spaceBetween={30}
        loop
        freeMode
        speed={5000}
        allowTouchMove
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
      >
        {[...data.partners_logos, ...data.partners_logos].map((item, index) => (
          <SwiperSlide
            key={`row1-${index}`}
            className="!w-auto partner_logo"
          >
            <Image
              src={item.url}
              alt={item.alt || ""}
              width={180}
              height={80}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Row 2 */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        onSwiper={(swiper) => (swiper2.current = swiper)}
        className="partner_row-2"
        slidesPerView="auto"
        spaceBetween={25}
        loop
        freeMode
        speed={5000}
        allowTouchMove
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 20,
          },
          1024: {
            spaceBetween: 25,
          },
        }}
      >
        {[...data.partners_logos, ...data.partners_logos].map((item, index) => (
          <SwiperSlide
            key={`row2-${index}`}
            className="!w-auto partner_logo"
          >
            <Image
              src={item.url}
              alt={item.alt || ""}
              width={180}
              height={80}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}