import { GitCommit, MapPin, MagnifyingGlass, TestTube } from "@phosphor-icons/react";
import { monorepoPhases } from "../content";
import { ChapterIntro } from "./ChapterIntro";
import { Citations } from "./Citations";

const icons = [MapPin, MagnifyingGlass, TestTube, GitCommit];

export function MonorepoPlaybook() {
  return (
    <section className="chapter chapter--soft chapter--monorepo" aria-labelledby="monorepo-title">
      <div className="page-shell">
        <ChapterIntro
          number="08"
          id="monorepo-title"
          title="在 monorepo 里，先找归属，再写代码"
          lead="根目录常常只负责给地图。具体应用、包或子模块通常拥有自己的构建、测试与风险。DDD 判断业务归属，仓库规则决定物理落点。"
        />

        <div className="monorepo-grid">
          {monorepoPhases.map((phase, index) => {
            const Icon = icons[index];
            return (
              <article className={`monorepo-phase monorepo-phase--${index + 1}`} key={phase.title}>
                <span>0{index + 1}</span>
                <Icon aria-hidden="true" weight="duotone" />
                <h3>{phase.title}</h3>
                <ul>
                  {phase.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
                <p>{phase.stop}</p>
              </article>
            );
          })}
        </div>

        <div className="monorepo-rule">
          <div className="monorepo-rule__tree" aria-label="DDD 四层目录示意">
            <code>
              modules/authentication
              <span>├── domain</span>
              <span>├── application</span>
              <span>├── infrastructure</span>
              <span>└── presentation</span>
            </code>
          </div>
          <div>
            <h3>目录不会替你做领域判断</h3>
            <p>
              先沿业务语言找到权威规则，再按照本仓库的四层约定落文件。一个叫 service
              的类可能在任何层，名字本身没有所有权。
            </p>
            <code>search → read → locate owner → change → verify → deliver</code>
          </div>
        </div>

        <Citations ids={["a3s-agents", "a3s-design", "a3s-web-design"]} label="仓库实践依据" />
      </div>
    </section>
  );
}
