import { h, tw, VNode, STATIC_URL } from "../deps.ts";
import { useDisclosure } from "../hooks/use-disclosure.tsx";
import { ToggleTheme } from "./toggle-theme.tsx";
import { buttonStyledClassName } from "./button.tsx";

type NavbarProps = {
  className?: string;
};

const MenuItem = ({
  children,
  href,
}: {
  children: VNode | string;
  href: string;
}) => {
  return (
    <a
      key={"item.name"}
      href={href}
      className={tw`text-sm ${buttonStyledClassName}`}
      aria-current={"item.current" ? "page" : undefined}
    >
      {children}
    </a>
  );
};

export const Navbar = ({ className = "" }: NavbarProps) => {
  const { isOpen: isMenuOpen, toggle: toggleMenu } = useDisclosure();

  return (
    <nav className={tw`w-full px-2 sm:px-6 lg:px-0`}>
      <div className={tw`relative flex items-center justify-between h-16`}>
        {/* <div
          className={tw`absolute inset-y-0 left-0 flex items-center sm:hidden`}
        >
          <button
            className={tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            onClick={() => toggleMenu()}
          >
            <span className={tw`sr-only`}>Open main menu</span>
            {isMenuOpen ? <span>fermer</span> : <span>ouvrir</span>}
          </button>
        </div> */}
        <div
          className={tw`flex-1 flex items-center justify-center sm:justify-start`}
        >
          <a
            className={tw`flex-shrink-0 flex items-center text-md ${buttonStyledClassName} bg-transparent dark:bg-transparent`}
            href="/"
          >
            <img
              className={tw`h-8 w-8 rounded-full mr-3`}
              src={`${STATIC_URL}/avatar.jpg`}
              alt="avatar"
            />
            <span className={tw`text-gray-900 dark:text-white `}>
              Thomas Carvalho
            </span>
          </a>
          <div className={tw`hidden sm:block sm:ml-6 flex-grow-1`}>
            <div className={tw`flex space-x-4`}>
              <MenuItem href="/blog">Blog</MenuItem>
            </div>
          </div>
        </div>
        <div
          className={tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}
        >
          <div className={tw`p-1`}>
            <span className={tw`sr-only`}>Toggle theme</span>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
};
