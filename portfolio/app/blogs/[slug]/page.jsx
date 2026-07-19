import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost, getAllBlogSlugs } from "@/lib/blog";
import { generateBlogPostMetadata } from "@/lib/metadata";
import { renderMDX } from "@/lib/mdx";
import Container from "@/components/layout/container";
import Badge from "@/components/ui/badge";
import TableOfContents from "@/components/blogs/table-of-contents";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return generateBlogPostMetadata(post);
}

function extractHeadings(content) {
  const headingRegex = /^#{2,3}\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const level = match[0].indexOf(" ");
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s]+/g, "-");

    headings.push({ id, text, level: level <= 3 ? 2 : 3 });
  }

  return headings;
}

export default async function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const content = await renderMDX(post.content);

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_200px]">
          <div>
            <header className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>&middot;</span>
                <span>{post.readingTime}</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                {post.title}
              </h1>

              {post.description && (
                <p className="text-base text-zinc-400">{post.description}</p>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </header>

            <div className="prose prose-invert prose-zinc max-w-none prose-headings:scroll-mt-20">
              {content}
            </div>
          </div>

          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          )}
        </div>
      </Container>
    </article>
  );
}
