import { FolderGit2, Github, Sparkles } from "lucide-react";
import { projects } from "./experience-data";

export default function Projects() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex flex-col rounded-xl border border-slate-200 bg-white/70 p-6 transition-colors duration-200 hover:border-brand/40"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <FolderGit2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
              <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
            </div>
            {project.status && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-soft">
                <Sparkles className="h-3 w-3" />
                {project.status}
              </span>
            )}
          </div>

          <ul className="mt-4 flex-1 space-y-2.5">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white/60 px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-200 hover:border-brand/50 hover:bg-brand/10 hover:text-brand-soft"
            >
              <Github className="h-4 w-4" />
              View Code
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
