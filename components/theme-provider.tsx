import { h, useState, useEffect, createContext, VNode } from "../deps.ts";
// const mythemeStore = new Store("", "theme", "local");

export const ThemeContext = createContext<{
  theme: string | undefined;
  toggleTheme: () => void;
}>({ theme: undefined, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: VNode }) => {
  const [theme, setTheme] = useState<string>("");

  const changeTheme = (
    newTheme: string,
    oldTheme: string | undefined = "light"
  ) => {
    // @ts-ignore fake
    document.documentElement.classList.remove(oldTheme);
    // @ts-ignore fake
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    /* this.store.setState(newTheme);
    this.update();*/
  };

  const toggleTheme = () => {
    const currentTheme = theme;
    const newTheme = currentTheme === "light" ? "dark" : "light";

    changeTheme(newTheme, currentTheme);
  };

  useEffect(() => {
    if (!theme || theme === "") {
      // @ts-ignore fake
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        changeTheme("dark", "light");
      } else {
        changeTheme("light", "dark");
      }
    } else {
      changeTheme(theme);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
