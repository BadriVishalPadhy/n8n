"use client";

import { useState, useCallback, useEffect } from "react";
import {
  ReactFlow,
  addEdge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  type Node,
  type Edge,
  type Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Plus } from "lucide-react";

// Custom Webhook Node Component
function WebhookNode({ data }: { data: any }) {
  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-gray-500"
      />

      <div className="bg-zinc-800 border-2 border-zinc-600 rounded-2xl p-6 min-w-[180px]">
        <div className="flex justify-center mb-3">
          <div className="w-16 h-16 bg-zinc-700 rounded-xl flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white font-medium text-lg">{data.label}</p>
          <p className="text-gray-400 text-xs mt-1">GET</p>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-gray-500"
      />
    </div>
  );
}

// Custom Execute Button Node
function ExecuteNode({ data }: { data: any }) {
  return (
    <div className="relative">
      <button
        onClick={data.onClick}
        className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 2v6h6V2M19 2v6M5 2v6m14 4v10H5V12m9-7h5m-5 7h5" />
        </svg>
        Execute workflow
      </button>

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-gray-500"
      />
    </div>
  );
}

// Custom Add Node Button
function AddNodeButton({ data }: { data: any }) {
  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-gray-500"
      />

      <button
        onClick={data.onClick}
        className="w-24 h-24 rounded-2xl border-2 border-dashed border-gray-500 bg-zinc-900 flex items-center justify-center hover:border-gray-400 hover:bg-zinc-800 transition-all group"
      >
        <Plus
          className="w-10 h-10 text-gray-500 group-hover:text-gray-400"
          strokeWidth={2}
        />
      </button>
    </div>
  );
}

// Register custom node types
const nodeTypes = {
  webhook: WebhookNode,
  execute: ExecuteNode,
  addButton: AddNodeButton,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

export default function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);
  const [nodeId, setNodeId] = useState(0);

  // Add initial "Execute workflow" button on mount
  useEffect(() => {
    setNodes([
      {
        id: "execute-1",
        type: "execute",
        position: { x: 50, y: 250 },
        data: { label: "Execute workflow", onClick: addWebhookNode },
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  // Add webhook node when Execute button is clicked
  function addWebhookNode() {
    const newId = `webhook-${nodeId}`;
    const newNode: Node = {
      id: newId,
      type: "webhook",
      position: { x: 400, y: 200 },
      data: { label: "Webhook" },
    };

    const addButtonNode: Node = {
      id: `add-${nodeId}`,
      type: "addButton",
      position: { x: 700, y: 225 },
      data: { onClick: () => addAnotherNode(newId) },
    };

    setNodes((nds) => [...nds, newNode, addButtonNode]);

    // Connect Execute button to Webhook
    setEdges((eds) => [
      ...eds,
      {
        id: `e-execute-${newId}`,
        source: "execute-1",
        target: newId,
        animated: true,
        style: { stroke: "#6366f1" },
      },
      {
        id: `e-${newId}-add`,
        source: newId,
        target: `add-${nodeId}`,
        animated: true,
        style: { stroke: "#6366f1" },
      },
    ]);

    setNodeId(nodeId + 1);
  }

  // Add another node after webhook
  function addAnotherNode(sourceId: string) {
    const newId = `node-${nodeId}`;
    const newNode: Node = {
      id: newId,
      type: "webhook",
      position: { x: 700 + nodeId * 250, y: 200 },
      data: { label: `Node ${nodeId}` },
    };

    setNodes((nds) => [...nds, newNode]);

    setEdges((eds) => [
      ...eds,
      {
        id: `e-${sourceId}-${newId}`,
        source: sourceId,
        target: newId,
        animated: true,
        style: { stroke: "#6366f1" },
      },
    ]);

    setNodeId(nodeId + 1);
  }

  return (
    <div className="w-full h-screen bg-zinc-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-zinc-950"
      >
        <Background
          color="#4C4C4C"
          gap={24}
          size={1}
          style={{ backgroundColor: "#171717" }}
        />
        <Controls className="bg-zinc-800 border border-zinc-700" />
      </ReactFlow>
    </div>
  );
}
