import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wordpress/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogSingle({ params }: Props) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return(
    <div>
      <h1 className="text-7xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}