"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MethodSection() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-outline-variant/15 bg-surface-container-high">
            <Image
              alt="Andrés Ricaurte Retrato"
              fill
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugjYQNI0f3cXXPWSP6YAMvSkx7ARQlDXSr8mB9taBbxZndO3P5VJBPe31Wou1L93_5bPbcNy5T7bKXEefURrJR_tYia012vEmInXOG7ztjuXPAmacoCbGOApmEK13tqgKiRWBzhK6p6gU0kmqJlV6odPV0ZZ5IhKIZBcz9QHCRZmf8qcar-miIREDTCsQLf2OKVTtSFTpyjbQQeJTCbrjM8-cOFpClHOmRxIhDbL5U0hECvyB2z-Egc76ENrDTUpDVePpYT5oSa-w"
            />
          </div>
          <div className="absolute bottom-6 right-6 bg-surface-container-highest p-6 rounded-lg border border-outline-variant/20 shadow-2xl max-w-xs glass-effect">
            <p className="font-headline font-bold text-primary text-2xl mb-1">Método CRACS</p>
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Vende más, ahorra tiempo y convierte clientes</p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4 block">
            ¿Quién está detrás del Método CRACS?
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
            Consultor y mentor que combina automatización inteligente y humanización de marca
          </h2>
          <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
            <p>
              Entiendo el mayor reto de los empresarios: falta de clientes, procesos manuales y poco tiempo para crecer. Por eso creé sistemas de ventas sostenibles que trabajan por ti.
            </p>
            <p>
              A través del <span className="text-on-surface font-semibold">Método CRACS</span>, posicionamos tu negocio como referente y logramos que seas la opción preferida en tu sector.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div className="p-4 bg-surface-container-lowest border-l-2 border-primary">
              <span className="block font-headline font-bold text-on-surface">Automatización IA</span>
              <span className="text-sm text-on-surface-variant">Tecnología de punta para escalar.</span>
            </div>
            <div className="p-4 bg-surface-container-lowest border-l-2 border-primary">
              <span className="block font-headline font-bold text-on-surface">Humanización</span>
              <span className="text-sm text-on-surface-variant">Conexiones reales con clientes.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
