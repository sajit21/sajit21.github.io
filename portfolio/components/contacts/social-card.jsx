import { ExternalLink } from "lucide-react";

export default function SocialCard({ link }) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-slate-200/50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/60 transition-colors group-hover:bg-slate-200">
        <Icon className="h-5 w-5 text-slate-700 transition-colors group-hover:text-slate-900" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900">{link.name}</p>
        <p className="truncate text-xs text-slate-700">{link.username}</p>
      </div>

      <ExternalLink className="h-4 w-4 text-slate-700 transition-colors group-hover:text-slate-700" />
    </a>
  );
}
