import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { AdversarialReview } from "./components/AdversarialReview";
import { AuthorityChain } from "./components/AuthorityChain";
import { BriefLab } from "./components/BriefLab";
import { ContextBento } from "./components/ContextBento";
import { FailurePatterns } from "./components/FailurePatterns";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LoopExplorer } from "./components/LoopExplorer";
import { MonorepoPlaybook } from "./components/MonorepoPlaybook";
import { PresentationMode } from "./components/PresentationMode";
import { PrincipleBento } from "./components/PrincipleBento";
import { SourceLedger } from "./components/SourceLedger";
import { TestingPatterns } from "./components/TestingPatterns";

export function App() {
  const [presentationOpen, setPresentationOpen] = useState(false);

  return (
    <>
      <Header onOpenPresentation={() => setPresentationOpen(true)} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <PrincipleBento />
        <LoopExplorer />
        <ContextBento />
        <BriefLab />
        <AdversarialReview />
        <AuthorityChain />
        <TestingPatterns />
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
        <p>最后只记住这一句</p>
        <h2 id="closing-title">把偶然跑通，变成下一次仍然成立</h2>
        <div className="closing-statement__actions">
          <a
            className="button button--light"
            href="https://github.com/contra-sense/vibe-coding"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo aria-hidden="true" weight="bold" />
            查看源码与版本
            <ArrowSquareOut aria-hidden="true" weight="bold" />
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
          <span className="brand__mark" aria-hidden="true">
            VC
          </span>
          <p>一份有出处、可复核、会继续修订的中文工程手册。</p>
        </div>
        <p>内容依据固定 commit，站点由 GitHub Pages 发布。</p>
      </div>
    </footer>
  );
}
