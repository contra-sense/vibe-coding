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
    expect(deckSlides).toHaveLength(16);
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

  it("keeps the teaching slides concise enough to present aloud", () => {
    const teachingSlides = deckSlides.slice(1, -1);

    for (const slide of teachingSlides) {
      const bodyLength = Array.from(slide.body).length;

      expect(bodyLength).toBeGreaterThanOrEqual(35);
      expect(bodyLength).toBeLessThanOrEqual(60);
      expect(slide.points).toHaveLength(2);
      expect(slide.points?.every((point) => Array.from(point).length <= 16)).toBe(true);
    }
  });

  it("keeps the testing tool and Agentic Reviewer in one chapter each", () => {
    expect(
      deckSlides
        .filter((slide) => slide.eyebrow.includes("a3s-test"))
        .every((slide) => slide.eyebrow.startsWith("PART 3 · 05")),
    ).toBe(true);
    expect(
      deckSlides
        .filter((slide) => slide.eyebrow.includes("AGENTIC REVIEWER"))
        .every((slide) => slide.eyebrow.startsWith("PART 3 · 06")),
    ).toBe(true);
  });

  it("keeps the three-part narrative in the requested order", () => {
    const firstPart = deckSlides.findIndex((slide) => slide.eyebrow.startsWith("PART 1"));
    const secondPart = deckSlides.findIndex((slide) => slide.eyebrow.startsWith("PART 2"));
    const thirdPart = deckSlides.findIndex((slide) => slide.eyebrow.startsWith("PART 3"));

    expect(firstPart).toBeGreaterThan(0);
    expect(secondPart).toBeGreaterThan(firstPart);
    expect(thirdPart).toBeGreaterThan(secondPart);
  });

  it("places project structure and rule-file design in part three", () => {
    const requiredTitles = [
      "Monorepo 让跨项目关系集中可见",
      "DDD 用业务边界保护并行开发",
      "CLAUDE.md 与 AGENTS.md 把工程师灵魂写进项目",
    ];

    for (const title of requiredTitles) {
      expect(deckSlides.find((slide) => slide.title === title)?.eyebrow).toMatch(/^PART 3/);
    }
  });

  it("shows how both rule files shape the same engineer soul", () => {
    const ruleSlide = deckSlides.find((slide) => slide.id === "rule-files");
    const visibleDeck = JSON.stringify(deckSlides);

    expect(ruleSlide?.title).toBe("CLAUDE.md 与 AGENTS.md 把工程师灵魂写进项目");
    expect(ruleSlide?.titleLines).toEqual(["CLAUDE.md 与 AGENTS.md", "把工程师灵魂写进项目"]);
    expect(ruleSlide?.body).toContain("仓库地图");
    expect(ruleSlide?.body).toContain("架构边界");
    expect(ruleSlide?.body).toContain("禁止动作");
    expect(ruleSlide?.body).toContain("完成检查");
    expect(visibleDeck).toContain("CLAUDE.md");
    expect(visibleDeck).toContain("AGENTS.md");
  });

  it("grounds principled rebuttal in the first-principles gate", () => {
    const planningSlide = deckSlides.find((slide) => slide.id === "observable-finish");

    expect(planningSlide?.title).toContain("不做 Yes Man");
    expect(planningSlide?.title).toContain("第一性原理");
    expect(planningSlide?.body).toContain("功能是否已存在");
    expect(planningSlide?.body).toContain("该不该落在这一层");
    expect(planningSlide?.body).toContain("服务使命");
    expect(planningSlide?.body).toContain("问题是否真实");
    expect(planningSlide?.body).toContain("架构是否受损");
    expect(planningSlide?.body).toContain("更简单的办法");
    expect(planningSlide?.points).toEqual(["敢于质疑前提", "拒绝时给依据"]);
  });

  it("uses a distinct orange visual chapter for shared crystallized intelligence", () => {
    const secondPart = deckSlides.filter((slide) => slide.eyebrow.startsWith("PART 2"));
    const thirdPart = deckSlides.filter((slide) => slide.eyebrow.startsWith("PART 3"));
    const secondPartVisuals = new Set(secondPart.map((slide) => slide.visual));

    expect(secondPart.every((slide) => slide.kind === "orange")).toBe(true);
    expect(thirdPart.every((slide) => !secondPartVisuals.has(slide.visual))).toBe(true);
  });

  it("keeps one narrative job and one illustration per slide", () => {
    const expectedOrder = [
      "cover",
      "two-intelligences",
      "dont-race-fluid",
      "grow-crystal",
      "shared-crystal-principle",
      "engineering-knowledge",
      "monorepo",
      "ddd",
      "rule-files",
      "observable-finish",
      "reason-from-facts",
      "adversarial-review",
      "test-layers",
      "a3s-test",
      "reviewer-scope",
      "close",
    ];

    expect(deckSlides.map((slide) => slide.id)).toEqual(expectedOrder);
    expect(new Set(deckSlides.map((slide) => slide.title)).size).toBe(deckSlides.length);
    expect(new Set(deckSlides.map((slide) => slide.visual)).size).toBe(deckSlides.length);
  });

  it("keeps the project name out of visible slide content", () => {
    expect(JSON.stringify(deckSlides)).not.toContain("A3S");
  });
});
