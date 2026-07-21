import { wpFetch } from "./client";

export async function getGlobals() {
  return wpFetch(`/custom/v1/options`);
}

export async function getPageBySlug(slug: string) {
  try {
    const page = await wpFetch(`/wp/v2/pages/${slug}`);
    return page || null;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}