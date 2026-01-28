"use client";
import { useState, useCallback, useEffect } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Panel,
  Node,
  Edge,
  Connection,
  Handle,
  Position,
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
  Save,
  PlayCircle,
} from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const iconMap = {
  webhook: Webhook,
  email: Mail,
  database: Database,
  schedule: Calendar,
  file: FileText,
  api: Zap,
  sol: Zap,
};

interface AvailableNode {
  id: string;
  name: string;
}

// Custom Node Component matching the reference image
function CustomNode({ data, id }: any) {
  const Icon =
    iconMap[data.availableActionId as keyof typeof iconMap] || Webhook;
  const isStart = data.type === "trigger";

  return (
    <div className="relative group">
      {/* Input Handle (top) - not shown for first node */}
      {!isStart && (
        <Handle
          type="target"
          position={Position.Top}
          className="w-4 h-4 !bg-gray-400 !border-2 !border-gray-600 hover:!bg-white transition-colors"
        />
      )}

      <div
        className={`bg-[#282828] border-2 border-gray-600 p-5 shadow-xl hover:border-gray-400 transition-all min-w-[200px] ${
          isStart ? "rounded-r-2xl" : "rounded-2xl"
        }`}
        style={
          isStart
            ? {
                borderTopLeftRadius: "100px",
                borderBottomLeftRadius: "100px",
              }
            : {}
        }
      >
        <div className="flex flex-col items-center gap-3">
          {/* Icon Container */}
          <div className="w-16 h-16 bg-[#1B1B1B] border border-gray-600 rounded-xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>

          {/* Node Label */}
          <div className="text-center w-full">
            <p className="text-white font-medium text-sm mb-0.5">
              {data.label}
            </p>
            <p className="text-gray-500 text-xs">
              {data.subtitle || data.type}
            </p>
          </div>

          {/* Delete Button */}
          <button
            onClick={data.onDelete}
            className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
          >
            <X className="w-3.5 h-3.5 text-gray-400 hover:text-red-400" />
          </button>
        </div>
      </div>

      {/* Output Handle (bottom) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 h-4 !bg-gray-400 !border-2 !border-gray-600 hover:!bg-white transition-colors"
      />

      {/* Add button on right side */}
      <button
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-700 hover:bg-gray-600 border-2 border-gray-500 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => data.onAdd && data.onAdd(id)}
      >
        <Plus className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

export default function WorkflowBuilder() {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarType, setSidebarType] = useState<"trigger" | "action">(
    "trigger",
  );
  const [triggers, setTriggers] = useState<AvailableNode[]>([]);
  const [actions, setActions] = useState<AvailableNode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AvailableNode | null>(null);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  useEffect(() => {
    fetchTriggersAndActions();
  }, []);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            type: "smoothstep",
            style: {
              stroke: "#6b7280",
              strokeWidth: 2,
              strokeDasharray: "5, 5",
            },
          },
          eds,
        ),
      );
    },
    [setEdges],
  );

  async function fetchTriggersAndActions() {
    setLoading(true);
    setError(null);
    try {
      const [triggerRes, actionRes] = await Promise.all([
        axios.get("http://localhost:8000/api/v1/availableTrigger", {
          withCredentials: true,
        }),
        axios.get("http://localhost:8000/api/v1/availableActions", {
          withCredentials: true,
        }),
      ]);

      setTriggers(triggerRes.data.value || []);
      setActions(actionRes.data.availableActionNodes || []);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  function openModal(item: AvailableNode) {
    setSelectedItem(item);
    setMetadata({});
    setSidebarOpen(false);
    setModalOpen(true);
  }

  function deleteNode(nodeId: string) {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) =>
      eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId),
    );
  }

  function addNodeFromModal() {
    if (!selectedItem) return;

    const nodeId = `node-${Date.now()}`;
    const isFirstNode = nodes.length === 0;
    const lastNode = nodes.length > 0 ? nodes[nodes.length - 1] : null;

    const newNode: any = {
      id: nodeId,
      type: "custom",
      position: {
        x: isFirstNode ? 300 : (lastNode?.position.x ?? 300) + 350,
        y: isFirstNode ? 100 : (lastNode?.position.y ?? 100),
      },
      data: {
        label: selectedItem.name,
        subtitle: metadata.name || sidebarType,
        type: sidebarType,
        availableActionId: selectedItem.id,
        metadata: metadata,
        onDelete: () => deleteNode(nodeId),
      },
    };

    setNodes((nds: any) => [...nds, newNode]);

    // Auto-connect to previous node
    if (lastNode) {
      const newEdge: Edge = {
        id: `edge-${lastNode.id}-${nodeId}`,
        source: lastNode.id,
        target: nodeId,
        animated: true,
        type: "smoothstep",
        style: {
          stroke: "#6b7280",
          strokeWidth: 2,
          strokeDasharray: "5, 5",
        },
      };
      setEdges((eds) => [...eds, newEdge]);
    }

    setModalOpen(false);
    setSelectedItem(null);
    setMetadata({});
    setSidebarOpen(true);
    setSidebarType("action");
  }

  async function saveWorkflow() {
    const triggerNode = nodes.find((n: any) => n.data.type === "trigger");
    const actionNodes = nodes.filter((n: any) => n.data.type === "action");

    if (!triggerNode) {
      alert("Please add a trigger first!");
      return;
    }

    const payload = {
      availableTriggerId: (triggerNode as any).data.availableActionId,
      triggerMeta: (triggerNode as any).data.metadata,
      actions: actionNodes.map((action: any, index) => ({
        availableActionId: action.data.availableActionId,
        actionMeta: action.data.metadata,
        sortingOrder: index,
      })),
    };

    try {
      await axios.post("http://localhost:8000/api/v1/workflow", payload, {
        withCredentials: true,
      });
      alert("Workflow saved successfully!");
      router.push("/dashboard");
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Failed to save workflow";
      alert(`Error saving workflow: ${errorMessage}`);
    }
  }

  const currentItems = sidebarType === "trigger" ? triggers : actions;

  return (
    <div className="w-full h-screen bg-[#1B1B1B] flex relative">
      {/* Main Canvas */}
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-[#1B1B1B]"
          defaultEdgeOptions={{
            animated: true,
            type: "smoothstep",
            style: {
              stroke: "#6b7280",
              strokeWidth: 2,
              strokeDasharray: "5, 5",
            },
          }}
          connectionLineStyle={{
            stroke: "#6b7280",
            strokeWidth: 2,
            strokeDasharray: "5, 5",
          }}
          connectionLineType="smoothstep"
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1.5}
            color="#404040"
          />
          <Controls className="bg-zinc-900 border border-zinc-700 rounded-lg" />
          <MiniMap
            className="bg-zinc-900 border border-zinc-700 rounded-lg"
            nodeColor="#4b5563"
            maskColor="rgba(0, 0, 0, 0.6)"
          />

          {/* Top Panel */}
          <Panel position="top-right" className="flex gap-2 m-4">
            {nodes.length > 0 && (
              <>
                <button
                  onClick={saveWorkflow}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-lg"
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={() => alert("Execute workflow (coming soon)")}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-lg"
                >
                  <PlayCircle className="w-4 h-4" />
                  Execute
                </button>
              </>
            )}
            <button
              onClick={() => {
                setSidebarType(nodes.length === 0 ? "trigger" : "action");
                setSidebarOpen(true);
              }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2 shadow-lg border border-gray-600"
            >
              <Plus className="w-4 h-4" />
              Add {nodes.length === 0 ? "Trigger" : "Action"}
            </button>
          </Panel>

          {/* Empty State */}
          {nodes.length === 0 && (
            <Panel position="top-center" className="mt-20">
              <div className="bg-[#282828] border-2 border-dashed border-gray-700 rounded-2xl p-8 text-center max-w-md">
                <div className="w-16 h-16 bg-[#1B1B1B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Start Building Your Workflow
                </h3>
                <p className="text-gray-400 mb-6">
                  Add a trigger to get started with your automation
                </p>
                <button
                  onClick={() => {
                    setSidebarType("trigger");
                    setSidebarOpen(true);
                  }}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors inline-flex items-center gap-2 border border-gray-600"
                >
                  <Plus className="w-5 h-5" />
                  Add Trigger
                </button>
              </div>
            </Panel>
          )}
        </ReactFlow>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-zinc-900 border-l border-zinc-700 shadow-2xl transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <h2 className="text-xl font-semibold text-white">
            Select {sidebarType === "trigger" ? "Trigger" : "Action"}
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
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
              const Icon = iconMap[item.id as keyof typeof iconMap] || Webhook;
              return (
                <button
                  key={item.id}
                  onClick={() => openModal(item)}
                  className="w-full p-4 bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 hover:border-gray-500 rounded-xl transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-[#1B1B1B] border border-gray-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">Configure and add</p>
                  </div>
                </button>
              );
            })}
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              setModalOpen(false);
              setSelectedItem(null);
              setSidebarOpen(true);
            }}
          />
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl w-[500px] max-h-[600px] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-zinc-700">
              <div className="flex items-center gap-4">
                {(() => {
                  const Icon =
                    iconMap[selectedItem.id as keyof typeof iconMap] || Webhook;
                  return (
                    <div className="w-12 h-12 bg-[#1B1B1B] border border-gray-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  );
                })()}
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {selectedItem.name}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Configure {sidebarType}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setModalOpen(false);
                  setSelectedItem(null);
                  setSidebarOpen(true);
                }}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto max-h-[400px]">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${selectedItem.name} name`}
                  value={metadata.name || ""}
                  onChange={(e) =>
                    setMetadata({ ...metadata, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              {selectedItem.id === "webhook" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Webhook URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/webhook"
                    value={metadata.webhookUrl || ""}
                    onChange={(e) =>
                      setMetadata({ ...metadata, webhookUrl: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description (Optional)
                </label>
                <textarea
                  placeholder="Add a description..."
                  value={metadata.description || ""}
                  onChange={(e) =>
                    setMetadata({ ...metadata, description: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-zinc-700">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setSelectedItem(null);
                  setSidebarOpen(true);
                }}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addNodeFromModal}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors border border-gray-600"
              >
                Add to Workflow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
