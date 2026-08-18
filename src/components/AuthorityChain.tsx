import { ArrowRight, LockKey, UserFocus } from "@phosphor-icons/react";
import { authorityStages } from "../content";
import { Citations } from "./Citations";

export function AuthorityChain() {
  return (
    <section className="section section--authority" aria-labelledby="authority-title">
      <div className="page-shell">
        <div className="section-heading reveal">
          <h2 id="authority-title">能力越强，权限越要分开</h2>
          <p>同一个模型可以参与多个阶段，阶段之间仍要经过宿主校验。能看见，不会自动变成能修改。</p>
        </div>

        <div
          className="authority-chain reveal"
          tabIndex={0}
          role="region"
          aria-label="权限阶段，可横向滚动查看全部六步"
        >
          <ol>
            {authorityStages.map((stage, index) => (
              <li key={stage.label}>
                <div className="authority-chain__node">
                  <span>{stage.authority}</span>
                  <h3>{stage.label}</h3>
                  <p>{stage.detail}</p>
                </div>
                {index < authorityStages.length - 1 && (
                  <ArrowRight className="authority-chain__arrow" aria-hidden="true" weight="bold" />
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="authority-notes">
          <article className="reveal">
            <LockKey aria-hidden="true" weight="duotone" />
            <div>
              <h3>批准要绑定眼前这一版</h3>
              <p>目标、状态版本、动作摘要和有效期发生变化，旧批准就该失效。</p>
            </div>
          </article>
          <article className="reveal">
            <UserFocus aria-hidden="true" weight="duotone" />
            <div>
              <h3>效果判断留给承担结果的人</h3>
              <p>任务完成、测试通过和没有新警告，都不能替人回答这次修复是否真的有用。</p>
            </div>
          </article>
        </div>

        <Citations ids={["reviewer-architecture", "reviewer-verification", "reviewer-outcomes"]} />
      </div>
    </section>
  );
}
