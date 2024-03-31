"use client";
import WorkflowForm from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/model-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkFlowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Wrokflows are a powerful that help you automate tasks"
      >
        <WorkflowForm />
      </CustomModal>
    )
  };
  return (
    <Button size="icon" onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default WorkFlowButton;
