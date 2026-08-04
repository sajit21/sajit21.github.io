import Link from "next/link";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
      <p className="text-6xl font-bold text-slate-900">404</p>
      <h1 className="text-xl font-semibold text-slate-900">Page not found</h1>
      <p className="max-w-sm text-sm text-slate-700">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button href="/" variant="outline">
        Back to home
      </Button>
    </div>
  );
}
