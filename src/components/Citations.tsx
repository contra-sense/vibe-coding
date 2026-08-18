import { ArrowSquareOut, LockKey } from "@phosphor-icons/react";
import { sources, type SourceId } from "../content";

interface CitationsProps {
  ids: SourceId[];
  label?: string;
}

export function Citations({ ids, label = "本节依据" }: CitationsProps) {
  const uniqueSources = sources.filter((source) => ids.includes(source.id));

  return (
    <div className="citations" aria-label={label}>
      <span>{label}</span>
      <div className="citations__links">
        {uniqueSources.map((source) => (
          <a
            key={source.id}
            href={source.href}
            target="_blank"
            rel="noreferrer"
            aria-label={
              source.access === "private"
                ? `${source.project}，私有仓库，需要访问权限`
                : source.project
            }
            title={source.access === "private" ? `${source.title}，需仓库权限` : source.title}
          >
            {source.access === "private" && <LockKey aria-hidden="true" weight="bold" />}
            {source.project}
            <ArrowSquareOut aria-hidden="true" weight="bold" />
          </a>
        ))}
      </div>
    </div>
  );
}
