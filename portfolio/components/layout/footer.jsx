import Container from "./container";
import site from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80">
      <Container>
        <div className="flex items-center justify-between py-6">
          <p className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built with Next.js 
            {/* &amp; Tailwind CSS */}
          </p>
        </div>
      </Container>
    </footer>
  );
}
