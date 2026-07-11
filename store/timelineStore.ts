import { create } from "zustand";
import friendsData from "@/data/friends.json";
import type { FriendsData, TimelineEntry } from "@/types";

const data = friendsData as FriendsData;

interface TimelineStore {
  timeline: TimelineEntry[];
  addEntry: (entry: Omit<TimelineEntry, "id">) => void;
}

export const useTimelineStore = create<TimelineStore>((set) => ({
  timeline: data.timeline,
  addEntry: (entry) =>
    set((state) => ({
      timeline: [
        {
          ...entry,
          id: Math.max(0, ...state.timeline.map((t) => t.id)) + 1,
        },
        ...state.timeline,
      ],
    })),
}));
