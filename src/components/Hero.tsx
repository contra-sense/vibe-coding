import { ArrowDown, Play } from "@phosphor-icons/react";

interface HeroProps {
  onOpenPresentation: () => void;
}

export function Hero({ onOpenPresentation }: HeroProps) {
  const illustration = `${import.meta.env.BASE_URL}assets/illustration-task-clarity.webp`;

  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="page-shell hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">ContraSense field note · 01</p>
            <h1 id="hero-title">
              先把成功写清楚
              <span>再让代理动手</span>
            </h1>
            <p className="hero__lede">
              第一性原理负责把事实拆开，DDD
              负责给规则找主人，对抗式审查负责怀疑那条看起来最顺的路。这本手册把三者放进同一项工程任务里。
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#exercise">
                从演练开始
                <ArrowDown aria-hidden="true" weight="bold" />
              </a>
              <button
                className="button button--secondary"
                type="button"
                onClick={onOpenPresentation}
              >
                <Play aria-hidden="true" weight="fill" />
                播放 9 页手册
              </button>
            </div>
            <p className="hero__provenance">
              依据 11 份固定版本材料整理。事实、推导、人工决定和未知结果分开呈现。
            </p>
          </div>

          <figure className="hero-illustration">
            <img
              src={illustration}
              alt="两只手整理一张纸，纸上的乱线逐渐走向一个清楚的完成标记"
              width="1254"
              height="1254"
            />
            <figcaption>
              <span>一个任务，三副镜片</span>
              <strong>事实 → 边界 → 证据</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <aside className="source-ribbon" aria-label="内容材料说明">
        <div className="page-shell source-ribbon__inner">
          <p>这本手册讨论真实仓库里的行动资格、领域归属和终态证据。</p>
          <a href="#sources">先看材料边界</a>
        </div>
      </aside>
    </>
  );
}
