export default function Button({ children, variant = "default", href, className = "", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900";

  const variants = {
    default: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    outline: "border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100",
    ghost: "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100",
    link: "text-zinc-400 underline-offset-4 hover:underline hover:text-zinc-100",
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
