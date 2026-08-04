"use client";

import { useState } from "react";
import { Briefcase, FolderGit2, GraduationCap } from "lucide-react";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";

const tabs = [
  { id: "work", label: "Work Experience", shortLabel: "Work", icon: Briefcase },
  { id: "projects", label: "Projects", shortLabel: "Projects", icon: FolderGit2 },
  { id: "education", label: "Education", shortLabel: "Education", icon: GraduationCap },
];

export default function ExperienceSelector() {
  const [active, setActive] = useState("work");

  return (
    <div className="space-y-8">
      <div
        role="tablist"
        aria-label="Select experience section"
        className="mx-auto grid w-full max-w-md grid-cols-3 gap-1 rounded-xl border border-zinc-800 bg-zinc-900/70 p-1.5"
      >
        {tabs.map(({ id, label, shortLabel, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              id={`tab-${id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              onClick={() => setActive(id)}
              className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 sm:gap-2 sm:px-3 sm:text-sm ${
                isActive
                  ? "bg-zinc-100 text-zinc-900 shadow-sm"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{shortLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="animate-slide-up"
      >
        {active === "work" && <WorkExperience />}
        {active === "projects" && <Projects />}
        {active === "education" && <Education />}
      </div>
    </div>
  );
}
