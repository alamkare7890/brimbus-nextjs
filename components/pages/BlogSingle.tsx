// components/pages/BlogSingle.tsx

type Props = {
  post: {
    title: string;
    content: string;
  };
};

export default function BlogSingle({ post }: Props) {
  return (
    <article className="container mx-auto py-10">
      <h1 className="text-5xl font-bold mb-6">
        {post.title}
      </h1>

      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </article>
  );
}