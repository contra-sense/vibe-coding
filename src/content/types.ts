export type SourceId =
  | "a3s-agents"
  | "a3s-design"
  | "a3s-web-design"
  | "a3s-test-readme"
  | "a3s-test-architecture"
  | "a3s-testkit"
  | "reviewer-architecture"
  | "reviewer-findings"
  | "reviewer-verification"
  | "reviewer-outcomes"
  | "bento-guide";

export interface SourceRecord {
  id: SourceId;
  title: string;
  project: string;
  access?: "private";
  commit: string;
  href: string;
  usedFor: string;
}

export type LensKey = "principles" | "domain" | "review";
