import { notFound } from "next/navigation";
import Image from "next/image";
import { AlarmClock, Archive, Trash2 } from "lucide-react";
import { getFriendById, getFriends, formatDate } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";
import TagPill from "@/components/TagPill";
import StatCard from "@/components/StatCard";
import QuickCheckIn from "@/components/QuickCheckIn";

interface FriendPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getFriends().map((friend) => ({
    id: String(friend.id),
  }));
}

export default async function FriendPage({ params }: FriendPageProps) {
  const { id } = await params;
  const friend = getFriendById(Number(id));

  if (!friend) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                  priority
                />
              </div>
              <h1 className="mt-4 text-2xl font-bold text-gray-900">
                {friend.name}
              </h1>
              <div className="mt-3">
                <StatusBadge status={friend.status} />
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {friend.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>
              <p className="mt-4 text-center text-sm italic text-gray-500">
                &ldquo;{friend.bio}&rdquo;
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Preferred: {friend.preferred_contact}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <AlarmClock size={18} />
              Snooze 2 Weeks
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Archive size={18} />
              Archive
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <StatCard
              value={friend.days_since_contact}
              label="Days Since Contact"
            />
            <StatCard value={friend.goal} label="Goal (Days)" />
            <StatCard
              value={formatDate(friend.next_due_date)}
              label="Next Due Date"
            />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Relationship Goal</h3>
              <button
                type="button"
                className="rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                Edit
              </button>
            </div>
            <p className="mt-3 text-gray-600">
              Connect every {friend.goal} days
            </p>
          </div>

          <QuickCheckIn friendId={friend.id} friendName={friend.name} />
        </div>
      </div>
    </div>
  );
}
