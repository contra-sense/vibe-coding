import { ArrowDown, ArrowRight, WarningCircle } from "@phosphor-icons/react";
import { boundaryDecisions, domainLayers } from "../content";
import { ChapterIntro } from "./ChapterIntro";
import { Citations } from "./Citations";

export function DomainMap() {
  const illustration = `${import.meta.env.BASE_URL}assets/illustration-rule-owner.webp`;

  return (
    <section
      className="chapter chapter--paper chapter--domain"
      id="domain"
      aria-labelledby="domain-title"
    >
      <div className="page-shell">
        <ChapterIntro
          number="03"
          id="domain-title"
          title="规则先找到主人，代码才知道放哪里"
          lead="四层目录只能提醒依赖方向。业务语言、不变量和外部技术各自的归属还要靠人判断。登录页看起来是前端任务，里面仍可能混着认证规则和协议映射。"
        />

        <figure className="domain-illustration">
          <img
            src={illustration}
            alt="一只手把规则放进四个区域中正确的位置，另一只手稳住整体边界"
            width="1254"
            height="1254"
            loading="lazy"
          />
          <figcaption>
            <span>先问归谁</span>
            <strong>目录只提示方向，规则仍要找到主人。</strong>
          </figcaption>
        </figure>

        <div className="domain-stage" aria-label="DDD 四层边界图">
          <div className="domain-stage__direction">
            <span>依赖指向业务</span>
            <ArrowDown aria-hidden="true" weight="bold" />
          </div>
          <div className="domain-stage__layers">
            {domainLayers.map((layer, index) => (
              <article className={`domain-layer domain-layer--${layer.key}`} key={layer.key}>
                <span className="domain-layer__index">0{index + 1}</span>
                <div className="domain-layer__title">
                  <h3>{layer.name}</h3>
                  <span>{layer.test}</span>
                </div>
                <dl>
                  <div>
                    <dt>负责</dt>
                    <dd>{layer.owns}</dd>
                  </div>
                  <div>
                    <dt>不接管</dt>
                    <dd>{layer.rejects}</dd>
                  </div>
                </dl>
                <p>{layer.exercise}</p>
              </article>
            ))}
          </div>
        </div>

        <div
          className="boundary-table-wrap"
          tabIndex={0}
          role="region"
          aria-label="常见改动归属判断表"
        >
          <table className="boundary-table">
            <caption>看到需求以后，用这几句话判断落点</caption>
            <thead>
              <tr>
                <th scope="col">信号</th>
                <th scope="col">先看哪里</th>
                <th scope="col">演练中的例子</th>
                <th scope="col">泄漏警报</th>
              </tr>
            </thead>
            <tbody>
              {boundaryDecisions.map((decision) => (
                <tr key={decision.signal}>
                  <th scope="row">{decision.signal}</th>
                  <td>
                    <span className="boundary-table__owner">
                      {decision.owner}
                      <ArrowRight aria-hidden="true" weight="bold" />
                    </span>
                  </td>
                  <td>{decision.example}</td>
                  <td>
                    <span className="boundary-table__warning">
                      <WarningCircle aria-hidden="true" weight="fill" />
                      {decision.warning}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Citations ids={["a3s-agents"]} label="DDD 结构依据" />
      </div>
    </section>
  );
}
