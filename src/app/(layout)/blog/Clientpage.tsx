"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/sanity";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ClientBlogPage({ posts }: { posts: any[] }) {
  return (
    <div className="min-h-screen bg-surface overflow-hidden pt-32 pb-32">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        {/* Efecto de luces (Glow) de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-3xl mx-auto space-y-6"
        >
          <motion.div variants={fadeUpVariants}>
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest font-label">
              Recursos y Estrategias
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1] font-headline"
          >
            Nuestro <span className="text-primary">Blog</span>
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-secondary leading-relaxed font-canva-sans max-w-2xl mx-auto mt-6"
          >
            Descubre artículos, guías y casos de estudio para escalar tu
            facturación de forma predecible combinando IA y marketing
            estratégico.
          </motion.p>
        </motion.div>
      </div>

      {/* Grid de Artículos */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {posts?.map((post) => (
            <motion.div
              key={post?.slug?.current}
              variants={fadeUpVariants}
              className="h-full"
            >
              <Link
                href={`/blog/${post?.slug?.current}`}
                className="block h-full group outline-none"
              >
                <article className="flex flex-col h-full bg-surface/50 backdrop-blur-md border border-primary/10 p-5 rounded-[2rem] shadow-soft-xl hover:shadow-2xl hover:bg-surface-container/40 transition-all duration-500">
                  {/* Imagen de Portada */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-primary/5">
                    {post?.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post?.title || "Portada de artículo"}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                        <span className="text-secondary/50 font-medium">
                          Sin imagen
                        </span>
                      </div>
                    )}
                    {/* Viñeta sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col flex-grow">
                    <div className="inline-block bg-primary/5 text-primary px-3 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest self-start font-label">
                      {new Date(post?.publishedAt || "").toLocaleDateString(
                        "es-ES",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-on-surface font-agrandir leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-3">
                      {post?.title}{" "}
                      {post?.focusTitle && (
                        <span className="text-primary">{post.focusTitle}</span>
                      )}{" "}
                      {post?.continueTitle}
                    </h2>

                    <p className="text-secondary font-canva-sans text-sm md:text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
                      {post?.excerpt ||
                        "Descubre más sobre este tema ingresando al artículo completo."}
                    </p>

                    {/* Botón de acción */}
                    <div className="flex items-center text-primary font-bold text-sm uppercase tracking-widest group/btn mt-auto font-label">
                      Leer artículo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
