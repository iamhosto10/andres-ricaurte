"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MethodSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden soft-shadow h-[550px] border border-slate-100">
            <Image
              alt="Andrés speaking on stage"
              fill
              className="w-full h-full object-cover"
              src={"/Andres%20Ricaurte.webp"}
            />
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-on-surface mb-8 font-headline tracking-tight">
            ¿Quién está detrás del{" "}
            <span className="text-primary">Método CRACS</span>?
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Hola, soy <strong>Andrés Alfonso Ricaurte</strong>. Mi misión es
              transformar la forma en que las empresas conectan con sus clientes
              en la era de la Inteligencia Artificial.
            </p>
            <p>
              He visto a cientos de empresarios frustrados por invertir en
              publicidad que no retorna, o por procesos manuales que consumen su
              tiempo y el de sus equipos. Por eso diseñé un sistema que
              automatiza lo tedioso y potencia lo humano.
            </p>
            <p>
              A través del Método CRACS, no solo vendes más; construyes una
              reputación digital imbatible que te posiciona como el líder de tu
              industria.
            </p>
          </div>
          <div className="mt-10 pt-10 border-t border-slate-100">
            <button className="primary-gradient text-on-primary text-xl font-bold px-10 py-5 rounded-xl shadow-soft-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] mb-10 cursor-pointer">
              Quiero Conocer más.
            </button>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">
                  verified_user
                </span>
              </div>

              <div>
                <p className="font-bold text-on-surface text-lg">
                  Estrategia Validada
                </p>
                <p className="text-sm text-slate-500 font-medium tracking-tight">
                  Más de 10 años en el ecosistema digital.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
