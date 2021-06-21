import { h, tw, VNode } from "../deps.ts";

type ButtonProps = {
  children?: VNode;
  onClick?: () => void;
  className?: string;
};

export const buttonStyledClassName =
  "text-gray-800 font-bold py-2 px-4 rounded-full outline-none bg-yellow-200 hover:bg-yellow-300 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600 focus-visible:ring-2 focus-visible:ring-black focus:outline-none";

export const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={tw`${buttonStyledClassName} ${className}`}
    >
      {children}
    </button>
  );
};
