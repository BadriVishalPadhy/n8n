"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Plus, Activity } from "lucide-react";
import { ReactFlowProvider } from "@xyflow/react";
import WorkflowCard from "@/components/WorkflowCard";

interface ActionNode {
  id: string;
  type: {
    name: string;
    id?: string;
  };
}

interface Workflow {
  id: string;
  triggerId: string;
  triggerNodes: {
    type: {
      name: string;
      id?: string;
    };
  } | null;
  actionsNodes: ActionNode[];
}

export default function Dashboard() {
  const router = useRouter();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWorkflows();
  }, []);

  async function fetchWorkflows() {
    try {
      const res = await axios.get("/api/v1/workflow", {
        withCredentials: true,
      });
      setWorkflows(res.data.workFlows || []);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Failed to fetch workflows");
      setLoading(false);
    }
  }

  function handleRunWorkflow(workflowId: string) {
    console.log("Running workflow:", workflowId);
    // TODO: Implement workflow run
  }

  function handleDeleteWorkflow(workflowId: string) {
    console.log("Deleting workflow:", workflowId);
    // TODO: Implement workflow delete
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Workflows</h1>
            <p className="text-gray-400">Manage and automate your tasks</p>
          </div>
          <button
            onClick={() => router.push("/workflow/create")}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl transition-all flex items-center gap-2 font-medium shadow-lg shadow-purple-900/30"
          >
            <Plus className="w-5 h-5" />
            Create Workflow
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="p-6 bg-red-900/20 border border-red-700/50 rounded-2xl text-center">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={fetchWorkflows}
              className="text-white bg-red-800 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Retry
            </button>
          </div>
        ) : workflows.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/50 border-2 border-dashed border-zinc-800 rounded-3xl">
            <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              No Workflows Yet
            </h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              Create your first workflow to start automating your daily tasks
              and processes.
            </p>
            <button
              onClick={() => router.push("/workflow/create")}
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create New
            </button>
          </div>
        ) : (
          <ReactFlowProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflows.map((workflow) => (
                <WorkflowCard
                  key={workflow.id}
                  workflow={workflow}
                  onRun={() => handleRunWorkflow(workflow.id)}
                  onDelete={() => handleDeleteWorkflow(workflow.id)}
                />
              ))}
            </div>
          </ReactFlowProvider>
        )}
      </div>
    </div>
  );
}
