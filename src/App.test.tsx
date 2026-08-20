import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("ContraSense presentation", () => {
  it("opens directly on the 16:9 presentation cover", () => {
    const { container } = render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "高效 Vibe Coding 指南",
        level: 1,
      }),
    ).toBeVisible();
    expect(screen.getByRole("main")).toHaveAttribute("aria-roledescription", "幻灯片");
    expect(screen.getByText("01 / 22", { selector: ".presentation__controls p" })).toBeVisible();
    expect(screen.queryByRole("button", { name: "播放手册" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /关闭/ })).not.toBeInTheDocument();
    expect(screen.queryByText("ContraSense")).not.toBeInTheDocument();
    expect(container.querySelector(".presentation__chrome")).not.toBeInTheDocument();
    expect(screen.getByRole("complementary", { name: "幻灯片预览" })).toBeVisible();
    expect(screen.getAllByRole("button", { name: /^第 \d+ 页，/ })).toHaveLength(22);
  });

  it("selects a slide from the preview rail", async () => {
    const user = userEvent.setup();
    render(<App />);

    const preview = screen.getByRole("button", {
      name: "第 16 页，独立审查要主动寻找反例",
    });
    await user.click(preview);

    expect(preview).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("heading", { name: "独立审查要主动寻找反例" })).toBeVisible();
    expect(screen.getByText("审查者不继承结论")).toBeVisible();
    expect(screen.getByText("证据不足暂不放行")).toBeVisible();
  });

  it("advances with the controls and keyboard", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "下一页" }));
    expect(screen.getByRole("heading", { name: "流体智力解新题，晶体智力调用经验" })).toBeVisible();

    await user.keyboard("{End}");
    expect(
      screen.getByRole("heading", {
        name: "AI Native 组织需要一套持续学习系统",
      }),
    ).toBeVisible();
  });

  it("returns from the final slide to the cover", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.keyboard("{End}");
    await user.click(screen.getByRole("button", { name: "回到封面" }));

    expect(screen.getByRole("heading", { name: "高效 Vibe Coding 指南" })).toBeVisible();
    expect(screen.getByText("01 / 22", { selector: ".presentation__controls p" })).toBeVisible();
  });

  it("enters and exits fullscreen from the controls", async () => {
    const user = userEvent.setup();
    let fullscreenElement: Element | null = null;
    const fullscreenDescriptor = Object.getOwnPropertyDescriptor(document, "fullscreenElement");
    const requestDescriptor = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "requestFullscreen",
    );
    const exitDescriptor = Object.getOwnPropertyDescriptor(document, "exitFullscreen");
    const requestFullscreen = vi.fn(async function (this: HTMLElement) {
      fullscreenElement = this;
      document.dispatchEvent(new Event("fullscreenchange"));
    });
    const exitFullscreen = vi.fn(async () => {
      fullscreenElement = null;
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    Object.defineProperty(document, "fullscreenElement", {
      configurable: true,
      get: () => fullscreenElement,
    });
    Object.defineProperty(HTMLElement.prototype, "requestFullscreen", {
      configurable: true,
      value: requestFullscreen,
    });
    Object.defineProperty(document, "exitFullscreen", {
      configurable: true,
      value: exitFullscreen,
    });

    try {
      render(<App />);

      await user.click(screen.getByRole("button", { name: "进入全屏" }));
      expect(requestFullscreen).toHaveBeenCalledOnce();

      const presentation = screen.getByRole("main").closest(".presentation");
      const exitButton = await screen.findByRole("button", { name: "退出全屏" });
      const pager = screen.getByRole("navigation", { name: "演示文稿控制" });

      expect(presentation).toHaveClass("is-fullscreen");
      expect(exitButton).not.toHaveClass("is-revealed");
      expect(pager).not.toHaveClass("is-revealed");

      fireEvent.pointerMove(presentation!, {
        clientX: window.innerWidth - 8,
        clientY: 8,
      });
      expect(exitButton).toHaveClass("is-revealed");
      expect(pager).not.toHaveClass("is-revealed");

      fireEvent.pointerMove(presentation!, {
        clientX: window.innerWidth - 8,
        clientY: window.innerHeight - 8,
      });
      expect(exitButton).not.toHaveClass("is-revealed");
      expect(pager).toHaveClass("is-revealed");

      fireEvent.pointerMove(presentation!, {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2,
      });
      expect(exitButton).not.toHaveClass("is-revealed");
      expect(pager).not.toHaveClass("is-revealed");

      fireEvent.pointerMove(presentation!, {
        clientX: window.innerWidth - 8,
        clientY: 8,
      });
      await user.click(exitButton);
      expect(exitFullscreen).toHaveBeenCalledOnce();
      expect(await screen.findByRole("button", { name: "进入全屏" })).toBeVisible();
    } finally {
      if (fullscreenDescriptor) {
        Object.defineProperty(document, "fullscreenElement", fullscreenDescriptor);
      } else {
        Reflect.deleteProperty(document, "fullscreenElement");
      }
      if (requestDescriptor) {
        Object.defineProperty(HTMLElement.prototype, "requestFullscreen", requestDescriptor);
      } else {
        Reflect.deleteProperty(HTMLElement.prototype, "requestFullscreen");
      }
      if (exitDescriptor) {
        Object.defineProperty(document, "exitFullscreen", exitDescriptor);
      } else {
        Reflect.deleteProperty(document, "exitFullscreen");
      }
    }
  });
});
