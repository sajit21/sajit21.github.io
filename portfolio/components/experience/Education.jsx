import { Calendar, GraduationCap } from "lucide-react";
import { education } from "./experience-data";

export default function Education() {
  return (
    <ol className="relative space-y-6 pl-12 before:absolute before:bottom-4 before:left-[9px] before:top-4 before:w-px before:bg-brand/20">
      {education.map((item) => (
        <li key={item.degree} className="relative">
          <span className="absolute -left-12 top-6 flex h-5 w-5 items-center justify-center rounded-full border border-brand/40 bg-white">
            <GraduationCap className="h-3 w-3 text-brand-soft" />
          </span>

          <article className="rounded-xl border border-slate-200 bg-white/70 p-6 transition-colors duration-200 hover:border-brand/40">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-slate-900">{item.degree}</h3>
                <p className="text-sm text-slate-700">{item.school}</p>
                {item.university && <p className="text-xs text-slate-700">{item.university}</p>}
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/60 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                <Calendar className="h-3 w-3 text-accent-soft" />
                {item.period}
              </span>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
