interface ChapterIntroProps {
  number: string;
  title: string;
  lead: string;
  id: string;
  inverted?: boolean;
}

export function ChapterIntro({ number, title, lead, id, inverted = false }: ChapterIntroProps) {
  return (
    <div className={`chapter-intro${inverted ? " chapter-intro--inverted" : ""}`}>
      <span className="chapter-intro__number" aria-hidden="true">
        {number}
      </span>
      <div className="chapter-intro__copy">
        <h2 id={id}>{title}</h2>
        <p>{lead}</p>
      </div>
    </div>
  );
}
