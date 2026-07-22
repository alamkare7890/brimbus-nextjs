import { notFound } from "next/navigation";

import { getPageBySlug } from "@/lib/wordpress/global";
import { getPostBySlug } from "@/lib/wordpress/posts";

import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Projects from "@/components/pages/Projects";
import BlogSingle from "@/components/pages/BlogSingle";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Try WordPress Page first
  const page = await getPageBySlug(slug);

  if (page) {
    switch (page.id) {
      case 2915:
        return <About data={page.acf} />;

      case 15:
        return <Contact data={page.acf} />;

      case 12:
        return <Projects data={page.acf} />;

      default:
        notFound();
    }
  }

  // If not a page, try WordPress Post
  const post = await getPostBySlug(slug);

  if (post) {
    return <BlogSingle post={post} />;
  }

  notFound();
}