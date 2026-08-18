import type { LensKey, SourceId } from "./types";

export const navItems = [
  { href: "#exercise", label: "贯穿演练" },
  { href: "#first-principles", label: "第一性原理" },
  { href: "#domain", label: "领域边界" },
  { href: "#review", label: "对抗审查" },
  { href: "#surface", label: "界面契约" },
  { href: "#brief", label: "任务包" },
  { href: "#sources", label: "来源" },
];

export const exercise = {
  label: "贯穿全站的虚构演练",
  title: "把一句含糊要求，变成一项能签收的工作",
  request: "登录失败时体验不好，改一下。",
  observed: [
    "表单提交以后，演练用服务返回明确的凭据错误。",
    "页面清空了用户名，只在右上角显示一条通用提示。",
    "键盘焦点仍停在提交按钮，输入框没有关联错误说明。",
  ],
  desired: [
    "失败后保留用户名，让用户只重填密码。",
    "错误信息靠近密码框，并通过可访问关系与输入项关联。",
    "提交过程和失败结果都有可观察状态，原有登录接口保持不变。",
  ],
  unresolved: "失败后焦点应该移到错误信息还是密码框，需要产品与无障碍规则确认。",
};

export const lensOrder: LensKey[] = ["principles", "domain", "review"];

export const lenses = {
  principles: {
    tab: "第一性原理",
    title: "先拆掉藏在句子里的猜测",
    body: "现状、期望、权限和未知结果各自占一个位置。它们混在一句话里时，代理会用顺手的答案补空白。",
    findings: [
      "截图只能证明画面，无法替产品决定失败后的焦点去向。",
      "接口成功返回和用户能够继续操作，是两种后置条件。",
      "提交、推送和发布都会留下副作用，需要单独授权。",
    ],
    output: "输出一份可观察的成功定义",
  },
  domain: {
    tab: "DDD",
    title: "再判断每条规则归谁所有",
    body: "凭据错误的含义属于业务语言，登录流程由应用层编排，HTTP 细节留在适配器，焦点和提示关系由表现层负责。",
    findings: [
      "领域层不知道 DOM、颜色和焦点。",
      "表现层不重新发明凭据与锁定规则。",
      "应用层协调步骤，但不吞掉业务拒绝原因。",
    ],
    output: "输出边界图和最小改动面",
  },
  review: {
    tab: "对抗审查",
    title: "最后把最顺利的解释当成嫌疑对象",
    body: "审查者逐项寻找目标偷换、领域泄漏、证据错版和授权扩大。找不到终态证据时，结论保持未知。",
    findings: [
      "保留用户名是否意外保留了敏感值。",
      "错误文案是否来自真实错误类型，还是前端猜测。",
      "复验截图和测试输出是否来自同一个提交。",
    ],
    output: "输出放行、退回或未知",
  },
} satisfies Record<
  LensKey,
  { tab: string; title: string; body: string; findings: string[]; output: string }
>;

export const principles = [
  {
    title: "代理无法使用没有进入现场的事实",
    premise:
      "代码、运行态、用户意图和仓库规则分散在不同位置。缺失的信息不会自动变成空白，模型会用概率最高的解释补上。",
    consequence:
      "开始动作以前，先收集就近规则、工作树、相关实现和失败证据。界面任务还要记录 DOM、可访问语义、几何与截图版本。",
    challenge: "如果别人只拿到这份观察，能否指出每条结论来自哪里。",
    shortcut: "看到一张图就猜业务规则，或者按照目录名新建一套实现。",
    sourceIds: ["a3s-agents", "a3s-test-architecture", "a3s-testkit"] satisfies SourceId[],
  },
  {
    title: "一次动作会比这一轮推理活得更久",
    premise:
      "写文件、发请求、点击确认和推送远程都改变了外部世界。模型结束输出以后，这些变化仍然存在。",
    consequence:
      "把观察、提议、批准和执行拆开。批准绑定具体目标、眼前版本和动作摘要，执行只消费一次。",
    challenge: "这一步失败或断线以后，重复执行会不会制造第二份副作用。",
    shortcut: "因为代理有能力完成整段流程，就默认它拥有每一步的权限。",
    sourceIds: ["reviewer-architecture", "reviewer-verification"] satisfies SourceId[],
  },
  {
    title: "完成消息只说明某个过程停下来了",
    premise: "命令返回零、接口接收请求和代理说已经改好，都无法单独证明用户看到的结果成立。",
    consequence:
      "在行动之前写后置条件。完成以后从目标一侧重新读取状态，并让测试、浏览器事实或人工判断给出结论。",
    challenge: "拿掉代理的总结以后，还剩下什么可以证明完成。",
    shortcut: "让生成改动的同一段输出兼任验收报告。",
    sourceIds: ["a3s-test-readme", "reviewer-verification"] satisfies SourceId[],
  },
  {
    title: "不知道结果也是一种必须保存的结果",
    premise:
      "外部写入时断线，动作可能成功，也可能没有发生。把它直接记成失败，会诱导系统再执行一次。",
    consequence: "保留 Unknown，先查询目标端。无法重建事实时，把未知和风险交给承担结果的人决定。",
    challenge: "当前证据能区分没有发生和已经发生但没有收到回执吗。",
    shortcut: "把所有不确定都折叠成失败，然后自动重试。",
    sourceIds: ["reviewer-architecture", "reviewer-verification"] satisfies SourceId[],
  },
];

export const domainLayers = [
  {
    key: "presentation",
    name: "表现层",
    owns: "用户输入、可访问关系、焦点、布局和状态呈现",
    rejects: "凭据是否有效、账户何时锁定、传输协议细节",
    exercise: "保留用户名，把错误与密码框关联，呈现提交状态",
    test: "组件与端到端交互",
  },
  {
    key: "infrastructure",
    name: "基础设施层",
    owns: "数据库、HTTP、文件、队列和第三方系统适配",
    rejects: "页面交互和最终业务决策",
    exercise: "把远端响应映射为应用层认识的错误类型",
    test: "适配器契约与集成测试",
  },
  {
    key: "application",
    name: "应用层",
    owns: "用例顺序、事务边界、命令与查询的编排",
    rejects: "CSS、DOM 查询、数据库或 HTTP 客户端细节",
    exercise: "发起登录用例，把明确的拒绝结果交给调用方",
    test: "用例测试与端口替身",
  },
  {
    key: "domain",
    name: "领域层",
    owns: "业务语言、实体、值对象、不变量和领域事件",
    rejects: "NestJS、React、网络状态码和浏览器 API",
    exercise: "定义凭据错误和账户锁定的业务含义",
    test: "纯逻辑与不变量测试",
  },
];

export const boundaryDecisions = [
  {
    signal: "规则换一个界面仍然成立",
    owner: "领域层",
    example: "连续失败达到阈值以后锁定账户",
    warning: "领域对象开始导入框架装饰器时，边界已经漏了。",
  },
  {
    signal: "工作描述的是一个完整用例的顺序",
    owner: "应用层",
    example: "校验输入，调用认证端口，记录成功会话",
    warning: "控制器自己拼完全部流程时，用例藏进了入口。",
  },
  {
    signal: "代码只为某个外部技术存在",
    owner: "基础设施层",
    example: "把 HTTP 401 和响应体映射成凭据错误",
    warning: "业务层开始判断状态码时，协议细节向内渗透。",
  },
  {
    signal: "变化只影响人怎样看见和操作",
    owner: "表现层",
    example: "错误说明的位置、aria-describedby 和焦点恢复",
    warning: "组件自行决定账户锁定规则时，页面接管了业务。",
  },
  {
    signal: "一条要求同时跨过几层",
    owner: "先拆开",
    example: "登录失败体验不好，可能同时涉及错误类型和页面反馈",
    warning: "用一个万能 service 包住所有层，只会把依赖方向藏起来。",
  },
];

export const reviewChecks = [
  {
    title: "目标偷换",
    attack: "当前差异解决了用户原话，还是解决了实现者改写后的新问题。",
    inspect: "逐句对照原始要求、任务包、代码差异和验收契约。",
    stop: "发现新增目标没有来源，退回补决策。",
  },
  {
    title: "领域泄漏",
    attack: "表现层是否重新发明了业务判断，领域层是否知道了框架和协议。",
    inspect: "沿依赖方向检查错误类型、用例入口和适配器映射。",
    stop: "同一条不变量在多层各写一遍，停止放行。",
  },
  {
    title: "证据洗白",
    attack: "截图、可访问树、测试输出和代码差异是否来自同一版状态。",
    inspect: "核对 commit、观察编号、页面 revision 和产物摘要。",
    stop: "任一关键证据无法绑定版本，结论保持未知。",
  },
  {
    title: "权限膨胀",
    attack: "修一个页面问题，是否顺手获得了提交、推送、发布或大范围重构的权力。",
    inspect: "把报告、修复、提交和发布分别对照授权记录。",
    stop: "动作摘要超出批准范围，拒绝执行。",
  },
  {
    title: "未知重试",
    attack: "外部动作失去回执以后，再来一次会不会重复提交或覆盖状态。",
    inspect: "先读取目标端，检查幂等键、版本和已有结果。",
    stop: "无法判断是否发生时，保留 Unknown 并交还决定权。",
  },
];

export const reviewVerdicts = [
  { name: "放行", meaning: "目标、边界、授权和终态证据彼此对得上" },
  { name: "退回", meaning: "已经找到可复现的缺口，并能说清修正条件" },
  { name: "未知", meaning: "关键事实无法恢复，继续动作可能扩大损失" },
];

export const authorityStages = [
  { label: "观察", authority: "只读", detail: "收集当前状态，不改变目标" },
  { label: "提议", authority: "候选", detail: "给出动作和预期影响" },
  { label: "批准", authority: "精确", detail: "绑定目标、版本和摘要" },
  { label: "执行", authority: "一次", detail: "只消费这份批准" },
  { label: "验证", authority: "独立", detail: "从目标端读取后置条件" },
  { label: "评价", authority: "人工", detail: "记录效果、分歧和后续决定" },
];
