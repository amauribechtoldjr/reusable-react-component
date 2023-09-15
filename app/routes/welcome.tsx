import Layout from "~/components/UI/Layout";
import { Button } from "~/components/Button";
import { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "FE - Welcome" }];
};

const Welcome = () => {
  return (
    <Layout>
      <div className="flex flex-col my-16 px-8 gap-16 max-w-full md:gap-8 md:flex-row md:max-w-6xl">
        <div className="flex-1">
          <h2 className="font-bold my-10 leading-11 text-4xl md:text-6xl">
            Congratulations! Your Account is Ready
          </h2>
        </div>
        <div className="flex-1 bg-white rounded-lg p-4 flex items-center justify-center flex-col">
          <h2 className="text-2xl mt-4 font-bold text-center">
            Thank you for joining the company!
          </h2>
          <p className="mt-4 text-center">
            You're ready to jump into an amazing finantial life journey with us.
          </p>
          <Button
            className="mt-4"
            onClick={() => console.log("get started clicked")}
            aria-label="Get started button"
          >
            Get started
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
