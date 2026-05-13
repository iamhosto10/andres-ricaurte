import { client } from "@/lib/sanity";
import ClientBlogPage from "./Clientpage";

// Revalida el caché cada 60 segundos, puedes cambiarlo si usas otra estrategia
export const revalidate = 60;

export default async function BlogPage() {
  // Mismo query que sugeriste
  const query = `*[_type == "blog"]{
    title,
    focusTitle,
    continueTitle,
    slug,
    publishedAt,
    mainImage,
    excerpt
  } | order(publishedAt desc)`;

  const posts = await client.fetch(query);

  return <ClientBlogPage posts={posts} />;
}
