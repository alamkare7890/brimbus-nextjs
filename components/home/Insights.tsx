"use client";
import { useEffect, useState } from "react";


import type { OurInsights, BlogPosts } from "@/types/home";
import BlogPostCard from "../common/BlogPostCard";
import { getPostsByIds } from "@/lib/wordpress/posts";

type Props = {
  data: OurInsights;
};

export default function InsightSection({ data }: Props) {
    const [posts, setPosts] = useState<BlogPosts[]>([]);

    useEffect(() => {
    async function load() {
        const result = await getPostsByIds(data.insights_list);
        setPosts(result);
    }

    load();
    }, [data.insights_list]);
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-4">

        <div className="heading_wrapper text-center mb-12 md:mb-16">
          <h6 className="text-base text-[#111111]">
            {data.short_heading}
          </h6>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium">
            {data.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
            {posts.map((post: BlogPosts, index: number) => (
                <BlogPostCard
                    key={post.id}
                    post={post}
                />
            ))}
          

        </div>

      </div>
    </section>
  );
}