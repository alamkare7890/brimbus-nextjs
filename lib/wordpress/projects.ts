import { wpFetch } from "./client";

export async function getProjects(id: number) {
  return wpFetch(`/custom/v1/projects`);
}
export async function getProject(id: number) {
  return wpFetch(`/custom/v1/projects/${id}`);
}
export async function getProjectsByIds(ids: number[]) {
  const projects = await wpFetch(`/custom/v1/projects?ids=${ids.join(",")}`);
  return projects;
}