"use client";

import { useRef, useState, useEffect } from "react"; // Añadimos useState y useEffect
import { motion } from "framer-motion";
import { Testimonial } from "@/types";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi, // Importamos el tipo de la API
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils"; // Utilidad de shadcn para clases condicionales

const testimonials: Testimonial[] = [
  {
    quote:
      " La asesoría con Andrés superó mis expectativas. Su profesionalismo Y metodología de enseñanza Son únicos y aportan un gran valor. Generamos una excelente química de trabajo y sin duda lo recomendaría para cualquier proceso empresarial.",
    name: "Dr. Davidson Osorio",
    role: "CEO EUROSALUD - Cartago",
    avatarUrl: "/Dr.%20Davidson%20Osorio.webp",
  },
  {
    quote:
      "	Debo destacar que Andrés ha sido la persona que ha resuelto todas las dudas que tenía a la hora de montar mis campañas en Facebook e Instagram. Antes ningún curso lo había hecho, lo recomiendo 100% por su estrategia de personalización y enseñanza; es clara y directa.					",
    name: "Silvia Lopera Pérez",
    role: "Dir. Comercial URBANIA - Panamá",
    avatarUrl: "/Silvia%20Lopera%20P%C3%A9rez.webp",
  },
  {
    quote:
      "Tiene una manera muy clara de enseñar lo que facilita la comprensión y aplicación inmediata de sus metodologías. Gracias a su efectividad, hemos logrado atraer más seguidores, posicionar mejor la empresa y avanzar de manera estratégica. Su aportes han sido clave para nuestro crecimiento.					",
    name: "Daniela Vélez",
    role: "Ventas Hotel Vajamar - Valledupar",
    avatarUrl: "/Daniela%20Vélez.webp",
  },
  {
    quote:
      "Andrés fue clave para aumentar nuestras ventas con su estrategia en Instagram y Whatsapp. A su vez, gracias al uso de videos hechos con inteligencia artificial logramos un alcance a un siendo una cuenta pequeña en el sector de la construcción. Estamos muy satisfechos a los resultados obtenidos.					",
    name: "Yohana Carrillo",
    role: "Admin. Bodega ICM - Valledupar",
    avatarUrl: "/Yohana%20Carrillo.webp",
  },
  {
    quote:
      "Es un profesional preciso, concreto y muy paciente, cualidades que hace que cada asesoría sea clara y efectiva. Su forma de guiar los procesos tramite confianza y seguridad. La verdad, ¡Wow!, super recomendado para cualquier empresa o profesional que resultado reales.					",
    name: "Yasmina Galeano",
    role: "Psicóloga - Bogotá D.C.",
    avatarUrl: "/Yasmina%20Galeano.webp",
  },
];

// 1. Definimos los logos (puedes cambiar los nombres y rutas luego)
const partnerLogos = [
  { name: "Eurosalud", logoUrl: "/EuroSalud.webp" },
  { name: "Punto y coma", logoUrl: "/PuntoYComa.webp" },
  { name: "Salvators", logoUrl: "/Salvators.webp" },
  { name: "Terranova", logoUrl: "/Terranova.webp" },
  { name: "UrbanaDomicilios", logoUrl: "/UrbanaDomicios.webp" },
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  // Efecto para manejar la lógica de los dots
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 font-headline tracking-tight"
          // ... tus animaciones
        >
          Casos de Éxito Reales
        </motion.h2>

        <div className="relative px-4 md:px-12">
          <Carousel
            setApi={setApi} // Conectamos la API
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:pl-8 basis-full lg:basis-1/2"
                >
                  <div className="bg-white p-8 md:p-10 rounded-3xl soft-shadow border border-slate-100 flex flex-col h-full">
                    <p className="text-on-surface mb-10 text-lg leading-relaxed italic grow">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                        <Image
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          src={testimonial.avatarUrl!}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm tracking-tight">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Flechas (Solo visibles en Desktop) */}
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>

          {/* --- DOTS DE NAVEGACIÓN --- */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  current === i
                    ? "bg-primary w-6" // El dot activo es más largo (estilo moderno)
                    : "bg-slate-300 hover:bg-slate-400",
                )}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="pt-16 border-t border-slate-100"
      >
        <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-[0.2em] mb-10">
          Empresas que han transformado sus procesos
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 ">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className=" transition-all duration-500 hover:scale-110"
            >
              <div className="relative w-32 h-32 md:w-50 md:h-50">
                <Image
                  src={logo.logoUrl}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
