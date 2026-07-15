import { wpFetch } from "./client";

export async function getGlobals() {
  return wpFetch(`/custom/v1/options`);
}