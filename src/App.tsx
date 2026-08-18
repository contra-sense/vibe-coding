import { ArrowRight, ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { AdversarialReview } from "./components/AdversarialReview";
import { BriefLab } from "./components/BriefLab";
import { CaseWorkbench } from "./components/CaseWorkbench";
import { DomainMap } from "./components/DomainMap";
import { FailurePatterns } from "./components/FailurePatterns";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LoopExplorer } from "./components/LoopExplorer";
import { MonorepoPlaybook } from "./components/MonorepoPlaybook";
import { PresentationMode } from "./components/PresentationMode";
import { PrincipleBento } from "./components/PrincipleBento";
import { SourceLedger } from "./components/SourceLedger";
import { SurfaceContract } from "./components/SurfaceContract";

export function App() {
  const [presentationOpen, setPresentationOpen] = useState(false);

  return (
    <>
      <Header onOpenPresentation={() => setPresentationOpen(true)} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <CaseWorkbench />
        <PrincipleBento />
        <DomainMap />
        <AdversarialReview />
        <LoopExplorer />
        <SurfaceContract />
        <BriefLab />
        <MonorepoPlaybook />
        <FailurePatterns />
        <ClosingStatement />
        <SourceLedger />
      </main>
      <Footer />
      <PresentationMode open={presentationOpen} onClose={() => setPresentationOpen(false)} />
    </>
  );
}

function ClosingStatement() {
  return (
    <section className="closing-statement" aria-labelledby="closing-title">
      <div className="page-shell closing-statement__inner">
        <span className="closing-statement__number" aria-hidden="true">
          END
        </span>
        <div>
          <h2 id="closing-title">代理停下只是运行结束，工程完成还需要证据</h2>
          <p>
            目标状态已经成立，边界没有被悄悄改写，下一次还能重放。这三件事都能找到证据以后，一项工作才适合交付。
          </p>
        </div>
        <ul aria-label="交付前的三个最终问题">
          <li>
            <span>目标</span>
            用户能否观察到约定结果
          </li>
          <li>
            <span>边界</span>
            每条规则是否仍由正确层负责
          </li>
          <li>
            <span>证据</span>
            当前版本能否被独立复验
          </li>
        </ul>
        <div className="closing-statement__actions">
          <a
            className="button button--light"
            href="https://github.com/contra-sense/vibe-coding"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo aria-hidden="true" weight="bold" />
            查看源码和版本
            <ArrowSquareOut aria-hidden="true" weight="bold" />
          </a>
          <a className="closing-statement__source" href="#sources">
            核对资料账本
            <ArrowRight aria-hidden="true" weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div>
          <span className="brand-mark brand-mark--small" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <p>一份有出处、能复核、允许保留未知的中文工程手册。</p>
        </div>
        <p>材料固定到具体 commit，站点由 GitHub Pages 发布。</p>
      </div>
    </footer>
  );
}
