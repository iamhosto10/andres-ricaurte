"use client";

import { motion } from "framer-motion";

export default function CourseSection() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-16 font-headline text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Aprende a tu ritmo
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="bg-white rounded-3xl overflow-hidden soft-shadow hover:-translate-y-2 transition-all border border-slate-100 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="h-56 bg-slate-900 flex items-center justify-center p-8">
              <h3 className="text-3xl font-black text-white text-center leading-tight tracking-tight">
                Marketing Político 6.0
              </h3>
            </div>
            <div className="p-10 flex-grow">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary font-black" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <span className="text-xs font-extrabold text-primary uppercase tracking-[0.15em]">Bestseller</span>
              </div>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                Domina las campañas electorales con segmentación psicográfica y herramientas de IA.
              </p>
              <button className="w-full py-4 bg-slate-50 text-slate-900 font-extrabold rounded-xl hover:bg-slate-100 transition-colors tracking-tight">
                Ver Detalles
              </button>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl overflow-hidden soft-shadow hover:-translate-y-2 transition-all border border-slate-100 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-56 bg-slate-800 flex items-center justify-center p-8">
              <h3 className="text-3xl font-black text-white text-center leading-tight tracking-tight">
                Posicionamiento (ChatGPT)
              </h3>
            </div>
            <div className="p-10 flex-grow">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary font-black">psychology</span>
                <span className="text-xs font-extrabold text-primary uppercase tracking-[0.15em]">Nuevo</span>
              </div>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                Haz que la IA recomiende tu marca. SEO para buscadores conversacionales.
              </p>
              <button className="w-full py-4 bg-slate-50 text-slate-900 font-extrabold rounded-xl hover:bg-slate-100 transition-colors tracking-tight">
                Ver Detalles
              </button>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl overflow-hidden soft-shadow hover:-translate-y-2 transition-all border border-slate-100 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-56 primary-gradient flex items-center justify-center p-8">
              <h3 className="text-3xl font-black text-white text-center leading-tight tracking-tight">
                Vende Más en Navidad
              </h3>
            </div>
            <div className="p-10 flex-grow">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary font-black">calendar_month</span>
                <span className="text-xs font-extrabold text-primary uppercase tracking-[0.15em]">Temporal</span>
              </div>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                Estrategias de alto impacto para maximizar las ventas en la temporada más importante.
              </p>
              <button className="w-full py-4 bg-slate-50 text-slate-900 font-extrabold rounded-xl hover:bg-slate-100 transition-colors tracking-tight">
                Ver Detalles
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
