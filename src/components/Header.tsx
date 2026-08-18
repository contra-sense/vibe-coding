import { GithubLogo, List, Moon, Play, Sun, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { navItems } from "../content";
import { useTheme } from "../hooks/useTheme";

interface HeaderProps {
  onOpenPresentation: () => void;
}

export function Header({ onOpenPresentation }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!menuOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__bar page-shell">
        <a className="brand" href="#top" aria-label="Vibe Coding 工程手册首页">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="brand__name">
            vibe<span>/</span>coding
          </span>
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
            className="header-control header-actions__presentation"
            type="button"
            onClick={onOpenPresentation}
          >
            <Play aria-hidden="true" weight="fill" />
            <span>播放手册</span>
          </button>
          <a
            className="header-control header-control--icon"
            href="https://github.com/contra-sense/vibe-coding"
            target="_blank"
            rel="noreferrer"
            aria-label="打开 GitHub 仓库"
          >
            <GithubLogo aria-hidden="true" />
          </a>
          <button
            className="header-control header-control--icon"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}
          >
            {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
          </button>
          <button
            className="header-control header-control--icon mobile-menu-button"
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
          播放手册
        </button>
      </nav>
    </header>
  );
}
