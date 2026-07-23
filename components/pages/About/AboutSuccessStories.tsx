"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeButton from "@/components/common/ThemeButton";
gsap.registerPlugin(ScrollTrigger);
import { AboutSuccessStoriesBlock } from "@/types/about";

type Props = {
  data: AboutSuccessStoriesBlock;
};

export default function AboutSuccessStories({ data }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const digits =
        section.querySelectorAll<HTMLSpanElement>(".counter-digit");

      digits.forEach((digit, index) => {
        const finalNumber = Number(digit.dataset.number);

        if (isNaN(finalNumber)) return;

        // Prevent duplicate rollers in React Strict Mode
        if (digit.querySelector(".digit-roller")) return;

        const roller = document.createElement("div");
        roller.className = "digit-roller";

        for (let i = 0; i <= 9; i++) {
          const div = document.createElement("div");
          div.textContent = i.toString();
          roller.appendChild(div);
        }

        digit.appendChild(roller);

        gsap.fromTo(
          roller,
          {
            yPercent: 0,
          },
          {
            yPercent: -(finalNumber * 10),
            duration: 1.5,
            ease: "power3.out",
            delay: index * 0.08,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              once: true,
            },
          }
        );
      });
    }, section);

    return () => {
      // Kill GSAP animations & ScrollTriggers
      ctx.revert();

      // Remove manually created DOM elements
      section.querySelectorAll(".digit-roller").forEach((roller) => {
        roller.remove();
      });
    };
  }, []);
  return (
    <section ref={sectionRef} className="counter_block bg-[#111111] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container_wrapper">
        <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-12 mb-12">
          {/* Left */}
          <div className="w-full lg:w-[65%]">
            <h6
              className="text-base text-white capitalize"
              dangerouslySetInnerHTML={{ __html: data.short_heading }}
            />

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-white"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

            {data.button?.title && (
              <div className="mx-auto md:mr-0 mt-6 text-center md:text-start hidden lg:block">
                <ThemeButton
                  href={data.button.url}                  
                  className="theme_button theme_button_dark bg-white"
                >
                  <span className="button__spotlight"></span>
                  <span className="button__text text-[#111111]">
                    {data.button.title}
                  </span>
                </ThemeButton>
              </div>
            )}
          </div>

          {/* Right */}
          <div className="w-full lg:w-2/3">
            <div
              className="text-white space-y-5"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />

            {data.button?.title && (
              <div className="mt-6 block lg:hidden">
                <ThemeButton
                  href={data.button.url}                  
                  className="theme_button theme_button_dark bg-white"
                >
                  <span className="button__spotlight"></span>
                  <span className="button__text text-[#111111]">
                    {data.button.title}
                  </span>
                </ThemeButton>
              </div>
            )}
          </div>
        </div>

        {/* Counter */}
        <div className="flex flex-wrap justify-end gap-12 lg:gap-20 xl:gap-48">
          {data.perfomance_group.map((item, index) => (
            <div className="counter_box" key={index}>
              <div className="counter_nm flex justify-center text-white font-serif">
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

              <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white">
                {item.counter_title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}