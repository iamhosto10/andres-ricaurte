"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { Rocket, User, Verified } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    quote:
      '"Tiene una manera muy clara de enseñar lo que facilita la comprensión y aplicación inmediata de sus metodologías. Gracias a su efectividad, hemos logrado atraer más seguidores y posicionar mejor la empresa."',
    name: "Daniela Vélez",
    role: "Ventas Hotel Vajamar - Valledupar",
    avatarUrl:
      "https://andresricaurte.com/wp-content/uploads/2025/09/Clientes-Web-Andres-Ricaurte-Daniela-Velez-1024x1024.png",
  },
  {
    quote:
      '"Implementar el sistema de ventas con IA cambió las reglas del juego. Nuestro tiempo de respuesta bajó drásticamente y la conversión aumentó en un 32% en el primer trimestre."',
    name: "Cliente Destacado",
    role: "Sector Inmobiliario",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4 block">
              Descubre cómo algunos de mis clientes cuentan sus
            </span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">
              Experiencias de éxito
            </h2>
          </motion.div>
          <motion.div
            className="flex gap-8 items-center opacity-40"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Verified className="text-primary text-4xl" />
            <Rocket className="text-primary text-4xl" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="space-y-6 p-10 rounded-xl bg-surface-container border border-outline-variant/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <p className="font-body text-xl italic text-on-surface leading-relaxed">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden relative flex items-center justify-center">
          <User className="text-on-surface-variant text-2xl" />
        </div>
        <div>
          <span className="block font-bold text-on-surface">
            {testimonial.name}
          </span>
          <span className="text-xs text-on-surface-variant uppercase tracking-widest">
            {testimonial.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
