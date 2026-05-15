"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as React from "react";

interface ServiceDetail {
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
}

const servicesData: ServiceDetail[] = [
  {
    slug: "sistema-de-ventas",
    icon: (
      <span className="material-symbols-outlined text-primary text-4xl">
        dynamic_feed
      </span>
    ),
    title: "Sistema de Ventas con IA",
    description:
      "Automatizamos tu embudo de conversión desde la captación hasta el cierre utilizando agentes de Inteligencia Artificial que trabajan por ti 24/7 sin perder la naturalidad humana.",
    bullets: [
      "Agentes de Inteligencia Artificial 24/7.",
      "Calificación automática de leads entrantes.",
      "Integración fluida con tu ecosistema y CRM.",
    ],
  },
  {
    slug: "consultoria",
    icon: (
      <span className="material-symbols-outlined text-primary text-4xl">
        person_search
      </span>
    ),
    title: "Consultoría Estratégica 1:1",
    description:
      "Mentoría y acompañamiento directo enfocado en implementar el Método CRACS. Ajustamos tu modelo de negocio para lograr un escalamiento rápido, predecible y sostenible.",
    bullets: [
      "Diagnóstico profundo del estado de tu negocio.",
      "Implementación guiada del Método CRACS.",
      "Acompañamiento personalizado paso a paso.",
    ],
  },
  {
    slug: "reputacion-digital",
    icon: (
      <span className="material-symbols-outlined text-primary text-4xl">
        stars
      </span>
    ),
    title: "Reputación Digital (SEO & IA)",
    description:
      "Estrategias avanzadas de posicionamiento para dominar tanto los buscadores tradicionales (Google) como los nuevos buscadores conversacionales (ChatGPT, Perplexity).",
    bullets: [
      "Posicionamiento en ChatGPT y Perplexity.",
      "Estrategias de SEO tradicionales actualizadas.",
      "Construcción de autoridad en tu sector.",
    ],
  },
  {
    slug: "capacitaciones",
    icon: (
      <span className="material-symbols-outlined text-primary text-4xl">
        co_present
      </span>
    ),
    title: "Capacitaciones a Equipos",
    description:
      "Sesiones y mentorías grupales diseñadas para que empresarios y sus equipos adopten nuevas tecnologías, optimicen sus procesos internos y apliquen el Método MASPro.",
    bullets: [
      "Entrenamiento intensivo en Método MASPro.",
      "Adopción ágil de herramientas de IA.",
      "Alineación y optimización de procesos internos.",
    ],
  },
  {
    slug: "whatsapp-marketing",
    icon: (
      <span className="material-symbols-outlined text-primary text-4xl">
        chat
      </span>
    ),
    title: "WhatsApp Marketing",
    description:
      "Convierte conversaciones en contratos reales. Aplicamos tácticas de persuasión masiva y automatización en aplicaciones de mensajería para multiplicar tus cierres diarios.",
    bullets: [
      "Flujos de persuasión conversacional validados.",
      "Seguimiento automatizado y efectivo.",
      "Aumento directo en la tasa de cierre en chats.",
    ],
  },
  {
    slug: "redes-sociales",
    icon: (
      <span className="material-symbols-outlined text-primary text-4xl">
        campaign
      </span>
    ),
    title: "Gestión de Redes Sociales & Ads",
    description:
      "Generación constante de prospectos cualificados a través de campañas digitales estratégicas y visibilidad inteligente, sin depender de la viralidad vacía (bailes o likes).",
    bullets: [
      "Campañas de Ads hiper-segmentadas.",
      "Creación de contenido enfocado en conversión.",
      "Generación predecible y constante de leads.",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface mb-6 font-headline tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Soluciones Estratégicas para{" "}
            <span className="text-primary">Escalar tu Facturación</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-500 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sistemas diseñados para empresas que buscan integrar Inteligencia
            Artificial, automatizar procesos y multiplicar sus ventas sin perder
            su esencia humana.
          </motion.p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] soft-shadow border border-slate-100 flex flex-col h-full hover:border-primary/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 shrink-0">
                {service.icon}
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-on-surface tracking-tight">
                {service.title}
              </h2>

              <p className="text-slate-500 text-base leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-slate-700 font-medium text-sm leading-tight">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/servicios/${service.slug}`}
                className="block mt-auto w-full"
              >
                <button className="w-full py-4 bg-slate-50 text-slate-900 font-extrabold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 tracking-tight text-center">
                  Ver Detalles
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
