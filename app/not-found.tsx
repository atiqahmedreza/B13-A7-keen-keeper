import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <p className="mt-2 max-w-md text-gray-500">
        Looks like this friendship path doesn&apos;t exist. Let&apos;s get you
        back to your friends.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-emerald-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
