import { h } from "../deps.ts";
import { Layout } from "../components/layout.tsx";
import { Profile } from "../components/profile.tsx";

export default function Home() {
  return (
    <Layout isCentered>
      <Profile />
    </Layout>
  );
}
