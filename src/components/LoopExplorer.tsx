import { ArrowRight, CheckCircle, Package } from "@phosphor-icons/react";
import { useState } from "react";
import { workflowSteps, type SourceId } from "../content";
import { ChapterIntro } from "./ChapterIntro";
import { Citations } from "./Citations";

export function LoopExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = workflowSteps[activeIndex];
  const sourceIds = [...new Set(workflowSteps.flatMap((step) => step.sourceIds))] as SourceId[];

  function moveTab(direction: -1 | 1) {
    const next = (activeIndex + direction + workflowSteps.length) % workflowSteps.length;
    setActiveIndex(next);
    window.requestAnimationFrame(() => document.getElementById(`workflow-tab-${next}`)?.focus());
  }

  return (
    <section
      className="chapter chapter--paper chapter--workflow"
      id="loop"
      aria-labelledby="loop-title"
    >
      <div className="page-shell">
        <ChapterIntro
          number="05"
          id="loop-title"
          title="三条线，最后收束成一条工程路径"
          lead="第一性原理给出停止猜测的条件，DDD 决定改动落点，对抗审查检查每次交接。七个步骤各自留下产物，也各自有退出条件。"
        />

        <div className="workflow-player">
          <div
            className="workflow-player__rail"
            role="tablist"
            aria-label="完整工程路径"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                moveTab(1);
              }
              if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                moveTab(-1);
              }
            }}
          >
            {workflowSteps.map((step, index) => (
              <button
                id={`workflow-tab-${index}`}
                key={step.key}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="workflow-panel"
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
              >
                <span>0{index + 1}</span>
                <span>
                  <strong>{step.label}</strong>
                  <small>{step.short}</small>
                </span>
              </button>
            ))}
          </div>

          <article
            className="workflow-player__stage"
            id="workflow-panel"
            role="tabpanel"
            aria-labelledby={`workflow-tab-${activeIndex}`}
            key={activeStep.key}
          >
            <div className="workflow-player__header">
              <span>STEP {String(activeIndex + 1).padStart(2, "0")}</span>
              <span>
                {activeIndex + 1} / {workflowSteps.length}
              </span>
            </div>
            <div className="workflow-player__body">
              <div className="workflow-player__copy">
                <h3>{activeStep.label}</h3>
                <strong>{activeStep.short}</strong>
                <p>{activeStep.detail}</p>
                <div className="workflow-player__artifact">
                  <Package aria-hidden="true" weight="duotone" />
                  <span>
                    <small>这一步留下</small>
                    <strong>{activeStep.artifact}</strong>
                  </span>
                </div>
              </div>
              <div className="workflow-player__checks">
                <h4>三副镜片在这里各管一件事</h4>
                <ol>
                  {activeStep.lenses.map((item, index) => (
                    <li key={item}>
                      <span>0{index + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
                <p>
                  <CheckCircle aria-hidden="true" weight="fill" />
                  <span>
                    <small>退出条件</small>
                    <strong>{activeStep.exit}</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="workflow-player__timeline" aria-hidden="true">
              {workflowSteps.map((step, index) => (
                <span key={step.key} className={index <= activeIndex ? "is-complete" : undefined}>
                  {index < workflowSteps.length - 1 && <ArrowRight weight="bold" />}
                </span>
              ))}
            </div>
          </article>
        </div>

        <Citations ids={sourceIds} label="路径依据" />
      </div>
    </section>
  );
}
