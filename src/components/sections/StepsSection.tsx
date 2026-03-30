"use client";

import { motion } from "framer-motion";
import { Step } from "@/types";

const steps: Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Descubre qué es lo que realmente le impide avanzar a tu negocio y cómo explotar su potencial."
  },
  {
    number: "02",
    title: "Master Class",
    description: "Participa GRATIS en una clase maestra que te servirá como entrenamiento para empezar a facturar más."
  },
  {
    number: "03",
    title: "Consultoría AR",
    description: "Regístrate en una consultoría de acción rápida para llevar tu negocio al siguiente nivel de inmediato."
  },
  {
    number: "04",
    title: "Transformación Completada",
    description: "Empieza una nueva etapa y decide pasar al siguiente nivel de crecimiento, posicionamiento y ventas."
  }
];

export default function StepsSection() {
  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4 block">
            ¿Cómo y dónde empezar?
          </span>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">
            Sigue estos sencillos pasos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {step.number}
              </div>
              <h4 className="font-headline font-bold text-on-surface text-xl">{step.title}</h4>
              <p className="text-on-surface-variant text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
