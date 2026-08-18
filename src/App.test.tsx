import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { App } from "./App";
import { briefTemplate } from "./content";

describe("Vibe Coding field guide", () => {
  it("renders the source-backed reading path", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "先把成功写清楚，再让代理动手", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "一条能复现的工程循环" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "每个判断都能回到原始材料" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /A3S Test/ }).length).toBeGreaterThan(0);
    expect(screen.getByRole("main")).toHaveAttribute("tabindex", "-1");
    expect(screen.getByText(/Agentic Reviewer 资料位于私有仓库/)).toBeVisible();
  });

  it("moves through the loop with accessible tabs", async () => {
    const user = userEvent.setup();
    render(<App />);

    const verifyTab = screen.getByRole("tab", { name: /验证/ });
    await user.click(verifyTab);

    expect(verifyTab).toHaveAttribute("aria-selected", "true");
    const panel = screen.getByRole("tabpanel");
    expect(within(panel).getByRole("heading", { name: "从目标一侧重新看" })).toBeVisible();
  });

  it("copies the task template", async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, "writeText").mockResolvedValue(undefined);
    render(<App />);

    await user.click(screen.getByRole("button", { name: "复制模板" }));

    expect(writeText).toHaveBeenCalledWith(briefTemplate);
    expect(screen.getByRole("button", { name: "已复制" })).toBeVisible();
  });

  it("opens, advances and closes presentation mode", async () => {
    const user = userEvent.setup();
    render(<App />);

    const trigger = screen.getByRole("button", { name: "演示模式" });
    await user.click(trigger);

    const dialog = screen.getByRole("dialog", { name: "先把成功写清楚，再让代理动手" });
    expect(dialog).toBeVisible();
    await user.click(within(dialog).getByRole("button", { name: "下一页" }));
    expect(within(dialog).getByRole("heading", { name: "四个绕不过去的事实" })).toBeVisible();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
