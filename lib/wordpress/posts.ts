import { wpFetch } from "./client";

export async function getPosts() {
  return wpFetch("/wp/v2/posts?_embed");
}

export async function getPost(slug: string) {
  return wpFetch(`/wp/v2/posts?slug=${slug}&_embed`);
}