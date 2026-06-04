import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://andresricaurte.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/"], // Evita que Google indexe el CMS
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
