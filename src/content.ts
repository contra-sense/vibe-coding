export type SourceId =
  | "a3s-agents"
  | "a3s-design"
  | "a3s-web-design"
  | "a3s-test-readme"
  | "a3s-test-architecture"
  | "a3s-testkit"
  | "reviewer-architecture"
  | "reviewer-findings"
  | "reviewer-verification"
  | "reviewer-outcomes"
  | "bento-guide";

export interface SourceRecord {
  id: SourceId;
  title: string;
  project: string;
  access?: "private";
  commit: string;
  href: string;
  usedFor: string;
}

export const sources: SourceRecord[] = [
  {
    id: "a3s-agents",
    title: "AGENTS.md",
    project: "A3S monorepo",
    commit: "c0d6341",
    href: "https://github.com/A3S-Lab/a3s/blob/c0d63414e8a89e01791c3330867d279dc82f3fe1/AGENTS.md",
    usedFor: "仓库边界、搜索优先、变更范围、验证与 Git 安全",
  },
  {
    id: "a3s-design",
    title: "DESIGN.md",
    project: "A3S monorepo",
    commit: "c0d6341",
    href: "https://github.com/A3S-Lab/a3s/blob/c0d63414e8a89e01791c3330867d279dc82f3fe1/DESIGN.md",
    usedFor: "设计 token、代码表面、节奏和克制的开发者工具语言",
  },
  {
    id: "a3s-web-design",
    title: "A3S Web Design System",
    project: "A3S Web",
    commit: "c0d6341",
    href: "https://github.com/A3S-Lab/a3s/blob/c0d63414e8a89e01791c3330867d279dc82f3fe1/apps/web/DESIGN.md",
    usedFor: "状态可见、风险中断、AI 可问责、响应式与无障碍",
  },
  {
    id: "a3s-test-readme",
    title: "A3S Test README",
    project: "A3S Test",
    commit: "c55cad4",
    href: "https://github.com/A3S-Lab/Test/blob/c55cad45c5bfffaa14d51cc0b573c7786cfdad93/README.md",
    usedFor: "未知路径探索、已知路径回归、可检查证据和清理责任",
  },
  {
    id: "a3s-test-architecture",
    title: "Architecture",
    project: "A3S Test",
    commit: "c55cad4",
    href: "https://github.com/A3S-Lab/Test/blob/c55cad45c5bfffaa14d51cc0b573c7786cfdad93/docs/architecture.md",
    usedFor: "观察面、期望契约、报告、修复授权四层分离",
  },
  {
    id: "a3s-testkit",
    title: "Embedded Web Test Kit",
    project: "A3S Test",
    commit: "c55cad4",
    href: "https://github.com/A3S-Lab/Test/blob/c55cad45c5bfffaa14d51cc0b573c7786cfdad93/docs/testkit.md",
    usedFor: "DOM、可访问语义、几何上下文、人选问题与重新验证",
  },
  {
    id: "reviewer-architecture",
    title: "Architecture",
    project: "Agentic Reviewer",
    access: "private",
    commit: "d628ec1",
    href: "https://github.com/contra-sense/agentic-reviewer/blob/d628ec17eee8354176748b97136c263e685da74d/docs/ARCHITECTURE.md",
    usedFor: "观察与权限分离、精确审批、未知结果和证据投影",
  },
  {
    id: "reviewer-findings",
    title: "Evidence-bound review findings",
    project: "Agentic Reviewer",
    access: "private",
    commit: "d628ec1",
    href: "https://github.com/contra-sense/agentic-reviewer/blob/d628ec17eee8354176748b97136c263e685da74d/docs/adr/0019-evidence-bound-review-findings.md",
    usedFor: "模型只提候选，宿主绑定证据并校验目标",
  },
  {
    id: "reviewer-verification",
    title: "Mutation-specific verification",
    project: "Agentic Reviewer",
    access: "private",
    commit: "d628ec1",
    href: "https://github.com/contra-sense/agentic-reviewer/blob/d628ec17eee8354176748b97136c263e685da74d/docs/adr/0029-mutation-specific-terminal-verification.md",
    usedFor: "协议确认与终态证明分离，未知写入不盲目重试",
  },
  {
    id: "reviewer-outcomes",
    title: "Human correction outcomes",
    project: "Agentic Reviewer",
    access: "private",
    commit: "d628ec1",
    href: "https://github.com/contra-sense/agentic-reviewer/blob/d628ec17eee8354176748b97136c263e685da74d/docs/adr/0082-atomic-human-correction-outcome-summaries.md",
    usedFor: "人的效果判断独立留痕，冲突保持可见，不以时间强行覆盖",
  },
  {
    id: "bento-guide",
    title: "Bento slides agent guide",
    project: "Bento",
    commit: "0e46dca",
    href: "https://github.com/nyblnet/bento/blob/0e46dcab1ae7771329770ae8695298a08b1e8914/docs/agents.md",
    usedFor: "章节化叙事、同一对象的连续变化、演示模式和视觉自检",
  },
];

export const navItems = [
  { href: "#first-principles", label: "第一性原理" },
  { href: "#loop", label: "工程循环" },
  { href: "#brief", label: "任务写法" },
  { href: "#review", label: "对抗复核" },
  { href: "#sources", label: "资料来源" },
];

export const principles = [
  {
    title: "代理拿到的世界总是不完整",
    body: "代码、运行态、用户意图和局部规则分散在不同地方。缺哪一块，代理就会用猜测补哪一块。",
    consequence: "先补上下文，再谈聪明程度。",
    sourceIds: ["a3s-agents", "a3s-test-architecture"] satisfies SourceId[],
  },
  {
    title: "副作用比推理活得久",
    body: "一次写文件、发请求或推送远程，都会在模型这一轮结束以后继续存在。权限必须比表达能力更窄。",
    consequence: "观察、建议、批准、执行各用一道边界。",
    sourceIds: ["reviewer-architecture"] satisfies SourceId[],
  },
  {
    title: "完成消息不能证明完成",
    body: "命令返回成功，只能说明某个接口接受了请求。成功要从目标一侧观察到预先写下的结果。",
    consequence: "让后置条件给结论。",
    sourceIds: ["reviewer-verification", "a3s-test-readme"] satisfies SourceId[],
  },
  {
    title: "不确定本身就是状态",
    body: "外部写入断线以后，结果可能已经发生。此时自动再来一次，常常比承认不知道更危险。",
    consequence: "先重观测，保留 Unknown。",
    sourceIds: ["reviewer-architecture", "reviewer-verification"] satisfies SourceId[],
  },
];

export const loopSteps = [
  {
    key: "observe",
    label: "观察",
    short: "拿到当前事实",
    detail:
      "先读最近的规则、工作树、相关实现和失败证据。界面任务还要拿到 DOM、可访问语义、几何与截图。",
    proof: "能指出信息来自哪个文件、观察编号或测试输出。",
    sourceIds: ["a3s-agents", "a3s-testkit"] satisfies SourceId[],
  },
  {
    key: "contract",
    label: "定约",
    short: "把成功写成可观察结果",
    detail: "写清目标、允许范围、不可碰的边界、失败条件与验证命令。产品期望和当前观察分开保存。",
    proof: "任何人都能用同一组条件判断结果。",
    sourceIds: ["a3s-test-architecture"] satisfies SourceId[],
  },
  {
    key: "act",
    label: "行动",
    short: "每次只跨一个清楚边界",
    detail: "优先做可逆的小改动。外部写入带精确目标、版本和一次性权限，页面交互绑定最新观察。",
    proof: "变更范围和授权范围能够逐项对上。",
    sourceIds: ["reviewer-architecture", "a3s-test-readme"] satisfies SourceId[],
  },
  {
    key: "verify",
    label: "验证",
    short: "从目标一侧重新看",
    detail:
      "运行聚焦测试，重新观察界面和状态，检查副作用与清理结果。不要让生成改动的同一句话兼任证据。",
    proof: "报告保留命令、结果、截图或终态证明。",
    sourceIds: ["reviewer-verification", "a3s-test-architecture"] satisfies SourceId[],
  },
  {
    key: "learn",
    label: "复用",
    short: "只保存经得住复用的东西",
    detail: "把跑通的路径固化成回归，把稳定边界写回规则。人的效果判断单独留痕，冲突仍然保留。",
    proof: "下一次工作少猜一步，同时没有扩大默认权限。",
    sourceIds: ["a3s-test-readme", "reviewer-outcomes"] satisfies SourceId[],
  },
];

export const contextTiles = [
  {
    title: "仓库地图",
    body: "先知道根目录是否真是工作区，子模块、应用和包分别由谁拥有。",
    hint: "目录形状会直接改变命令的落点。",
    className: "context-tile context-tile--wide",
    sourceIds: ["a3s-agents"] satisfies SourceId[],
  },
  {
    title: "就近规则",
    body: "根规则给总边界，离目标最近的 AGENTS.md 给局部做法。",
    hint: "规则跟着目录走。",
    className: "context-tile context-tile--compact",
    sourceIds: ["a3s-agents"] satisfies SourceId[],
  },
  {
    title: "设计契约",
    body: "颜色、字型、间距、交互状态和窄屏退化应当来自 DESIGN.md 与现有 token。",
    hint: "审美也需要可检查的约束。",
    className: "context-tile context-tile--image",
    sourceIds: ["a3s-design", "a3s-web-design"] satisfies SourceId[],
  },
  {
    title: "实时状态",
    body: "工作树、运行进程、页面版本、控制台错误和已有会话都会改变下一步。",
    hint: "静态代码只讲了一半。",
    className: "context-tile context-tile--tall",
    sourceIds: ["a3s-test-readme", "a3s-testkit"] satisfies SourceId[],
  },
  {
    title: "有出处的目标",
    body: "PRD、设计稿和人工判断可以产生期望草案，审核以后才进入测试契约。",
    hint: "来源会跟着结论一起留下。",
    className: "context-tile context-tile--accent",
    sourceIds: ["a3s-test-architecture"] satisfies SourceId[],
  },
];

export const weakBrief = "把登录页做得更好看，顺便修好问题，测试没问题就提交。";

export const briefTemplate = `目标
用一句话写出用户最终能看见的变化

当前证据
附上复现路径、错误输出、截图或观察编号

允许范围
列出可修改目录、接口和依赖边界

不可改变
保留公开 API、用户改动、路由、文案或数据契约

验收条件
把每项成功写成可观察的后置条件

验证方式
给出聚焦测试、构建命令和需要人工查看的页面

交付
说明改了什么、证据在哪里、还有哪些未知`;

export const reviewChecks = [
  {
    title: "目标有没有被偷换",
    question: "当前改动解决的是用户原话，还是代理顺手改写后的新问题？",
    action: "逐句对照目标、差异和验收条件。",
  },
  {
    title: "证据是否来自同一版本",
    question: "截图、DOM、测试输出和代码差异，是否都对应眼前这次状态？",
    action: "为观察与产物绑定 revision、digest 或 commit。",
  },
  {
    title: "成功有没有让代理自评",
    question: "结论来自真实后置条件，还是来自生成改动的模型自己说已经完成？",
    action: "用宿主测试、浏览器事实与人的判断收口。",
  },
  {
    title: "未知结果会不会被重复执行",
    question: "断线以后重试这次写入，是否会重复扣款、重复提交或覆盖状态？",
    action: "保留 Unknown，先查目标端，再决定新动作。",
  },
  {
    title: "修复有没有越过授权",
    question: "选中一个界面问题，是否被扩成了提交、推送、发布或大范围重构？",
    action: "把每一类副作用拆成独立授权。",
  },
];

export const authorityStages = [
  { label: "观察", authority: "只读", detail: "读取状态和证据" },
  { label: "提议", authority: "候选", detail: "给出结构化动作" },
  { label: "批准", authority: "精确", detail: "绑定目标、版本与摘要" },
  { label: "执行", authority: "一次", detail: "消费一次性权限" },
  { label: "验证", authority: "宿主", detail: "读取目标端后置条件" },
  { label: "学习", authority: "人工", detail: "记录效果与分歧" },
];

export const testingPatterns = [
  {
    title: "陌生路径先探索",
    body: "保持一个真实会话，观察一次，做一个有类型的动作，再观察。遇到失败时，证据仍在同一条记录里。",
    tag: "Agent session",
  },
  {
    title: "跑通路径再固化",
    body: "交互终于稳定以后，把路径写成确定性 ACL 回归。探索和回归共享动作、证据与清理契约。",
    tag: "ACL regression",
  },
  {
    title: "语义优先，像素兜底",
    body: "DOM、可访问树和几何先提供高精度目标。画布或图像控件缺少语义时，再调用视觉定位，并把结果限制在当前截图。",
    tag: "Semantic first",
  },
  {
    title: "报告不等于修复权",
    body: "测试报告负责指出差异。人选中具体问题并提交以后，代理才得到这一项修复范围，完成后还要重跑原契约。",
    tag: "Human gate",
  },
];

export const monorepoPhases = [
  {
    title: "先弄清楚",
    actions: [
      "用 rg 搜已有实现和约定",
      "读根规则与目标目录最近的规则",
      "确认真正拥有功能的包、应用或子模块",
    ],
  },
  {
    title: "再动一小块",
    actions: ["记录工作树原状并保留用户改动", "在正确目录做最小可验证改动"],
  },
  {
    title: "最后把话说实",
    actions: ["从所属工作区运行聚焦测试与格式检查", "更新文档，提交精确范围，核对远端结果"],
  },
];

export const failurePatterns = [
  {
    title: "一口气给一个巨型提示",
    symptom: "目标、实现、测试、发布混在一起，任何一步变了，后面仍按旧假设往下跑。",
    repair: "按观察、定约、行动、验证拆回小回合。",
  },
  {
    title: "把模型输出当仓库事实",
    symptom: "代理说某个函数存在，或者某个目录应该负责，于是直接开始搭新层。",
    repair: "先搜索，读调用方，再决定归属。",
  },
  {
    title: "让同一个代理既出题又打分",
    symptom: "改动看起来顺利，验收也只剩一段自我总结。",
    repair: "把验收写成独立命令、浏览器事实或人的判断。",
  },
  {
    title: "把未知当失败后重试",
    symptom: "外部写入可能已经成功，第二次动作制造重复副作用。",
    repair: "保存未知状态，查询目标端，必要时提出一个新动作。",
  },
  {
    title: "为了干净动了用户工作树",
    symptom: "代理用还原、清理或重建掩盖自己的冲突，用户的未提交工作一起消失。",
    repair: "先识别所有者，绕开无关差异，无法绕开时停下来说明。",
  },
  {
    title: "成功一次就宣布形成方法",
    symptom: "偶然跑通被写成规则，后来换一条路径就失效。",
    repair: "至少保留可重放证据，再决定是否写成回归或偏好。",
  },
];

export const deckSlides = [
  {
    id: "cover",
    title: "先把成功写清楚，再让代理动手",
    body: "Vibe Coding 需要一条看得见、停得住、能复现的工程循环。",
    kind: "cover" as const,
  },
  {
    id: "facts",
    title: "四个绕不过去的事实",
    body: "上下文不完整，副作用会留下，完成消息不等于完成，不确定也必须被保存。",
    kind: "principles" as const,
  },
  {
    id: "cycle",
    title: "工作沿着五个动作前进",
    body: "观察、定约、行动、验证、复用。每一环都留下下一环能用的证据。",
    kind: "loop" as const,
  },
  {
    id: "context",
    title: "上下文要能被机器直接读取",
    body: "仓库地图、就近规则、设计契约、实时状态和有出处的目标，共同限制猜测。",
    kind: "context" as const,
  },
  {
    id: "brief",
    title: "好任务先交代边界",
    body: "目标、证据、允许范围、不可改变、验收、验证与交付，缺一项就会多一层猜测。",
    kind: "brief" as const,
  },
  {
    id: "authority",
    title: "能力越强，权限越要分开",
    body: "观察、提议、批准、执行、验证、学习，各自回答一个问题，也各自承担一段责任。",
    kind: "authority" as const,
  },
  {
    id: "testing",
    title: "陌生路径探索，稳定路径回归",
    body: "语义先行，视觉兜底。报告给诊断，人给修复权，原契约负责最后复查。",
    kind: "testing" as const,
  },
  {
    id: "close",
    title: "把偶然跑通，变成下一次仍然成立",
    body: "少猜一步，少放一次权，多留一份可以复核的证据。",
    kind: "close" as const,
  },
];
