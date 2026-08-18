import { ArrowRight, Check } from "@phosphor-icons/react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { loopSteps, type SourceId } from "../content";
import { Citations } from "./Citations";

export function LoopExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = loopSteps[activeIndex];
  const sourceIds = [...new Set(loopSteps.flatMap((step) => step.sourceIds))] as SourceId[];

  function moveTab(direction: -1 | 1) {
    const next = (activeIndex + direction + loopSteps.length) % loopSteps.length;
    setActiveIndex(next);
    window.requestAnimationFrame(() => document.getElementById(`loop-tab-${next}`)?.focus());
  }

  return (
    <section className="section section--loop" id="loop" aria-labelledby="loop-title">
      <div className="page-shell">
        <div className="section-heading section-heading--compact reveal">
          <h2 id="loop-title">一条能复现的工程循环</h2>
          <p>每一环都只解决一个问题，也给下一环留下可检查的输入。</p>
        </div>

        <div className="loop-stage reveal">
          <div
            className="loop-tabs"
            role="tablist"
            aria-label="工程循环步骤"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                moveTab(1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                moveTab(-1);
              }
            }}
          >
            {loopSteps.map((step, index) => (
              <button
                id={`loop-tab-${index}`}
                key={step.key}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="loop-panel"
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
              >
                <span>{step.label}</span>
                <small>{step.short}</small>
              </button>
            ))}
          </div>

          <div className="loop-stage__body">
            <div
              className="loop-panel"
              id="loop-panel"
              role="tabpanel"
              aria-labelledby={`loop-tab-${activeIndex}`}
              key={activeStep.key}
            >
              <p className="loop-panel__step">{activeStep.label}</p>
              <h3>{activeStep.short}</h3>
              <p>{activeStep.detail}</p>
              <div className="loop-panel__proof">
                <Check aria-hidden="true" weight="bold" />
                <span>{activeStep.proof}</span>
              </div>
            </div>

            <div className="loop-diagram" aria-hidden="true">
              <div className="loop-diagram__track" />
              <ol>
                {loopSteps.map((step, index) => (
                  <li
                    key={step.key}
                    className={index === activeIndex ? "is-active" : undefined}
                    style={{ "--loop-index": index } as CSSProperties}
                  >
                    <span>{step.label}</span>
                    {index < loopSteps.length - 1 && <ArrowRight weight="bold" />}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <Citations ids={sourceIds} />
      </div>
    </section>
  );
}
