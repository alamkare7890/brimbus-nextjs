"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import type { PerfomanceBlock } from "@/types/home";
type Props = {
  data: PerfomanceBlock;
};

export default function PerfomanceBlock({ data }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const digits =
      sectionRef.current.querySelectorAll<HTMLSpanElement>(".counter-digit");

    digits.forEach((digit, index) => {
      const finalNumber = Number(digit.dataset.number);

      if (Number.isNaN(finalNumber)) return;

      const roller = document.createElement("div");
      roller.className = "digit-roller";

      for (let i = 0; i <= 9; i++) {
        const div = document.createElement("div");
        div.textContent = String(i);
        roller.appendChild(div);
      }

      digit.innerHTML = "";
      digit.appendChild(roller);

      gsap.set(roller, { yPercent: 0 });

      gsap.to(roller, {
        yPercent: -(finalNumber * 10),
        duration: 1.5 + index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reset",
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="counter_block py-16 sm:py-20 md:py-24 lg:py-40"
    >
      <div className="container_wrapper">
        <div className="header_content_wrapper text-center mx-auto mb-12 sm:mb-16 md:mb-24 lg:w-[65%]">
          <h6>{data.short_heading}</h6>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 xl:gap-48">
          {data.perfomance_group.map((item, index) => (
            <div className="counter_box" key={index}>
              <div className="counter_nm flex justify-center text-[#111111] font-serif">
                {item.counter_number.split("").map((char, i) =>
                  /\d/.test(char) ? (
                    <span
                      key={i}
                      className="counter-digit overflow-hidden block h-[1em]"
                      data-number={char}
                    />
                  ) : (
                    <span key={i}>{char}</span>
                  )
                )}
                {item.symbol}
              </div>

              <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">
                {item.counter_title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}