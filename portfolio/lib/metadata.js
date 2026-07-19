import { generateSiteMetadata } from "./seo";

export function generateHomeMetadata() {
  return generateSiteMetadata({
    title: "Sajit Maharjan — DevOps Engineer & Infrastructure Architect",
    description:
      "Portfolio of Sajit Maharjan, a Computer Science graduate and DevOps Engineer specializing in CI/CD pipelines, Kubernetes, Docker, and bare-metal Proxmox clusters.",
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://sajitmaharjan.com.np",
  });
}

export function generateBlogMetadata() {
  return generateSiteMetadata({
    title: "Blogs — Sajit Maharjan",
    description:
      "Technical articles on DevOps, Kubernetes, infrastructure automation, and cloud-native engineering by Sajit Maharjan.",
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sajitmaharjan.com.np"}/blogs`,
  });
}

export function generateBlogPostMetadata(post) {
  return generateSiteMetadata({
    title: `${post.title} — Sajit Maharjan`,
    description: post.description,
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sajitmaharjan.com.np"}/blogs/${post.slug}`,
  });
}

export function generateContactsMetadata() {
  return generateSiteMetadata({
    title: "Contact — Sajit Maharjan",
    description:
      "Get in touch with Sajit Maharjan on LinkedIn, GitHub, Medium, or via email.",
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sajitmaharjan.com.np"}/contacts`,
  });
}

export function generateNotFoundMetadata() {
  return generateSiteMetadata({
    title: "Page Not Found — Sajit Maharjan",
    description: "The page you are looking for does not exist.",
  });
}
