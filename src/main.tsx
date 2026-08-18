import "@fontsource-variable/fraunces";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/noto-serif-sc";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/components-secondary.css";
import "./styles/presentation.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
