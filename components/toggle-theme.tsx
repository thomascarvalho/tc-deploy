import { h, tw } from "../deps.ts";

import { ThemeContext } from "./theme-provider.tsx";
import { Moon, Sun } from "./icons.tsx";

export const ToggleTheme = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <div className={tw`text-yellow-300`}>
            {theme && theme !== "" && (
              <button
                onClick={() => toggleTheme()}
                className={tw
                  `h-8 w-8 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full`}
              >
                {theme === "light" ? <Moon /> : <Sun />}
              </button>
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
