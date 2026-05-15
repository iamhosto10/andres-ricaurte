"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import * as React from "react";

// Diccionario con los detalles extendidos de cada servicio
const serviceDetailsData = {
  "sistema-de-ventas": {
    title: "Sistema de Ventas con IA",
    icon: "dynamic_feed",
    subtitle: "Automatiza y escala tus conversiones",
    description:
      "Nuestro Sistema de Ventas con IA está diseñado para negocios que quieren dejar de depender del esfuerzo manual. Automatizamos tu embudo de conversión desde la captación hasta el cierre utilizando agentes de Inteligencia Artificial. Estos agentes trabajan por ti 24/7, respondiendo consultas, calificando leads y cerrando ventas, todo manteniendo una naturalidad humana que genera confianza.",
    benefits: [
      "Disponibilidad 24/7 sin costos adicionales de nómina.",
      "Respuestas instantáneas que aumentan la probabilidad de cierre.",
      "Calificación automática para que tu equipo solo hable con leads calientes.",
      "Integración perfecta con tu CRM actual y herramientas diarias.",
    ],
  },
  consultoria: {
    title: "Consultoría Estratégica 1:1",
    icon: "person_search",
    subtitle: "Mentoría enfocada en resultados predecibles",
    description:
      "A través del Método CRACS, analizamos a fondo tu modelo de negocio para detectar cuellos de botella y oportunidades de crecimiento. Esta consultoría 1:1 está pensada para empresarios que buscan un acompañamiento directo y personalizado, ajustando piezas clave en su oferta, ventas y operaciones para lograr un escalamiento rápido y sostenible.",
    benefits: [
      "Diagnóstico profundo para encontrar fugas de dinero.",
      "Implementación guiada del Método CRACS.",
      "Sesiones personalizadas adaptadas a la realidad de tu industria.",
      "Plan de acción claro y ejecutable paso a paso.",
    ],
  },
  "reputacion-digital": {
    title: "Reputación Digital (SEO & IA)",
    icon: "stars",
    subtitle: "Domina Google y los buscadores con IA",
    description:
      "El posicionamiento tradicional ha cambiado. Hoy en día, tus clientes no solo buscan en Google, sino que consultan a herramientas como ChatGPT o Perplexity. Nuestras estrategias de reputación digital aseguran que tu marca no solo aparezca, sino que sea recomendada como la autoridad principal en tu sector, fusionando SEO técnico con optimización para buscadores conversacionales.",
    benefits: [
      "Aparición destacada en motores de IA (ChatGPT, Perplexity).",
      "Aumento de autoridad de marca y confianza online.",
      "Estrategias SEO probadas y actualizadas a los nuevos algoritmos.",
      "Generación de tráfico orgánico altamente cualificado.",
    ],
  },
  capacitaciones: {
    title: "Capacitaciones a Equipos",
    icon: "co_present",
    subtitle: "Transforma a tu equipo en expertos digitales",
    description:
      "Una empresa no puede escalar si su equipo se queda atrás. Nuestras capacitaciones y mentorías grupales están diseñadas para inyectar innovación en tu talento humano. Enseñamos el Método MASPro y la adopción de herramientas de Inteligencia Artificial para optimizar procesos internos, reducir tiempos de ejecución y potenciar las habilidades comerciales de tu equipo.",
    benefits: [
      "Programas intensivos enfocados en el Método MASPro.",
      "Entrenamiento práctico en herramientas de Inteligencia Artificial.",
      "Mejora en la productividad y motivación del equipo.",
      "Alineación de objetivos comerciales y tecnológicos.",
    ],
  },
  "whatsapp-marketing": {
    title: "WhatsApp Marketing",
    icon: "chat",
    subtitle: "Convierte chats en contratos reales",
    description:
      "WhatsApp es el canal de comunicación con mayor tasa de apertura, pero muchos negocios lo usan mal. Nosotros transformamos tu WhatsApp en una máquina de ventas. Implementamos flujos conversacionales, automatizaciones inteligentes y tácticas de persuasión masiva que guían al cliente natural y efectivamente hacia el cierre de la venta.",
    benefits: [
      "Aumento directo en la tasa de conversión por chat.",
      "Diseño de guiones y flujos de persuasión validados.",
      "Seguimientos automatizados sin parecer un robot.",
      "Integración de etiquetas y embudos dentro de WhatsApp.",
    ],
  },
  "redes-sociales": {
    title: "Gestión de Redes Sociales & Ads",
    icon: "campaign",
    subtitle: "Tráfico inteligente y leads constantes",
    description:
      "Olvídate de las métricas vanidosas y de depender de la viralidad o de hacer bailes. Nuestro servicio de Gestión de Redes Sociales y Ads se enfoca en una sola cosa: generar clientes. Creamos campañas digitales hiper-segmentadas y contenido estratégico diseñado específicamente para educar a tu audiencia, generar autoridad y convertir seguidores en prospectos calificados.",
    benefits: [
      "Campañas de publicidad (Ads) hiper-segmentadas y rentables.",
      "Contenido estratégico diseñado para conversiones.",
      "No dependes de la suerte: flujo predecible de clientes potenciales.",
      "Reportes claros enfocados en ROI (Retorno de Inversión).",
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = serviceDetailsData[slug as keyof typeof serviceDetailsData];

  if (!service) {
    return notFound();
  }

  return (
    <main className="bg-surface min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-semibold mb-10 tracking-tight"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Volver a Servicios
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-primary text-5xl">
              {service.icon}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface mb-6 font-headline tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-bold tracking-tight mb-8">
            {service.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] soft-shadow border border-slate-100 mb-16"
        >
          <h3 className="text-2xl font-extrabold mb-4 text-on-surface tracking-tight">
            Sobre el servicio
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            {service.description}
          </p>

          <h3 className="text-2xl font-extrabold mb-6 text-on-surface tracking-tight">
            ¿Qué incluye?
          </h3>
          <ul className="space-y-5">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600 font-medium text-lg leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-950 p-10 md:p-16 rounded-[2.5rem] text-center shadow-soft-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -ml-32 -mt-32 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-headline tracking-tight">
              ¿Listo para implementar esto en tu negocio?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Agendemos una asesoría y evaluemos cómo este servicio puede
              escalar tu facturación al siguiente nivel.
            </p>
            <Link href="/contacto">
              <button className="primary-gradient px-12 py-5 rounded-2xl font-extrabold text-white text-lg md:text-xl shadow-[0_20px_50px_rgba(255,1,1,0.3)] hover:scale-105 active:scale-95 transition-all w-full md:w-auto border-b-4 border-red-800">
                Agendar Asesoría
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
