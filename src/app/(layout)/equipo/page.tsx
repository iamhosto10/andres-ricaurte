"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Globe, Cpu, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Andrés Ricaurte",
    role: "CEO & BUSINESS MARKETING STRATEGIST",
    description:
      "Consultor y estratega de marketing Con IA. Transformo procesos manuales en sistema de ventas automatizados Que escalan tu facturación. Humanizamos tu marca y te posicionamos como referente en tu sector Más clientes, más tiempo libre y más resultados medibles. Simple. Yo construyo. Tú cobras.",
    image: "/AndresRicaurteTeams.webp",
    skills: ["Estrategia", "Ventas", "Liderazgo", "Negocios"],
    icon: Globe,
  },
  {
    name: "Gerardo Andrés Ramírez",
    role: "FULLSTACK & MOBILE ENGINEER",
    description:
      "Ingeniero experto en integrar Inteligencia Artificial y desarrollar arquitecturas web/móviles de alto rendimiento. Convierto las estrategias de marketing en sistemas tecnológicos escalables que trabajan 24/7.",
    image: "/Gerardo.webp",
    skills: ["IA", "Next.js", "Mobile", "Arquitectura"],
    icon: Cpu,
  },
  {
    name: "Luisa Vargas",
    role: "CONTENT CREATOR & BRANDING SPECIALIST",
    description:
      "Creativa encargada de humanizar la marca y conectar con la audiencia a través de storytelling de impacto. Diseño la identidad visual que hace que tu negocio no pase desapercibido en el mundo digital.",
    image: "/Luisa.webp",
    skills: ["Storytelling", "Social Media", "Diseño", "Branding"],
    icon: Globe,
  },
  {
    name: "Carlos Ricaurte",
    role: "FILMMAKER & UGC CREATOR",
    description:
      "Especialista en producción audiovisual enfocada en contenido UGC que convierte. Combina narrativa visual, tendencias digitales y ejecución ágil para crear piezas auténticas que conectan y venden.",
    image: "/CarlosRicaurte.webp",
    skills: ["UGC", "Video", "Edición", "Storytelling"],
    icon: Globe,
  },
  {
    name: "Isaac Beleño",
    role: "DRONE OPERATOR & FILMMAKER",
    description:
      "Operador de drone certificado y filmmaker con enfoque cinematográfico. Captura tomas aéreas de alto impacto y las integra con storytelling visual para elevar la percepción de marca.",
    image: "/Isaac.webp",
    skills: ["Drone", "Cinematografía", "Video", "Producción"],
    icon: Globe,
  },
  {
    name: "Valentina Bolaños",
    role: "STRATEGIC OPERATIONS COORDINATOR",
    description:
      "Especialista en optimización de procesos y estrategia operativa que maximiza la eficiencia. Combina analisis de datos, integracion de equipos y ejecucion agil para impulsar resultados sostenibles y escalables.",
    image: "/ValentinaBolaños.webp",
    skills: ["Optimización", "Estrategia", "Gestion", "Datos"],
    icon: Globe,
  },
];

const skillContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const skillItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-surface overflow-hidden pt-32 pb-32">
      {/* --- HERO SECTION --- */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 mb-24 md:mb-40">
        {/* Efectos de luces (Glow) de fondo */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-200 h-75 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-black tracking-widest uppercase text-sm md:text-base"
          >
            Conoce a tu Partner Estratégico
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter leading-tight"
          >
            No somos una agencia. <br className="hidden md:block" />
            <span className="text-primary">Somos tu equipo.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-on-surface/70 leading-relaxed"
          >
            Combinamos mentalidad de negocios, ingeniería de software avanzada y
            estrategias de marca para construir sistemas predecibles de
            facturación.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col gap-32 md:gap-48">
        {team.map((member, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={member.name}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-0`}
            >
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[65%] relative group"
              >
                <div className="relative h-112.5 md:h-162.5 w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className={`w-full lg:w-[45%] relative z-10 ${
                  isEven ? "lg:-ml-32" : "lg:-mr-32"
                }`}
              >
                <div className="bg-surface/85 backdrop-blur-3xl border border-primary/10 p-10 md:p-14 rounded-[2rem] shadow-[0_20px_60px_rgb(0,0,0,0.08)]">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                    <member.icon size={28} strokeWidth={2.5} />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
                    {member.name}
                  </h2>
                  <p className="text-primary font-bold text-lg uppercase tracking-wider mb-6">
                    {member.role}
                  </p>
                  <p className="text-lg text-on-surface/80 leading-relaxed mb-10">
                    {member.description}
                  </p>

                  {/* Animación escalonada para las Skills */}
                  <motion.div
                    variants={skillContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                  >
                    {member.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={skillItem}
                        className="px-4 py-2 bg-on-surface/5 text-on-surface font-semibold text-sm rounded-xl border border-on-surface/10 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
