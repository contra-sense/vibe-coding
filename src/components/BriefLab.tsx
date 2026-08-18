import { Check, Copy, Warning } from "@phosphor-icons/react";
import { useState } from "react";
import { briefTemplate, weakBrief } from "../content";
import { Citations } from "./Citations";

type CopyState = "idle" | "copied" | "error";

export function BriefLab() {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(briefTemplate);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("error");
    }
  }

  return (
    <section className="section section--brief" id="brief" aria-labelledby="brief-title">
      <div className="page-shell">
        <div className="section-heading reveal">
          <p className="section-heading__label">任务写法</p>
          <h2 id="brief-title">好任务先减少猜测，再增加动作</h2>
          <p>提示词越长，未必越清楚。有用的任务会把事实、边界和验收放到代理能逐项核对的位置。</p>
        </div>

        <div className="brief-grid">
          <article className="weak-brief reveal">
            <div className="weak-brief__header">
              <Warning aria-hidden="true" weight="fill" />
              <h3>一句看似完整的坏任务</h3>
            </div>
            <blockquote>{weakBrief}</blockquote>
            <p>这里同时藏着审美判断、问题范围、测试标准和 Git 权限。代理只能替你补答案。</p>
          </article>

          <article className="brief-template reveal">
            <div className="brief-template__header">
              <div>
                <p>可以直接复制的任务骨架</p>
                <h3>七段足够，多余的话再按需要补</h3>
              </div>
              <button type="button" className="button button--code" onClick={copyTemplate}>
                {copyState === "copied" ? (
                  <Check aria-hidden="true" weight="bold" />
                ) : (
                  <Copy aria-hidden="true" weight="bold" />
                )}
                {copyState === "copied" ? "已复制" : "复制模板"}
              </button>
            </div>
            <pre>
              <code>{briefTemplate}</code>
            </pre>
            <p className="sr-only" aria-live="polite">
              {copyState === "copied" && "任务模板已复制到剪贴板"}
              {copyState === "error" && "复制失败，请手动选择模板内容"}
            </p>
          </article>
        </div>

        <Citations ids={["a3s-agents", "a3s-test-architecture", "a3s-web-design"]} />
      </div>
    </section>
  );
}
