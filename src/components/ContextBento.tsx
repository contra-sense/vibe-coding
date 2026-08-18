import { contextTiles, type SourceId } from "../content";
import { Citations } from "./Citations";

export function ContextBento() {
  const contextImage = `${import.meta.env.BASE_URL}assets/context-model.webp`;
  const sourceIds = [...new Set(contextTiles.flatMap((tile) => tile.sourceIds))] as SourceId[];

  return (
    <section className="section section--context page-shell" aria-labelledby="context-title">
      <div className="section-heading reveal">
        <h2 id="context-title">上下文要能被机器直接读取</h2>
        <p>靠一段聊天临时解释仓库，代理每一轮都会重新猜。把稳定信息放回它本来就该在的位置。</p>
      </div>

      <div className="context-grid">
        {contextTiles.map((tile, index) =>
          index === 2 ? (
            <figure className={`${tile.className} reveal`} key={tile.title}>
              <img
                src={contextImage}
                alt="层层嵌套的纸质边界中，一根蓝线沿正确路径穿过不同区域"
                width="1200"
                height="900"
                loading="lazy"
              />
              <figcaption>
                <h3>{tile.title}</h3>
                <p>{tile.body}</p>
                <small>{tile.hint}</small>
              </figcaption>
            </figure>
          ) : (
            <article className={`${tile.className} reveal`} key={tile.title}>
              <h3>{tile.title}</h3>
              <p>{tile.body}</p>
              <small>{tile.hint}</small>
            </article>
          ),
        )}
      </div>

      <Citations ids={sourceIds} />
    </section>
  );
}
