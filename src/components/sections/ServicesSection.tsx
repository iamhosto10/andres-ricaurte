"use client";

import { motion } from "framer-motion";
import { Service } from "@/types";
import {
  GraduationCap,
  MessageCircleMoreIcon,
  Network,
  Share2,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const services: Service[] = [
  {
    icon: <Network className="text-primary text-3xl" />,
    title: "Sistema de Ventas",
    description:
      "Automatiza tu proceso de ventas con IA: Capta leads calificados, haz seguimiento y convierte más clientes con embudos avanzados.",
  },
  {
    icon: <UsersRound className="text-primary text-3xl" />,
    title: "Consultoría 1:1",
    description:
      "Para dueños de negocios que buscan claridad y resultados. Implementamos estrategias para escalar tu facturación rápidamente.",
  },
  {
    icon: <ShieldCheck className="text-primary text-3xl" />,
    title: "Reputación Digital",
    description:
      "Exclusivo para negocios que quieren aparecer en Google, ChatGPT y otros motores de IA, ganando visibilidad en su sector.",
  },
  {
    icon: <GraduationCap className="text-primary text-3xl" />,
    title: "Capacitaciones",
    description:
      "Sesiones de mentoría grupales para empresarios y equipos que quieren aprender a optimizar procesos y crecer exponencialmente.",
  },
  {
    icon: <MessageCircleMoreIcon className="text-primary text-3xl" />,
    title: "Ventas por Instagram y WhatsApp",
    description:
      "Implementa una estrategia en tu negocio que te permita cerrar más ventas por canales de mensajería directa de forma eficiente.",
  },
  {
    icon: <Share2 className="text-primary text-3xl" />,
    title: "Gestión de Redes Sociales",
    description:
      "Pensado para negocios que necesitan visibilidad y clientes constantes a través de Campañas Digitales y presencia profesional.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4 block">
            Servicios que impulsan resultados
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
            Creo sistemas de ventas y estrategias de marketing con IA
          </h2>
          <p className="text-on-surface-variant mt-4 text-lg">
            Para escalar tu negocio y posicionarlo donde tus clientes te buscan.
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
              className="p-10 bg-surface-container-high rounded-xl border border-outline-variant/10 hover:bg-surface-bright transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                {/* <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span> */}
                {service.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                {service.title}
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
