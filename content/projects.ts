import { Project } from "@/lib/types";
import { bench } from "./projects/bench";
import { classSyncAi } from "./projects/class-sync-ai";
import { moralMatrix } from "./projects/moral-matrix";
import { gisellesVeganKitchen } from "./projects/giselles-vegan-kitchen";
import { onePercent } from "./projects/one-percent";
import { hitmanAssassin } from "./projects/hitman-assassin";

export const projects: Project[] = [
  bench,
  classSyncAi,
  moralMatrix,
  gisellesVeganKitchen,
  onePercent,
  hitmanAssassin,
];

/**
 * Sorts an array of projects in ascending order by their `order` property.
 */
export function sortProjectsByOrder(items: Project[]): Project[] {
  return [...items].sort((a, b) => a.order - b.order);
}

/**
 * Returns all projects sorted by order.
 */
export function getAllProjects(): Project[] {
  return sortProjectsByOrder(projects);
}

/**
 * Returns projects filtered by tier ("featured" | "projects") and sorted by order.
 */
export function getProjectsByTier(tier: Project["tier"]): Project[] {
  return sortProjectsByOrder(projects.filter((project) => project.tier === tier));
}

/**
 * Returns all Featured tier projects sorted by order.
 */
export function getFeaturedProjects(): Project[] {
  return getProjectsByTier("featured");
}

/**
 * Returns all Projects tier (More Work) projects sorted by order.
 */
export function getProjectsTier(): Project[] {
  return getProjectsByTier("projects");
}

/**
 * Finds a single project by its slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
