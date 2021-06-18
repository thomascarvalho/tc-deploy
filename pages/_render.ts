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

    ctx.head.push(h("title", null, "Thomas Carvalho"));
    ctx.head.push(h("meta", { charset: "UTF-8" }));
    ctx.head.push(
      h("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      })
    );

    ctx.head.push(
      h("link", {
        rel: "icon",
        type: "image/png",
        content:
          "https://raw.githubusercontent.com/thomascarvalho/tc-deploy/main/static/android-chrome-192x192.png",
      })
    );

    ctx.head.push(
      h("link", {
        rel: "apple-touch-icon",
        sizes: "192x192",
        content:
          "https://raw.githubusercontent.com/thomascarvalho/tc-deploy/main/static/apple-touch-icon.png",
      })
    );

    ctx.head.push(
      h("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        content:
          "https://raw.githubusercontent.com/thomascarvalho/tc-deploy/main/static/favicon-32x32.png",
      })
    );

    ctx.head.push(
      h("link", {
        rel: "manifest",
        href: "https://raw.githubusercontent.com/thomascarvalho/tc-deploy/main/static/site.webmanifest",
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
      h("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: `
      try {
var mode = localStorage.getItem("theme");
var supportDarkMode =
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;
if (!mode && supportDarkMode) document.documentElement.classList.add("dark");
if (mode) {
  document.documentElement.classList.add(mode);
}
} catch (e) {
console.error(e);
}`,
        },
      })
    );

    ctx.head.push(
      h("style", { id, dangerouslySetInnerHTML: { __html: textContent } })
    );
  }
  sheet.reset(initial);
}
