interface TagPillProps {
  tag: string;
}

export default function TagPill({ tag }: TagPillProps) {
  return (
    <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-900">
      {tag}
    </span>
  );
}
