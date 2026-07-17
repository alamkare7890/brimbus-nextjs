import { wpFetch } from "./client";

export async function getPosts() {
  return wpFetch(`/custom/v1/posts`);
}
export async function getPost(id: number) {
  return wpFetch(`/custom/v1/posts/${id}`);
}
export async function getPostBySlug(slug: string) {
  return wpFetch(`/custom/v1/posts/${slug}`);
}
export async function getPostsByIds(ids: number[]) {
  const posts = await wpFetch(`/custom/v1/posts?ids=${ids.join(",")}`);
  return posts;
}