import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  authorityStages,
  contextTiles,
  deckSlides,
  loopSteps,
  principles,
  testingPatterns,
} from "../content";

interface PresentationModeProps {
  open: boolean;
  onClose: () => void;
}

export function PresentationMode({ open, onClose }: PresentationModeProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const lastIndex = deckSlides.length - 1;

  function goTo(index: number) {
    setSlideIndex(Math.min(lastIndex, Math.max(0, index)));
  }

  useEffect(() => {
    if (!open) return;

    returnFocusRef.current = document.activeElement as HTMLElement | null;
    setSlideIndex(0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        goTo(slideIndex + 1);
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
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
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lastIndex, onClose, open, slideIndex]);

  if (!open) return null;

  const slide = deckSlides[slideIndex];
  const coverTitleBreak = slide.kind === "cover" ? slide.title.indexOf("，") + 1 : 0;

  return createPortal(
    <div
      className="presentation"
      role="dialog"
      aria-modal="true"
      aria-labelledby="presentation-title"
      ref={dialogRef}
    >
      <header className="presentation__header">
        <div>
          <span className="presentation__mark">VC</span>
          <span>演示模式</span>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          className="presentation__icon-button"
          onClick={onClose}
          aria-label="关闭演示模式"
        >
          <X aria-hidden="true" weight="bold" />
        </button>
      </header>

      <main className={`presentation__slide presentation__slide--${slide.kind}`} key={slide.id}>
        <div className="presentation__copy">
          <h2 id="presentation-title" aria-label={coverTitleBreak > 0 ? slide.title : undefined}>
            {coverTitleBreak > 0 ? (
              <>
                <span className="presentation__title-line" aria-hidden="true">
                  {slide.title.slice(0, coverTitleBreak)}
                </span>
                <span className="presentation__title-line" aria-hidden="true">
                  {slide.title.slice(coverTitleBreak)}
                </span>
              </>
            ) : (
              slide.title
            )}
          </h2>
          <p>{slide.body}</p>
        </div>
        <SlideVisual kind={slide.kind} />
      </main>

      <footer className="presentation__footer">
        <p aria-live="polite">
          第 {slideIndex + 1} / {deckSlides.length} 页
        </p>
        <div className="presentation__controls">
          <button type="button" onClick={() => goTo(slideIndex - 1)} disabled={slideIndex === 0}>
            <ArrowLeft aria-hidden="true" weight="bold" />
            上一页
          </button>
          <button
            type="button"
            onClick={() => (slideIndex === lastIndex ? onClose() : goTo(slideIndex + 1))}
          >
            {slideIndex === lastIndex ? "返回阅读" : "下一页"}
            {slideIndex < lastIndex && <ArrowRight aria-hidden="true" weight="bold" />}
          </button>
        </div>
      </footer>
    </div>,
    document.body,
  );
}

function SlideVisual({ kind }: { kind: (typeof deckSlides)[number]["kind"] }) {
  if (kind === "cover") {
    return (
      <img
        className="presentation__hero-image"
        src={`${import.meta.env.BASE_URL}assets/loop-still-life.webp`}
        alt="纸飞机沿着留有检查开口的蓝色环路移动"
      />
    );
  }

  if (kind === "principles") {
    return (
      <div className="presentation__principles">
        {principles.map((principle) => (
          <article key={principle.title}>
            <h3>{principle.title}</h3>
            <strong>{principle.consequence}</strong>
          </article>
        ))}
      </div>
    );
  }

  if (kind === "loop") {
    return (
      <ol className="presentation__loop">
        {loopSteps.map((step, index) => (
          <li key={step.key}>
            <span>{step.label}</span>
            <small>{step.short}</small>
            {index < loopSteps.length - 1 && <ArrowRight aria-hidden="true" weight="bold" />}
          </li>
        ))}
      </ol>
    );
  }

  if (kind === "context") {
    return (
      <div className="presentation__context">
        {contextTiles.map((tile) => (
          <article key={tile.title}>
            <h3>{tile.title}</h3>
            <p>{tile.hint}</p>
          </article>
        ))}
      </div>
    );
  }

  if (kind === "brief") {
    return (
      <div className="presentation__brief">
        {["目标与当前证据", "允许范围与不可改变", "验收条件与验证方式", "交付内容与剩余未知"].map(
          (line) => (
            <span key={line}>{line}</span>
          ),
        )}
      </div>
    );
  }

  if (kind === "authority") {
    return (
      <ol className="presentation__authority">
        {authorityStages.map((stage) => (
          <li key={stage.label}>
            <span>{stage.authority}</span>
            <strong>{stage.label}</strong>
          </li>
        ))}
      </ol>
    );
  }

  if (kind === "testing") {
    return (
      <div className="presentation__testing">
        {testingPatterns.map((pattern) => (
          <article key={pattern.title}>
            <span>{pattern.tag}</span>
            <h3>{pattern.title}</h3>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="presentation__close">
      <span>看得见</span>
      <span>停得住</span>
      <span>能复现</span>
    </div>
  );
}
