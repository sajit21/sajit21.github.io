import { MDXComponents } from "@/components/blogs/mdx-components";

export function useMDXComponents(components) {
  return {
    ...MDXComponents,
    ...components,
  };
}
