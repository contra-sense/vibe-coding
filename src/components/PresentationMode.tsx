import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  deckSlides,
  domainLayers,
  principles,
  reviewChecks,
  surfaceArtifacts,
  taskAnnotations,
  workflowSteps,
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
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
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

  return createPortal(
    <div
      className="presentation"
      role="dialog"
      aria-modal="true"
      aria-labelledby="presentation-title"
      ref={dialogRef}
    >
      <header className="presentation__chrome">
        <div className="presentation__brand">
          <span className="brand-mark brand-mark--small" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>vibe/coding · 播放手册</span>
        </div>
        <div className="presentation__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${(slideIndex + 1) / deckSlides.length})` }} />
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          className="presentation__icon-button"
          onClick={onClose}
          aria-label="关闭播放手册"
        >
          <X aria-hidden="true" weight="bold" />
        </button>
      </header>

      <div className="presentation__viewport">
        <main className={`presentation__slide presentation__slide--${slide.kind}`} key={slide.id}>
          <span className="presentation__slide-number" aria-hidden="true">
            {String(slideIndex + 1).padStart(2, "0")}
          </span>
          <div className="presentation__copy">
            <h2 id="presentation-title">{slide.title}</h2>
            <p>{slide.body}</p>
          </div>
          <SlideVisual kind={slide.kind} />
        </main>
      </div>

      <footer className="presentation__controls">
        <p aria-live="polite">
          {String(slideIndex + 1).padStart(2, "0")} / {String(deckSlides.length).padStart(2, "0")}
        </p>
        <div className="presentation__dots" aria-label="跳到指定页面">
          {deckSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === slideIndex ? "is-active" : undefined}
              onClick={() => goTo(index)}
              aria-label={`第 ${index + 1} 页，${item.title}`}
              aria-current={index === slideIndex ? "page" : undefined}
            />
          ))}
        </div>
        <div>
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
            onClick={() => (slideIndex === lastIndex ? onClose() : goTo(slideIndex + 1))}
            aria-label={slideIndex === lastIndex ? "返回阅读" : "下一页"}
          >
            <span>{slideIndex === lastIndex ? "返回阅读" : "下一页"}</span>
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
      <div className="presentation-visual presentation-visual--cover" aria-hidden="true">
        <span>第一性原理</span>
        <span>DDD</span>
        <span>对抗审查</span>
        <strong>可验证结果</strong>
      </div>
    );
  }

  if (kind === "exercise") {
    return (
      <div className="presentation-visual presentation-visual--exercise">
        <blockquote>登录失败时体验不好，改一下。</blockquote>
        <div>
          {["现状是什么", "期望来自哪里", "规则归谁", "代理拥有什么权限"].map((item, index) => (
            <span key={item}>
              0{index + 1} {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "principles") {
    return (
      <div className="presentation-visual presentation-visual--grid">
        {principles.map((principle, index) => (
          <article key={principle.title}>
            <span>0{index + 1}</span>
            <h3>{principle.title}</h3>
          </article>
        ))}
      </div>
    );
  }

  if (kind === "domain") {
    return (
      <div className="presentation-visual presentation-visual--layers">
        {domainLayers.map((layer) => (
          <article key={layer.key}>
            <h3>{layer.name}</h3>
            <p>{layer.owns}</p>
          </article>
        ))}
      </div>
    );
  }

  if (kind === "review") {
    return (
      <ol className="presentation-visual presentation-visual--review">
        {reviewChecks.map((check, index) => (
          <li key={check.title}>
            <span>0{index + 1}</span>
            <strong>{check.title}</strong>
          </li>
        ))}
      </ol>
    );
  }

  if (kind === "workflow") {
    return (
      <ol className="presentation-visual presentation-visual--workflow">
        {workflowSteps.map((step, index) => (
          <li key={step.key}>
            <span>0{index + 1}</span>
            <strong>{step.label}</strong>
          </li>
        ))}
      </ol>
    );
  }

  if (kind === "surface") {
    return (
      <div className="presentation-visual presentation-visual--surface">
        {surfaceArtifacts.map((artifact, index) => (
          <article key={artifact.name}>
            <span>0{index + 1}</span>
            <h3>{artifact.name}</h3>
            <p>{artifact.question}</p>
          </article>
        ))}
      </div>
    );
  }

  if (kind === "packet") {
    return (
      <div className="presentation-visual presentation-visual--packet">
        {taskAnnotations.map((item, index) => (
          <span key={item.title}>
            {String(index + 1).padStart(2, "0")} {item.title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="presentation-visual presentation-visual--close">
      <span>目标成立</span>
      <span>边界清楚</span>
      <span>证据可重放</span>
    </div>
  );
}
