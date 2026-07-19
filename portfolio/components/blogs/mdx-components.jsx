import CodeBlock from "./code-block";
import ImageCaption from "./image-caption";

function Heading({ level, children, ...props }) {
  const Tag = `h${level}`;
  const id = typeof children === "string"
    ? children.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s]+/g, "-")
    : "";

  const sizes = {
    1: "text-3xl font-bold tracking-tight text-zinc-100 mt-10 mb-4",
    2: "text-2xl font-semibold tracking-tight text-zinc-100 mt-10 mb-3 pb-2 border-b border-zinc-800",
    3: "text-lg font-semibold text-zinc-100 mt-8 mb-2",
    4: "text-base font-semibold text-zinc-100 mt-6 mb-2",
  };

  return (
    <Tag id={id} className={sizes[level] || sizes[2]} {...props}>
      {children}
    </Tag>
  );
}

export const MDXComponents = {
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,

  p: ({ children, ...props }) => (
    <p className="mb-4 text-sm leading-relaxed text-zinc-400" {...props}>
      {children}
    </p>
  ),

  a: ({ href, children, ...props }) => (
    <a
      href={href}
      className="text-sm font-medium text-zinc-300 underline underline-offset-4 decoration-zinc-700 transition-colors hover:text-zinc-100 hover:decoration-zinc-500"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  ul: ({ children, ...props }) => (
    <ul className="mb-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-400" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol className="mb-4 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-zinc-400" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-2 border-zinc-700 pl-4 text-sm italic text-zinc-400"
      {...props}
    >
      {children}
    </blockquote>
  ),

  pre: ({ children, ...props }) => {
    if (children?.props?.className) {
      const { className, children: code, ...rest } = children.props;
      return <CodeBlock className={className} {...rest}>{code}</CodeBlock>;
    }
    return (
      <CodeBlock>
        <pre {...props}>{children}</pre>
      </CodeBlock>
    );
  },

  code: ({ children, className, ...props }) => {
    if (className) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs font-medium text-zinc-300"
        {...props}
      >
        {children}
      </code>
    );
  },

  hr: (props) => <hr className="my-8 border-zinc-800" {...props} />,

  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-zinc-800">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }) => (
    <thead className="border-b border-zinc-800 bg-zinc-900/50" {...props}>
      {children}
    </thead>
  ),

  th: ({ children, ...props }) => (
    <th className="px-4 py-2.5 text-left text-xs font-semibold text-zinc-300" {...props}>
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td className="border-t border-zinc-800 px-4 py-2.5 text-zinc-400" {...props}>
      {children}
    </td>
  ),

  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-zinc-200" {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em className="text-zinc-300" {...props}>
      {children}
    </em>
  ),

  img: (props) => <ImageCaption {...props} />,

  Image: ImageCaption,
  CodeBlock,
};
