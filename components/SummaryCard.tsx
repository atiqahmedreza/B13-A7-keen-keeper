interface SummaryCardProps {
  value: number;
  label: string;
}

export default function SummaryCard({ value, label }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 text-center shadow-sm transition-shadow hover:shadow-md">
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}
