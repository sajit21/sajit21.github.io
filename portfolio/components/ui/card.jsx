export default function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-900/50 ${
        hover
          ? "transition-colors duration-200 hover:border-zinc-700 hover:bg-zinc-800/50"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`p-6 pb-2 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 pt-2 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`flex items-center border-t border-zinc-800 p-6 pt-4 ${className}`}>
      {children}
    </div>
  );
}
