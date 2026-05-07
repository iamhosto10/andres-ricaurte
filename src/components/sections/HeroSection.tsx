"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          className="md:col-span-7 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest font-label">
            Andrés Ricaurte | ESTRATEGIA - INNOVACIÓN - RESULTADOS
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.05] mb-8 font-headline tracking-tight">
            <span className="text-primary">
              Sistemas de Ventas Automatizados exclusivos{" "}
            </span>{" "}
            para Clínicas, Restaurantes y Negocios Digitales.
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-10 max-w-xl leading-relaxed">
            Transformamos la forma en que adquieres clientes. A través del
            <strong>Método CRACS</strong> , automatizamos tus procesos de ventas
            con Inteligencia Artificial sin perder tu esencia humana. El
            resultado: escalas tu facturación de forma predecible, reduciendo el
            tiempo de seguimiento y profesionalizando tus ventas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="primary-gradient text-on-primary text-xl font-bold px-10 py-5 rounded-xl shadow-soft-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              Quiero mi ruta
            </button>
            <div className="flex items-center gap-3 px-4">
              <div className="flex -space-x-2">
                <div className="relative w-10 h-10 rounded-full border-2 border-white bg-surface-container-high overflow-hidden">
                  <Image
                    alt="User 1"
                    fill
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWGI-72ynLqsk0dNrAE8obP2mNJ8aXbO461lS2Zr0mGONf4exVwhHvGnQaxJ9qNXorkmDO-aA7DS90ckYK8ogQr_CVTyke2mlQ9Fm_VCozpHalG_5e_2tNjqjT_rIbZgCaB0Xp9VpAq6RkNa7XA89uRt-xUvV8husL1oKHDR00uMcAyIe1EXrkWPqBfIVAD6HU3PHNnmpbX4SWPbp1Feayv_zggSjhQtjSvJdeaUIXSYHhxL-vxNrTB6dQJbW7XqFQ8fU1V6_Eb5so"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white bg-surface-container-high overflow-hidden">
                  <Image
                    alt="User 2"
                    fill
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXNhRnWqWqekTf9Uuwz6Xea1zjlYcUx5o1LwA81agFEsYWM6oICkcWG3kBOt9_cE2YDEoE5AuNOw6Fw4xY9qAyyHVQdUyo9zk-_z6RfFS-bLFsDp_l6sR6kleXN3e2fFdyzTXKTkYRXQMFXSzJ6EtFXGIdiVPj--HzejoVMEW7mDEgJTUPlNhA1mjee5BQF7dUUam2iRBwuSpePzxzCP4tZ_eMjt-HPTBR7wGlBLynoWptgpsORBNBvWumgCm3zQMWOVgpbCkJCMp5"
                  />
                </div>
              </div>
              <span className="text-sm font-semibold text-secondary tracking-tight">
                Descubre aquí la ruta estratégica para tu negocio.
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full aspect-[4/5] max-w-md bg-white rounded-3xl overflow-hidden soft-shadow border border-slate-100">
            <Image
              alt="Andrés Ricaurte Profile"
              fill
              className="w-full h-full object-cover object-top"
              src={"/Andres_Ricaurte_Consultor_Marketing.webp"}
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </header>
  );
}
