import type { FriendStatus } from "@/types";

const statusConfig: Record<
  FriendStatus,
  { label: string; className: string }
> = {
  overdue: {
    label: "Overdue",
    className: "bg-red-100 text-red-700",
  },
  "almost due": {
    label: "Almost Due",
    className: "bg-amber-100 text-amber-700",
  },
  "on-track": {
    label: "On-Track",
    className: "bg-emerald-900 text-white",
  },
};

interface StatusBadgeProps {
  status: FriendStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${config.className}`}
    >
      {config.label}
    </span>
  );
}
