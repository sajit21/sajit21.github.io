import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { MDXComponents } from "@/components/blogs/mdx-components";

export async function renderMDX(source) {
  return (
    <MDXRemote
      source={source}
      components={MDXComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug],
        },
      }}
    />
  );
}
