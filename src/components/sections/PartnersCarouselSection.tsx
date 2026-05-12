"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Lista de alianzas basada en la imagen (puedes ajustar los nombres)
const allianceLogos = [
  { name: "AreaAndina", url: "/AreaAndina.webp" },
  { name: "Comfacesar", url: "/Comfacesar.webp" },
  { name: "Expomas", url: "/Expomas.webp" },
  { name: "Fabricas", url: "/Fabricas.webp" },
  { name: "Ingenieros", url: "/Ingenieros.webp" },
  { name: "Politecnico", url: "/Politecnico.webp" },
  { name: "Universidad Popular del Cesar", url: "/UPC.webp" },
];

export default function PartnersCarouselSection() {
  // Plugin para que el carrusel se mueva solo
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
          >
            Nuestras Alianzas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Empresas e instituciones que confían en nosotros para transformar
            sus procesos
          </motion.p>
        </div>

        {/* Carrusel de Logos */}
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 flex items-center">
              {/* Mapeamos los logos dos veces para un efecto de loop más fluido si hay pocos ítems */}
              {[...allianceLogos, ...allianceLogos].map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4"
                >
                  <div className="p-1 flex items-center justify-center transition-all duration-300">
                    <div className="relative w-full h-20 md:h-32">
                      {/* Espacio para tus imágenes */}
                      <Image
                        src={partner.url}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        // Nota: Asegúrate de tener estas imágenes en /public/partners/
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Gradientes laterales para suavizar la entrada/salida de logos (opcional) */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
