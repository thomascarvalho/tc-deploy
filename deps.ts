export * from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { IS_BROWSER } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { setup, tw } from "https://esm.sh/twind";
export { setup, tw };
export { Router } from "https://esm.sh/preact-router?dts";
if (IS_BROWSER) {
  setup({
    preflight: true,
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
}

export const STATIC_URL = "http://0.0.0.0:8080/api/static";
declare namespace JSX {
  interface IntrinsicElements {
    [keyName: string]: unknown;
  }
}
