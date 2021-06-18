import { h, Fragment, tw, IS_BROWSER, useState } from "../deps.ts";
import { Layout } from "../components/layout.tsx";
import { Profile } from "../components/profile.tsx";

export default function Home() {
  return (
    <main
      className={tw`font-sans antialiased text-gray-900 leading-normal tracking-wider transition-colors bg-yellow-50 dark:bg-gray-800`}
    >
      <Layout>
        <Profile />
        {/*        <Fragment>
          <p>
            Welcome to `fresh`. Try update this message in the ./pages/index.tsx
            file, and refresh. dsds
          </p>
          <Counter />
          <p>
            {IS_BROWSER ? "Viewing browser render." : "Viewing JIT render."}
          </p>
</Fragment> */}
      </Layout>
    </main>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)} disabled={!IS_BROWSER}>
        -1
      </button>
      <button onClick={() => setCount(count + 1)} disabled={!IS_BROWSER}>
        +1
      </button>
    </div>
  );
}
