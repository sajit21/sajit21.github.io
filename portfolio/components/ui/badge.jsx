export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-300 bg-white/60 px-2.5 py-0.5 text-xs font-medium text-slate-800 ${className}`}
    >
      {children}
    </span>
  );
}
