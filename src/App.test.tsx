import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { App } from "./App";
import { taskTemplate } from "./content";

describe("Vibe Coding field guide", () => {
  it("renders the source-backed reading path", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /先把成功写清楚/, level: 1 })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "三条线，最后收束成一条工程路径" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "每个判断都能回到原始材料" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /A3S Test/ }).length).toBeGreaterThan(0);
    expect(screen.getByRole("main")).toHaveAttribute("tabindex", "-1");
    expect(screen.getByText(/Agentic Reviewer 资料位于私有仓库/)).toBeVisible();
  });

  it("moves through the three lenses with accessible tabs", async () => {
    const user = userEvent.setup();
    render(<App />);

    const domainTab = screen.getByRole("tab", { name: /DDD/ });
    await user.click(domainTab);

    expect(domainTab).toHaveAttribute("aria-selected", "true");
    const panel = screen.getByRole("tabpanel", { name: /DDD/ });
    expect(within(panel).getByRole("heading", { name: "再判断每条规则归谁所有" })).toBeVisible();
  });

  it("moves through the integrated workflow", async () => {
    const user = userEvent.setup();
    render(<App />);

    const verifyTab = screen.getByRole("tab", { name: /从目标端复验/ });
    await user.click(verifyTab);

    expect(verifyTab).toHaveAttribute("aria-selected", "true");
    const panel = screen.getByRole("tabpanel", { name: /从目标端复验/ });
    expect(within(panel).getByRole("heading", { name: "从目标端复验" })).toBeVisible();
  });

  it("shows the repair authorization path", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("tab", { name: "人选修复" }));

    expect(screen.getByRole("heading", { name: "点选是一种输入，提交才产生修复权" })).toBeVisible();
  });

  it("copies the task template", async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, "writeText").mockResolvedValue(undefined);
    render(<App />);

    await user.click(screen.getByRole("button", { name: "复制任务包模板" }));

    expect(writeText).toHaveBeenCalledWith(taskTemplate);
    expect(screen.getByRole("button", { name: "已复制" })).toBeVisible();
  });

  it("opens, advances and closes presentation mode", async () => {
    const user = userEvent.setup();
    render(<App />);

    const trigger = screen.getByRole("button", { name: "播放手册" });
    await user.click(trigger);

    const dialog = screen.getByRole("dialog", { name: "先把成功写清楚，再让代理动手" });
    expect(dialog).toBeVisible();
    await user.click(within(dialog).getByRole("button", { name: "下一页" }));
    expect(
      within(dialog).getByRole("heading", { name: "同一句要求，藏着四个没有回答的问题" }),
    ).toBeVisible();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
