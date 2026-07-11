"use client";

import { useState } from "react";
import { useTimelineStore } from "@/store/timelineStore";
import type { InteractionType } from "@/types";
import TimelineRow from "@/components/TimelineRow";

const filterOptions: { value: InteractionType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "video", label: "Video" },
  { value: "meetup", label: "Meetup" },
];

export default function TimelinePage() {
  const timeline = useTimelineStore((s) => s.timeline);
  const [filter, setFilter] = useState<InteractionType | "all">("all");

  const filtered =
    filter === "all"
      ? timeline
      : timeline.filter((entry) => entry.type === filter);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Timeline</h1>

      <div className="mt-4">
        <label htmlFor="timeline-filter" className="sr-only">
          Filter timeline
        </label>
        <select
          id="timeline-filter"
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as InteractionType | "all")
          }
          className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm focus:border-emerald-900 focus:outline-none focus:ring-1 focus:ring-emerald-900"
        >
          <option value="all">Filter timeline</option>
          {filterOptions
            .filter((opt) => opt.value !== "all")
            .map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
        </select>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {sorted.length === 0 ? (
          <p className="px-4 py-8 text-center text-gray-500">
            No timeline entries found.
          </p>
        ) : (
          sorted.map((entry) => <TimelineRow key={entry.id} entry={entry} />)
        )}
      </div>
    </div>
  );
}
