"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProcessBlock } from "@/types/home";
gsap.registerPlugin(ScrollTrigger);
type Props = {
    data: ProcessBlock;
};

export default function ProcessSection({ data }: Props) {
    useEffect(() => {
        let processTL: gsap.core.Timeline | null = null; 

        const initCardSlider = () => {
            // Kill previous animations
            processTL?.kill();

            ScrollTrigger.getAll().forEach((trigger) => {
                if (
                    trigger.vars.trigger === ".process_block" ||
                    trigger.trigger instanceof Element &&
                    trigger.trigger.classList.contains("process_block")
                ) {
                    trigger.kill();
                }
            });

            const boxes = gsap.utils.toArray<HTMLElement>(".process_box");

            if (!boxes.length) return;

            // =========================
            // Desktop
            // =========================
            if (window.innerWidth > 767) {
                const offsets = [0, 300, 600, 900];

                gsap.set(boxes, {
                    y: (i) => offsets[i] ?? i * 300,
                });

                processTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".process_block",
                        start: "-5% top",
                        end: "+=1200",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        // markers: true,
                    },
                });

                processTL.to(boxes, {
                    y: 0,
                    ease: "none",
                });
            }

            // =========================
            // Mobile
            // =========================
            else {
                gsap.set(boxes, {
                    y: (i) => i * 300,
                    zIndex: (i) => boxes.length + i,
                });

                processTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".process_block",
                        start: "top top",
                        end: "+=2200",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        // markers: true,
                    },
                });

                boxes.forEach((box, i) => {
                    if (i === 0) {
                        processTL!.to(box, {
                            y: 0,
                            duration: 0.5,
                        });
                    } else {
                        processTL!
                            .from(box, {
                                y: 300,
                                opacity: 0,
                            })
                            .add(() => { }, "<");

                        boxes.slice(0, i).forEach((prevBox, index) => {
                            processTL!.to(
                                prevBox,
                                {
                                    scale: 1 - 0.06 * (i - index),
                                    y: -(20 * (i - index)),
                                },
                                "<"
                            );
                        });

                        processTL!.to(
                            box,
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.5,
                            },
                            "<"
                        );
                    }
                });
            }

            ScrollTrigger.refresh();
        };

        initCardSlider();

        window.addEventListener("resize", initCardSlider);

        return () => {
            window.removeEventListener("resize", initCardSlider);
            processTL?.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [data.process_list.length]);
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 process_block">
            <div className="container_wrapper">

                <div className="header_content_wrapper text-center mx-auto mb-24 md:mb-20 w-full lg:w-[60%]">
                    <h6 className="text-base text-black capitalize">
                        {data.short_heading}
                    </h6>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-[#282829]">
                        {data.heading}
                    </h2>
                </div>

                <div className="box_min grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                    {data.process_list.map((item, index) => (
                        <div
                            key={index}
                            className="process_box pb-10 pt-8 px-8 rounded-2xl flex flex-col gap-1 justify-center bg-[#DED3FF]"
                            // style={{
                            //     backgroundColor: item.background_color,
                            // }}
                        >
                            <div className="w-[30px] h-[30px] bg-[#D5FF1B] rounded-full mx-auto mb-4 border-8 border-[#070707]"></div>

                            <h4 className="text-3xl font-medium text-[#111111]">
                                {item.process_title}
                            </h4>

                            <span className="text-xl text-[#111111] font-serif flex items-center gap-1">
                                <span className="text-4xl">—</span>
                                {item.process_sub_title}
                            </span>

                            <p className="text-[#584E4E]">
                                {item.process_description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}