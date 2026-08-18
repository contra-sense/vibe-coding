import {
  ArrowRight,
  BoundingBox,
  CheckCircle,
  CursorClick,
  FileText,
  TreeStructure,
} from "@phosphor-icons/react";
import { useState } from "react";
import { contractFlow, renderMetadata, repairFlow, surfaceArtifacts } from "../content";
import { ChapterIntro } from "./ChapterIntro";
import { Citations } from "./Citations";

type SurfacePanel = "render" | "contract" | "repair";

const panels: Array<{ key: SurfacePanel; label: string }> = [
  { key: "render", label: "渲染时理解" },
  { key: "contract", label: "期望契约生成" },
  { key: "repair", label: "人选修复" },
];

export function SurfaceContract() {
  const [activePanel, setActivePanel] = useState<SurfacePanel>("render");
  const activeIndex = panels.findIndex((panel) => panel.key === activePanel);

  function movePanel(direction: -1 | 1) {
    const nextIndex = (activeIndex + direction + panels.length) % panels.length;
    const next = panels[nextIndex];
    setActivePanel(next.key);
    window.requestAnimationFrame(() => document.getElementById(`surface-tab-${next.key}`)?.focus());
  }

  return (
    <section
      className="chapter chapter--night chapter--surface"
      id="surface"
      aria-labelledby="surface-title"
    >
      <div className="page-shell">
        <ChapterIntro
          number="06"
          id="surface-title"
          title="界面理解，先把四种东西分开"
          lead="A3S Test 把浏览器事实、产品期望、差异报告和修复权分成四件产物。它们彼此连接，也互相限制。设计稿可以给期望，浏览器才给得出真实观察。"
          inverted
        />

        <div className="artifact-board">
          {surfaceArtifacts.map((artifact, index) => (
            <article key={artifact.name}>
              <span>0{index + 1}</span>
              <h3>{artifact.name}</h3>
              <strong>{artifact.question}</strong>
              <dl>
                <div>
                  <dt>权威来源</dt>
                  <dd>{artifact.authority}</dd>
                </div>
                <div>
                  <dt>不能越过</dt>
                  <dd>{artifact.cannot}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="surface-player">
          <div
            className="surface-player__tabs"
            role="tablist"
            aria-label="界面理解的三个阶段"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                movePanel(1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                movePanel(-1);
              }
            }}
          >
            {panels.map((panel) => (
              <button
                id={`surface-tab-${panel.key}`}
                key={panel.key}
                type="button"
                role="tab"
                aria-selected={activePanel === panel.key}
                aria-controls="surface-panel"
                tabIndex={activePanel === panel.key ? 0 : -1}
                onClick={() => setActivePanel(panel.key)}
              >
                {panel.label}
              </button>
            ))}
          </div>

          <div
            className="surface-player__panel"
            id="surface-panel"
            role="tabpanel"
            aria-labelledby={`surface-tab-${activePanel}`}
            key={activePanel}
          >
            {activePanel === "render" && <RenderPanel />}
            {activePanel === "contract" && (
              <FlowPanel
                title="PRD 和设计稿先生成候选，再由人决定"
                lead="模型只负责解释来源。冲突、未决问题和证据位置都要留下，审核通过以后才能成为期望契约。"
                items={contractFlow}
                icon={<FileText aria-hidden="true" weight="duotone" />}
              />
            )}
            {activePanel === "repair" && (
              <FlowPanel
                title="点选是一种输入，提交才产生修复权"
                lead="人可以标记一项或组成批次。代理领取以后只处理账本里的问题，完成修改还要重新观察并复验原契约。"
                items={repairFlow}
                icon={<CursorClick aria-hidden="true" weight="duotone" />}
              />
            )}
          </div>
        </div>

        <p className="surface-note">
          当 DOM
          和可访问语义确实表达不了画布、远程桌面或图像控件时，视觉定位才进入流程。结果仍然绑定当前截图和观察，只提供候选，不负责判定通过，也不获得修复权。
        </p>

        <Citations ids={["a3s-test-architecture", "a3s-testkit"]} label="界面契约依据" />
      </div>
    </section>
  );
}

function RenderPanel() {
  return (
    <div className="render-panel">
      <div className="render-panel__copy">
        <TreeStructure aria-hidden="true" weight="duotone" />
        <h3>浏览器已经算过一遍页面，Test Kit 读取这份结果</h3>
        <p>
          SDK 等待稳定帧以后建立版本化语义投影。它复用
          DOM、可访问语义和布局结果，再补上组件归属与应用事实。
        </p>
        <div className="render-panel__sample" aria-label="页面节点示例">
          <span>form 登录</span>
          <span>input 用户名</span>
          <span className="is-active">input 密码</span>
          <span>alert 凭据错误</span>
        </div>
      </div>
      <div className="render-panel__metadata">
        {renderMetadata.map((item, index) => (
          <article key={item.title}>
            <span>{index === 1 ? <BoundingBox aria-hidden="true" /> : `0${index + 1}`}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

interface FlowPanelProps {
  title: string;
  lead: string;
  items: Array<{ label: string; detail: string }>;
  icon: React.ReactNode;
}

function FlowPanel({ title, lead, items, icon }: FlowPanelProps) {
  return (
    <div className="flow-panel">
      <div className="flow-panel__heading">
        {icon}
        <h3>{title}</h3>
        <p>{lead}</p>
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={item.label}>
            <span>0{index + 1}</span>
            <strong>{item.label}</strong>
            <p>{item.detail}</p>
            {index < items.length - 1 && <ArrowRight aria-hidden="true" weight="bold" />}
          </li>
        ))}
      </ol>
      <p className="flow-panel__gate">
        <CheckCircle aria-hidden="true" weight="fill" />
        每一道箭头都改变权威来源，所以每一步都要留下自己的产物。
      </p>
    </div>
  );
}
