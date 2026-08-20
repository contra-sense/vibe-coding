# ContraSense Vibe Coding 工程手册

打开链接后直接进入 16 页演示稿。项目没有长网页、启动弹窗或返回正文的路径。

[在线演示](https://contra-sense.github.io/vibe-coding/)

## 演示内容

演示分成三个部分。

- 从流体智力与晶体智力出发，说明人应该积累可复用的工程判断
- 说明团队如何把架构、规范和验证结果沉淀成共享的晶体智力
- 介绍 Monorepo、DDD、规则文件、第一性原理审查、测试与自动化工具

规则文件章节强调工程师的主体性。编码智能体先质疑前提，检查需求是否真实、是否服务项目使命、是否损害架构，再决定接受、改写或拒绝。

## 版式

普通工作区中的每页都使用固定 16∶9 画布。进入全屏后，画布按浏览器视口满铺，左侧预览和底部栏退出布局，翻页控件以悬浮层显示。

橙色、米白色与黑墨组成整套视觉系统。每页都配有项目内的原创插画。

## 操作

- 方向键、Page Up、Page Down 与空格负责前后翻页
- Home 跳到封面，End 跳到最后一页
- Escape 随时回到封面
- 最后一页的按钮回到封面
- 页码标记可以直接跳到指定页面

## 本地开发

需要 Node.js 24 与 npm。

```bash
npm ci
npm run dev
```

开发地址为 `http://localhost:5173/vibe-coding/`。

## 验证

```bash
npm run check
```

这条命令检查格式，运行 Vitest 回归，执行 TypeScript 类型检查，再构建生产产物。

当前回归覆盖 16 页内容契约、直接进入封面、预览列表、按钮翻页、键盘跳转、全屏切换和末页回封面。

## 项目结构

```text
src/components/PresentationMode.tsx  演示稿结构与翻页逻辑
src/content/deck.ts                   16 页演示内容
src/styles/presentation.css          16:9 母版与各页版式
public/assets/                        原创插画
```

推送 `main` 后，GitHub Actions 会执行完整检查并把 `dist` 发布到 GitHub Pages。
