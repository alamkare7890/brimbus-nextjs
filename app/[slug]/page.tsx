import { getPageBySlug } from "@/lib/wordpress/global";


import { notFound } from "next/navigation";

import About from "@/components/pages/About";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  switch (page.id) {
    case "2915":
      return <About data={page.acf} />;
    default:
  }
}