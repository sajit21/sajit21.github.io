import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime } from "./reading-time";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export function getAllBlogPosts() {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOGS_DIR).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOGS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      readingTime: calculateReadingTime(content),
      draft: data.draft || false,
    };
  });

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug) {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
    content,
  };
}

export function getAllBlogSlugs() {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
