"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types";
import Image from "next/image";

const testimonials: Testimonial[] = [
  {
    quote: "Implementar la IA en nuestra captación cambió las reglas del juego. Ahora los leads llegan filtrados y listos para comprar.",
    name: "Yasmina Galeano",
    role: "CEO Sector Inmobiliario",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOf6CejiE-609mfmLEIBqPVwir92mbQJYh9sQO04B-O1Xyanm9fvqYe4-xNnQpia835Zs6ufpVWIz09BDofjwhQxCfB4-GHrWviqVZcTBTYpsHHt9gIQ9M-mOSp6TVV_nlqRRQPQPYAcruOMc1I7SCHf5u1P1WsvzgluquzkQUBbaLLUzoO87itcrGNOMzbzl02o2JD1AzFw_QiXm2h0rFsGYS6m_fnQfuFlAzTJNXxNYvVp2UIn_DwPE_nTAobYzebLZxkSTXcTlc"
  },
  {
    quote: "Andrés no solo sabe de marketing, entiende de negocios. Su Método CRACS es la pieza que le faltaba a mi clínica.",
    name: "Dr. Davidson Osorio",
    role: "Especialista Médico",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPUo9wLBC8DB1VSlKJwUpuJWEu9tffOZYvR4lkUNdbedON4pucz1yLxKXVRRpU1VXVrlmwPiXD4zLNV6btFVXMosnsgodnHgjQuOZiH9tQRbNeUFuoZORXhwbclAQwTgkjY27n2K_IH5Rt2zNawGMF4gvcaFkei38hdAmCi4LONlRkHLDVthx98r_0HCCs6VLAasTFXn4JTuiabNFaw1H_dlknic5kYoWBxbhc6KLZBMDjz_ucnLn1xYvt3l26EYrxrGRyxK8twB-b"
  },
  {
    quote: "El posicionamiento en ChatGPT nos trajo clientes internacionales que antes ni nos veían. Totalmente recomendado.",
    name: "Silvia Lopera",
    role: "Fundadora Tech Startup",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2PSyiIOgYeosGRAS9Hj4CkFkq4LRAmWXtJEdzhLQ2uvgizPSWa2lUCBbtPKdUOgvFO_dgfLlmznnGPqvzm7HQ2Efq8TNvyqbyUuUKoirQCelmilQLAbpNsDba-7qY51ai9PdRPJcp3vjD1myQ3bxR6bwXQcKlkZZJpeuU0HKbP0-Ks2Q8ezVXsSSqf37y4AABuRlUlj_qHbnI95L_rF8xYnwVfHxFTwsKkEJ5TxGHfWncd-Tdeye8KWs-1mMGuUkRx-YyHqCyGf0O"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 font-headline tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Casos de Éxito Reales
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl soft-shadow border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary text-sm font-black">star</span>
                ))}
              </div>
              <p className="text-on-surface mb-10 text-lg leading-relaxed italic flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale">
                  <Image
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    src={testimonial.avatarUrl!}
                  />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-tight">{testimonial.name}</p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
