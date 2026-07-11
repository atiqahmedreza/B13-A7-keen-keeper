import friendsData from "@/data/friends.json";
import type { Friend, FriendsData } from "@/types";

const data = friendsData as FriendsData;

export function getFriends(): Friend[] {
  return data.friends;
}

export function getFriendById(id: number): Friend | undefined {
  return data.friends.find((f) => f.id === id);
}

export function getSummaryStats() {
  const friends = getFriends();
  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return {
    totalFriends,
    onTrack,
    needAttention,
    interactionsThisMonth: data.timeline.filter((entry) => {
      const d = new Date(entry.date);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    }).length,
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getTodayDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
