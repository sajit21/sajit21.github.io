import { generateContactsMetadata } from "@/lib/metadata";
import Container from "@/components/layout/container";
import ContactList from "@/components/contacts/contact-list";

export const metadata = generateContactsMetadata();

export default function ContactsPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-lg space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Contact
            </h1>
            <p className="text-sm text-slate-700">
              Feel free to reach out through any of these platforms. I&apos;m always happy to
              connect.
            </p>
          </div>

          <ContactList />
        </div>
      </Container>
    </section>
  );
}
