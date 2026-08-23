import { Project } from "@/lib/types";
import { bench } from "./projects/bench";
import { classSyncAi } from "./projects/class-sync-ai";
import { moralMatrix } from "./projects/moral-matrix";
import { gisellesVeganKitchen } from "./projects/giselles-vegan-kitchen";
import { urbanRun } from "./projects/urban-run";
import { hitmanAssassin } from "./projects/hitman-assassin";
import { onePercent } from "./projects/one-percent";
import { foremanKanban } from "./projects/foreman-kanban";
import { superPong } from "./projects/super-pong";
import { ridgelineProRoofing } from "./projects/ridgeline-pro-roofing";
import { sunbirdSolutions } from "./projects/sunbird-solutions";
import { rakatCounter } from "./projects/rakat-counter";
import { himalayanSalt } from "./projects/himalayan-salt";
import { blenderSword } from "./projects/blender-sword";
import { climateActionCoalition } from "./projects/climate-action-coalition";

export const projects: Project[] = [
  bench,
  classSyncAi,
  moralMatrix,
  gisellesVeganKitchen,
  urbanRun,
  hitmanAssassin,
  onePercent,
  foremanKanban,
  superPong,
  ridgelineProRoofing,
  sunbirdSolutions,
  rakatCounter,
  himalayanSalt,
  blenderSword,
  climateActionCoalition,
];

/**
 * Sorts an array of projects in ascending order by their `order` property.
 */
export function sortProjectsByOrder(items: Project[]): Project[] {
  return [...items].sort((a, b) => a.order - b.order);
}

/**
 * Returns all projects sorted by order (featured first, followed by remaining projects).
 */
export function getAllProjects(): Project[] {
  const featured = getFeaturedProjects();
  const projectsTier = getProjectsTier();
  return [...featured, ...projectsTier];
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
