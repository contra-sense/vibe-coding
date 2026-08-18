import { ArrowRight, CheckCircle, Question } from "@phosphor-icons/react";
import { useState } from "react";
import { exercise, lenses, lensOrder, type LensKey } from "../content";
import { ChapterIntro } from "./ChapterIntro";
import { Citations } from "./Citations";

export function CaseWorkbench() {
  const [activeLens, setActiveLens] = useState<LensKey>("principles");
  const lens = lenses[activeLens];
  const activeIndex = lensOrder.indexOf(activeLens);

  function moveLens(direction: -1 | 1) {
    const nextIndex = (activeIndex + direction + lensOrder.length) % lensOrder.length;
    const nextLens = lensOrder[nextIndex];
    setActiveLens(nextLens);
    window.requestAnimationFrame(() => document.getElementById(`lens-tab-${nextLens}`)?.focus());
  }

  return (
    <section className="chapter chapter--paper" id="exercise" aria-labelledby="exercise-title">
      <div className="page-shell">
        <ChapterIntro
          number="01"
          id="exercise-title"
          title={exercise.title}
          lead="下面这项登录页改动只是一场演练。它不借用真实事故，也不替产品补答案。我们保留同一个任务，连续换三副镜片。"
        />

        <div className="case-workbench">
          <aside className="case-brief" aria-label="演练任务现状">
            <div className="case-brief__meta">
              <span>EXERCISE</span>
              <span>LOGIN FAILURE</span>
            </div>
            <blockquote>{exercise.request}</blockquote>
            <div className="case-brief__group">
              <h3>已经观察到</h3>
              <ul>
                {exercise.observed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-brief__group case-brief__group--desired">
              <h3>目前想得到</h3>
              <ul>
                {exercise.desired.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="case-brief__unknown">
              <Question aria-hidden="true" weight="bold" />
              <span>{exercise.unresolved}</span>
            </p>
          </aside>

          <div className="lens-player">
            <div
              className="lens-player__tabs"
              role="tablist"
              aria-label="用三种方法检查同一任务"
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  moveLens(1);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  moveLens(-1);
                }
              }}
            >
              {lensOrder.map((key, index) => (
                <button
                  id={`lens-tab-${key}`}
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeLens === key}
                  aria-controls="lens-panel"
                  tabIndex={activeLens === key ? 0 : -1}
                  onClick={() => setActiveLens(key)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {lenses[key].tab}
                </button>
              ))}
            </div>

            <article
              className={`lens-player__stage lens-player__stage--${activeLens}`}
              id="lens-panel"
              role="tabpanel"
              aria-labelledby={`lens-tab-${activeLens}`}
              key={activeLens}
            >
              <div className="lens-player__task" aria-hidden="true">
                <span>同一项任务</span>
                <strong>登录失败反馈</strong>
              </div>
              <div className="lens-player__copy">
                <span className="lens-player__count">0{activeIndex + 1}</span>
                <h3>{lens.title}</h3>
                <p>{lens.body}</p>
                <ul>
                  {lens.findings.map((finding) => (
                    <li key={finding}>
                      <CheckCircle aria-hidden="true" weight="fill" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lens-player__output">
                <span>这一步交给下一步的东西</span>
                <strong>{lens.output}</strong>
                <ArrowRight aria-hidden="true" weight="bold" />
              </div>
            </article>

            <div className="lens-player__progress" aria-hidden="true">
              <span style={{ transform: `scaleX(${(activeIndex + 1) / lensOrder.length})` }} />
            </div>
          </div>
        </div>

        <Citations
          ids={["a3s-agents", "a3s-test-architecture", "reviewer-architecture"]}
          label="演练方法依据"
        />
      </div>
    </section>
  );
}
