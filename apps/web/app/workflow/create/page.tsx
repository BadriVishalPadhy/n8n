"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Search, X, Plus } from "lucide-react";
import { Edge, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

function WorkFlow() {
  /**
   * STEP 1
   * Create state to control:
   * - whether sidebar is open
   * - list of triggers fetched from backend
   * - list of nodes shown on canvas
   * - list of edges connecting nodes
   * - current UI mode (initial screen vs flow canvas)
   *
   * Hint:
   * - nodes and edges should be arrays
   * - mode can be "initial" | "flow"
   */
  const [sidebar, setSidebar] = useState("");
  const [triggers, setTriggers] = useState("");
  const [node, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [initial, flow] = useState("initial");

  /**
   * STEP 2
   * Write a function to fetch triggers from backend
   *
   * - Make an API call
   * - Extract trigger list from response
   * - Store it in state
   *
   * This function should NOT run during render.
   */
  function fetchTriggers() {
    const triggers = axios
      .get("http://localhost:3001/api/v1/availableTrigger")
      .then((response) => {
        setTriggers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  /**
   * STEP 3
   * Use useEffect to call the fetchTriggers function
   *
   * - Run it only once when component mounts
   * - Do NOT cause infinite re-renders
   */

  /**
   * STEP 4
   * Handle trigger click
   *
   * When user clicks a trigger:
   * 1. Create a new TRIGGER NODE object
   * 2. Assign it a unique ID
   * 3. Give it an initial position on canvas
   * 4. Store trigger metadata inside node.data
   * 5. Save this node in nodes state
   * 6. Switch UI mode from "initial" to "flow"
   * 7. Close the sidebar
   */

  /**
   * STEP 5
   * Later (not now), you will:
   * - Add a "+" button inside the trigger node
   * - Detect which trigger node was clicked
   * - Create an ACTION NODE
   * - Connect trigger → action using an edge
   */

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
      {/*
        STEP 6
        Show this screen ONLY when:
        - no nodes exist yet
        - workflow has not started
      */}
      <div className="relative h-full flex items-center justify-center">
        <button
          /*
            STEP 7
            On click:
            - open the sidebar
          */
          className="group"
        >
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

      {/* ================= FLOW CANVAS ================= */}
      {/*
        STEP 8
        Render ReactFlow ONLY when:
        - workflow mode is "flow"
        - nodes state has at least one node
      */}
      <div className="w-screen h-screen">
        <ReactFlow
        /*
            STEP 9
            Pass nodes array here

            Later:
            - handle node drag
            - handle node updates
          */
        />
      </div>

      {/* ================= OVERLAY ================= */}
      {/*
        STEP 10
        Show overlay when sidebar is open
        Clicking overlay should close sidebar
      */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[450px]
          bg-zinc-900 border-l border-zinc-800
          z-50 transition-transform
        `}
      >
        <div className="p-6">
          <button
            /*
              STEP 11
              Close sidebar when clicked
            */
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

          {/* ================= TRIGGER LIST ================= */}
          {/*
            STEP 12
            Loop through trigger list from state

            For each trigger:
            - render clickable item
            - on click, call trigger handler
          */}
          <div className="bg-zinc-800 p-4 mb-2 rounded cursor-pointer hover:bg-zinc-700">
            <div className="text-white">{/* trigger name */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
