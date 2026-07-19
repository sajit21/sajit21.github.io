import { getAllBlogPosts } from "@/lib/blog";
import site from "@/config/site";

export default function sitemap() {
  const posts = getAllBlogPosts();

  const blogEntries = posts.map((post) => ({
    url: `${site.url}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/contacts`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...staticPages, ...blogEntries];
}
