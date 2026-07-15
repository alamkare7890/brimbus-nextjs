import { wpFetch } from "./client";

export async function getPages(id: number) {
  return wpFetch(`/wp/v2/pages/${id}`);
}