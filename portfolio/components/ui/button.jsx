export default function Button({ children, variant = "default", href, className = "", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  const variants = {
    default: "bg-brand text-slate-950 hover:bg-brand-deep",
    outline: "border border-slate-300 text-slate-800 hover:bg-slate-200 hover:text-slate-900",
    ghost: "text-slate-700 hover:bg-slate-200 hover:text-slate-900",
    link: "text-brand-deep underline-offset-4 hover:underline hover:text-brand",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
