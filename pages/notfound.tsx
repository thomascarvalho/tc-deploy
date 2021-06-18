import { h, tw } from "../deps.ts";

export default function NotFound() {
  return (
    <div
      className={tw`w-full h-screen text-black dark:text-white flex flex-col items-center justify-center`}
    >
      <h1 className={tw`text-4xl`}>404</h1>
      <a href="/" className={tw`text-xl mt-8 hover:underline`}>
        Retour
      </a>
    </div>
  );
}
