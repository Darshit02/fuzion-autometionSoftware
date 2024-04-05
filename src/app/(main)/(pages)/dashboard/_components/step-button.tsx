"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { SquareXIcon } from "lucide-react";

const loadingStates = [
  {
    text: "Login / Signup to Fuzion",
  },
  {
    text: "Make connections for flows",
  },
  {
    text: "Connect with your apps or web",
  },
  {
    text: "Create your first flow",
  },
  {
    text: "Automate your work with Fuzion",
  },
  {
    text: "Save or Publish your flow",
  },
  {
    text: "Check your credites and usage",
  },
  {
    text: "Also Get your unlimited plan with fuzion team",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-purple-500 hover:bg-purple-300/70 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Follow Steps
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <SquareXIcon className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
