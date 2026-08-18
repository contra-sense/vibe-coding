import { Browser, HandPointing, Scan, TreeStructure } from "@phosphor-icons/react";
import { testingPatterns } from "../content";
import { Citations } from "./Citations";

const icons = [Browser, TreeStructure, Scan, HandPointing];

export function TestingPatterns() {
  return (
    <section className="section section--testing page-shell" aria-labelledby="testing-title">
      <div className="section-heading reveal">
        <h2 id="testing-title">探索和回归，各自做擅长的事</h2>
        <p>陌生流程需要代理边看边走。稳定流程需要确定性检查。两者共享证据，切换时不用推倒重来。</p>
      </div>

      <div className="testing-grid">
        {testingPatterns.map((pattern, index) => {
          const Icon = icons[index];
          return (
            <article
              className={`testing-card testing-card--${index + 1} reveal`}
              key={pattern.title}
            >
              <Icon aria-hidden="true" weight="duotone" />
              <div>
                <span>{pattern.tag}</span>
                <h3>{pattern.title}</h3>
                <p>{pattern.body}</p>
              </div>
            </article>
          );
        })}
      </div>

      <Citations ids={["a3s-test-readme", "a3s-test-architecture", "a3s-testkit"]} />
    </section>
  );
}
