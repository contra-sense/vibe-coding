import { ArrowRight, WarningCircle } from "@phosphor-icons/react";
import { principles, type SourceId } from "../content";
import { ChapterIntro } from "./ChapterIntro";
import { Citations } from "./Citations";

export function PrincipleBento() {
  const sourceIds = [
    ...new Set(principles.flatMap((principle) => principle.sourceIds)),
  ] as SourceId[];

  return (
    <section
      className="chapter chapter--night chapter--principles"
      id="first-principles"
      aria-labelledby="principles-title"
    >
      <div className="page-shell">
        <ChapterIntro
          number="02"
          id="principles-title"
          title="先承认四件绕不过去的事"
          lead="工具会变，模型会变，下面四个约束仍然留在现场。它们决定代理什么时候有资格行动，也决定我们凭什么相信结果。"
          inverted
        />

        <div className="principle-board">
          {principles.map((principle, index) => (
            <article
              className={`principle-card principle-card--${index + 1}`}
              key={principle.title}
            >
              <div className="principle-card__top">
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
              </div>
              <p>{principle.premise}</p>
              <dl>
                <div>
                  <dt>因此要做</dt>
                  <dd>{principle.consequence}</dd>
                </div>
                <div>
                  <dt>审查问题</dt>
                  <dd>{principle.challenge}</dd>
                </div>
              </dl>
              <p className="principle-card__shortcut">
                <WarningCircle aria-hidden="true" weight="fill" />
                <span>
                  <strong>拒绝的捷径</strong>
                  {principle.shortcut}
                </span>
              </p>
              <a href="#loop">
                放进完整路径
                <ArrowRight aria-hidden="true" weight="bold" />
              </a>
            </article>
          ))}
        </div>

        <Citations ids={sourceIds} label="推导依据" />
      </div>
    </section>
  );
}
