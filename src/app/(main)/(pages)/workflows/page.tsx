import React from "react";
import WorkFlowButton from "./_components/workflows-button";
import Workflows from "./_components";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 background-blur-lg flex items-center justify-between border-b">
        Workflows
        <WorkFlowButton/>
      </h1>
      <Workflows/>   
    </div>
  );
};

export default Page;
