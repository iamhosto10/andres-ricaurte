"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-container/10"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="bg-surface-container-high rounded-2xl border border-primary/20 overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-2 primary-gradient p-12 flex flex-col justify-center">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-primary-container mb-6">
              Implementemos un Sistema de ventas que te haga destacar.
            </h2>
            <p className="text-on-primary-container/80 mb-8 font-body leading-relaxed text-lg">
              Hablemos de Oportunidades. Trabajemos juntos para escalar tu
              facturación con IA.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-primary-container font-semibold">
                <CheckCircle2 className="text-primary-fixed text-3xl" />
                Diagnóstico de Ventas IA
              </li>
              <li className="flex items-center gap-3 text-on-primary-container font-semibold">
                <CheckCircle2 className="text-primary-fixed text-3xl" />
                Estrategia de Posicionamiento
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 p-12 bg-surface-container-highest">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1"
                  >
                    Nombre Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full bg-surface-container border-none focus:ring-0 border-b border-outline-variant/30 focus:border-primary transition-all p-4 text-on-surface rounded-none outline-none"
                    placeholder="Tu nombre"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="w-full bg-surface-container border-none focus:ring-0 border-b border-outline-variant/30 focus:border-primary transition-all p-4 text-on-surface rounded-none outline-none"
                    placeholder="email@empresa.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="industry"
                  className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1"
                >
                  Tipo de Negocio / Industria
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full bg-surface-container border-none focus:ring-0 border-b border-outline-variant/30 focus:border-primary transition-all p-4 text-on-surface rounded-none appearance-none outline-none"
                >
                  <option>Servicios / Consultoría</option>
                  <option>E-commerce / Retail</option>
                  <option>Inmobiliaria</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="pt-4">
                <button
                  className="w-full primary-gradient text-on-primary-container px-8 py-5 rounded-md font-headline font-bold text-lg hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-primary/10"
                  type="submit"
                >
                  Contactar Ahora
                </button>
              </div>
              <p className="text-center text-xs text-on-surface-variant">
                Disponibilidad limitada para ciclos de consultoría mensual.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
