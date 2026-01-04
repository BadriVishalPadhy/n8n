"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Minus, MoreVertical, User } from "lucide-react";
import { useRouter } from "next/navigation";

const tabs = [
  "Workflows",
  "Credentials",
  "Executions",
  "Variables",
  "Data tables",
];

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("Workflows");
  const router = useRouter();

  return (
    <div className=" ">
      <div className="flex justify-around pt-4 bg-black">
        <span className="flex flex-col  text-white  ">
          <span className=" text-2xl">Overview</span>
          <span>
            All the workflows, credentials and data tables you have access to
          </span>
        </span>
        <Button  onClick={() => {router.push('/workflow/create')} } className=" bg-orange-500 ">Create WorkFlow</Button>
      </div>

      <div className="flex justify-around pt-4 bg-black">
        <div>
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`text-base font-medium transition-colors ${
                  selectedTab === tab
                    ? "text-red-500 underline underline-offset-4 decoration-2"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-8">
            {/* Header content */}
            <div className="flex items-start justify-between">
              <div>
                {/* Title */}
                <h1 className="text-white text-3xl font-semibold mb-2">
                  My workflow
                </h1>

                {/* Metadata */}
                <p className="text-gray-400 text-sm">
                  Last updated 6 hours ago | Created 3 January
                </p>

                {/* Personal badge */}
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 bg-zinc-800 bg-opacity-50">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">Personal</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-md hover:bg-zinc-800 transition-colors">
                  <Minus className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 rounded-md hover:bg-zinc-800 transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
