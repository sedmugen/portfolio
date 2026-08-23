import { Project } from "@/lib/types";
import { bench } from "./projects/bench";
import { classSyncAi } from "./projects/class-sync-ai";
import { moralMatrix } from "./projects/moral-matrix";
import { gisellesVeganKitchen } from "./projects/giselles-vegan-kitchen";
import { hitmanAssassin } from "./projects/hitman-assassin";
import { onePercent } from "./projects/one-percent";
import { foremanKanban } from "./projects/foreman-kanban";
import { superPong } from "./projects/super-pong";
import { ridgelineProRoofing } from "./projects/ridgeline-pro-roofing";
import { sunbirdSolutions } from "./projects/sunbird-solutions";
import { urbanRun } from "./projects/urban-run";
import { rakatCounter } from "./projects/rakat-counter";
import { himalayanSalt } from "./projects/himalayan-salt";
import { blenderSwordRender } from "./projects/blender-sword-render";
import { climateActionLogo } from "./projects/climate-action-logo";

export const projects: Project[] = [
  // 1. Featured Tier (6 items)
  bench,
  hitmanAssassin,
  moralMatrix,
  classSyncAi,
  gisellesVeganKitchen,
  onePercent,

  // 2. Projects Tier (9 items)
  foremanKanban,
  superPong,
  ridgelineProRoofing,
  sunbirdSolutions,
  urbanRun,
  rakatCounter,
  himalayanSalt,
  blenderSwordRender,
  climateActionLogo,
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
