export type FriendStatus = "overdue" | "almost due" | "on-track";

export type InteractionType = "call" | "text" | "video" | "meetup";

export interface Friend {
  id: number;
  name: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: FriendStatus;
  tags: string[];
  bio: string;
  goal: number;
  next_due_date: string;
  preferred_contact: string;
}

export interface TimelineEntry {
  id: number;
  friendId: number;
  friendName: string;
  type: InteractionType;
  title: string;
  date: string;
}

export interface FriendsData {
  friends: Friend[];
  timeline: TimelineEntry[];
}
