export default function BlogsLoading() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="h-8 w-32 animate-pulse rounded bg-zinc-800" />
          <div className="h-4 w-64 animate-pulse rounded bg-zinc-800" />
          <div className="mt-8 space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/50" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
