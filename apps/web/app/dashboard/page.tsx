"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Plus,
  Activity,
  Play,
  Trash2,
  Zap,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  RefreshCw,
  Clock,
  Calendar,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface ActionNode {
  id: string;
  workflowId: string;
  ActionNodeId: string;
  metadata: any;
  sortingOrder: number;
  type: {
    name: string;
    id?: string;
  };
}

interface TriggerNode {
  id: string;
  workflowId: string;
  metadata: any;
  TriggerNodeId: string;
  type: {
    name: string;
    id?: string;
  };
}

interface Workflow {
  id: string;
  triggerId: string;
  userId: string;
  actionsNodes: ActionNode[];
  triggerNodes: TriggerNode;
  createdAt?: string;
  updatedAt?: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const fetchWorkflows = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get("http://localhost:8000/api/v1/workflow", {
        withCredentials: true,
      });

      setWorkflows(res.data.workFlows || []);
    } catch (err: any) {
      setError(err.message || "Failed to fetch workflows");
      console.error("Error fetching workflows:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRunWorkflow = async (workflowId: string) => {
    try {
      await axios.post(
        `http://localhost:8000/api/v1/workflow/${workflowId}/execute`,
        {},
        { withCredentials: true },
      );
      alert("Workflow executed successfully!");
    } catch (err: any) {
      alert(`Failed to execute workflow: ${err.message}`);
      console.error("Error executing workflow:", err);
    }
  };

  const handleDeleteWorkflow = async (workflowId: string) => {
    if (!confirm("Are you sure you want to delete this workflow?")) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:8000/api/v1/workflow/${workflowId}`,
        { withCredentials: true },
      );

      // Remove from state
      setWorkflows(workflows.filter((w) => w.id !== workflowId));
      alert("Workflow deleted successfully!");
    } catch (err: any) {
      alert(`Failed to delete workflow: ${err.message}`);
      console.error("Error deleting workflow:", err);
    }
  };

  const handleCreateWorkflow = () => {
    router.push("/workflow/create");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading workflows...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center p-8">
        <div className="max-w-md w-full p-8 bg-[#282828] border-2 border-red-700/50 rounded-2xl text-center">
          <div className="w-20 h-20 bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Activity className="w-10 h-10 text-red-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Error Loading Workflows
          </h3>
          <p className="text-red-400 mb-6">{error}</p>
          <button
            onClick={fetchWorkflows}
            className="px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-xl transition-colors flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1B1B1B] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              My Workflows
            </h1>
            <p className="text-gray-400 text-lg">
              Manage and automate your tasks • {workflows.length} workflow
              {workflows.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={handleCreateWorkflow}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all flex items-center gap-2 font-medium shadow-lg border border-gray-600"
          >
            <Plus className="w-5 h-5" />
            Create Workflow
          </button>
        </div>

        {/* Workflows List */}
        {workflows.length === 0 ? (
          <div className="text-center py-24 bg-[#282828] border-2 border-dashed border-gray-700 rounded-3xl">
            <div className="w-20 h-20 bg-[#1B1B1B] border border-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              No Workflows Yet
            </h3>
            <p className="text-gray-400 mb-10 max-w-md mx-auto text-lg">
              Create your first workflow to start automating your daily tasks
              and processes.
            </p>
            <button
              onClick={handleCreateWorkflow}
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-colors inline-flex items-center gap-2 border border-gray-600 text-lg font-medium"
            >
              <Plus className="w-5 h-5" />
              Create Your First Workflow
            </button>
          </div>
        ) : (
          <div className="relative">
            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto pb-6 -mx-8 px-8">
              <div className="flex gap-6 min-w-min">
                {workflows.map((workflow) => (
                  <WorkflowCard
                    key={workflow.id}
                    workflow={workflow}
                    onRun={() => handleRunWorkflow(workflow.id)}
                    onDelete={() => handleDeleteWorkflow(workflow.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function WorkflowCard({
  workflow,
  onRun,
  onDelete,
}: {
  workflow: Workflow;
  onRun: () => void;
  onDelete: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const webhookUrl =
    typeof window !== "undefined"
      ? `localhost:4000/hooks/catch/${workflow.userId}/${workflow.id}`
      : "";

  const handleCopyWebhook = () => {
    navigator.clipboard.writeText(webhookUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="w-[420px] flex-shrink-0 bg-[#282828] border-2 border-gray-600 rounded-2xl p-6 hover:border-gray-400 transition-all group shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 truncate">
            Workflow #{workflow.id.slice(0, 8)}
          </h3>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" />
              <span>
                {workflow.actionsNodes.length} action
                {workflow.actionsNodes.length !== 1 ? "s" : ""}
              </span>
            </div>
            {workflow.createdAt && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(workflow.createdAt)}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onRun}
            className="p-2.5 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-colors border border-green-600/30"
            title="Run workflow"
          >
            <Play className="w-4 h-4 fill-current" />
          </button>
          <button
            onClick={onDelete}
            className="p-2.5 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors border border-red-600/30"
            title="Delete workflow"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Workflow Flow Visualization */}
      <div className="bg-[#1B1B1B] rounded-xl p-5 mb-4 border border-gray-700">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {/* Trigger */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-14 h-14 bg-[#282828] border-2 border-gray-600 rounded-xl flex items-center justify-center">
              <Zap className="w-7 h-7 text-cyan-400" />
            </div>
            <span className="text-xs text-gray-400 truncate max-w-[70px] text-center">
              {workflow.triggerNodes.type.name}
            </span>
          </div>

          <ArrowRight className="w-5 h-5 text-gray-500 flex-shrink-0" />

          {/* Actions */}
          {workflow.actionsNodes
            .sort((a, b) => a.sortingOrder - b.sortingOrder)
            .map((action, idx) => (
              <React.Fragment key={action.id}>
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-12 h-12 bg-[#282828] border-2 border-gray-600 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-xs text-gray-400 truncate max-w-[70px] text-center">
                    {action.type.name}
                  </span>
                </div>
                {idx < workflow.actionsNodes.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* Webhook URL Section */}
      <div className="bg-[#1B1B1B] rounded-xl p-4 mb-4 border border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Webhook URL
          </span>
          <button
            onClick={handleCopyWebhook}
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        </div>
        <code className="text-xs text-cyan-400 break-all block font-mono">
          {webhookUrl}
        </code>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-400">Active</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="px-2 py-1 bg-[#1B1B1B] rounded-md border border-gray-700">
            ID: {workflow.id.slice(0, 8)}
          </span>
        </div>
      </div>
    </div>
  );
}
