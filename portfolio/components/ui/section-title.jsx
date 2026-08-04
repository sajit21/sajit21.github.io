export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`space-y-1 ${className}`}>
      <h2 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="text-sm text-slate-700">{subtitle}</p>}
    </div>
  );
}
