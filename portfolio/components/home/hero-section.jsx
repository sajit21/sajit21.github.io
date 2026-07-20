import Container from "@/components/layout/container";
    import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start lg:gap-16">
          <div className="space-y-6 lg:col-span-3">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Sajit Maharjan
              </h1>
              <p className="text-base font-medium text-zinc-400">
                DevOps Engineer
              </p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
              <p>
                I&apos;m a Computer Science graduate currently working as a DevOps Engineer. I specialize
                in scaling applications, architecting infrastructure, and securing deployments across
                distributed systems.
              </p>
              <p>
                My daily toolkit includes CI/CD pipelines, Kubernetes, Docker, containerization,
                Ansible, and building  Proxmox clusters. I&apos;m passionate about automation,
                reliability engineering, and making complex systems simple and observable.
              </p>
              <p>
                I believe in building infrastructure that is not only performant but also maintainable
                and well-documented. Every deployment should be repeatable, every failure should be
                traceable, and every system should be self-healing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">
                Kubernetes
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">
                Docker
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">
                CI/CD
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">
                Ansible
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">
                Proxmox
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">
                Linux
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-2 lg:justify-end">
            <ProfileCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProfileCard() {
  return (
    // <div className="relative w-64 sm:w-72">
    //   <div className="aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/20">
    //     <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
    //       <span className="text-4xl font-bold text-zinc-600">SM</span>
    //     </div>
    //   </div>
    //   <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-500" />
    // </div>


<div className="relative w-64 sm:w-72">
  <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/20">
    <Image
      src="/images/image.jpeg"
      alt="Profile"
      fill
      priority
      className="object-cover"
    />
  </div>

  <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-500" />
</div>
  );
}
