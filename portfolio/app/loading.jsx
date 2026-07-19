export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 animate-pulse rounded-full bg-zinc-500" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-zinc-500 [animation-delay:150ms]" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-zinc-500 [animation-delay:300ms]" />
      </div>
    </div>
  );
}
