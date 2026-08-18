import { describe, expect, it } from "vitest";
import {
  contextTiles,
  deckSlides,
  failurePatterns,
  loopSteps,
  principles,
  sources,
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

  it("keeps exact visual cell counts", () => {
    expect(principles).toHaveLength(4);
    expect(loopSteps).toHaveLength(5);
    expect(contextTiles).toHaveLength(5);
    expect(failurePatterns).toHaveLength(6);
    expect(deckSlides).toHaveLength(8);
  });

  it("contains no em dash or separator en dash in visible content", () => {
    const visibleContent = JSON.stringify({
      contextTiles,
      deckSlides,
      failurePatterns,
      loopSteps,
      principles,
      sources,
    });

    expect(visibleContent).not.toMatch(/[—–]/);
  });
});
