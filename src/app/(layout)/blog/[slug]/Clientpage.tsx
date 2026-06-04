"use client";

import { Blog } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import AudioPlayer from "@/components/MusicPlayer/MusicPlayer";
import News from "@/components/News/News";
import { PortableText } from "@portabletext/react";
import { components } from "@/lib/utils";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

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

const imageZoomVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BlogArticle({ post }: { post: Blog }) {
  const data = post;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article className="min-h-screen bg-surface overflow-hidden">
      {/* Hero Section del Blog */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glow de fondo ultramoderno */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={fadeUpVariants}
              className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest font-label"
            >
              {new Date(
                data?.publishedAt ? data?.publishedAt?.slice(0, 10) : "",
              ).toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-6xl font-extrabold text-on-surface leading-[1.1] mb-10 font-headline tracking-tight max-w-4xl"
            >
              {data?.title}{" "}
              <span className="text-primary">{data?.focusTitle}</span>{" "}
              {data?.continueTitle}
            </motion.h1>

            {data?.mainImage && (
              <motion.div
                variants={imageZoomVariants}
                className="relative w-full aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl border border-primary/10"
              >
                <img
                  src={urlFor(data.mainImage).url()}
                  alt={`${data?.title || ""} ${data?.focusTitle || ""}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager"
                />
                {/* Viñeta para darle un look cinemático */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Contenido del Blog */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        {data?.audio?.asset.url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <AudioPlayer audioUrl={data?.audio?.asset.url} />
          </motion.div>
        )}

        <div className="space-y-12">
          {data?.body &&
            data.body.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {section.title && (
                  <h2 className="font-agrandir font-bold text-on-surface text-2xl md:text-3xl mb-6 tracking-tight">
                    {section.title}
                  </h2>
                )}

                {section.body && (
                  <div className="text-lg md:text-xl text-secondary font-canva-sans leading-relaxed mb-8">
                    <PortableText
                      value={section.body}
                      components={components}
                    />
                  </div>
                )}

                {section.table && (
                  <div className="w-full my-10 bg-surface-container/30 backdrop-blur-md border border-primary/10 rounded-2xl shadow-soft-xl overflow-hidden">
                    <table className="w-full border-collapse hidden md:table text-left">
                      <thead className="bg-primary/5 border-b border-primary/10">
                        <tr>
                          {section.table.rows[0]?.cells.map((cell, i) => (
                            <th
                              key={i}
                              className="px-6 py-4 font-agrandir font-bold text-on-surface text-sm uppercase tracking-wider"
                            >
                              {cell}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-primary/5">
                        {section.table.rows.slice(1).map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className="hover:bg-primary/5 transition-colors"
                          >
                            {row.cells.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-6 py-4 text-secondary font-canva-sans text-base"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Vista Móvil Tarjetas */}
                    <div className="md:hidden space-y-4 p-4 bg-surface/50">
                      {section.table.rows.slice(1).map((row, rowIndex) => (
                        <div
                          key={rowIndex}
                          className="rounded-xl border border-primary/10 bg-white/50 p-5 shadow-sm space-y-3"
                        >
                          {row.cells.map((cell, cellIndex) => (
                            <div key={cellIndex} className="flex flex-col">
                              <span className="text-xs uppercase tracking-wide text-primary font-bold mb-1">
                                {section.table?.rows[0]?.cells[cellIndex]}
                              </span>
                              <span className="text-sm text-secondary font-canva-sans">
                                {cell}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.asset && section.asset._type === "image" && (
                  <div className="relative w-full my-10 aspect-video overflow-hidden rounded-2xl shadow-lg border border-primary/5">
                    <img
                      src={urlFor(section.asset).url()}
                      alt={`${data?.title || ""} - Imagen de sección`}
                      className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            ))}
        </div>
      </div>

      {/* Noticias Relacionadas con reveal */}
      {data?.relatedNews && data.relatedNews.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-container py-20 border-t border-primary/10"
        >
          <div className="container mx-auto px-4">
            <News title="Artículos relacionados" data={data?.relatedNews} />
          </div>
        </motion.div>
      )}
    </article>
  );
}
