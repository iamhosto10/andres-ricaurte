import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client"; // Importación de tu cliente de Sanity existente

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define tu URL base de producción (idealmente usando variables de entorno)
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://andresricaurte.com";

  // 1. Definición de Rutas Estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/equipo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // 2. Obtención de Rutas Dinámicas del Blog desde Sanity
  // Ajusta el '_type == "blog"' si en tu esquema de Sanity el post usa otro nombre (ej: "post")
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogPosts = await client.fetch<{ slug: string }[]>(
      `*[_type == "blog" && defined(slug.current)] { "slug": slug.current }`,
    );
    blogRoutes = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching blog slugs for sitemap:", error);
  }

  // Combinar todas las rutas indexables
  return [...staticRoutes, ...blogRoutes];
}
