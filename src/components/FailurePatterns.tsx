import { CaretDown } from "@phosphor-icons/react";
import { failurePatterns } from "../content";

export function FailurePatterns() {
  return (
    <section className="section section--failures page-shell" aria-labelledby="failures-title">
      <div className="section-heading reveal">
        <h2 id="failures-title">六种最常见的失控方式</h2>
        <p>它们往往都能在某一次演示里成功。麻烦出在第二次，或者换一个真实工作树以后。</p>
      </div>

      <div className="failure-list reveal">
        {failurePatterns.map((pattern) => (
          <details key={pattern.title}>
            <summary>
              <span>{pattern.title}</span>
              <CaretDown className="details-caret" aria-hidden="true" weight="bold" />
            </summary>
            <div>
              <p>{pattern.symptom}</p>
              <strong>{pattern.repair}</strong>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
