"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { gsap } from "gsap";
import "swiper/css";


export default function PanoramaSlider({ images }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    let position = swiper.translate;

    const getSpeed = () => {
      if (window.innerWidth < 640) return 1;

      if (window.innerWidth < 1024) return 1.5;

      return 2;
    };

    const animate = () => {
      position -= getSpeed();

      if (position <= swiper.maxTranslate()) {
        position = swiper.minTranslate();
      }

      swiper.setTranslate(position);
      swiper.updateProgress(position);
      swiper.updateSlidesProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    };

    gsap.ticker.add(animate);

    const resize = () => {
      swiper.update();
      position = swiper.translate;
    };

    window.addEventListener("resize", resize);

    return () => {
      gsap.ticker.remove(animate);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="paranoma_wrapper">
      <div className="panorama-slider">
        <Swiper
          className="mySwiper swiper-panorama"
          loop
          centeredSlides
          grabCursor
          watchSlidesProgress
          initialSlide={2}
          speed={0}
          autoplay={false}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            479: {
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1320: {
              slidesPerView: 5,
              spaceBetween: 12,
            },
            1600: {
              slidesPerView: 6,
              spaceBetween: 12,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onProgress={(swiper) => {
            const isMobile = window.innerWidth < 640;

            swiper.slides.forEach((slide) => {
              const p = (slide as any).progress;

              const baseZ = isMobile ? -250 : -500;

              const rotateY = 12.5 * p;

              const translateX =
                0.2654 * p +
                0.0244 * Math.pow(p, 3);

              const translateZ =
                baseZ +
                30.5 * Math.pow(p, 2) -
                0.62 * Math.pow(p, 4);

              (slide as HTMLElement).style.transform = `
                translateX(${translateX}px)
                translateZ(${translateZ}px)
                rotateY(${rotateY}deg)
              `;
            });
          }}
          onSetTransition={(swiper, duration) => {
            swiper.slides.forEach((slide) => {
              (slide as HTMLElement).style.transitionDuration =
                `${duration}ms`;
            });
          }}
        >
            {images?.map((item, index) => (
                <SwiperSlide key={index}>
                <div className="workfolio_box">
                    <img
                    src={item.url}
                    alt={item.alt || ""}
                    className="w-full"
                    />
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}