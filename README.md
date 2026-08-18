# Vibe Coding 工程手册

这是一份面向真实工程现场的中文手册。内容来自 A3S monorepo、A3S Test、Agentic Reviewer 与 Bento 的固定版本材料，重点讨论代理如何获得足够上下文、如何被约束、如何留下证据，以及如何把一次成功工作固化成可重复的流程。

[在线阅读](https://contra-sense.github.io/vibe-coding/)

## 手册内容

- 从四个基础事实推导工程原则
- 用观察、定约、行动、验证、复用组成闭环
- 用 Bento 网格解释仓库、规则、设计、运行态和目标上下文
- 提供可以直接复制的七段任务模板
- 拆解对抗性复核、权限链、界面探索与确定性回归
- 记录每项主要结论对应的固定 commit 来源

页面提供浅色与深色主题、移动端导航和全屏演示模式。演示模式支持键盘翻页、焦点约束与关闭后的焦点恢复。

## 本地开发

需要 Node.js 24 与 npm。

```bash
npm ci
npm run dev
```

开发服务器默认运行在 `http://localhost:5173/vibe-coding/`。

## 验证

```bash
npm run check
```

这条命令依次检查格式、运行 Vitest 测试、执行 TypeScript 类型检查并构建生产产物。

## 项目结构

```text
src/
├── components/       页面章节与演示模式
├── hooks/            主题状态
├── styles/           token、布局、组件与响应式样式
├── content.ts        文案与来源账本
└── App.test.tsx      主要交互回归
public/assets/        原创 WebP 视觉资产
.github/workflows/    GitHub Pages 发布流程
```

## 资料边界

手册中的工程结论都指向页面末尾的资料账本。链接固定到具体 commit，避免上游内容变化以后让当前结论失去出处。Agentic Reviewer 属于私有仓库，相关链接需要访问权限，网站会明确标注这项边界。页面中的插图用于解释概念，不代表引用项目的官方界面或品牌资产。

## 发布

推送 `main` 后，GitHub Actions 会在干净环境中执行 `npm ci` 与 `npm run check`，随后把 `dist` 发布到 GitHub Pages。
