import { MapPin, Briefcase } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-black/20">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
            <span className="text-5xl font-bold text-slate-700">SM</span>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full border-2 border-surface bg-brand" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <Briefcase className="h-4 w-4" />
          <span>DevOps Engineer</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <MapPin className="h-4 w-4" />
          <span>Kathmandu, Nepal</span>
        </div>
      </div>
    </div>
  );
}
