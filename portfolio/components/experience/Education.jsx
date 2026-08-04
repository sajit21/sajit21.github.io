import { Calendar, GraduationCap } from "lucide-react";
import { education } from "./experience-data";

export default function Education() {
  return (
    <ol className="relative space-y-6 pl-12 before:absolute before:bottom-4 before:left-[9px] before:top-4 before:w-px before:bg-zinc-800">
      {education.map((item) => (
        <li key={item.degree} className="relative">
          <span className="absolute -left-12 top-6 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
            <GraduationCap className="h-3 w-3 text-zinc-400" />
          </span>

          <article className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-200 hover:border-zinc-700">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-zinc-100">{item.degree}</h3>
                <p className="text-sm text-zinc-400">{item.school}</p>
                {item.university && <p className="text-xs text-zinc-500">{item.university}</p>}
              </div>
             <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-300">
  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
  {item.period}
</span>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
