import { describe, expect, it } from "vitest";
import {
  boundaryDecisions,
  deckSlides,
  domainLayers,
  failurePatterns,
  principles,
  reviewChecks,
  sources,
  surfaceArtifacts,
  taskAnnotations,
  workflowSteps,
} from "./content";

describe("content contracts", () => {
  it("keeps every research source pinned to a commit", () => {
    expect(sources).toHaveLength(11);
    for (const source of sources) {
      expect(source.commit).toMatch(/^[a-f0-9]{7}$/);
      expect(source.href).toContain("/blob/");
    }
  });

  it("marks every private source explicitly", () => {
    const privateSources = sources.filter((source) => source.access === "private");

    expect(privateSources).toHaveLength(4);
    expect(privateSources.every((source) => source.project === "Agentic Reviewer")).toBe(true);
  });

  it("keeps the handbook structure complete", () => {
    expect(principles).toHaveLength(4);
    expect(domainLayers).toHaveLength(4);
    expect(boundaryDecisions).toHaveLength(5);
    expect(reviewChecks).toHaveLength(5);
    expect(workflowSteps).toHaveLength(7);
    expect(surfaceArtifacts).toHaveLength(4);
    expect(taskAnnotations).toHaveLength(10);
    expect(failurePatterns).toHaveLength(7);
    expect(deckSlides).toHaveLength(9);
  });

  it("contains no em dash or separator en dash in visible content", () => {
    const visibleContent = JSON.stringify({
      boundaryDecisions,
      deckSlides,
      domainLayers,
      failurePatterns,
      principles,
      reviewChecks,
      surfaceArtifacts,
      taskAnnotations,
      workflowSteps,
    });

    expect(visibleContent).not.toMatch(/[—–]/);
  });
});
