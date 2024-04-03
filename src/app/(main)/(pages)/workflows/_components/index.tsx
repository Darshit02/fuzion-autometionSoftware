import React from "react";
import Workflow from "./workflow";
import { onGetWorkflow } from "../_actions/workflow-connection";

type Props = {};

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflow();
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 m-2">
        {workflows?.length ? 
        (workflows.map((flow) => (
            <Workflow key={flow.id} {...flow} />
        ))
        ) : (
          <>
          <div className="flex items-center justify-center h-96 text-2xl text-gray-400">
            No workflows found
          </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Workflows;
