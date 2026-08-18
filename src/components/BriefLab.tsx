import { CaretDown, Check, Copy, FileText, Flask, Warning } from "@phosphor-icons/react";
import { useState } from "react";
import { examplePacket, taskAnnotations, taskTemplate, weakBrief } from "../content";
import { ChapterIntro } from "./ChapterIntro";
import { Citations } from "./Citations";

type CopyState = "idle" | "copied" | "error";

export function BriefLab() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [view, setView] = useState<"template" | "example">("template");

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(taskTemplate);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("error");
    }
  }

  return (
    <section
      className="chapter chapter--paper chapter--brief"
      id="brief"
      aria-labelledby="brief-title"
    >
      <div className="page-shell">
        <ChapterIntro
          number="07"
          id="brief-title"
          title="一份好任务包，会提前暴露分歧"
          lead="把提示词写长不会让任务包更有用。任务包把事实、来源、领域归属、授权和验收摊开，让人和代理在动手以前看到缺口。"
        />

        <article className="weak-brief">
          <div className="weak-brief__header">
            <Warning aria-hidden="true" weight="fill" />
            <h3>这句话催得很急，却把一排决定留给了执行者</h3>
          </div>
          <blockquote>{weakBrief}</blockquote>
          <ul>
            <li>什么叫体验不好</li>
            <li>问题属于哪一层</li>
            <li>什么证据算测试没问题</li>
            <li>谁批准提交与发布</li>
          </ul>
        </article>

        <div className="packet-editor">
          <div className="packet-editor__toolbar">
            <div role="tablist" aria-label="查看任务包模板或演练示例">
              <button
                type="button"
                role="tab"
                aria-selected={view === "template"}
                aria-controls="packet-content"
                onClick={() => setView("template")}
              >
                <FileText aria-hidden="true" weight="duotone" />
                空白模板
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={view === "example"}
                aria-controls="packet-content"
                onClick={() => setView("example")}
              >
                <Flask aria-hidden="true" weight="duotone" />
                登录演练
              </button>
            </div>
            <button type="button" className="button button--code" onClick={copyTemplate}>
              {copyState === "copied" ? (
                <Check aria-hidden="true" weight="bold" />
              ) : (
                <Copy aria-hidden="true" weight="bold" />
              )}
              {copyState === "copied" ? "已复制" : "复制任务包模板"}
            </button>
          </div>
          <article id="packet-content" role="tabpanel" className="packet-editor__content">
            <header>
              <span>{view === "template" ? "TASK PACKET · BLANK" : "TASK PACKET · EXERCISE"}</span>
              <span>10 BLOCKS</span>
            </header>
            <pre>
              <code>{view === "template" ? taskTemplate : examplePacket}</code>
            </pre>
          </article>
          <p className="sr-only" aria-live="polite">
            {copyState === "copied" && "任务包模板已复制到剪贴板"}
            {copyState === "error" && "复制失败，请手动选择模板内容"}
          </p>
        </div>

        <div className="packet-annotations">
          <h3>十段分别拦住什么问题</h3>
          <div>
            {taskAnnotations.map((item, index) => (
              <details key={item.title} open={index === 0}>
                <summary>
                  <span>0{index + 1}</span>
                  <strong>{item.title}</strong>
                  <CaretDown className="details-caret" aria-hidden="true" weight="bold" />
                </summary>
                <div>
                  <p>{item.why}</p>
                  <strong>{item.done}</strong>
                </div>
              </details>
            ))}
          </div>
        </div>

        <Citations
          ids={["a3s-agents", "a3s-test-architecture", "a3s-web-design"]}
          label="任务包依据"
        />
      </div>
    </section>
  );
}
