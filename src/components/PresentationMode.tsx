import {
  ArrowCounterClockwise,
  ArrowLeft,
  ArrowRight,
  ArrowsIn,
  ArrowsOut,
} from "@phosphor-icons/react";
import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { deckSlides, type DeckSlide, type SlideVisualKey } from "../content";

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

const slideIllustrations: Record<SlideVisualKey, string> = {
  cover: asset("illustration-cover-v2.png"),
  "intelligence-types": asset("illustration-intelligence-curves.png"),
  "llm-leverage": asset("illustration-intelligence.webp"),
  "complexity-types": asset("illustration-complexity-types-v2.png"),
  "architecture-system": asset("illustration-project-graph.png"),
  "crystal-growth": asset("illustration-knowledge-retention.png"),
  "review-observer": asset("illustration-adversarial-review-v2.png"),
  "engineering-knowledge": asset("illustration-evidence-loop.webp"),
  "design-patterns": asset("illustration-engineering-taste.webp"),
  "task-brief": asset("illustration-task-clarity.webp"),
  "first-principles": asset("illustration-first-principles.png"),
  "adversarial-review": asset("illustration-adversarial-review-v2.png"),
  monorepo: asset("illustration-monorepo.png"),
  "ddd-layers": asset("illustration-ddd-layers-v3.png"),
  "rule-files": asset("illustration-knowledge-retention.png"),
  "product-artifacts": asset("illustration-controlled-pipeline.png"),
  "test-layers": asset("illustration-controlled-pipeline.png"),
  "a3s-test": asset("illustration-task-clarity.webp"),
  "reviewer-scope": asset("illustration-reviewer-scope.png"),
  "effective-threshold": asset("illustration-habit-learning.png"),
  "fde-learning": asset("illustration-fde-learning-v2.png"),
  "learning-system": asset("illustration-habit-learning.png"),
};

const fullscreenRevealZone = {
  topRight: { width: 144, height: 120 },
  bottomRight: { width: 440, height: 140 },
} as const;

export function PresentationMode() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [revealedFullscreenControl, setRevealedFullscreenControl] = useState<
    "button" | "pager" | null
  >(null);
  const [fullscreenMessage, setFullscreenMessage] = useState("");
  const presentationRef = useRef<HTMLDivElement>(null);
  const lastIndex = deckSlides.length - 1;

  const goTo = useCallback(
    (index: number) => {
      setSlideIndex(Math.min(lastIndex, Math.max(0, index)));
    },
    [lastIndex],
  );

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        setFullscreenMessage("已退出全屏");
        return;
      }

      if (!presentationRef.current?.requestFullscreen) {
        setFullscreenMessage("当前浏览器不支持全屏");
        return;
      }

      await presentationRef.current.requestFullscreen();
      setFullscreenMessage("已进入全屏");
    } catch {
      setFullscreenMessage("浏览器未能切换全屏");
    }
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === presentationRef.current);
      setRevealedFullscreenControl(null);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isInteractive = target?.closest("button, a, input, textarea, select");

      if (event.key === "Escape") {
        if (document.fullscreenElement) {
          event.preventDefault();
          void document.exitFullscreen();
          return;
        }

        event.preventDefault();
        goTo(0);
        return;
      }

      if (event.key.toLowerCase() === "f" && !isInteractive) {
        event.preventDefault();
        void toggleFullscreen();
        return;
      }

      if (event.key === " " && isInteractive) return;

      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goTo(slideIndex + 1);
        return;
      }

      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goTo(slideIndex - 1);
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        goTo(lastIndex);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goTo, lastIndex, slideIndex, toggleFullscreen]);

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isFullscreen) return;

      const distanceFromRight = window.innerWidth - event.clientX;
      const distanceFromBottom = window.innerHeight - event.clientY;
      const isInTopRight =
        distanceFromRight <= fullscreenRevealZone.topRight.width &&
        event.clientY <= fullscreenRevealZone.topRight.height;
      const isInBottomRight =
        distanceFromRight <= fullscreenRevealZone.bottomRight.width &&
        distanceFromBottom <= fullscreenRevealZone.bottomRight.height;

      setRevealedFullscreenControl(isInTopRight ? "button" : isInBottomRight ? "pager" : null);
    },
    [isFullscreen],
  );

  const slide = deckSlides[slideIndex];

  return (
    <div
      ref={presentationRef}
      className={`presentation${isFullscreen ? " is-fullscreen" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setRevealedFullscreenControl(null)}
    >
      <aside className="presentation__rail" aria-label="幻灯片预览">
        <div className="presentation__rail-heading">
          <strong>幻灯片</strong>
          <span>{String(deckSlides.length).padStart(2, "0")} SLIDES</span>
        </div>
        <nav className="presentation__previews" aria-label="选择幻灯片">
          {deckSlides.map((item, index) => (
            <SlidePreview
              key={item.id}
              slide={item}
              index={index}
              active={index === slideIndex}
              onSelect={() => goTo(index)}
            />
          ))}
        </nav>
      </aside>

      <button
        type="button"
        className={`presentation__fullscreen-button${
          isFullscreen && revealedFullscreenControl === "button" ? " is-revealed" : ""
        }`}
        onClick={() => void toggleFullscreen()}
        aria-label={isFullscreen ? "退出全屏" : "进入全屏"}
      >
        {isFullscreen ? (
          <ArrowsIn aria-hidden="true" weight="bold" />
        ) : (
          <ArrowsOut aria-hidden="true" weight="bold" />
        )}
        <span className="sr-only">{isFullscreen ? "退出全屏" : "进入全屏"}</span>
      </button>

      <div className="presentation__viewport">
        <main
          id="main"
          className={`presentation__slide presentation__slide--${slide.kind}`}
          key={slide.id}
          tabIndex={-1}
          aria-labelledby="presentation-title"
          aria-roledescription="幻灯片"
        >
          <header className="presentation__slide-header">
            <span>{slide.eyebrow}</span>
            <span aria-label={`第 ${slideIndex + 1} 页，共 ${deckSlides.length} 页`}>
              {String(slideIndex + 1).padStart(2, "0")} /{" "}
              {String(deckSlides.length).padStart(2, "0")}
            </span>
          </header>

          <div className="presentation__copy">
            <p className="presentation__kicker">{slide.eyebrow}</p>
            <h1 id="presentation-title" aria-label={slide.title}>
              {slide.titleLines
                ? slide.titleLines.map((line) => <span key={line}>{line}</span>)
                : slide.title}
            </h1>
            <div className="presentation__detail">
              <p>{slide.body}</p>
              {slide.points ? (
                <ul>
                  {slide.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <figure className="presentation__illustration">
            <img
              src={slideIllustrations[slide.visual]}
              alt=""
              width="1254"
              height="1254"
              draggable="false"
            />
            {slide.caption ? <figcaption>{slide.caption}</figcaption> : null}
          </figure>

          <footer className="presentation__slide-footer" aria-hidden="true">
            <span>{slide.source ?? "VIBE CODING ENGINEERING PLAYBOOK"}</span>
            <span>{slide.id.replaceAll("-", " ").toUpperCase()}</span>
          </footer>
        </main>
      </div>

      <nav
        className={`presentation__controls${
          isFullscreen && revealedFullscreenControl === "pager" ? " is-revealed" : ""
        }`}
        aria-label="演示文稿控制"
      >
        <div className="presentation__control-status">
          <p aria-live="polite">
            {String(slideIndex + 1).padStart(2, "0")} / {String(deckSlides.length).padStart(2, "0")}
          </p>
          <span>方向键翻页 · F 切换全屏</span>
        </div>
        <div className="presentation__pager">
          <button
            type="button"
            onClick={() => goTo(slideIndex - 1)}
            disabled={slideIndex === 0}
            aria-label="上一页"
          >
            <ArrowLeft aria-hidden="true" weight="bold" />
            <span>上一页</span>
          </button>
          <button
            type="button"
            onClick={() => (slideIndex === lastIndex ? goTo(0) : goTo(slideIndex + 1))}
            aria-label={slideIndex === lastIndex ? "回到封面" : "下一页"}
          >
            <span>{slideIndex === lastIndex ? "回到封面" : "下一页"}</span>
            {slideIndex === lastIndex ? (
              <ArrowCounterClockwise aria-hidden="true" weight="bold" />
            ) : (
              <ArrowRight aria-hidden="true" weight="bold" />
            )}
          </button>
        </div>
        <span className="sr-only" aria-live="polite">
          {fullscreenMessage}
        </span>
      </nav>
    </div>
  );
}

interface SlidePreviewProps {
  slide: DeckSlide;
  index: number;
  active: boolean;
  onSelect: () => void;
}

function SlidePreview({ slide, index, active, onSelect }: SlidePreviewProps) {
  return (
    <button
      type="button"
      className={`presentation__preview presentation__preview--${slide.kind}${active ? " is-active" : ""}`}
      onClick={onSelect}
      aria-label={`第 ${index + 1} 页，${slide.title}`}
      aria-current={active ? "page" : undefined}
    >
      <span className="presentation__preview-number">{String(index + 1).padStart(2, "0")}</span>
      <span className="presentation__preview-canvas" aria-hidden="true">
        <span className="presentation__preview-rule" />
        <strong>{slide.title}</strong>
        <img
          src={slideIllustrations[slide.visual]}
          alt=""
          width="1254"
          height="1254"
          draggable="false"
        />
      </span>
    </button>
  );
}
