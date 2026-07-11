import type { InteractionType, TimelineEntry } from "@/types";
import { Phone, MessageSquare, Video, Tag } from "lucide-react";
import { formatDate } from "@/lib/data";

const typeConfig: Record<
  InteractionType,
  { label: string; icon: typeof Phone; iconClass: string }
> = {
  call: { label: "Call", icon: Phone, iconClass: "text-gray-500" },
  text: { label: "Text", icon: MessageSquare, iconClass: "text-gray-500" },
  video: { label: "Video", icon: Video, iconClass: "text-gray-500" },
  meetup: { label: "Meetup", icon: Tag, iconClass: "text-amber-500" },
};

interface TimelineRowProps {
  entry: TimelineEntry;
}

export default function TimelineRow({ entry }: TimelineRowProps) {
  const config = typeConfig[entry.type];
  const Icon = config.icon;

  return (
    <div className="flex items-start gap-4 border-b border-gray-200 px-4 py-5 last:border-b-0">
      <div
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 ${config.iconClass}`}
      >
        <Icon size={18} />
      </div>
      <div>
        <p className="font-semibold text-gray-900">
          {config.label}{" "}
          <span className="font-normal text-gray-500">
            with {entry.friendName}
          </span>
        </p>
        <p className="mt-0.5 text-sm text-gray-500">{formatDate(entry.date)}</p>
      </div>
    </div>
  );
}
