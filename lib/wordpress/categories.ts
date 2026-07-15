import { wpFetch } from "./client";

export function getCategories() {
  return wpFetch("/wp/v2/categories");
}