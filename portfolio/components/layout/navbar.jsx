"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import navigation from "@/config/navigation";
import Container from "./container";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-zinc-300"
          >
            Sajit Maharjan
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            {navigation.main.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-zinc-100"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 sm:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md sm:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-3">
              {navigation.main.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-zinc-800 text-zinc-100"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
