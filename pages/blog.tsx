import { h, tw } from "../deps.ts";
import { Navbar } from "../components/navbar.tsx";
import { Layout } from "../components/layout.tsx";
import { Card } from "../components/card.tsx";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className={tw`my-12 flex items-center mx-auto dark:text-white`}>
        <div className={tw`flex items-center h-40 min-h-full`}>Bientôt. 😘</div>
      </div>
    </Layout>
  );
}
