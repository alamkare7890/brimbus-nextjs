import { wpFetch } from "./client";

export async function getProjects(id: number) {
  return wpFetch(`/wp/v2/project/${id}`);
}