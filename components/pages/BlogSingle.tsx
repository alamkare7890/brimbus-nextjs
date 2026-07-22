// components/pages/BlogSingle.tsx
import Link from "next/link";
type Props = {
  post: {
    title: string;
    content: string;
  };
};

export default function BlogSingle({ post }: Props) {
  const getReadingTime = (html: string) => {
    // Remove HTML tags
    const text = html.replace(/<[^>]*>/g, "");

    // Count words
    const words = text.trim().split(/\s+/).length;

    // Average reading speed: 200 words/minute
    const minutes = Math.max(1, Math.ceil(words / 200));

    return `${minutes} Min Read`;
  };
  const readingTime = getReadingTime(post.content);
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-8">

        {/* Hero */}
        <header className="pt-40 md:pt-52 pb-16 border-b border-neutral-200">

          <div className="max-w-4xl mx-auto text-center">

            {/* Breadcrumb */}
            <nav
              className="flex justify-center items-center gap-2 text-sm text-neutral-500 mb-8"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>

              <span>/</span>

              <Link href="/blogs" className="hover:text-black transition">
                Blogs
              </Link>

              <span>/</span>

              <span className="text-black font-medium truncate max-w-[240px]">
                {post.title}
              </span>
            </nav>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl md:!leading-12 font-semibold tracking-tight text-neutral-900">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex justify-center items-center gap-4 mt-8 text-sm text-neutral-500">
              

              <span>•</span>

              <span>{readingTime}</span>
            </div>
          </div>
        </header>

        {/* Article */}
        <main className="py-16 md:py-20">
          <div
            className="
          mx-auto
          max-w-4xl
          prose
          prose-lg
          lg:prose-xl
          max-w-none
          prose-headings:font-bold
          prose-headings:text-neutral-900
          prose-p:text-neutral-700
          prose-p:leading-8
          prose-a:text-primary
          prose-img:rounded-2xl
          prose-img:shadow-lg
          prose-blockquote:border-l-4
          prose-blockquote:border-primary
          prose-blockquote:italic wp-content
        "
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </main>

      </div>
    </section>
  );
}