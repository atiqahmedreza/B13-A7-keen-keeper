"use client";

import { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import { getFriends } from "@/lib/data";
import { useTimelineStore } from "@/store/timelineStore";
import type { Friend } from "@/types";
import SummaryCard from "@/components/SummaryCard";
import FriendCard from "@/components/FriendCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function HomePage() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const timeline = useTimelineStore((s) => s.timeline);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(getFriends());
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;

  const now = new Date();
  const interactionsThisMonth = timeline.filter((entry) => {
    const d = new Date(entry.date + "T00:00:00");
    return (
      d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    );
  }).length;

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Friends to keep close in your life
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
        >
          <UserPlus size={18} />
          Add a Friend
        </button>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        <SummaryCard value={totalFriends} label="Total Friends" />
        <SummaryCard value={onTrack} label="On Track" />
        <SummaryCard value={needAttention} label="Need Attention" />
        <SummaryCard
          value={interactionsThisMonth}
          label="Interactions This Month"
        />
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-xl font-bold text-gray-900">Your Friends</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
}
