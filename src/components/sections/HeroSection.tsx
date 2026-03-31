"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Fondo Estrategia"
          fill
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida/ADBb0uimRO8jVrif0xzsB_9uB5yelOL5VkiOXahCpV31mZM6ivjFmtoGCCP3-DHxT3uIMG9fgfNvHYHsqsDQm4_uT-jqUvYlQ6Obz1SAZfYWCDGAndpu9Z99ouDpW_1bco4ufmEY8UpqGy9Pby27_TAK8cm_5x0HDGluK60h0LXrTXOS9WGTQDiSuDBoPxgCngNCUTHnjToDkjjKU-i0z89TC1wBqbb3M0_I3x15-ePKgoNVsmdrYPAiBzgeKhPdnS11W8ePy96EwSqa"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 bg-surface-container-high border border-outline-variant/20 rounded-full">
            <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-primary">
              Sistemas de Crecimiento Automatizado
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-on-surface">
            Factura más con un sistema de{" "}
            <span className="text-primary">
              marketing y ventas automatizadas
            </span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Haz que tu negocio aparezca en ChatGPT, Google, Copilot, Claude,
            entre otros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-md font-headline font-bold text-lg hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-primary/10">
              Quiero conocer más
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
