import { GithubLogo, List, Moon, PresentationChart, Sun, X } from "@phosphor-icons/react";
import { useState } from "react";
import { navItems } from "../content";
import { useTheme } from "../hooks/useTheme";

interface HeaderProps {
  onOpenPresentation: () => void;
}

export function Header({ onOpenPresentation }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="site-header__bar page-shell">
        <a className="brand" href="#top" aria-label="Vibe Coding 工程手册首页">
          <span className="brand__mark" aria-hidden="true">
            VC
          </span>
          <span className="brand__name">工程手册</span>
        </a>

        <nav className="desktop-nav" aria-label="主要导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button header-actions__presentation"
            type="button"
            onClick={onOpenPresentation}
          >
            <PresentationChart aria-hidden="true" />
            <span>演示模式</span>
          </button>
          <a
            className="icon-button"
            href="https://github.com/contra-sense/vibe-coding"
            target="_blank"
            rel="noreferrer"
            aria-label="打开 GitHub 仓库"
          >
            <GithubLogo aria-hidden="true" />
          </a>
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}
          >
            {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
          </button>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "关闭导航" : "打开导航"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="移动端导航" hidden={!menuOpen}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <button
          type="button"
          onClick={() => {
            setMenuOpen(false);
            onOpenPresentation();
          }}
        >
          进入演示模式
        </button>
      </nav>
    </header>
  );
}
