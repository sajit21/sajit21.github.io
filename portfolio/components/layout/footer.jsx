import Container from "./container";
import site from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50">
      <Container>
        <div className="flex items-center justify-between py-6">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with Next.js 
            {/* &amp; Tailwind CSS */}
          </p>
        </div>
      </Container>
    </footer>
  );
}
