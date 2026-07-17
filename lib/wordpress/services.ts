import { wpFetch } from "./client";

export async function getServices(id: number) {
  return wpFetch(`/custom/v1/services`);
}
export async function getService(id: number) {
  return wpFetch(`/custom/v1/services/${id}`);
}
export async function getServicesByIds(ids: number[]) {
  const services = await wpFetch(`/custom/v1/services?ids=${ids.join(",")}`);
  return services;
}