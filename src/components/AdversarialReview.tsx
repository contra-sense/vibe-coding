import { CaretDown, Crosshair, ShieldCheck } from "@phosphor-icons/react";
import { reviewChecks } from "../content";
import { Citations } from "./Citations";

export function AdversarialReview() {
  const reviewImage = `${import.meta.env.BASE_URL}assets/review-gate.webp`;

  return (
    <section
      className="section section--review page-shell"
      id="review"
      aria-labelledby="review-title"
    >
      <div className="review-layout">
        <div className="review-visual reveal">
          <img
            src={reviewImage}
            alt="一个纸质结构从两个独立方向接受检查，前方的闸门仍然关闭"
            width="1200"
            height="800"
            loading="lazy"
          />
          <div className="review-visual__note">
            <ShieldCheck aria-hidden="true" weight="duotone" />
            <p>生成者负责解释改动，复核者负责攻击证据。两者共用事实，不共用结论。</p>
          </div>
        </div>

        <div className="review-copy">
          <div className="section-heading section-heading--compact reveal">
            <h2 id="review-title">在放行以前，先攻击五个假设</h2>
            <p>好的复核不会重做一遍实现。它专门寻找目标偷换、证据断裂、权限扩大和自我打分。</p>
          </div>

          <div className="review-questions reveal">
            {reviewChecks.map((check, index) => (
              <details key={check.title} open={index === 0} name="review-checks">
                <summary>
                  <Crosshair aria-hidden="true" weight="bold" />
                  <span>{check.title}</span>
                  <CaretDown className="details-caret" aria-hidden="true" weight="bold" />
                </summary>
                <div>
                  <p>{check.question}</p>
                  <strong>{check.action}</strong>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <Citations ids={["reviewer-architecture", "reviewer-findings", "reviewer-verification"]} />
    </section>
  );
}
