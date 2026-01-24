"use client";
import React, { useMemo } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  BackgroundVariant,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Play,
  Trash2,
  Webhook,
  Mail,
  Database,
  Calendar,
  FileText,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  webhook: Webhook,
  email: Mail,
  database: Database,
  schedule: Calendar,
  file: FileText,
  api: Zap,
};

const colorMap: Record<string, string> = {
  webhook: "#3B82F6",
  email: "#22C55E",
  database: "#A855F7",
  schedule: "#EAB308",
  file: "#EC4899",
  api: "#F97316",
};

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

interface WorkflowCardProps {
  workflow: Workflow;
  onRun?: () => void;
  onDelete?: () => void;
}

function CustomNode({
  data,
}: {
  data: { label: string; nodeType: string; isAction?: boolean };
}) {
  const Icon = iconMap[data.nodeType] || Webhook;
  const color = colorMap[data.nodeType] || "#6B7280";

  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 shadow-lg min-w-[120px]"
      style={{
        background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
        borderColor: color,
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-500 uppercase font-medium">
          {data.isAction ? "Action" : "Trigger"}
        </span>
        <span className="text-xs text-white font-medium truncate max-w-[80px]">
          {data.label}
        </span>
      </div>
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

export default function WorkflowCard({
  workflow,
  onRun,
  onDelete,
}: WorkflowCardProps) {
  const { nodes, edges } = useMemo(() => {
    const flowNodes: Node[] = [];
    const flowEdges: Edge[] = [];

    // Add trigger node
    if (workflow.triggerNodes) {
      flowNodes.push({
        id: "trigger",
        type: "custom",
        position: { x: 20, y: 50 },
        data: {
          label: workflow.triggerNodes.type.name,
          nodeType: workflow.triggerNodes.type.id || "webhook",
          isAction: false,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      });
    }

    // Add action nodes
    workflow.actionsNodes.forEach((action, index) => {
      const nodeId = `action-${index}`;
      flowNodes.push({
        id: nodeId,
        type: "custom",
        position: { x: 200 + index * 180, y: 50 },
        data: {
          label: action.type.name,
          nodeType: action.type.id || "api",
          isAction: true,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      });

      // Connect to previous node
      const sourceId = index === 0 ? "trigger" : `action-${index - 1}`;
      flowEdges.push({
        id: `edge-${sourceId}-${nodeId}`,
        source: sourceId,
        target: nodeId,
        animated: true,
        style: { stroke: "#6366F1", strokeWidth: 2 },
      });
    });

    return { nodes: flowNodes, edges: flowEdges };
  }, [workflow]);

  const workflowName =
    workflow.triggerNodes?.type.name || `Workflow ${workflow.id.slice(0, 8)}`;

  return (
    <div className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-900/10">
      {/* Header */}
      <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold text-base">{workflowName}</h3>
          <p className="text-gray-500 text-xs mt-0.5">
            {workflow.actionsNodes.length} action
            {workflow.actionsNodes.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {onRun && (
            <button
              onClick={onRun}
              className="p-2 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
              title="Run workflow"
            >
              <Play className="w-4 h-4 text-white fill-white" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="p-2 bg-zinc-700 hover:bg-red-600 rounded-lg transition-colors"
              title="Delete workflow"
            >
              <Trash2 className="w-4 h-4 text-gray-300" />
            </button>
          )}
        </div>
      </div>

      {/* React Flow Canvas */}
      <div className="h-[140px] bg-zinc-950">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          panOnDrag={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={16}
            size={1}
            color="#27272a"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
