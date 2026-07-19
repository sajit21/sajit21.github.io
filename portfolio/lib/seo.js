import site from "@/config/site";

export function generateSiteMetadata(overrides = {}) {
  return {
    title: overrides.title || site.title,
    description: overrides.description || site.description,
    authors: [{ name: site.author }],
    creator: site.author,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: overrides.canonical || site.url,
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: overrides.canonical || site.url,
      title: overrides.title || site.title,
      description: overrides.description || site.description,
      siteName: site.name,
      images: [
        {
          url: overrides.ogImage || site.ogImage,
          width: 1200,
          height: 630,
          alt: site.author,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: overrides.title || site.title,
      description: overrides.description || site.description,
      images: [overrides.ogImage || site.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
