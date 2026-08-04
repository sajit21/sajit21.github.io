// import {
//   Server,
//   Container,
//   GitBranch,
//   Terminal,
//   Cloud,
//   Shield,
//   Database,
//   Monitor,
//   Network
// } from "lucide-react";
import Image from "next/image";

const technologies = [
  { name: "Kubernetes", icon: "/images/icons/kubernetes.svg", category: "Orchestration" },
  { name: "Docker", icon: "/images/icons/docker.svg", category: "Containerization" },
  { name: "CI/CD Pipelines", icon: "/images/icons/githubactions.svg", category: "Automation" },
  { name: "Ansible", icon: "/images/icons/ansible.svg", category: "Configuration" },
  { name: "Proxmox", icon: "/images/icons/proxmox.svg", category: "Virtualization" },
  { name: "Linux", icon: "/images/icons/linux.svg", category: "Operating System" },
  { name: "Networking", icon: "/images/icons/network.svg", category: "infrastructure" },
  { name: "Monitoring", icon: "/images/icons/grafana.svg", category: "Observability" },
];

export default function TechStack() {
  return (
    <section className="border-t border-slate-200/80 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Technology Stack
          </h2>
          <p className="text-sm text-slate-700">Tools and platforms I work with daily</p>
        </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
  {technologies.map((tech) => (
    <div
      key={tech.name}
      className="group flex items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-5 transition-all duration-200 hover:border-brand/40 hover:bg-slate-200/50"
    >
      <Image
        src={tech.icon}
        alt={tech.name}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
      />

      <div className="text-left">
        <p className="text-sm font-semibold text-slate-900">
          {tech.name}
        </p>
        <p className="mt-0.5 text-xs text-slate-700">
          {tech.category}
        </p>
      </div>
    </div>
  ))}
</div>

       
      </div>
    </section>
  );
}
