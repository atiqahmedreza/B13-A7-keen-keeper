"use client";

import { Phone, MessageSquare, Video } from "lucide-react";
import { toast } from "sonner";
import { useTimelineStore } from "@/store/timelineStore";
import { getTodayDate } from "@/lib/data";
import type { InteractionType } from "@/types";

interface QuickCheckInProps {
  friendId: number;
  friendName: string;
}

const actions: {
  type: InteractionType;
  label: string;
  icon: typeof Phone;
}[] = [
  { type: "call", label: "Call", icon: Phone },
  { type: "text", label: "Text", icon: MessageSquare },
  { type: "video", label: "Video", icon: Video },
];

export default function QuickCheckIn({ friendId, friendName }: QuickCheckInProps) {
  const addEntry = useTimelineStore((s) => s.addEntry);

  const handleCheckIn = (type: InteractionType, label: string) => {
    const title = `${label} with ${friendName}`;
    addEntry({
      friendId,
      friendName,
      type,
      title,
      date: getTodayDate(),
    });
    toast.success(`Logged a ${label.toLowerCase()} with ${friendName}`);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-gray-900">Quick Check-In</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {actions.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            type="button"
            onClick={() => handleCheckIn(type, label)}
            className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 px-3 py-4 transition-colors hover:bg-gray-50"
          >
            <Icon size={22} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
