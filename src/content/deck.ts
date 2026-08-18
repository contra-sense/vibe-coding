export const deckSlides = [
  {
    id: "cover",
    title: "先把成功写清楚，再让代理动手",
    body: "第一性原理拆事实，DDD 守边界，对抗式审查负责怀疑那条看起来最顺的路。",
    kind: "cover" as const,
  },
  {
    id: "exercise",
    title: "同一句要求，藏着四个没有回答的问题",
    body: "现状是什么，期望来自哪里，规则归谁，代理拥有哪些动作权限。",
    kind: "exercise" as const,
  },
  {
    id: "principles",
    title: "四个事实先于任何工具",
    body: "上下文会缺，副作用会留下，完成消息不证明终态，未知结果不能被抹掉。",
    kind: "principles" as const,
  },
  {
    id: "domain",
    title: "规则先找到主人，代码才知道放哪里",
    body: "领域保存业务含义，应用编排用例，基础设施适配外部系统，表现层负责人怎样看见和操作。",
    kind: "domain" as const,
  },
  {
    id: "review",
    title: "放行以前，主动寻找最坏解释",
    body: "攻击目标偷换、领域泄漏、证据错版、权限膨胀和未知重试。",
    kind: "review" as const,
  },
  {
    id: "workflow",
    title: "三条线最后收束成一条工程路径",
    body: "观察、定约、归属、计划、授权、复验与留痕，每一步都有退出条件。",
    kind: "workflow" as const,
  },
  {
    id: "surface",
    title: "界面理解要分清观察、期望、报告和修复权",
    body: "浏览器给事实，PRD 与设计给期望候选，确定性规则做对账，人决定哪些问题进入修复。",
    kind: "surface" as const,
  },
  {
    id: "packet",
    title: "一份好任务包会提前暴露分歧",
    body: "它写清来源、领域归属、允许范围、保持不变、验收契约和未知处理。",
    kind: "packet" as const,
  },
  {
    id: "close",
    title: "代理停下只是运行结束，工程完成还需要证据",
    body: "目标状态成立，边界没有被悄悄改写，下一次还能重放。",
    kind: "close" as const,
  },
];
