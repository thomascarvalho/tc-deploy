import {
  getStyleTagProperties,
  virtualSheet,
} from "https://esm.sh/twind/sheets";
import { h, setup, STATIC_URL } from "../deps.ts";
import { RenderContext, RenderFn } from "../server_deps.ts";

const sheet = virtualSheet();
const initial = sheet.reset();
setup({
  preflight: true,
  sheet,
  darkMode: "class",
  mode: "silent",
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

    ctx.head.push(
      h("title", null, "Thomas Carvalho"),
      h("meta", { charset: "UTF-8" }),
      h("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      }),
      h("link", {
        rel: "icon",
        type: "image/png",
        href: `${STATIC_URL}/android-chrome-192x192.png`,
      }),
      h("link", {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: `${STATIC_URL}/apple-touch-icon.png`,
      }),
      h("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${STATIC_URL}/favicon-32x32.png`,
      }),
      h("link", {
        rel: "manifest",
        href: `${STATIC_URL}/site.webmanifest`,
      }),
      h("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
      h("link", {
        href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
        rel: "stylesheet",
      }),
      h("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: `
          try {
            var mode = localStorage.getItem("theme");
            var supportDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches === true;
            if (!mode && supportDarkMode) document.documentElement.classList.add("dark");
            if (mode) {
              document.documentElement.classList.add(mode);
            }
          } catch (e) {
            console.error(e);
          }`,
        },
      }),
      h("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-139850162-1",
      }),
      h("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-139850162-1');
          `,
        },
      }),
      h("style", { id, dangerouslySetInnerHTML: { __html: textContent } }),
    );
  }
  sheet.reset(initial);
}
