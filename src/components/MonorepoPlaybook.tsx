import { CheckCircle, GitDiff, MagnifyingGlass } from "@phosphor-icons/react";
import { monorepoPhases } from "../content";
import { Citations } from "./Citations";

const icons = [MagnifyingGlass, GitDiff, CheckCircle];

export function MonorepoPlaybook() {
  return (
    <section className="section section--monorepo" aria-labelledby="monorepo-title">
      <div className="page-shell">
        <div className="section-heading section-heading--compact reveal">
          <h2 id="monorepo-title">在 monorepo 里，先找归属，再写代码</h2>
          <p>根目录只给地图。构建、测试、所有权和风险，通常藏在具体应用、包或子模块里。</p>
        </div>

        <div className="monorepo-grid">
          {monorepoPhases.map((phase, index) => {
            const Icon = icons[index];
            return (
              <article
                className={`monorepo-phase monorepo-phase--${index + 1} reveal`}
                key={phase.title}
              >
                <Icon aria-hidden="true" weight="duotone" />
                <h3>{phase.title}</h3>
                <ul>
                  {phase.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="monorepo-rule reveal">
          <code>search → read → locate owner → change → focused verify → document → deliver</code>
          <p>这条顺序看着慢，动手以后通常更快。它省下的是返工和恢复用户现场的时间。</p>
        </div>

        <Citations ids={["a3s-agents", "a3s-design", "a3s-web-design"]} />
      </div>
    </section>
  );
}
