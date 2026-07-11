"use client";

import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { useTimelineStore } from "@/store/timelineStore";
import type { InteractionType } from "@/types";

const COLORS: Record<InteractionType, string> = {
  text: "#7C3AED",
  call: "#1B4332",
  video: "#0D9488",
  meetup: "#F59E0B",
};

const LABELS: Record<InteractionType, string> = {
  text: "Text",
  call: "Call",
  video: "Video",
  meetup: "Meetup",
};

export default function StatsPage() {
  const timeline = useTimelineStore((s) => s.timeline);

  const chartData = useMemo(() => {
    const counts: Record<InteractionType, number> = {
      call: 0,
      text: 0,
      video: 0,
      meetup: 0,
    };

    timeline.forEach((entry) => {
      counts[entry.type]++;
    });

    return (["text", "call", "video", "meetup"] as InteractionType[])
      .map((type) => ({
        name: LABELS[type],
        value: counts[type],
        color: COLORS[type],
      }))
      .filter((d) => d.value > 0);
  }, [timeline]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Friendship Analytics
      </h1>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="font-bold text-gray-900">By Interaction Type</h2>

        {chartData.length === 0 ? (
          <p className="mt-8 text-center text-gray-500">
            No interaction data yet.
          </p>
        ) : (
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  formatter={(value) => (
                    <span className="text-sm text-gray-700">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
