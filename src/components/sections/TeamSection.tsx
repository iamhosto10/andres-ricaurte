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
    image: "/Andres_Ricaurte_Consultor_Marketing.webp",
    skills: ["Estrategia", "Ventas", "Liderazgo"],
  },
  {
    name: "Gerardo Andrés Ramírez",
    role: "Fullstack & Mobile Engineer",
    description:
      "Ingeniero experto en integrar Inteligencia Artificial y desarrollar arquitecturas web/móviles de alto rendimiento.",
    image: "/Gerardo.webp",
    skills: ["IA", "Next.js", "Mobile"],
  },
  {
    name: "Luisa Vargas",
    role: "Content Creator & Branding",
    description:
      "Creativa encargada de humanizar la marca y conectar con la audiencia a través de storytelling de impacto.",
    image: "/Luisa.webp",
    skills: ["Storytelling", "Social Media", "Diseño"],
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight mb-4"
          >
            El Equipo Detrás del Éxito
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Combinamos estrategia de negocios, ingeniería de vanguardia y
            creatividad para escalar tu facturación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl p-8 border border-slate-100 soft-shadow hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4 text-slate-400">
                  <button className="hover:text-primary transition-colors">
                    {/* <Linkedin size={20} /> */}
                  </button>
                  <button className="hover:text-primary transition-colors">
                    {member.role.includes("Engineer") ? (
                      <Cpu size={20} />
                    ) : (
                      <Globe size={20} />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
