import { ArrowDown, ArrowsClockwise } from "@phosphor-icons/react";

export function Hero() {
  const heroImage = `${import.meta.env.BASE_URL}assets/loop-still-life.webp`;

  return (
    <>
      <section className="hero page-shell" id="top" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="hero__label">工程实践手册</p>
          <h1 id="hero-title" aria-label="先把成功写清楚，再让代理动手">
            <span className="hero__title-line" aria-hidden="true">
              先把成功写清楚，
            </span>
            <span className="hero__title-line" aria-hidden="true">
              再让代理动手
            </span>
          </h1>
          <p className="hero__lede">
            这是一份来自真实代码库的 Vibe Coding 方法，讨论上下文、权限、验证与人的判断。
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#first-principles">
              开始阅读
              <ArrowDown aria-hidden="true" weight="bold" />
            </a>
            <a className="button button--secondary" href="#loop">
              <ArrowsClockwise aria-hidden="true" weight="bold" />
              查看工程循环
            </a>
          </div>
        </div>

        <figure className="hero__visual">
          <img
            src={heroImage}
            alt="四个纸飞机沿蓝色环路依次移动，环路留有一个可以检查的开口"
            width="1440"
            height="960"
            fetchPriority="high"
          />
        </figure>
      </section>

      <aside className="source-ribbon" aria-label="内容材料说明">
        <div className="page-shell source-ribbon__inner">
          <p>依据 11 份一手资料整理，判断、推导与原文出处分开呈现。</p>
          <a href="#sources">查看资料账本</a>
        </div>
      </aside>
    </>
  );
}
