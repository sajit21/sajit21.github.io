"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeBlock({ children, className = "", ...props }) {
  const [copied, setCopied] = useState(false);

  const codeString =
    typeof children === "string"
      ? children
      : typeof children === "object" && children?.props?.children
        ? children.props.children
        : String(children);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  return (
    <div className="group relative my-4 overflow-hidden rounded-lg border border-slate-200 bg-white">
      {language && (
        <div className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-2">
          <span className="text-xs font-medium text-slate-700">{language}</span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-slate-700 transition-colors hover:bg-slate-200 hover:text-slate-800"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
