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
    expect(deckSlides).toHaveLength(22);
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
    const teachingSlides = deckSlides.slice(1);

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
      "Monorepo 让跨项目影响看得见",
      "DDD 从业务事实重新推导边界",
      "规则文件给智能体一份判断基线",
    ];

    for (const title of requiredTitles) {
      expect(deckSlides.find((slide) => slide.title === title)?.eyebrow).toMatch(/^PART 3/);
    }
  });

  it("shows how both rule files provide one judgment baseline", () => {
    const ruleSlide = deckSlides.find((slide) => slide.id === "rule-files");
    const visibleDeck = JSON.stringify(deckSlides);

    expect(ruleSlide?.title).toBe("规则文件给智能体一份判断基线");
    expect(ruleSlide?.titleLines).toEqual(["规则文件给智能体", "一份判断基线"]);
    expect(ruleSlide?.body).toContain("仓库地图");
    expect(ruleSlide?.body).toContain("架构边界");
    expect(ruleSlide?.body).toContain("禁止动作");
    expect(ruleSlide?.body).toContain("完成检查");
    expect(visibleDeck).toContain("CLAUDE.md");
    expect(visibleDeck).toContain("AGENTS.md");
  });

  it("reviews both the request and execution plan from first principles", () => {
    const planningSlide = deckSlides.find((slide) => slide.id === "observable-finish");
    const executionSlide = deckSlides.find((slide) => slide.id === "reason-from-facts");

    expect(planningSlide?.title).toContain("第一性原理");
    expect(planningSlide?.body).toContain("功能是否已存在");
    expect(planningSlide?.body).toContain("是否属于这一层");
    expect(planningSlide?.body).toContain("服务项目目标");
    expect(planningSlide?.body).toContain("前提有误");
    expect(planningSlide?.body).toContain("更简单的方案");
    expect(planningSlide?.points).toEqual(["质疑要有事实", "反对要给替代方案"]);
    expect(executionSlide?.title).toContain("第一性原理审查");
    expect(executionSlide?.body).toContain("目标和约束");
    expect(executionSlide?.body).toContain("正确边界");
    expect(executionSlide?.body).toContain("沿用现有实现");
    expect(executionSlide?.body).toContain("无用复杂度");
    expect(executionSlide?.points).toEqual(["回到目标和约束", "删掉多余复杂度"]);
  });

  it("derives DDD boundaries from business facts", () => {
    const dddSlide = deckSlides.find((slide) => slide.id === "ddd");

    expect(dddSlide?.body).toContain("业务事实");
    expect(dddSlide?.body).toContain("关键规则");
    expect(dddSlide?.body).toContain("限界上下文");
    expect(dddSlide?.body).toContain("第一性原理");
  });

  it("makes crystallized intelligence the central Vibe Coding argument", () => {
    const intelligenceSlide = deckSlides.find((slide) => slide.id === "two-intelligences");
    const shiftSlide = deckSlides.find((slide) => slide.id === "intelligence-shift");
    const architectureSlide = deckSlides.find((slide) => slide.id === "architecture-judgment");
    const promptSlide = deckSlides.find((slide) => slide.id === "prompt-translation");
    const reviewSlide = deckSlides.find((slide) => slide.id === "review-bottleneck");
    const sharedSlide = deckSlides.find((slide) => slide.id === "shared-judgment");
    const patternSlide = deckSlides.find((slide) => slide.id === "design-patterns");

    expect(intelligenceSlide?.body).toContain("流体智力");
    expect(intelligenceSlide?.body).toContain("晶体智力");
    expect(intelligenceSlide?.source).toContain("CATTELL 1963");
    expect(shiftSlide?.body).toContain("目标、架构和审查");
    expect(architectureSlide?.body).toContain("团队要承担后果");
    expect(promptSlide?.body).toContain("失败路径和边界条件");
    expect(reviewSlide?.body).toContain("运行时行为");
    expect(sharedSlide?.title).toContain("软件工程知识");
    expect(sharedSlide?.body).toContain("设计模式");
    expect(sharedSlide?.body).toContain("测试理论");
    expect(sharedSlide?.body).toContain("晶体智力");
    expect(sharedSlide?.body).toContain("项目事实");
    expect(patternSlide?.title).toContain("设计模式");
    expect(patternSlide?.body).toContain("策略、适配器、观察者");
    expect(patternSlide?.body).toContain("当前问题是否匹配");
  });

  it("separates essential complexity from accidental complexity", () => {
    const complexitySlide = deckSlides.find((slide) => slide.id === "complexity-types");

    expect(complexitySlide?.title).toContain("偶然复杂性");
    expect(complexitySlide?.title).toContain("本质复杂性");
    expect(complexitySlide?.body).toContain("样板代码和工具配置");
    expect(complexitySlide?.body).toContain("业务规则、目标冲突和状态边界");
    expect(complexitySlide?.source).toContain("NO SILVER BULLET");
  });

  it("turns reviewed product artifacts into AI-readable crystallized intelligence", () => {
    const artifactSlide = deckSlides.find((slide) => slide.id === "product-artifacts");

    expect(artifactSlide?.title).toContain("晶体智力");
    expect(artifactSlide?.title).toContain("AI");
    expect(artifactSlide?.body).toContain("经过评审的 PRD");
    expect(artifactSlide?.body).toContain("ASCII 线框图");
    expect(artifactSlide?.body).toContain("页面层级、状态和交互");
    expect(artifactSlide?.body).toContain("进仓库");
  });

  it("requires FDE field judgment to flow back into reusable product knowledge", () => {
    const fdeSlide = deckSlides.find((slide) => slide.id === "fde-feedback");

    expect(fdeSlide?.title).toContain("FDE");
    expect(fdeSlide?.body).toContain("客户现场");
    expect(fdeSlide?.body).toContain("产品、规则和测试");
    expect(fdeSlide?.body).toContain("下一位客户可以直接复用");
    expect(fdeSlide?.points).toEqual(["现场经验必须回流", "产品接住重复问题"]);
  });

  it("opens with the threshold and intern metaphor, then closes on shared learning", () => {
    const coverSlide = deckSlides.find((slide) => slide.id === "cover");
    const thresholdSlide = deckSlides.find((slide) => slide.id === "effective-threshold");
    const summarySlide = deckSlides.find((slide) => slide.id === "learning-system");

    expect(coverSlide?.body).toContain("降低代码生成门槛");
    expect(coverSlide?.body).toContain("抬高有效编程门槛");
    expect(coverSlide?.body).toContain("十年晶体智力");
    expect(coverSlide?.body).toContain("精力无限");
    expect(coverSlide?.body).toContain("缺少常识");
    expect(thresholdSlide?.body).toContain("生成、报错、再生成");
    expect(summarySlide?.title).toContain("持续学习系统");
    expect(summarySlide?.body).toContain("积累并共享晶体智力");
    expect(summarySlide?.body).toContain("测试与复盘持续修正");
  });

  it("keeps judgment visuals distinct from the project-structure chapter", () => {
    const secondPart = deckSlides.filter((slide) => slide.eyebrow.startsWith("PART 2"));
    const thirdPart = deckSlides.filter((slide) => slide.eyebrow.startsWith("PART 3"));
    const secondPartVisuals = new Set(secondPart.map((slide) => slide.visual));

    expect(thirdPart.every((slide) => !secondPartVisuals.has(slide.visual))).toBe(true);
  });

  it("keeps one narrative job and one illustration per slide", () => {
    const expectedOrder = [
      "cover",
      "two-intelligences",
      "intelligence-shift",
      "complexity-types",
      "shared-judgment",
      "design-patterns",
      "architecture-judgment",
      "prompt-translation",
      "review-bottleneck",
      "monorepo",
      "ddd",
      "rule-files",
      "product-artifacts",
      "observable-finish",
      "reason-from-facts",
      "adversarial-review",
      "test-layers",
      "a3s-test",
      "reviewer-scope",
      "effective-threshold",
      "fde-feedback",
      "learning-system",
    ];

    expect(deckSlides.map((slide) => slide.id)).toEqual(expectedOrder);
    expect(new Set(deckSlides.map((slide) => slide.title)).size).toBe(deckSlides.length);
    expect(new Set(deckSlides.map((slide) => slide.visual)).size).toBe(deckSlides.length);
  });

  it("keeps the project name out of visible slide content", () => {
    expect(JSON.stringify(deckSlides)).not.toContain("A3S");
  });
});
