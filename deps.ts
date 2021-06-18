export * from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { IS_BROWSER } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { setup, tw } from "https://esm.sh/twind";
export { setup, tw };
if (IS_BROWSER) {
  setup({});
}

declare namespace JSX {
  interface IntrinsicElements {
    [keyName: string]: any;
  }
}
