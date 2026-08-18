import { ArrowDown, Play } from "@phosphor-icons/react";

export function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__atmosphere" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="page-shell hero__inner">
          <div className="hero__copy">
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
              <a className="button button--night" href="#loop">
                <Play aria-hidden="true" weight="fill" />
                查看完整路径
              </a>
            </div>
            <p className="hero__provenance">
              依据 11 份固定版本材料整理。事实、推导、人工决定和未知结果分开呈现。
            </p>
          </div>

          <figure className="hero-stage">
            <div className="hero-stage__chrome">
              <span>exercise.login.failure</span>
              <span>OBSERVATION 04</span>
            </div>
            <div className="hero-stage__request">
              <span>含糊要求</span>
              <strong>登录失败时体验不好，改一下。</strong>
            </div>
            <div className="hero-stage__lenses" aria-hidden="true">
              <div>
                <span>01</span>
                <strong>第一性原理</strong>
                <small>事实与后置条件</small>
              </div>
              <div>
                <span>02</span>
                <strong>DDD</strong>
                <small>所有权与依赖方向</small>
              </div>
              <div>
                <span>03</span>
                <strong>对抗审查</strong>
                <small>攻击最顺利的解释</small>
              </div>
            </div>
            <div className="hero-stage__result">
              <span>可签收结果</span>
              <strong>边界清楚，证据独立，未知仍然可见</strong>
            </div>
            <figcaption>同一项工作连续经过三副镜片，任务本身始终留在画面里。</figcaption>
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
