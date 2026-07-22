"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialBlock } from "@/types/home";

import "swiper/css";

type Props = {
    data: TestimonialBlock;
};

export default function TestimonialSection({ data }: Props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize(); // Initial check

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <section className="tetimonial_block bg-[#111111] py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="container_wrapper">

                <div className="header_content_wrapper text-center mx-auto mb-20 w-full lg:w-[60%]">
                    <h6 className="text-base text-white">
                        {data.short_heading}
                    </h6>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-[#FFFFFF]"
                        dangerouslySetInnerHTML={{ __html: data.heading }}
                    />
                </div>

                <Swiper
                    className="testimonialSwiper"
                    slidesPerView={isMobile ? 1 : 0}
                    breakpoints={
                        isMobile
                            ? {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                520: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                },
                            }
                            : {}
                    }
                >
                    {data.testimonial_list.map((item, index) => (
                        <SwiperSlide key={index}>

                            {item.video_or_content_block === "Video Box" ? (

                                <div className="testimonial_box">

                                    <video                                        
                                        poster={item.partner_logo?.url}
                                        className="rounded-2xl w-full h-full"
                                    >
                                        <source src={item.video_file?.url} />
                                    </video>
                                    <button className="play-btn playBtn">
                                        ▶
                                    </button>
                                </div>

                            ) : (

                                <div className="bg-[#FFFFFF30] p-10 rounded-2xl h-full">
                                    <div className="test_icon mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="29" viewBox="0 0 38 29"
                                            fill="none">
                                            <path
                                                d="M16.8893 29L3.8147e-06 29L2.32337e-06 11.9412L6.90909 -1.09664e-06L12.0909 -1.54965e-06L6.90909 11.9412L16.8893 11.9412L16.8893 29ZM38 29L21.1107 29L21.1107 11.9412L27.6364 -2.90868e-06L32.8182 -3.36169e-06L27.6364 11.9412L38 11.9412L38 29Z"
                                                fill="#FFCC03" />
                                        </svg>
                                    </div>
                                    <div className="testi_content border-b border-[#FFFFFF30] text-white pb-2">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="testi_profile flex items-center gap-4 mt-6">
                                        <div className="testi_logo  w-20 h-20 bg-white rounded-full">
                                            <Image
                                                src={item.partner_logo!.url}
                                                alt={item.partner_logo!.alt}
                                                width={80}
                                                height={80}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="">
                                            <h6 className="text-lg text-white font-medium">
                                                {item.name}

                                            </h6>
                                            <p className="text-sm text-white font-light !mb-0">{item.designation}</p>
                                        </div>
                                    </div>


                                </div>

                            )}

                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}