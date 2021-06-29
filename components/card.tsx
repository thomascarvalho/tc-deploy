import { h, tw, VNode } from "../deps.ts";

export const Card = ({
  children,
  className = "",
}: {
  children: VNode;
  className?: string;
}) => {
  return (
    <div
      className={tw
        `w-full rounded-lg flex flex-row shadow-2xl bg-white mx-6 lg:mx-0 ${className}`}
    >
      {children}
    </div>
  );
};
