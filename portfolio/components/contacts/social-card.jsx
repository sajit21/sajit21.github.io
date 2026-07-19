import { ExternalLink } from "lucide-react";

export default function SocialCard({ link }) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800/50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800/50 transition-colors group-hover:bg-zinc-700">
        <Icon className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-zinc-200" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-zinc-200">{link.name}</p>
        <p className="truncate text-xs text-zinc-500">{link.username}</p>
      </div>

      <ExternalLink className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-zinc-400" />
    </a>
  );
}
