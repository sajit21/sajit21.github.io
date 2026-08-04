import { Briefcase, Calendar } from "lucide-react";
import { workExperience } from "./experience-data";

export default function WorkExperience() {
  return (
    <div className="space-y-6">
      {workExperience.map((job) => (
        <article
          key={job.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-200 hover:border-zinc-700"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-zinc-100">{job.role}</h3>
              <p className="flex items-center gap-1.5 text-sm text-zinc-400">
                <Briefcase className="h-3.5 w-3.5 shrink-0" />
                {job.company}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
              <Calendar className="h-3 w-3" />
              {job.period}
            </span>
          </div>

          <ul className="mt-5 space-y-2.5">
            {job.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
