import { CaretDown, WarningOctagon } from "@phosphor-icons/react";
import { failurePatterns } from "../content";
import { ChapterIntro } from "./ChapterIntro";

export function FailurePatterns() {
  return (
    <section className="chapter chapter--night chapter--failures" aria-labelledby="failures-title">
      <div className="page-shell">
        <ChapterIntro
          number="09"
          id="failures-title"
          title="七种经常伪装成进展的失控"
          lead="这些做法往往能在某次演示里跑通。麻烦出现在第二次，或者换成有历史、有用户改动、有真实副作用的工作树以后。"
          inverted
        />

        <div className="failure-list">
          {failurePatterns.map((pattern, index) => (
            <details key={pattern.title} open={index === 0}>
              <summary>
                <span>0{index + 1}</span>
                <WarningOctagon aria-hidden="true" weight="duotone" />
                <strong>{pattern.title}</strong>
                <CaretDown className="details-caret" aria-hidden="true" weight="bold" />
              </summary>
              <div>
                <dl>
                  <div>
                    <dt>现场</dt>
                    <dd>{pattern.symptom}</dd>
                  </div>
                  <div>
                    <dt>根因</dt>
                    <dd>{pattern.cause}</dd>
                  </div>
                  <div>
                    <dt>修正</dt>
                    <dd>{pattern.repair}</dd>
                  </div>
                  <div>
                    <dt>重新放行的证据</dt>
                    <dd>{pattern.proof}</dd>
                  </div>
                </dl>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
