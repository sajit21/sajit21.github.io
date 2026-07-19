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
    <section className="border-t border-zinc-800/50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Technology Stack
          </h2>
          <p className="text-sm text-zinc-400">Tools and platforms I work with daily</p>
        </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
  {technologies.map((tech) => (
    <div
      key={tech.name}
      className="group flex items-center justify-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors duration-200 hover:border-zinc-700 hover:bg-zinc-800/50"
    >
      <Image
        src={tech.icon}
        alt={tech.name}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
      />

      <div className="text-left">
        <p className="text-sm font-semibold text-zinc-200">
          {tech.name}
        </p>
        <p className="mt-0.5 text-xs text-zinc-500">
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
