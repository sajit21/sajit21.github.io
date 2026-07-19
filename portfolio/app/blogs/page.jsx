import { getAllBlogPosts } from "@/lib/blog";
import { generateBlogMetadata } from "@/lib/metadata";
import Container from "@/components/layout/container";
import BlogList from "@/components/blogs/blog-list";

export const metadata = generateBlogMetadata();

export default function BlogsPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Blogs
            </h1>
            <p className="text-sm text-zinc-400">
              Thoughts on DevOps, infrastructure engineering, and building reliable systems.
            </p>
          </div>

          <BlogList posts={posts} />
        </div>
      </Container>
    </section>
  );
}
