"use client";

import { useState } from "react";
import {
  Search,
  MousePointer2,
  Zap,
  Webhook,
  ArrowRight,
  X,
  Plus,
} from "lucide-react";

export default function WorkFlow() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTrigger, setSelectedTrigger] = useState("");

  const triggers = [
    {
      id: "manual",
      name: "Trigger manually",
      description:
        "Runs the flow on clicking a button in n8n. Good for getting started quickly",
      icon: MousePointer2,
      color: "text-gray-400",
      hasArrow: false,
    },
    {
      id: "app-event",
      name: "On app event",
      description:
        "Runs the flow when something happens in an app like Telegram, Notion or Airtable",
      icon: Zap,
      color: "text-gray-400",
      hasArrow: true,
    },

    {
      id: "webhook",
      name: "On webhook call",
      description: "Runs the flow on receiving an HTTP request",
      icon: Webhook,
      color: "text-gray-400",
      hasArrow: false,
    },
  ];

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
            <div className="space-y-1">
              {triggers.map((trigger) => {
                const Icon = trigger.icon;
                const isSelected = selectedTrigger === trigger.name;

                return (
                  <button
                    key={trigger.id}
                    onClick={() => setSelectedTrigger(trigger.name)}
                    className={`w-full text-left p-4 rounded-lg hover:bg-zinc-800 transition-colors group relative ${
                      isSelected ? "bg-zinc-800" : ""
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-r" />
                    )}

                    <div className="flex items-start gap-4">
                      <Icon
                        className={`w-6 h-6 mt-1 flex-shrink-0 ${trigger.color}`}
                      />

                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium mb-1">
                          {trigger.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {trigger.description}
                        </p>
                      </div>

                      {trigger.hasArrow && (
                        <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
