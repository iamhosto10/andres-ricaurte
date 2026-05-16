"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Cpu } from "lucide-react";

const team = [
  {
    name: "Andrés Ricaurte",
    role: "CEO & Estratega de Negocios",
    description:
      "Especialista en escalabilidad empresarial y optimización de ventas con enfoque estratégico.",
    image: "/AndresRicaurteTeams.jpeg",
    skills: ["Estrategia", "Ventas", "Liderazgo"],
  },
  {
    name: "Gerardo Ramírez",
    role: "Fullstack & Mobile Engineer",
    description:
      "Ingeniero experto en integrar Inteligencia Artificial y desarrollar arquitecturas web/móviles de alto rendimiento.",
    image: "/Gerardo.webp",
    skills: ["IA", "Next.js", "Mobile", "Arquitectura"],
  },
  {
    name: "Luisa Vargas",
    role: "Content Creator & Branding",
    description:
      "Creativa encargada de humanizar la marca y conectar con la audiencia a través de storytelling de impacto.",
    image: "/Luisa.webp",
    skills: ["Storytelling", "Social Media", "Diseño", "Branding"],
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight mb-4"
          >
            El Equipo Detrás del Éxito
          </motion.h2>

          <p className="text-inverse-on-surface/80 text-lg max-w-2xl mx-auto">
            Combinamos estrategia de negocios, ingeniería de vanguardia y
            creatividad para escalar tu facturación.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch ">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-3xl p-8 border border-slate-100 soft-shadow hover:border-white transition-all duration-300 flex flex-col h-full bg-inverse-surface/60"
            >
              {/* TOP CONTENT */}
              <div className="flex flex-col flex-grow">
                {/* IMAGE */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-white/35 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />

                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className="text-center flex flex-col flex-grow">
                  {/* NAME */}
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>

                  {/* ROLE */}
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 min-h-[40px]">
                    {member.role}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-inverse-on-surface/80 text-sm leading-relaxed mb-6 flex-grow min-h-18">
                    {member.description}
                  </p>

                  {/* SKILLS */}
                  <div className="flex flex-wrap justify-center gap-2 h-full">
                    {member.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-3 py-1 bg-surface/20 text-inverse-on-surface/80 text-xs font-medium rounded-full border border-inverse-surface/20 h-fit"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex justify-center gap-4 text-inverse-on-surface/80 mt-6 pt-6 border-t border-inverse-surface/20">
                <button className="text-white transition-colors">
                  {member.role.includes("Engineer") ? (
                    <Cpu size={20} />
                  ) : (
                    <Globe size={20} />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
