"use client";

import { motion } from "framer-motion";
import { Brain, Clock, TrendingUp } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8"
          >
            ¿Atrapado entre procesos manuales y la falta de tiempo para escalar
            tu facturación?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-on-background/80 leading-relaxed"
          >
            <p>
              Sé que el mayor reto que enfrentas hoy es la falta de clientes, el
              agotamiento por procesos manuales y el poco tiempo que te queda
              para hacer crecer tu negocio.
            </p>

            <p className="font-medium text-primary">
              La industria tradicional te ha hecho creer que necesitas perseguir
              “likes” y viralidad, pero mi enfoque es diferente: yo creo que
              debes optimizar para generar confianza y ventas reales, no ruido
              en redes.
            </p>

            <div className="grid md:grid-cols-3 gap-8 py-10">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Clock size={28} />
                </div>
                <p className="text-sm font-semibold">Menos Horas Manuales</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Brain size={28} />
                </div>
                <p className="text-sm font-semibold">IA Integrada</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <TrendingUp size={28} />
                </div>
                <p className="text-sm font-semibold">Ventas Reales</p>
              </div>
            </div>

            <p>
              La solución no es trabajar más horas; la solución es integrar
              **Inteligencia Artificial** para que haga el trabajo pesado de
              captación y seguimiento, mientras tú te dedicas a liderar y tu
              marca conserva su calidez humana.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 text-xl md:text-2xl font-bold border-t border-primary/20 italic"
            >
              "Si tu negocio depende de que tú seas el motor de ventas, estás
              dejando mucho dinero en el camino."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
