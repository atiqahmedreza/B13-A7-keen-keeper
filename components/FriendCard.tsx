import Image from "next/image";
import Link from "next/link";
import type { Friend } from "@/types";
import StatusBadge from "./StatusBadge";
import TagPill from "./TagPill";

interface FriendCardProps {
  friend: Friend;
}

export default function FriendCard({ friend }: FriendCardProps) {
  return (
    <Link
      href={`/friends/${friend.id}`}
      className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-4 py-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full">
        <Image
          src={friend.picture}
          alt={friend.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <h3 className="text-center font-bold text-gray-900">{friend.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{friend.days_since_contact}d ago</p>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {friend.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
      <div className="mt-4">
        <StatusBadge status={friend.status} />
      </div>
    </Link>
  );
}
