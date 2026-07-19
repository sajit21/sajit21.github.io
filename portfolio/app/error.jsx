"use client";

import Button from "@/components/ui/button";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
      <p className="text-6xl font-bold text-zinc-800">!</p>
      <h1 className="text-xl font-semibold text-zinc-100">Something went wrong</h1>
      <p className="max-w-sm text-sm text-zinc-500">
        An unexpected error occurred. Please try again.
      </p>
      <Button onClick={reset} variant="outline">
        Try again
      </Button>
    </div>
  );
}
