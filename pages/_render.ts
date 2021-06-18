// This module adds twind support.

import {
  getStyleTagProperties,
  virtualSheet,
} from "https://esm.sh/twind/sheets";
import { h, setup } from "../deps.ts";
import { RenderContext, RenderFn } from "../server_deps.ts";

const sheet = virtualSheet();
const initial = sheet.reset();
setup({
  preflight: true,
  sheet,
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Nunito", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
});

export function render(ctx: RenderContext, render: RenderFn) {
  const snapshot = ctx.state.get("twindSnapshot") as unknown[] | null;
  sheet.reset(snapshot || initial);
  render();
  const newSnapshot = sheet.reset(initial);
  ctx.state.set("twindSnapshot", newSnapshot);
}

export function postRender(ctx: RenderContext) {
  const snapshot = ctx.state.get("twindSnapshot") as unknown[] | null;
  if (snapshot !== null) {
    sheet.reset(snapshot);
    const { id, textContent } = getStyleTagProperties(sheet);

    ctx.head.push(h("meta", { charset: "UTF-8" }));
    ctx.head.push(
      h("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      })
    );
    ctx.head.push(
      h("link", { rel: "preconnect", href: "https://fonts.gstatic.com" })
    );

    ctx.head.push(
      h("link", {
        href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
        rel: "stylesheet",
      })
    );

    ctx.head.push(
      h("style", { id, dangerouslySetInnerHTML: { __html: textContent } })
    );
  }
  sheet.reset(initial);
}
