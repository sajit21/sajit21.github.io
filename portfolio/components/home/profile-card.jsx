import { MapPin, Briefcase } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/20">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <span className="text-5xl font-bold text-zinc-600">SM</span>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-500" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Briefcase className="h-4 w-4" />
          <span>DevOps Engineer</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <MapPin className="h-4 w-4" />
          <span>Kathmandu, Nepal</span>
        </div>
      </div>
    </div>
  );
}
