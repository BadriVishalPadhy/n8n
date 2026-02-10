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
  ConnectionLineType,
  Panel,
  type Node,
  type Edge,
  type Connection,
  Handle,
  Position,
  type NodeProps,
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
  GitBranch,
  Send,
  type LucideIcon,
} from "lucide-react";
import axios, { type AxiosError } from "axios";
import { useRouter } from "next/navigation";

// ── Icon Map ───────────────────────────────────────────────────────────────────

type IconKey =
  | "webhook"
  | "email"
  | "database"
  | "schedule"
  | "file"
  | "api"
  | "sol"
  | "telegram";

const iconMap: Record<IconKey, LucideIcon> = {
  webhook: Webhook,
  email: Mail,
  database: Database,
  schedule: Calendar,
  file: FileText,
  api: Zap,
  sol: Zap,
  telegram: Send,
};

function NodeIcon({
  iconId,
  className,
}: {
  iconId: string;
  className?: string;
}) {
  const Component = iconMap[iconId as IconKey] ?? Webhook;
  return <Component className={className} />;
}

// ── Types ──────────────────────────────────────────────────────────────────────

interface AvailableNode {
  id: string;
  name: string;
}

interface CustomNodeData {
  label: string;
  subtitle: string;
  type: "trigger" | "action";
  availableActionId: string;
  metadata: Record<string, string>;
  childCount: number;
  onDelete: () => void;
  onAdd: () => void;
  [key: string]: unknown;
}

type CustomNodeType = Node<CustomNodeData, "custom">;

// ── Constants ──────────────────────────────────────────────────────────────────

const EDGE_STYLE = {
  stroke: "#6b7280",
  strokeWidth: 2,
  strokeDasharray: "5, 5",
} as const;

const NODE_GAP_X = 350;
const NODE_GAP_Y = 220;

// ── Helpers ────────────────────────────────────────────────────────────────────

function createEdge(sourceId: string, targetId: string): Edge {
  return {
    id: `edge-${sourceId}-${targetId}`,
    source: sourceId,
    target: targetId,
    animated: true,
    type: "smoothstep",
    style: EDGE_STYLE,
  };
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  const axiosErr = err as AxiosError<{ error?: string; message?: string }>;
  return (
    axiosErr.response?.data?.error ??
    axiosErr.response?.data?.message ??
    axiosErr.message ??
    "An unknown error occurred"
  );
}

function getChildPosition(
  parent: CustomNodeType,
  existingChildCount: number,
): { x: number; y: number } {
  const baseX = parent.position.x;
  const baseY = parent.position.y + NODE_GAP_Y;

  if (existingChildCount === 0) {
    return { x: baseX, y: baseY };
  }

  const direction = existingChildCount % 2 === 0 ? -1 : 1;
  const offset = Math.ceil(existingChildCount / 2) * NODE_GAP_X;

  return {
    x: baseX + direction * offset,
    y: baseY,
  };
}

// ── Default Metadata Templates ─────────────────────────────────────────────────

function getDefaultMetadata(actionId: string): Record<string, string> {
  switch (actionId) {
    case "email":
      return {
        name: "SOL Transfer Alert",
        email: "",
        subject: "🚀 {solAmount} SOL Transfer Detected",
        body: [
          "Hi,",
          "",
          "A Solana transfer was detected on your monitored wallet.",
          "",
          "📤 From: {fromWallet}",
          "📥 To: {toWallet}",
          "💰 Amount: {solAmount} SOL",
          "🔗 Signature: {signature}",
          "📅 Time: {timestamp}",
          "📋 Type: {type}",
          "",
          "— Workflow Automation",
        ].join("\n"),
      };
    case "telegram":
      return {
        name: "SOL Transfer Notification",
        chatId: "",
        message: [
          "🚀 *{solAmount} SOL Transferred*",
          "",
          "📤 From: `{fromWallet}`",
          "📥 To: `{toWallet}`",
          "📋 Type: {type}",
          "📅 Time: {timestamp}",
          "🔗 TX: `{signature}`",
        ].join("\n"),
      };
    case "webhook":
      return {
        name: "Webhook Forwarder",
        webhookUrl: "",
      };
    default:
      return {};
  }
}

// ── Custom Node Component ──────────────────────────────────────────────────────

function CustomNode({ data }: NodeProps<CustomNodeType>) {
  const isStart = data.type === "trigger";

  return (
    <div className="relative group">
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
          <div className="w-16 h-16 bg-[#1B1B1B] border border-gray-600 rounded-xl flex items-center justify-center">
            <NodeIcon
              iconId={data.availableActionId}
              className="w-8 h-8 text-cyan-400"
            />
          </div>

          <div className="text-center w-full">
            <p className="text-white font-medium text-sm mb-0.5">
              {data.label}
            </p>
            <p className="text-gray-500 text-xs">
              {data.subtitle || data.type}
            </p>
          </div>

          {data.childCount > 0 && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full flex items-center gap-1 bg-zinc-800 border border-zinc-600 rounded-full px-2 py-0.5 text-[10px] text-gray-400">
              <GitBranch className="w-3 h-3" />
              {data.childCount}
            </div>
          )}

          <button
            onClick={data.onDelete}
            className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
          >
            <X className="w-3.5 h-3.5 text-gray-400 hover:text-red-400" />
          </button>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 h-4 !bg-gray-400 !border-2 !border-gray-600 hover:!bg-white transition-colors"
      />

      <button
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-cyan-600 hover:bg-cyan-500 border-2 border-cyan-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg shadow-cyan-500/20"
        onClick={data.onAdd}
        title="Add action from this node"
      >
        <Plus className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

// ── Main Component ─────────────────────────────────────────────────────────────

export default function WorkflowBuilder() {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNodeType>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
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
  const [metadata, setMetadata] = useState<Record<string, string>>({});
  const [addAfterNodeId, setAddAfterNodeId] = useState<string | null>(null);

  useEffect(() => {
    fetchTriggersAndActions();
  }, []);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) =>
        addEdge(
          { ...params, animated: true, type: "smoothstep", style: EDGE_STYLE },
          eds,
        ),
      );
    },
    [setEdges],
  );

  // ── Data fetching ──────────────────────────────────────────────────────────

  async function fetchTriggersAndActions(): Promise<void> {
    setLoading(true);
    setError(null);
    try {
      const [triggerRes, actionRes] = await Promise.all([
        axios.get<{ value: AvailableNode[] }>(
          "http://localhost:8000/api/v1/availableTrigger",
          { withCredentials: true },
        ),
        axios.get<{ availableActionNodes: AvailableNode[] }>(
          "http://localhost:8000/api/v1/availableActions",
          { withCredentials: true },
        ),
      ]);
      setTriggers(triggerRes.data.value ?? []);
      setActions(actionRes.data.availableActionNodes ?? []);
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  // ── Count children ─────────────────────────────────────────────────────────

  function countChildren(nodeId: string): number {
    return edges.filter((e) => e.source === nodeId).length;
  }

  // ── Handle + button click on a node ────────────────────────────────────────

  function handleAddFromNode(nodeId: string): void {
    setAddAfterNodeId(nodeId);
    setSidebarType("action");
    setSidebarOpen(true);
  }

  // ── Build node data ────────────────────────────────────────────────────────

  function buildNodeData(
    nodeId: string,
    item: AvailableNode,
    nodeType: "trigger" | "action",
    meta: Record<string, string>,
    childCount: number,
  ): CustomNodeData {
    return {
      label: item.name,
      subtitle: meta.name || nodeType,
      type: nodeType,
      availableActionId: item.id,
      metadata: meta,
      childCount,
      onDelete: () => deleteNode(nodeId),
      onAdd: () => handleAddFromNode(nodeId),
    };
  }

  // ── Refresh child counts ───────────────────────────────────────────────────

  function refreshChildCounts(): void {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          childCount: edges.filter((e) => e.source === node.id).length,
        },
      })),
    );
  }

  // ── Add trigger ────────────────────────────────────────────────────────────

  function addTriggerDirectly(item: AvailableNode): void {
    const nodeId = `node-${Date.now()}`;

    const newNode: CustomNodeType = {
      id: nodeId,
      type: "custom",
      position: { x: 400, y: 80 },
      data: buildNodeData(nodeId, item, "trigger", {}, 0),
    };

    setNodes((nds) => [...nds, newNode]);
    setSidebarOpen(false);
    setAddAfterNodeId(null);
    setSidebarType("action");
  }

  // ── Sidebar item click — pre-fills with smart defaults ─────────────────────

  function handleSidebarItemClick(item: AvailableNode): void {
    if (sidebarType === "trigger") {
      addTriggerDirectly(item);
      return;
    }
    setSelectedItem(item);
    setMetadata(getDefaultMetadata(item.id));
    setSidebarOpen(false);
    setModalOpen(true);
  }

  // ── Delete node ────────────────────────────────────────────────────────────

  function deleteNode(nodeId: string): void {
    setNodes((nds) => nds.filter((n) => n.id !== nodeId));
    setEdges((eds) =>
      eds.filter((e) => e.source !== nodeId && e.target !== nodeId),
    );
    setTimeout(refreshChildCounts, 0);
  }

  // ── Add action node from modal ─────────────────────────────────────────────

  function addNodeFromModal(): void {
    if (!selectedItem) return;

    const nodeId = `node-${Date.now()}`;

    const parentNode = addAfterNodeId
      ? (nodes.find((n) => n.id === addAfterNodeId) ?? null)
      : nodes.length > 0
        ? (nodes[nodes.length - 1] ?? null)
        : null;

    let position: { x: number; y: number };
    if (parentNode) {
      const existingChildren = countChildren(parentNode.id);
      position = getChildPosition(parentNode, existingChildren);
    } else {
      position = { x: 400, y: 80 };
    }

    const newNode: CustomNodeType = {
      id: nodeId,
      type: "custom",
      position,
      data: buildNodeData(nodeId, selectedItem, "action", metadata, 0),
    };

    setNodes((nds) => {
      const updated = [...nds, newNode];
      if (parentNode) {
        return updated.map((n) =>
          n.id === parentNode.id
            ? {
                ...n,
                data: {
                  ...n.data,
                  childCount: countChildren(parentNode.id) + 1,
                },
              }
            : n,
        );
      }
      return updated;
    });

    if (parentNode) {
      setEdges((eds) => [...eds, createEdge(parentNode.id, nodeId)]);
    }

    setModalOpen(false);
    setSelectedItem(null);
    setMetadata({});
    setAddAfterNodeId(null);
  }

  // ── Save workflow ──────────────────────────────────────────────────────────

  async function saveWorkflow(): Promise<void> {
    const triggerNode = nodes.find((n) => n.data.type === "trigger");
    const actionNodes = nodes.filter((n) => n.data.type === "action");

    if (!triggerNode) {
      alert("Please add a trigger first!");
      return;
    }

    if (actionNodes.length === 0) {
      alert("Please add at least one action!");
      return;
    }

    const childrenMap = new Map<string, string[]>();
    for (const edge of edges) {
      const existing = childrenMap.get(edge.source) ?? [];
      existing.push(edge.target);
      childrenMap.set(edge.source, existing);
    }

    const orderedActionIds: string[] = [];
    const queue = [triggerNode.id];
    const visited = new Set<string>();

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (visited.has(current)) continue;
      visited.add(current);

      const node = nodes.find((n) => n.id === current);
      if (node && node.data.type === "action") {
        orderedActionIds.push(current);
      }

      const children = childrenMap.get(current) ?? [];
      for (const childId of children) {
        if (!visited.has(childId)) {
          queue.push(childId);
        }
      }
    }

    const payload = {
      availableTriggerId: triggerNode.data.availableActionId,
      triggerMeta: triggerNode.data.metadata,
      actions: orderedActionIds.map((id, index) => {
        const node = nodes.find((n) => n.id === id)!;
        return {
          availableActionId: node.data.availableActionId,
          actionMeta: node.data.metadata,
          sortingOrder: index,
        };
      }),
    };

    try {
      await axios.post("http://localhost:8000/api/v1/workflow", payload, {
        withCredentials: true,
      });
      alert("Workflow saved successfully!");
      router.push("/dashboard");
    } catch (err: unknown) {
      alert(`Error saving workflow: ${getErrorMessage(err)}`);
    }
  }

  // ── Close helpers ──────────────────────────────────────────────────────────

  function closeSidebar(): void {
    setSidebarOpen(false);
    setAddAfterNodeId(null);
  }

  function closeModal(): void {
    setModalOpen(false);
    setSelectedItem(null);
    setAddAfterNodeId(null);
  }

  // ── Derived state ──────────────────────────────────────────────────────────

  const currentItems = sidebarType === "trigger" ? triggers : actions;
  const hasTrigger = nodes.some((n) => n.data.type === "trigger");
  const parentNodeLabel = addAfterNodeId
    ? nodes.find((n) => n.id === addAfterNodeId)?.data.label
    : null;

  // ── Available template variables info ──────────────────────────────────────

  const templateVariables = [
    { key: "fromWallet", desc: "Sender wallet address" },
    { key: "toWallet", desc: "Receiver wallet address" },
    { key: "solAmount", desc: "SOL amount" },
    { key: "signature", desc: "Transaction signature" },
    { key: "type", desc: "Transaction type" },
    { key: "timestamp", desc: "Date & time" },
    { key: "lamports", desc: "Raw lamport amount" },
    { key: "tokenAmount", desc: "SPL token amount" },
    { key: "tokenMint", desc: "Token mint address" },
  ];

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="w-full h-screen bg-[#1B1B1B] flex relative">
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
            style: EDGE_STYLE,
          }}
          connectionLineStyle={{
            stroke: "#6b7280",
            strokeWidth: 2,
            strokeDasharray: "5, 5",
          }}
          connectionLineType={ConnectionLineType.SmoothStep}
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
                setAddAfterNodeId(null);
                setSidebarType(hasTrigger ? "action" : "trigger");
                setSidebarOpen(true);
              }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2 shadow-lg border border-gray-600"
            >
              <Plus className="w-4 h-4" />
              Add {hasTrigger ? "Action" : "Trigger"}
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
                    setAddAfterNodeId(null);
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

      {/* ── Sidebar ──────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-zinc-900 border-l border-zinc-700 shadow-2xl transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Select {sidebarType === "trigger" ? "Trigger" : "Action"}
            </h2>
            {parentNodeLabel && (
              <p className="text-cyan-400 text-xs mt-1 flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                Branching from &ldquo;{parentNodeLabel}&rdquo;
              </p>
            )}
          </div>
          <button
            onClick={closeSidebar}
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
            currentItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSidebarItemClick(item)}
                className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-cyan-500/50 rounded-xl transition-all flex items-center gap-4 group/item"
              >
                <div className="w-12 h-12 bg-[#1B1B1B] border border-gray-600 group-hover/item:border-cyan-500/50 rounded-lg flex items-center justify-center transition-colors">
                  <NodeIcon
                    iconId={item.id}
                    className="w-6 h-6 text-cyan-400"
                  />
                </div>
                <div className="text-left flex-1">
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-gray-400 text-sm">
                    {sidebarType === "trigger"
                      ? "Click to add"
                      : "Configure and add"}
                  </p>
                </div>
                <Plus className="w-4 h-4 text-gray-600 group-hover/item:text-cyan-400 transition-colors" />
              </button>
            ))}
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}

      {/* ── Modal ────────────────────────────────────────────────────────── */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl w-[520px] max-h-[700px] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1B1B1B] border border-gray-600 rounded-lg flex items-center justify-center">
                  <NodeIcon
                    iconId={selectedItem.id}
                    className="w-6 h-6 text-cyan-400"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {selectedItem.name}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {parentNodeLabel ? (
                      <>Branching from &ldquo;{parentNodeLabel}&rdquo;</>
                    ) : (
                      "Configure action"
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[450px]">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${selectedItem.name} name`}
                  value={metadata.name ?? ""}
                  onChange={(e) =>
                    setMetadata({ ...metadata, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>

              {/* ── Email fields ────────────────────────────────────────── */}
              {selectedItem.id === "email" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      To (Email)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. user@example.com"
                      value={metadata.email ?? ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, email: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={metadata.subject ?? ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, subject: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Body
                    </label>
                    <textarea
                      value={metadata.body ?? ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, body: e.target.value })
                      }
                      rows={6}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none font-mono text-sm"
                    />
                  </div>
                </>
              )}

              {/* ── Telegram fields ───────────��─────────────────────────── */}
              {selectedItem.id === "telegram" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Chat ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 987654321"
                      value={metadata.chatId ?? ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, chatId: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      Send /start to your bot, then call getUpdates to find your
                      chat ID
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      value={metadata.message ?? ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, message: e.target.value })
                      }
                      rows={6}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none font-mono text-sm"
                    />
                  </div>
                </>
              )}

              {/* ── Webhook fields ──────────────────────────────────────── */}
              {selectedItem.id === "webhook" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Webhook URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/webhook"
                    value={metadata.webhookUrl ?? ""}
                    onChange={(e) =>
                      setMetadata({ ...metadata, webhookUrl: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  />
                </div>
              )}

              {/* ── Available Variables Reference ───────────────────────── */}
              {(selectedItem.id === "email" ||
                selectedItem.id === "telegram") && (
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-400 mb-2">
                    📋 Available template variables (auto-filled from trigger
                    data):
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {templateVariables.map((v) => (
                      <button
                        key={v.key}
                        type="button"
                        title={v.desc}
                        onClick={() => {
                          // Copy variable to clipboard for easy pasting
                          navigator.clipboard.writeText(`{${v.key}}`);
                        }}
                        className="px-2 py-0.5 bg-zinc-700 hover:bg-cyan-600/20 border border-zinc-600 hover:border-cyan-500/50 rounded text-xs text-cyan-400 font-mono transition-colors cursor-pointer"
                      >
                        {`{${v.key}}`}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2">
                    Click any variable to copy it. These are auto-extracted from
                    incoming Solana transactions.
                  </p>
                </div>
              )}

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description (Optional)
                </label>
                <textarea
                  placeholder="Add a description..."
                  value={metadata.description ?? ""}
                  onChange={(e) =>
                    setMetadata({ ...metadata, description: e.target.value })
                  }
                  rows={2}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-zinc-700">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addNodeFromModal}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
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
