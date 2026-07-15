import { wpFetch } from "./client";

export async function getHomePage() {
  return wpFetch(`/wp/v2/pages/16054`);
}