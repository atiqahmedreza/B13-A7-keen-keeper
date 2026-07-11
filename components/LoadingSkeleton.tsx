export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <div className="mx-auto h-8 w-80 rounded bg-gray-200" />
        <div className="mx-auto mt-4 h-4 w-96 max-w-full rounded bg-gray-200" />
        <div className="mx-auto mt-6 h-10 w-40 rounded-full bg-gray-200" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-24 rounded-2xl border border-gray-200 bg-white"
          />
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 h-7 w-40 rounded bg-gray-200" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-2xl border border-gray-200 bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
