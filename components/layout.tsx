import { h, tw, VNode } from "../deps.ts";
import { ThemeProvider } from "./theme-provider.tsx";

type LayoutProps = {
  title?: string;
  children?: VNode;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div
        className={tw`max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto py-4 lg:py-0`}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
