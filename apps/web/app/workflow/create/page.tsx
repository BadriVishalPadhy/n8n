"use client";
import { useState, useEffect } from "react";
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
};
const colorMap = {
  webhook: "from-blue-500 to-blue-600",
  email: "from-green-500 to-green-600",
  database: "from-purple-500 to-purple-600",
  schedule: "from-yellow-500 to-yellow-600",
  file: "from-pink-500 to-pink-600",
  api: "from-orange-500 to-orange-600",
};

interface AvailableNode {
  id: string;
  name: string;
}

interface WorkflowNode {
  id: string;
  type: string;
  name: string;
  availableActionId: string;
  metadata: Record<string, any>;
}

export default function WorkflowBuilder() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarType, setSidebarType] = useState("trigger");
  const [triggers, setTriggers] = useState<AvailableNode[]>([]);
  const [actions, setActions] = useState<AvailableNode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AvailableNode | null>(null);
  const [metadata, setMetadata] = useState<any>({});
  const [workflowNodes, setWorkflowNodes] = useState<WorkflowNode[]>([]);

  useEffect(() => {
    fetchTriggersAndActions();
  }, []);

  async function fetchTriggersAndActions() {
    setLoading(true);
    setError(null);
    try {
      await axios
        .get("/api/v1/availableTrigger")
        .then((res) => {
          setTriggers(res.data.value || []);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "Failed to fetch triggers");
          setLoading(false);
        });
      await axios
        .get("/api/v1/availableActions")
        .then((res) => {
          setActions(res.data.availableActionNodes || []);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "Failed to fetch actions");
          setLoading(false);
        });
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

  function addNodeFromModal() {
    if (!selectedItem) return;
    const newNode = {
      id: `${sidebarType}-${Date.now()}`,
      type: sidebarType,
      name: selectedItem.name,
      availableActionId: selectedItem.id,
      metadata: metadata,
    };
    setWorkflowNodes([...workflowNodes, newNode]);
    setModalOpen(false);
    setSelectedItem(null);
    setMetadata({});
    setSidebarOpen(true);
    setSidebarType("action");
  }

  async function saveWorkflow() {
    const trigger = workflowNodes.find((n) => n.type === "trigger");
    const actionsList = workflowNodes.filter((n) => n.type === "action");

    if (!trigger) {
      alert("Please add a trigger first!");
      return;
    }

    const payload = {
      availableTriggerId: trigger.availableActionId,
      triggerMeta: trigger.metadata,
      actions: actionsList.map((action, index) => ({
        availableActionId: action.availableActionId,
        actionMeta: action.metadata,
        sortingOrder: index,
      })),
    };

    try {
      await axios.post("/api/v1/workflow", payload, {
        withCredentials: true,
      });
      alert("Workflow saved successfully!");
      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);
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
    <div className="w-full min-h-screen bg-zinc-950 flex">
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            {workflowNodes.length > 0 && (
              <button
                onClick={saveWorkflow}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Workflow
              </button>
            )}
          </div>

          <div className="space-y-4 mb-8">
            {workflowNodes.map((node, index) => {
              const Icon = iconMap[node.availableActionId] || Webhook;
              const color =
                colorMap[node.availableActionId] || "from-gray-500 to-gray-600";
              return (
                <div key={node.id} className="relative">
                  <div className="bg-zinc-800 border-2 border-zinc-600 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-white font-medium text-lg">
                            {node.name}
                          </p>
                          <span className="px-2 py-1 text-xs bg-zinc-700 text-gray-300 rounded uppercase">
                            {node.type}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setWorkflowNodes(
                            workflowNodes.filter((n) => n.id !== node.id),
                          )
                        }
                        className="p-2 hover:bg-zinc-700 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-400 hover:text-red-400" />
                      </button>
                    </div>
                  </div>
                  {index < workflowNodes.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={() => {
              setSidebarType(workflowNodes.length === 0 ? "trigger" : "action");
              setSidebarOpen(true);
            }}
            className="w-full p-6 border-2 border-dashed border-zinc-700 rounded-2xl bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-600 transition-all flex items-center justify-center gap-3 text-gray-400 hover:text-gray-300"
          >
            <Plus className="w-6 h-6" />
            <span>Add {workflowNodes.length === 0 ? "Trigger" : "Action"}</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-zinc-900 border-l border-zinc-700 shadow-2xl transform transition-transform duration-300 z-10 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <h2 className="text-xl font-semibold text-white">
            Select {sidebarType === "trigger" ? "Trigger" : "Action"}
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-zinc-800 rounded-lg"
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
                className="mt-2 text-red-400 text-sm underline"
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
                  onClick={() => openModal(item)}
                  className="w-full p-4 bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 hover:border-zinc-600 rounded-xl transition-all flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
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

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[5]"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {modalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
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
                  const Icon = iconMap[selectedItem.id] || Webhook;
                  const color =
                    colorMap[selectedItem.id] || "from-gray-500 to-gray-600";
                  return (
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
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
                className="p-2 hover:bg-zinc-800 rounded-lg"
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
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              {selectedItem.id === "email" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={metadata.email || ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, email: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Email subject"
                      value={metadata.subject || ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, subject: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Body
                    </label>
                    <textarea
                      placeholder="Email body"
                      value={metadata.body || ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, body: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </>
              )}
              {selectedItem.id === "database" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Connection String
                    </label>
                    <input
                      type="text"
                      placeholder="postgresql://user:pass@host:5432/db"
                      value={metadata.connectionString || ""}
                      onChange={(e) =>
                        setMetadata({
                          ...metadata,
                          connectionString: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Table Name
                    </label>
                    <input
                      type="text"
                      placeholder="users"
                      value={metadata.tableName || ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, tableName: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}
              {selectedItem.id === "schedule" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cron Expression
                  </label>
                  <input
                    type="text"
                    placeholder="0 0 * * *"
                    value={metadata.cronExpression || ""}
                    onChange={(e) =>
                      setMetadata({
                        ...metadata,
                        cronExpression: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Example: "0 0 * * *" runs daily at midnight
                  </p>
                </div>
              )}
              {selectedItem.id === "api" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      API Endpoint
                    </label>
                    <input
                      type="url"
                      placeholder="https://api.example.com/endpoint"
                      value={metadata.apiEndpoint || ""}
                      onChange={(e) =>
                        setMetadata({
                          ...metadata,
                          apiEndpoint: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      API Key
                    </label>
                    <input
                      type="password"
                      placeholder="Enter API key"
                      value={metadata.apiKey || ""}
                      onChange={(e) =>
                        setMetadata({ ...metadata, apiKey: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
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
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
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
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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
