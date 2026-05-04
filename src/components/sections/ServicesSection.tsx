"use client";

import { motion } from "framer-motion";
import { Service } from "@/types";

const services: Service[] = [
  {
    icon: (
      <span className="material-symbols-outlined text-primary text-3xl">
        dynamic_feed
      </span>
    ),
    title: "Sistema de Ventas",
    description:
      "Automatizamos tu embudo desde la captación hasta el cierre con agentes de IA inteligentes.",
  },
  {
    icon: (
      <span className="material-symbols-outlined text-primary text-3xl">
        person_search
      </span>
    ),
    title: "Consultoría 1:1",
    description:
      "Acompañamiento directo para ajustar las tuercas de tu modelo de negocio y escalar rápido.",
  },
  {
    icon: (
      <span className="material-symbols-outlined text-primary text-3xl">
        stars
      </span>
    ),
    title: "Reputación Digital",
    description:
      "Domina Google y ChatGPT. Haz que hablen bien de ti donde tus clientes están buscando.",
  },
  {
    icon: (
      <span className="material-symbols-outlined text-primary text-3xl">
        co_present
      </span>
    ),
    title: "Capacitaciones",
    description:
      "Sesiones de mentorías grupales para empresarios y equipos de trabajo que quieren aprender, actualizarse optimizar procesos y crecer.",
  },
  {
    icon: (
      <span className="material-symbols-outlined text-primary text-3xl">
        chat
      </span>
    ),
    title: "WhatsApp Marketing",
    description:
      "Convierte chats en contratos. Estrategias de persuasión masiva para apps de mensajería.",
  },
  {
    icon: (
      <span className="material-symbols-outlined text-primary text-3xl">
        campaign
      </span>
    ),
    title: "Gestión de Redes Sociales",
    description:
      "Pensado para negocios que necesitan visibilidad y clientes constantes a través de Campañas Digitales.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-on-surface mb-4 font-headline tracking-tight">
            Nuestros Pilares de Crecimiento
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Cuatro soluciones diseñadas para llevar tu facturación al siguiente
            nivel utilizando tecnología de punta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl soft-shadow border border-slate-100/50 hover:scale-[1.03] transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-4 text-on-surface">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group tracking-tight">
                Saber más{" "}
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
