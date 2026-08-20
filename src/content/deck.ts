export type SlideKind = "cream" | "orange";

export type SlideVisualKey =
  | "cover"
  | "intelligence-types"
  | "llm-leverage"
  | "crystal-growth"
  | "shared-crystal"
  | "engineering-knowledge"
  | "monorepo"
  | "ddd-layers"
  | "rule-files"
  | "task-brief"
  | "first-principles"
  | "adversarial-review"
  | "test-layers"
  | "a3s-test"
  | "reviewer-scope"
  | "close";

export interface DeckSlide {
  id: string;
  eyebrow: string;
  title: string;
  titleLines?: string[];
  body: string;
  points?: string[];
  kind: SlideKind;
  visual: SlideVisualKey;
  source?: string;
  caption?: string;
}

export const deckSlides: DeckSlide[] = [
  {
    id: "cover",
    eyebrow: "VIBE CODING · ENGINEERING PLAYBOOK",
    title: "把 Vibe Coding 做成团队能力",
    titleLines: ["把 Vibe Coding", "做成团队能力"],
    body: "LLM 提高试错速度，工程资料保留团队判断。两者接在一起，个人技巧才会变成稳定的开发方式。",
    kind: "orange",
    visual: "cover",
    source: "MONOREPO · a3s-test · AGENTIC REVIEWER",
    caption: "让每次验证服务下一次开发",
  },
  {
    id: "two-intelligences",
    eyebrow: "PART 1 · 01 INTELLIGENCE",
    title: "智力有两种工作方式",
    body: "流体智力处理陌生关系，负责现场推理。晶体智力调用语言、规则和经验，负责快速判断。",
    points: ["流体智力解新题", "晶体智力用经验"],
    kind: "cream",
    visual: "intelligence-types",
    source: "CATTELL 1963 · HORN AND CATTELL 1966",
    caption: "写代码时，两种智力同时工作",
  },
  {
    id: "dont-race-fluid",
    eyebrow: "PART 1 · 01 INTELLIGENCE",
    title: "人应把精力放在可积累的判断上",
    titleLines: ["人应把精力放在", "可积累的判断上"],
    body: "LLM 擅长并行搜索和快速试做。人负责目标与取舍，再借助模型把新解法变成可复用的经验。",
    points: ["模型负责搜索试做", "人负责目标取舍"],
    kind: "orange",
    visual: "llm-leverage",
    source: "HORN AND CATTELL 1966 · ENGINEERING PRACTICE",
    caption: "速度交给模型，方向由人负责",
  },
  {
    id: "grow-crystal",
    eyebrow: "PART 1 · 01 INTELLIGENCE",
    title: "验证把答案变成晶体智力",
    titleLines: ["验证把答案变成", "晶体智力"],
    body: "让模型比较方案，亲手核对来源，再跑测试。能说明适用条件与失败边界，这次答案才值得带到下一次。",
    points: ["比较方案和代价", "记下条件和结果"],
    kind: "cream",
    visual: "crystal-growth",
    source: "VIBE CODING ENGINEERING PRACTICE",
    caption: "未经验证的答案只是候选",
  },
  {
    id: "shared-crystal-principle",
    eyebrow: "PART 2 · 02 SHARED CRYSTAL",
    title: "企业提效先共享晶体智力",
    titleLines: ["企业提效先共享", "晶体智力"],
    body: "个人经验留在聊天记录里，团队仍会重复调查。把验证过的判断交给项目，所有人和智能体才能复用。",
    points: ["个人经验写入项目", "团队从同一入口读取"],
    kind: "orange",
    visual: "shared-crystal",
    source: "ENGINEERING PRACTICE · d95a043b",
    caption: "共享判断减少重复猜测",
  },
  {
    id: "engineering-knowledge",
    eyebrow: "PART 2 · 02 SHARED CRYSTAL",
    title: "共享判断要写进工程材料",
    body: "架构和模式记录取舍，规范说明做法，测试支持复验。新人和智能体由此沿用同一套工程判断。",
    points: ["结论有明确载体", "改动后可以复验"],
    kind: "orange",
    visual: "engineering-knowledge",
    source: "AGENTS.md · d95a043b",
    caption: "后来者可以直接复用",
  },
  {
    id: "monorepo",
    eyebrow: "PART 3 · 03 PROJECT STRUCTURE",
    title: "Monorepo 让跨项目关系集中可见",
    titleLines: ["Monorepo 让跨项目", "关系集中可见"],
    body: "Monorepo 在一个仓库管理相关产品、组件和文档。智能体能追踪跨项目影响，修改仍交给对应子项目。",
    points: ["相关项目同仓管理", "子项目各有所有者"],
    kind: "cream",
    visual: "monorepo",
    source: "README · AGENTS.md · d95a043b",
    caption: "全局可见，局部有主",
  },
  {
    id: "ddd",
    eyebrow: "PART 3 · 03 PROJECT STRUCTURE",
    title: "DDD 用业务边界保护并行开发",
    titleLines: ["DDD 用业务边界", "保护并行开发"],
    body: "DDD 按业务能力组织代码，规则归所属领域。智能体按边界分工，文件重叠和语义冲突都会减少。",
    points: ["一类业务规则一个归属", "跨领域先约定接口"],
    kind: "orange",
    visual: "ddd-layers",
    source: "AGENTS.md · d95a043b",
    caption: "边界清楚以后，并行更安全",
  },
  {
    id: "rule-files",
    eyebrow: "PART 3 · 03 PROJECT STRUCTURE",
    title: "CLAUDE.md 与 AGENTS.md 把工程师灵魂写进项目",
    titleLines: ["CLAUDE.md 与 AGENTS.md", "把工程师灵魂写进项目"],
    body: "它们分别服务 Claude Code 与 Codex 等智能体，内容围绕仓库地图、架构边界、禁止动作和完成检查展开。",
    points: ["规则和代码同行", "先继承判断基线"],
    kind: "cream",
    visual: "rule-files",
    source: "CLAUDE.md · AGENTS.md · d95a043b",
    caption: "工具会换，工程师的原则不换",
  },
  {
    id: "observable-finish",
    eyebrow: "PART 3 · 04 CODING METHOD",
    title: "不做 Yes Man，用第一性原理审查需求",
    titleLines: ["不做 Yes Man", "用第一性原理审查需求"],
    body: "先查功能是否已存在、改动该不该落在这一层，再看是否服务使命。再问问题是否真实、架构是否受损、有没有更简单的办法。",
    points: ["敢于质疑前提", "拒绝时给依据"],
    kind: "orange",
    visual: "task-brief",
    source: "CLAUDE.md · AGENTS.md · d95a043b",
    caption: "有原则地反驳，也给出更好的路",
  },
  {
    id: "reason-from-facts",
    eyebrow: "PART 3 · 04 CODING METHOD",
    title: "通过审查以后，只做最小必要改动",
    titleLines: ["通过审查以后", "只做最小必要改动"],
    body: "先搜索现有实现，再判断变化属于核心还是扩展。选择清楚、显式的代码，不为假想需求预留抽象。",
    points: ["先搜索再实现", "只写当前要用的"],
    kind: "cream",
    visual: "first-principles",
    source: "CLAUDE.md · AGENTS.md · d95a043b",
    caption: "复杂度少一点，判断力多一点",
  },
  {
    id: "adversarial-review",
    eyebrow: "PART 3 · 04 CODING METHOD",
    title: "独立审查专门寻找反例",
    titleLines: ["独立审查专门", "寻找反例"],
    body: "执行者容易围着自己的方案补理由。另一个智能体从反方检查目标、边界和证据，再决定放行或退回。",
    points: ["审查者不继承结论", "证据不足暂不放行"],
    kind: "orange",
    visual: "adversarial-review",
    source: "AGENTIC REVIEWER · 095e3b8",
    caption: "执行负责推进，审查负责找错",
  },
  {
    id: "test-layers",
    eyebrow: "PART 3 · 05 TESTING AND a3s-test",
    title: "三层测试分担不同风险",
    body: "单元测试守业务规则，集成测试查模块接缝，端到端测试从用户入口证明整条路径。",
    points: ["局部测试帮助定位", "端到端测试确认结果"],
    kind: "cream",
    visual: "test-layers",
    source: "AGENTS.md · d95a043b",
    caption: "先查局部原因，再证明完整路径",
  },
  {
    id: "a3s-test",
    eyebrow: "PART 3 · 05 TESTING AND a3s-test",
    title: "a3s-test 把真实操作固定成回归",
    titleLines: ["a3s-test 把真实", "操作固定成回归"],
    body: "流程先用 Agent Session 边走边看，稳定后转成 ACL Suite。本地和 CI 都能重放用户路径。",
    points: ["探索过程保留现场", "稳定路径长期复验"],
    kind: "orange",
    visual: "a3s-test",
    source: "a3s-test AGENTS.md · 00f601b",
    caption: "一次走通可以反复证明",
  },
  {
    id: "reviewer-scope",
    eyebrow: "PART 3 · 06 AGENTIC REVIEWER",
    title: "Agentic Reviewer 编排持续开发",
    titleLines: ["Agentic Reviewer", "编排持续开发"],
    body: "它观察并编排多个 Codex 会话，把稳定做法整理成候选规则。发现偏差后提出下一步，用户授权后再由测试验收。",
    points: ["经验经确认写入规则", "关键动作逐次授权"],
    kind: "cream",
    visual: "reviewer-scope",
    source: "AGENTIC REVIEWER README · ARCHITECTURE · 095e3b8",
    caption: "检查结果继续服务下一轮",
  },
  {
    id: "close",
    eyebrow: "VIBE CODING · CLOSING",
    title: "下一轮开发少猜一步",
    titleLines: ["下一轮开发", "少猜一步"],
    body: "LLM 加快试错，工程材料保存判断。边界、规则和测试持续更新，下一次开发便能少猜一步。",
    kind: "cream",
    visual: "close",
    source: "MONOREPO · a3s-test · AGENTIC REVIEWER",
    caption: "速度来自可复用的经验",
  },
];
