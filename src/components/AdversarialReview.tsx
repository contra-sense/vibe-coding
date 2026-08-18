import { ArrowRight, CaretDown, Crosshair, ShieldCheck } from "@phosphor-icons/react";
import { authorityStages, reviewChecks, reviewVerdicts } from "../content";
import { ChapterIntro } from "./ChapterIntro";
import { Citations } from "./Citations";

export function AdversarialReview() {
  const reviewImage = `${import.meta.env.BASE_URL}assets/review-gate.webp`;

  return (
    <section
      className="chapter chapter--night chapter--review"
      id="review"
      aria-labelledby="review-title"
    >
      <div className="page-shell">
        <ChapterIntro
          number="04"
          id="review-title"
          title="在放行以前，先攻击五个假设"
          lead="对抗式审查不重做一遍实现。它把最顺利的解释当成嫌疑对象，专门寻找目标偷换、领域泄漏、证据错版、权限膨胀和未知重试。"
          inverted
        />

        <div className="review-layout">
          <figure className="review-visual">
            <img
              src={reviewImage}
              alt="一个纸质结构从两个方向接受检查，前方闸门仍然关闭"
              width="1200"
              height="800"
              loading="lazy"
            />
            <figcaption>
              <ShieldCheck aria-hidden="true" weight="duotone" />
              生成者解释改动，审查者攻击证据。两边读取同一份事实，各自给出结论。
            </figcaption>
          </figure>

          <div className="review-questions">
            {reviewChecks.map((check, index) => (
              <details key={check.title} open={index === 0} name="review-checks">
                <summary>
                  <span>0{index + 1}</span>
                  <Crosshair aria-hidden="true" weight="bold" />
                  <strong>{check.title}</strong>
                  <CaretDown className="details-caret" aria-hidden="true" weight="bold" />
                </summary>
                <div>
                  <p>{check.attack}</p>
                  <dl>
                    <div>
                      <dt>检查</dt>
                      <dd>{check.inspect}</dd>
                    </div>
                    <div>
                      <dt>停下条件</dt>
                      <dd>{check.stop}</dd>
                    </div>
                  </dl>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="authority-track" aria-label="从观察到人工评价的权限链">
          {authorityStages.map((stage, index) => (
            <div key={stage.label}>
              <span>{stage.authority}</span>
              <strong>{stage.label}</strong>
              <small>{stage.detail}</small>
              {index < authorityStages.length - 1 && (
                <ArrowRight aria-hidden="true" weight="bold" />
              )}
            </div>
          ))}
        </div>

        <div className="review-verdicts" aria-label="审查的三种结论">
          {reviewVerdicts.map((verdict) => (
            <article key={verdict.name}>
              <h3>{verdict.name}</h3>
              <p>{verdict.meaning}</p>
            </article>
          ))}
        </div>

        <Citations
          ids={["reviewer-architecture", "reviewer-findings", "reviewer-verification"]}
          label="审查依据"
        />
      </div>
    </section>
  );
}
