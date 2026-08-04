import { generateExperienceMetadata } from "@/lib/metadata";
import Container from "@/components/layout/container";
import ExperienceSelector from "@/components/experience/ExperienceSelector";

export const metadata = generateExperienceMetadata();

export default function ExperiencePage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        {/* <div className="mx-auto max-w-3xl space-y-8"> */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Experience
            </h1>
            <p className="text-sm text-slate-700">
              My professional background across work, projects, and education.
            </p>
          </div>

          <ExperienceSelector />
        {/* </div> */}
      </Container>
    </section>
  );
}
