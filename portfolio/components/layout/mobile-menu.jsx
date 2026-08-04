"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import navigation from "@/config/navigation";

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-surface/95 backdrop-blur-sm sm:hidden">
      <div className="flex h-14 items-center justify-between px-4">
        <span className="text-sm font-semibold text-slate-900">Menu</span>
        <button
          onClick={onClose}
          className="rounded-md p-2 text-slate-700 hover:text-slate-900"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex flex-col gap-1 px-4 py-4">
        {navigation.main.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 hover:text-slate-900"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
