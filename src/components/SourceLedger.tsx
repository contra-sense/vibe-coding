import { ArrowSquareOut, GitCommit, LockKey } from "@phosphor-icons/react";
import { sources } from "../content";

const groups = ["A3S monorepo", "A3S Test", "Agentic Reviewer", "Bento"] as const;

export function SourceLedger() {
  return (
    <section className="section section--sources" id="sources" aria-labelledby="sources-title">
      <div className="page-shell">
        <div className="section-heading reveal">
          <p className="section-heading__label">资料账本</p>
          <h2 id="sources-title">每个判断都能回到原始材料</h2>
          <p>
            下面的链接固定到本次整理时读取的
            commit。项目继续变化，这份手册仍然能说明自己依据了哪一版。
          </p>
          <p className="source-access-note">
            <LockKey aria-hidden="true" weight="bold" />
            Agentic Reviewer 资料位于私有仓库。链接需要访问权限，未授权时 GitHub 会返回 404。
          </p>
        </div>

        <div className="source-groups">
          {groups.map((group, groupIndex) => {
            const groupSources = sources.filter((source) => source.project === group);
            return (
              <article
                className={`source-group source-group--${groupIndex + 1} reveal`}
                key={group}
              >
                <h3>
                  {group}
                  {group === "Agentic Reviewer" && (
                    <span className="source-group__visibility">
                      <LockKey aria-hidden="true" weight="bold" />
                      私有来源
                    </span>
                  )}
                </h3>
                <div className="source-group__items">
                  {groupSources.map((source) => (
                    <a
                      key={source.id}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={
                        source.access === "private"
                          ? `${source.title}，私有仓库，需要访问权限`
                          : source.title
                      }
                    >
                      <span className="source-group__title">
                        {source.title}
                        <ArrowSquareOut aria-hidden="true" weight="bold" />
                      </span>
                      <span className="source-group__commit">
                        <GitCommit aria-hidden="true" weight="bold" />
                        {source.commit}
                      </span>
                      <small>{source.usedFor}</small>
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
