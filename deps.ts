export * from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { IS_BROWSER } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { setup, tw } from "https://esm.sh/twind";
export { setup, tw };
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

declare namespace JSX {
  interface IntrinsicElements {
    [keyName: string]: any;
  }
}
