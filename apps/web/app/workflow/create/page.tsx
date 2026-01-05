"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Search, X, Plus } from "lucide-react";
import { ReactFlow, applyNodeChanges, Node, NodeChange } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

function WorkFlow() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTrigger, setSelectedTrigger] = useState<any[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [mode, setMode] = useState<"initial" | "flow">("initial");

  // ================================
  // Fetch triggers
  // ================================
  const fetchTriggers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/v1/availableTrigger",
      );
      setSelectedTrigger(response.data.value);
    } catch (error) {
      console.error("Error fetching triggers:", error);
    }
  };

  useEffect(() => {
    fetchTriggers();
  }, []);
  // ================================
  // Trigger click → create node
  // ================================
  const handleTriggerClick = (trigger: any) => {
    const newNode: Node = {
      id: crypto.randomUUID(),
      position: { x: 250, y: 200 },
      data: {
        label: trigger.name,
        triggerId: trigger.id,
        type: trigger.type,
      },
    };

    setNodes([newNode]);
    setMode("flow");
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative w-screen h-screen bg-zinc-950 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4C4C4C 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundColor: "#171717",
        }}
      />

      {/* ================= INITIAL SCREEN ================= */}
      {mode === "initial" && (
        <div className="relative h-full flex items-center justify-center">
          <button onClick={() => setIsSidebarOpen(true)} className="group">
            <div className="w-28 h-28 rounded-2xl border-2 border-dashed border-[#929292] bg-zinc-900 flex items-center justify-center hover:border-gray-500 hover:bg-zinc-800 transition-all">
              <Plus className="w-12 h-12 text-[#929292]" />
            </div>

            <div className="mt-4 text-center">
              <span className="text-white text-lg font-medium">
                Add first step...
              </span>
            </div>
          </button>
        </div>
      )}

      {/* ================= FLOW CANVAS ================= */}
      {mode === "flow" && (
        <div className="w-screen h-screen">
          <ReactFlow
            nodes={nodes}
            onNodesChange={(changes: NodeChange[]) =>
              setNodes((nds) => applyNodeChanges(changes, nds))
            }
          />
        </div>
      )}

      {/* ================= OVERLAY ================= */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[450px] bg-zinc-900 border-l border-zinc-800 z-50 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4"
          >
            <X className="text-gray-400" />
          </button>

          <h2 className="text-white text-2xl font-semibold mb-2">
            What triggers this workflow?
          </h2>

          <div className="my-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                placeholder="Search nodes..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-12 pr-4 py-3 text-white"
              />
            </div>
          </div>

          {/* Trigger list */}
          {selectedTrigger.map((trigger) => (
            <div
              key={trigger.id}
              className="bg-zinc-800 p-4 mb-2 rounded cursor-pointer hover:bg-zinc-700"
              onClick={() => handleTriggerClick(trigger)}
            >
              <div className="text-white">{trigger.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
