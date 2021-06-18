import {
  h,
  useState,
  IS_BROWSER,
  useEffect,
  createContext,
  VNode,
} from "../deps.ts";

export const ThemeContext = createContext<{
  theme: string | undefined;
  toggleTheme: () => void;
}>({ theme: undefined, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: VNode }) => {
  const [theme, setTheme] = useState<string>(
    IS_BROWSER ? (localStorage.getItem("theme") as string) : ""
  );

  const changeTheme = (
    newTheme: string,
    oldTheme: string | undefined = "light"
  ) => {
    document.documentElement.classList.remove(oldTheme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    if (IS_BROWSER) {
      localStorage.setItem("theme", newTheme);
    }
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
