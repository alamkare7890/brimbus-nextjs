import { wpFetch } from "./client";

export async function getHomePage() {
  const pages = await wpFetch("/wp/v2/pages?slug=home");

  if (!pages.length) {
    throw new Error("Home page not found");
  }

  return pages[0];
}