import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, label: "GitHub" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">KeenKeeper</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-emerald-100 sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <p className="mt-8 text-sm font-medium text-emerald-200">Social Links</p>
        <div className="mt-3 flex justify-center gap-3">
          {socialLinks.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-800 text-white transition-colors hover:bg-emerald-700"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-emerald-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-emerald-300 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
