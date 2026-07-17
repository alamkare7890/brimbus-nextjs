"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPosts } from "@/types/home";

type Props = {
  post: BlogPosts;
};

export default function BlogPostCard({ post }: Props) {
  return (
    <article className="insight_box">
      <Link href={`${post.slug}`} className="block overflow-hidden rounded-2xl w-full">
          <Image
            src={post.featured_image}
            alt={post.title}
            width={700}
            height={500}
            className="w-full h-[300px] object-cover transition duration-500 hover:scale-105"
          />
      </Link>

      <div className="insight_content py-5 border-b border-[#28282932] mb-3">
        {/* {categories && (
          <div className="published_date">
            <strong>{category}</strong>
          </div>
        )} */}

        <Link href={`${post.slug}`}>
          <h4
            className="text-2xl xl:text-3xl font-bold text-[#111111] mt-3 line-clamp-2 hover:text-[#FFCC03] transition-colors"
            dangerouslySetInnerHTML={{
              __html: post.title,
            }}
          />
        </Link>
      </div>

      <Link
        href={`${post.slug}`}
        className="visit_btn inline-flex items-center gap-3 group"
      >
        <span className="uppercase">Read More</span>

        <strong className="transition-transform duration-300 group-hover:translate-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M1 11.6L6.23 6.36L11.46 1.12M11.28 8.92L11.58 1L3.66 1.3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </strong>
      </Link>
    </article>
  );
}