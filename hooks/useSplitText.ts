"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function useSplitText() {
  useEffect(() => {
    const splitInstances: SplitType[] = [];

    function createScrollTrigger(
      triggerElement: Element,
      timeline: gsap.core.Timeline
    ) {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        },
      });

      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 70%",
        onEnter: () => {
          timeline.play();
        },
      });
    }

    // Split Text
    document.querySelectorAll("[text-split]").forEach((element) => {
      const split = new SplitType(element as HTMLElement, {
        types: "words,chars",
        tagName: "span",
      });

      splitInstances.push(split);
    });

    // Hover Animation
    document.querySelectorAll("[letters-hover]").forEach((element) => {
      const chars = element.querySelectorAll(".char");

      chars.forEach((char, i) => {
        const enter = () => {
          gsap.to(char, {
            y: -16,
            duration: 0.2,
            ease: "back.out(2)",
          });

          if (chars[i - 1]) {
            gsap.to(chars[i - 1], {
              y: -10,
              duration: 0.2,
            });
          }

          if (chars[i + 1]) {
            gsap.to(chars[i + 1], {
              y: -6,
              duration: 0.18,
            });
          }
        };

        const leave = () => {
          gsap.to([char, chars[i - 1], chars[i + 1]].filter(Boolean), {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        char.addEventListener("mouseenter", enter);
        char.addEventListener("mouseleave", leave);
      });
    });

    // Slide Up Animation
    document.querySelectorAll("[letters-slide-up]").forEach((element) => {
      const chars = element.querySelectorAll(".char");

      const tl = gsap.timeline({
        paused: true,
      });

      tl.from(chars, {
        yPercent: 100,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.05,
        },
      });

      createScrollTrigger(element, tl);
    });

    // Scrub Words
    document.querySelectorAll("[scrub-each-word]").forEach((element) => {
      const words = element.querySelectorAll(".word");

      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "top end",
          scrub: true,
        },
      }).from(words, {
        opacity: 0.2,
        duration: 0.2,
        stagger: 0.05,
      });
    });

    gsap.set("[text-split]", {
      opacity: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitInstances.forEach((split) => split.revert());
    };
  }, []);
}