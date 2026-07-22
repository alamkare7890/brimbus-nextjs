"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectsBannerBlock } from "@/types/projects";

gsap.registerPlugin(ScrollTrigger);
type Props = {
  data: ProjectsBannerBlock;
};
export default function ProjectsBanner({ data }: Props) {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mediaRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(mediaRef.current, {
        scale: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: mediaRef.current,
          start: "-20% center",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, mediaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="service_banner pt-40 pb-32 md:pb-40">
      <div className="about_banner_content text-center max-w-200 mx-auto">
        {data.short_heading && (
          <h6 className="text-base text-[#111111] mb-4">
            {data.short_heading}
          </h6>
        )}

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-black"
          dangerouslySetInnerHTML={{
            __html: data.heading,
          }}
        />
      </div>

      {
    (data.banner_video || data.banner_image) && (
      <div
        ref={mediaRef}
        className="video_box mt-20 md:mt-24 xl:mt-30 overflow-hidden"
      >
        {data.banner_video ? (
          <video
            className="w-full h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={data.banner_video} type="video/webm" />
          </video>
        ) : (
          <img
            src={data.banner_image}
            alt="Service Banner"
            className="w-full h-auto object-cover"
          />
        )}
      </div>
    )
  }
    </section >
  );
}