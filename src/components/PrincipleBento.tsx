import { ArrowsClockwise, BracketsCurly, CheckCircle, Question } from "@phosphor-icons/react";
import { principles, type SourceId } from "../content";
import { Citations } from "./Citations";

const icons = [BracketsCurly, ArrowsClockwise, CheckCircle, Question];

export function PrincipleBento() {
  const sourceIds = [
    ...new Set(principles.flatMap((principle) => principle.sourceIds)),
  ] as SourceId[];

  return (
    <section
      className="section section--principles page-shell"
      id="first-principles"
      aria-labelledby="principles-title"
    >
      <div className="section-heading reveal">
        <p className="section-heading__label">从事实出发</p>
        <h2 id="principles-title">先承认四件绕不过去的事</h2>
        <p>Vibe Coding 先要回答两个工程问题。代理何时有资格行动，我们又凭什么相信结果。</p>
      </div>

      <div className="principle-grid">
        {principles.map((principle, index) => {
          const Icon = icons[index];
          return (
            <article
              className={`principle-card principle-card--${index + 1} reveal`}
              key={principle.title}
            >
              <div className="principle-card__icon" aria-hidden="true">
                <Icon weight="duotone" />
              </div>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
              <strong>{principle.consequence}</strong>
            </article>
          );
        })}
      </div>

      <Citations ids={sourceIds} />
    </section>
  );
}
