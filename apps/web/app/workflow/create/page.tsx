"use client";

import { useState, useCallback, useEffect } from "react";
import axios from "axios";
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
import {
  Plus,
  X,
  Webhook,
  Mail,
  Database,
  Calendar,
  FileText,
  Zap,
  Loader2,
} from "lucide-react";

// Icon mapping for different trigger/action types
const iconMap: Record<string, any> = {
  webhook: Webhook,
  email: Mail,
  database: Database,
  schedule: Calendar,
  file: FileText,
  api: Zap,
};

// Color mapping for different types
const colorMap: Record<string, string> = {
  webhook: "from-blue-500 to-blue-600",
  email: "from-green-500 to-green-600",
  database: "from-purple-500 to-purple-600",
  schedule: "from-yellow-500 to-yellow-600",
  file: "from-pink-500 to-pink-600",
  api: "from-orange-500 to-orange-600",
};

// Custom Trigger Node Component
function TriggerNode({ data }: { data: any }) {
  const Icon = data.icon || Webhook;
  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-gray-500"
      />

      <div className="bg-zinc-800 border-2 border-zinc-600 rounded-2xl p-6 min-w-[180px]">
        <div className="flex justify-center mb-3">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${data.color || "from-blue-500 to-blue-600"} rounded-xl flex items-center justify-center`}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-white font-medium text-lg">{data.label}</p>
          <p className="text-gray-400 text-xs mt-1">
            {data.nodeType === "trigger" ? "TRIGGER" : "ACTION"}
          </p>
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

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-gray-500"
      />
    </div>
  );
}

// Register custom node types
const nodeTypes = {
  trigger: TriggerNode,
  addButton: AddNodeButton,
};

const initialNodes: Node[] = [
  {
    id: "add-0",
    type: "addButton",
    position: { x: 250, y: 250 },
    data: { onClick: () => {} },
  },
];

const initialEdges: Edge[] = [];

export default function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);
  const [nodeId, setNodeId] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAddButton, setActiveAddButton] = useState<string | null>(null);
  const [sidebarType, setSidebarType] = useState<"trigger" | "action">(
    "trigger",
  );

  const [triggers, setTriggers] = useState<any[]>([]);
  const [actions, setActions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch triggers and actions on mount
  useEffect(() => {
    fetchTriggersAndActions();
  }, []);

  async function fetchTriggersAndActions() {
    setLoading(true);
    setError(null);

    try {
      // Try fetching triggers first
      let triggersRes;
      try {
        triggersRes = await axios.get(
          "http://localhost:3001/api/v1/availableTrigger",
        );
      } catch (err: any) {
        if (err.response?.status === 404) {
          // Try alternative endpoint
          triggersRes = await axios.get(
            "http://localhost:3001/api/v1/availableTriggers",
          );
        } else {
          throw err;
        }
      }

      // Try fetching actions
      let actionsRes;
      try {
        actionsRes = await axios.get(
          "http://localhost:3001/api/v1/availableActions",
        );
      } catch (err: any) {
        if (err.response?.status === 404) {
          // Try alternative endpoint
          actionsRes = await axios.get(
            "http://localhost:3001/api/v1/availableAction",
          );
        } else {
          throw err;
        }
      }

      setTriggers(
        Array.isArray(triggersRes.data.value)
          ? triggersRes.data.value
          : Array.isArray(triggersRes.data)
            ? triggersRes.data
            : [],
      );
      setActions(
        Array.isArray(actionsRes.data.availableActionNodes)
          ? actionsRes.data.availableActionNodes
          : Array.isArray(actionsRes.data.value)
            ? actionsRes.data.value
            : Array.isArray(actionsRes.data)
              ? actionsRes.data
              : [],
      );
    } catch (err: any) {
      let errorMessage = "Failed to load triggers and actions";

      if (err.code === "ERR_NETWORK" || err.message.includes("Network Error")) {
        errorMessage =
          "Cannot connect to API at localhost:3001. Make sure the server is running and CORS is enabled.";
      } else if (err.response) {
        errorMessage = `API error: ${err.response.status} - ${err.response.statusText}. Check if endpoints are correct: /api/v1/availableTrigger and /api/v1/availableActions`;
      }

      setError(errorMessage);
      console.error("Error fetching:", err);
    } finally {
      setLoading(false);
    }
  }

  // Update the initial add button's onClick handler
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "add-0") {
          return {
            ...node,
            data: { onClick: () => openSidebar("add-0", null, "trigger") },
          };
        }
        return node;
      }),
    );
  }, []);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  // Open sidebar when plus button is clicked
  function openSidebar(
    addButtonId: string,
    sourceId: string | null,
    type: "trigger" | "action",
  ) {
    setActiveAddButton(addButtonId);
    setSidebarType(type);
    setSidebarOpen(true);
  }

  // Add node from sidebar selection
  function addNodeFromSelection(item: any) {
    if (!activeAddButton) return;

    const addButtonNode = nodes.find((n) => n.id === activeAddButton);
    if (!addButtonNode) return;

    const newId = `${sidebarType}-${nodeId}`;
    const newAddButtonId = `add-${nodeId}`;

    // Find if this add button has a source (connected to another node)
    const sourceEdge = edges.find((e) => e.target === activeAddButton);
    const sourceId = sourceEdge?.source || null;
    const sourceNode = sourceId ? nodes.find((n) => n.id === sourceId) : null;

    // Calculate position based on source node or default
    const xPos = sourceNode
      ? sourceNode.position.x + 300
      : addButtonNode.position.x;
    const yPos = sourceNode ? sourceNode.position.y : addButtonNode.position.y;

    // Get icon and color based on item id
    const icon = iconMap[item.id] || Webhook;
    const color = colorMap[item.id] || "from-gray-500 to-gray-600";

    const newNode: Node = {
      id: newId,
      type: "trigger",
      position: { x: xPos, y: yPos },
      data: {
        label: item.name,
        icon: icon,
        color: color,
        nodeType: sidebarType,
      },
    };

    const newAddButtonNode: Node = {
      id: newAddButtonId,
      type: "addButton",
      position: { x: xPos + 300, y: yPos + 25 },
      data: { onClick: () => openSidebar(newAddButtonId, newId, "action") }, // Next node should be action
    };

    // Remove the old add button
    setNodes((nds) =>
      nds
        .filter((n) => n.id !== activeAddButton)
        .concat([newNode, newAddButtonNode]),
    );

    // Update edges
    setEdges((eds) => {
      // Remove old edges connected to the add button
      const filteredEdges = eds.filter(
        (e) => e.target !== activeAddButton && e.source !== activeAddButton,
      );

      const newEdges = [...filteredEdges];

      // If there was a source node, connect it to the new node
      if (sourceId) {
        newEdges.push({
          id: `e-${sourceId}-${newId}`,
          source: sourceId,
          target: newId,
          animated: true,
          style: { stroke: "#6366f1" },
        });
      }

      // Connect new node to new add button
      newEdges.push({
        id: `e-${newId}-${newAddButtonId}`,
        source: newId,
        target: newAddButtonId,
        animated: true,
        style: { stroke: "#6366f1" },
      });

      return newEdges;
    });

    setNodeId(nodeId + 1);
    setSidebarOpen(false);
    setActiveAddButton(null);
  }

  const currentItems = sidebarType === "trigger" ? triggers : actions;

  return (
    <div className="w-full h-screen bg-zinc-950 relative">
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

      {/* Sidebar */}
      <div
        className={`absolute top-0 right-0 h-full w-96 bg-zinc-900 border-l border-zinc-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-10 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <h2 className="text-xl font-semibold text-white">
            Select {sidebarType === "trigger" ? "Trigger" : "Action"}
          </h2>
          <button
            onClick={() => {
              setSidebarOpen(false);
              setActiveAddButton(null);
            }}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="p-4 space-y-2 overflow-y-auto h-[calc(100%-80px)]">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-700 rounded-xl">
              <p className="text-red-400 text-sm">{error}</p>
              <button
                onClick={fetchTriggersAndActions}
                className="mt-2 text-red-400 text-sm underline hover:text-red-300"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && currentItems.length === 0 && (
            <div className="p-4 text-center text-gray-400">
              No {sidebarType}s available
            </div>
          )}

          {!loading &&
            !error &&
            currentItems.map((item) => {
              const Icon = iconMap[item.id] || Webhook;
              const color = colorMap[item.id] || "from-gray-500 to-gray-600";

              return (
                <button
                  key={item.id}
                  onClick={() => addNodeFromSelection(item)}
                  className="w-full p-4 bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 hover:border-zinc-600 rounded-xl transition-all group flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">
                      Add {item.name.toLowerCase()} {sidebarType}
                    </p>
                  </div>
                </button>
              );
            })}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[5]"
          onClick={() => {
            setSidebarOpen(false);
            setActiveAddButton(null);
          }}
        />
      )}
    </div>
  );
}
