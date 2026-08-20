export type SlideKind = "cream" | "orange";

export type SlideVisualKey =
  | "cover"
  | "intelligence-types"
  | "llm-leverage"
  | "complexity-types"
  | "architecture-system"
  | "crystal-growth"
  | "review-observer"
  | "engineering-knowledge"
  | "design-patterns"
  | "monorepo"
  | "ddd-layers"
  | "rule-files"
  | "product-artifacts"
  | "task-brief"
  | "first-principles"
  | "adversarial-review"
  | "test-layers"
  | "a3s-test"
  | "reviewer-scope"
  | "effective-threshold"
  | "fde-learning"
  | "learning-system";

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
    title: "高效 Vibe Coding 指南",
    titleLines: ["高效 Vibe Coding 指南"],
    body: "Vibe Coding 降低代码生成门槛，也抬高有效编程门槛。用十年晶体智力，指挥一个精力无限、缺少常识的实习生。",
    kind: "orange",
    visual: "cover",
    source: "MONOREPO · a3s-test · AGENTIC REVIEWER",
    caption: "让速度有方向，让经验可复用",
  },
  {
    id: "two-intelligences",
    eyebrow: "PART 1 · 01 INTELLIGENCE",
    title: "流体智力解新题，晶体智力调用经验",
    titleLines: ["流体智力解新题", "晶体智力调用经验"],
    body: "流体智力处理陌生关系和现场推理。晶体智力调用后天获得的知识、技能与经验，让人更快识别模式并作出判断。",
    points: ["流体智力处理新问题", "晶体智力复用旧经验"],
    kind: "cream",
    visual: "intelligence-types",
    source: "CATTELL 1963 · HORN AND CATTELL 1966",
    caption: "两种智力共同参与编程",
  },
  {
    id: "intelligence-shift",
    eyebrow: "PART 1 · 01 INTELLIGENCE",
    title: "模型接走大量试做，人更依赖晶体智力",
    titleLines: ["模型接走大量试做", "人更依赖晶体智力"],
    body: "LLM 能整理语法、搜索解法并快速推演。开发者的工作随之集中到目标、架构和审查，经验决定生成代码能否使用。",
    points: ["模型加快推演和生成", "人负责判断和后果"],
    kind: "orange",
    visual: "llm-leverage",
    source: "HORN AND CATTELL 1966 · ENGINEERING PRACTICE",
    caption: "重复试做交给模型，判断责任留给人",
  },
  {
    id: "complexity-types",
    eyebrow: "PART 1 · 01 INTELLIGENCE",
    title: "AI 能压低偶然复杂性，本质复杂性仍要由人判断",
    titleLines: ["AI 能压低偶然复杂性", "本质复杂性仍要由人判断"],
    body: "语法、样板代码和工具配置多半属于偶然复杂性，模型很擅长处理。业务规则、目标冲突和状态边界来自问题本身，仍需要人判断。",
    points: ["偶然复杂性可以自动化", "本质复杂性来自问题"],
    kind: "cream",
    visual: "complexity-types",
    source: "FRED BROOKS · NO SILVER BULLET 1986",
    caption: "实现负担可以减少，问题本身仍要理解",
  },
  {
    id: "shared-judgment",
    eyebrow: "PART 1 · 01 INTELLIGENCE",
    title: "许多软件工程知识都是现成的晶体智力",
    titleLines: ["许多软件工程知识", "都是现成的晶体智力"],
    body: "软件工程把长期经验整理成架构原则、设计模式、DDD 与测试理论。这些晶体智力能帮团队少走弯路，也要结合项目事实取舍。",
    points: ["先调用已有知识", "再结合项目事实"],
    kind: "orange",
    visual: "engineering-knowledge",
    source: "SOFTWARE ENGINEERING · AGENTS.md · d95a043b",
    caption: "成熟知识可以直接参与判断",
  },
  {
    id: "design-patterns",
    eyebrow: "PART 1 · 01 INTELLIGENCE",
    title: "设计模式把反复验证的解法变成共同语言",
    titleLines: ["设计模式把反复验证的解法", "变成共同语言"],
    body: "策略、适配器、观察者等模式，把反复出现的结构问题和取舍整理成共同语言。模型可以调用，工程师仍要判断当前问题是否匹配。",
    points: ["模式记录常见取舍", "先判断问题再选模式"],
    kind: "cream",
    visual: "design-patterns",
    source: "DESIGN PATTERNS · GAMMA ET AL. 1994",
    caption: "模式提供经验，现场决定是否适用",
  },
  {
    id: "architecture-judgment",
    eyebrow: "PART 2 · 02 JUDGMENT",
    title: "架构选择要由业务条件决定",
    titleLines: ["架构选择", "要由业务条件决定"],
    body: "缓存放本地还是 Redis，系统维持单体还是拆成服务，要看业务规模、故障代价和团队能力。模型可以列选项，团队要承担后果。",
    points: ["技术选型要看场景", "架构选择要算代价"],
    kind: "orange",
    visual: "architecture-system",
    source: "ARCHITECTURE · ENGINEERING PRACTICE",
    caption: "模型能列方案，团队承担后果",
  },
  {
    id: "prompt-translation",
    eyebrow: "PART 2 · 02 JUDGMENT",
    title: "Prompt 的质量取决于需求有没有想清楚",
    titleLines: ["Prompt 的质量", "取决于需求有没有想清楚"],
    body: "“登录要丝滑”还不能开工。工程师要把业务语言拆成可执行的技术约束，并提前写清失败路径和边界条件。",
    points: ["把愿望写成约束", "把边界写在开工前"],
    kind: "cream",
    visual: "crystal-growth",
    source: "REQUIREMENTS · ENGINEERING PRACTICE",
    caption: "边界写清楚，生成才有方向",
  },
  {
    id: "review-bottleneck",
    eyebrow: "PART 2 · 02 JUDGMENT",
    title: "生成越快，审查责任越重",
    titleLines: ["生成越快", "审查责任越重"],
    body: "代码可以成批产出，验证仍要逐条回到事实。复杂度、安全风险、错误边界和运行时行为，都需要工程师亲自确认。",
    points: ["看出风险才算读懂", "调试要回到底层"],
    kind: "orange",
    visual: "review-observer",
    source: "CODE REVIEW · DEBUGGING PRACTICE",
    caption: "产出越快，验收责任越重",
  },
  {
    id: "monorepo",
    eyebrow: "PART 3 · 03 PROJECT STRUCTURE",
    title: "Monorepo 让跨项目影响看得见",
    titleLines: ["Monorepo 让跨项目影响", "看得见"],
    body: "相关产品、组件和文档放在同一个仓库，智能体能追踪跨项目影响。每处改动仍由对应子项目负责，避免全局乱改。",
    points: ["关系集中可见", "修改仍有归属"],
    kind: "cream",
    visual: "monorepo",
    source: "README · AGENTS.md · d95a043b",
    caption: "能看全局，也只改本地",
  },
  {
    id: "ddd",
    eyebrow: "PART 3 · 03 PROJECT STRUCTURE",
    title: "DDD 从业务事实重新推导边界",
    titleLines: ["DDD 从业务事实", "重新推导边界"],
    body: "DDD 先确认业务事实与关键规则，再据此划分限界上下文。它从问题和约束重新推导代码边界，这就是第一性原理的工程用法。",
    points: ["先确认业务事实", "再推导代码边界"],
    kind: "orange",
    visual: "ddd-layers",
    source: "AGENTS.md · d95a043b",
    caption: "业务事实决定代码边界",
  },
  {
    id: "rule-files",
    eyebrow: "PART 3 · 03 PROJECT STRUCTURE",
    title: "规则文件给智能体一份判断基线",
    titleLines: ["规则文件给智能体", "一份判断基线"],
    body: "CLAUDE.md 与 AGENTS.md 说明仓库地图和架构边界，也写清禁止动作与完成检查。智能体开工前先读项目约束。",
    points: ["规则和代码同行", "开工前先读现场"],
    kind: "cream",
    visual: "rule-files",
    source: "CLAUDE.md · AGENTS.md · d95a043b",
    caption: "工具会变，判断基线留在项目",
  },
  {
    id: "product-artifacts",
    eyebrow: "PART 3 · 03 PROJECT STRUCTURE",
    title: "PRD 与 ASCII 线框图让晶体智力更容易被 AI 使用",
    titleLines: ["PRD 与 ASCII 线框图", "让晶体智力更容易被 AI 使用"],
    body: "经过评审的 PRD 写清目标与边界，ASCII 线框图把页面层级、状态和交互写成文本。它们能进仓库，也能直接交给智能体。",
    points: ["先评审再写进项目", "文本版本可以追踪"],
    kind: "orange",
    visual: "product-artifacts",
    source: "PRODUCT REQUIREMENTS · ASCII WIREFRAME",
    caption: "产品判断写成文本，智能体才能复用",
  },
  {
    id: "observable-finish",
    eyebrow: "PART 3 · 04 CODING METHOD",
    title: "第一性原理先检查需求是否成立",
    titleLines: ["第一性原理", "先检查需求是否成立"],
    body: "先查功能是否已存在，改动是否属于这一层，再看它是否服务项目目标。发现前提有误，就用事实说明，并给出更简单的方案。",
    points: ["质疑要有事实", "反对要给替代方案"],
    kind: "cream",
    visual: "task-brief",
    source: "CLAUDE.md · AGENTS.md · d95a043b",
    caption: "质疑要落到事实和后果",
  },
  {
    id: "reason-from-facts",
    eyebrow: "PART 3 · 04 CODING METHOD",
    title: "执行方案也要经过第一性原理审查",
    titleLines: ["执行方案也要经过", "第一性原理审查"],
    body: "方案确定前，先回到目标和约束，检查改动是否落在正确边界，能否沿用现有实现。扩大范围或增加无用复杂度的方案，应当退回重想。",
    points: ["回到目标和约束", "删掉多余复杂度"],
    kind: "orange",
    visual: "first-principles",
    source: "CLAUDE.md · AGENTS.md · d95a043b",
    caption: "方案也要回答为什么这样做",
  },
  {
    id: "adversarial-review",
    eyebrow: "PART 3 · 04 CODING METHOD",
    title: "独立审查要主动寻找反例",
    titleLines: ["独立审查", "要主动寻找反例"],
    body: "执行者容易围着自己的方案补理由。另一个智能体从目标、边界和证据入手找错，证据不足就退回，无法判断就保留未知。",
    points: ["审查者不继承结论", "证据不足暂不放行"],
    kind: "cream",
    visual: "adversarial-review",
    source: "AGENTIC REVIEWER · 095e3b8",
    caption: "执行推进，审查找错",
  },
  {
    id: "test-layers",
    eyebrow: "PART 3 · 05 TESTING AND a3s-test",
    title: "测试分层以后，失败才容易定位",
    titleLines: ["测试分层以后", "失败才容易定位"],
    body: "测试按错误来源分层。局部规则和模块接缝先各自验证，最后再从用户入口复验完整路径，避免一个通过掩盖另一处缺口。",
    points: ["局部测试帮助定位", "端到端测试确认结果"],
    kind: "orange",
    visual: "test-layers",
    source: "AGENTS.md · d95a043b",
    caption: "局部测试找原因，端到端确认结果",
  },
  {
    id: "a3s-test",
    eyebrow: "PART 3 · 05 TESTING AND a3s-test",
    title: "a3s-test 把真实操作变成回归",
    titleLines: ["a3s-test 把真实操作", "变成回归"],
    body: "用 Agent Session 边走边观察，路径稳定后转成 ACL Suite。本地和 CI 都能按用户流程复验。",
    points: ["探索保留现场证据", "稳定路径长期复验"],
    kind: "cream",
    visual: "a3s-test",
    source: "a3s-test AGENTS.md · 00f601b",
    caption: "真实路径可以反复重放",
  },
  {
    id: "reviewer-scope",
    eyebrow: "PART 3 · 06 AGENTIC REVIEWER",
    title: "持续开发需要独立的观察者",
    titleLines: ["持续开发", "需要独立的观察者"],
    body: "它观察多个 Codex 会话，发现偏差就提出下一步。规则更新和关键动作都要等用户确认，再由独立测试验收。",
    points: ["先观察再提议", "授权和验收分开"],
    kind: "orange",
    visual: "reviewer-scope",
    source: "AGENTIC REVIEWER README · ARCHITECTURE · 095e3b8",
    caption: "观察与授权分开，推进才可控",
  },
  {
    id: "effective-threshold",
    eyebrow: "PART 4 · 07 CONCLUSION",
    title: "代码生成更容易，有效编程更难",
    titleLines: ["代码生成更容易", "有效编程更难"],
    body: "晶体智力不足时，人会陷入生成、报错、再生成，代码越改越乱。模型越快，这条失控链路就跑得越快。",
    points: ["交付需要独立判断", "速度也会放大错误"],
    kind: "cream",
    visual: "effective-threshold",
    source: "VIBE CODING · ENGINEERING PRACTICE",
    caption: "加速器会同时放大能力和错误",
  },
  {
    id: "fde-feedback",
    eyebrow: "PART 4 · 08 ORGANIZATIONAL LEARNING",
    title: "FDE 要把客户现场的解法带回产品",
    titleLines: ["FDE 要把客户现场的解法", "带回产品"],
    body: "FDE 在客户现场识别问题、验证方案，再把可复用的判断写回产品、规则和测试。下一位客户可以直接复用，团队也不必从头解题。",
    points: ["现场经验必须回流", "产品接住重复问题"],
    kind: "orange",
    visual: "fde-learning",
    source: "FORWARD DEPLOYED ENGINEER · ORGANIZATIONAL LEARNING",
    caption: "每次现场交付都更新产品",
  },
  {
    id: "learning-system",
    eyebrow: "PART 4 · 09 SUMMARY",
    title: "AI Native 组织需要一套持续学习系统",
    titleLines: ["AI Native 组织需要", "一套持续学习系统"],
    body: "这套系统让团队积累并共享晶体智力。个人经验进入规则和代码，测试与复盘持续修正，让下一次开发直接复用已经验证过的判断。",
    points: ["判断写进项目", "经验随交付更新"],
    kind: "cream",
    visual: "learning-system",
    source: "MONOREPO · a3s-test · AGENTIC REVIEWER",
    caption: "每次交付都更新团队经验",
  },
];
