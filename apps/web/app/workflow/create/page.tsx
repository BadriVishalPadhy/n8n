"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  MousePointer2,
  Zap,
  Webhook,
  ArrowRight,
  X,
  Plus,
  Divide,
} from "lucide-react";

function WorkFlow() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTrigger, setSelectedTrigger] = useState([]);

  const fetchTriggers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/v1/availableTrigger",
      );

      setSelectedTrigger(response.data.value);
    } catch (error) {
      console.error("Error fetching webhooks:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchTriggers();
    })();
  }, []);

  const triggers = selectedTrigger;

  return (
    <div className="relative w-screen h-screen bg-zinc-950 overflow-hidden">
      {/* Background with dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4C4C4C 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundColor: "#171717",
        }}
      />

      {/* Main content */}
      <div className="relative h-full flex items-center justify-center">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="relative group"
        >
          <div className="w-28 h-28 rounded-2xl border-2 border-dashed border-[#929292] bg-zinc-900 flex items-center justify-center hover:border-gray-500 hover:bg-zinc-800 transition-all">
            <Plus
              className="w-12 h-12 text-[#929292] group-hover:text-gray-400 transition-colors"
              strokeWidth={2}
            />
          </div>

          <div className="mt-4 text-center">
            <span className="text-white text-lg font-medium">
              Add first step...
            </span>
          </div>
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[450px] bg-zinc-900 border-l border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            {/* Close button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-10">
              <h2 className="text-white text-2xl font-semibold mb-2">
                What triggers this workflow?
              </h2>
              <p className="text-gray-400 text-sm">
                A trigger is a step that starts your workflow
              </p>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search nodes..."
                  className="w-full bg-zinc-800 border-2 border-indigo-500 rounded-lg pl-12 pr-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-400"
                />
              </div>
            </div>

            {/* Trigger list */}
            <div>
              {selectedTrigger.map((trigger) => (
                <div
                  key={trigger.id}
                  className="bg-zinc-800 p-4 mb-2 rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
