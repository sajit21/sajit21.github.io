import BlogCard from "./blog-card";

export default function BlogList({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm text-zinc-500">No blog posts yet. Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
