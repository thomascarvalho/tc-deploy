import { h, tw, VNode } from "../deps.ts";
import { ThemeProvider } from "./theme-provider.tsx";

type LayoutProps = {
  title?: string;
  children?: VNode | VNode[];
  isCentered?: boolean;
};

export const Layout = ({
  children,
  isCentered = false,
  title,
}: LayoutProps) => {
  return (
    <ThemeProvider>
      <main
        className={tw`font-sans min-h-screen antialiased text-gray-900 leading-normal tracking-wider transition-colors bg-yellow-50 dark:bg-gray-800 area`}
      >
        <div
          className={tw`max-w-4xl flex h-screen items-center h-auto ${
            isCentered ? "lg:h-screen" : ""
          } flex-wrap mx-auto py-4 lg:py-0`}
        >
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
};
