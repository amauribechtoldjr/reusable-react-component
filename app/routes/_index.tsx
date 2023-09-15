import type { V2_MetaFunction } from "@remix-run/node";
import Layout from "~/components/UI/Layout";
import Signup from "~/features/Signup";

export const meta: V2_MetaFunction = () => {
  return [{ title: "FE - Amauri Junior" }];
};

export default function Index() {
  return (
    <Layout>
      <div className="flex items-center flex-col justify-center h-full relative">
        <Signup />
      </div>
    </Layout>
  );
}
