import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

export default function SocialProofSection() {
  return (
    <section className="py-16 bg-surface-container-low border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn delay={0.1}>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
            Marcas que me han abierto sus puertas...
          </p>
        </FadeIn>
        <div className="flex flex-col gap-12 items-center">
          <FadeIn
            delay={0.2}
            direction="up"
            className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 contrast-125 transition-opacity hover:opacity-100"
          >
            <img
              src="https://andresricaurte.com/wp-content/uploads/2025/09/Alianzas-y-colaboraciones-Andres-Ricaurte-Consultor-Marketing-IA-8.png"
              alt=""
              className="h-12 lg:h-20 object-contain"
            />
            <img
              src="https://andresricaurte.com/wp-content/uploads/2025/09/Alianzas-y-colaboraciones-Andres-Ricaurte-Consultor-Marketing-IA-7.png"
              alt=""
              className="h-12 lg:h-20 object-contain"
            />
            <img
              src="https://andresricaurte.com/wp-content/uploads/2025/09/Alianzas-y-colaboraciones-Andres-Ricaurte-Consultor-Marketing-IA-6.png"
              alt=""
              className="h-12 lg:h-20 object-contain"
            />
            <img
              src="https://andresricaurte.com/wp-content/uploads/2025/09/Alianzas-y-colaboraciones-Andres-Ricaurte-Consultor-Marketing-IA-5.png"
              alt=""
              className="h-12 lg:h-20 object-contain"
            />
          </FadeIn>
          <FadeIn
            delay={0.3}
            direction="up"
            className="max-w-4xl mx-auto w-full aspect-video rounded-2xl overflow-hidden transition-all soft-shadow relative"
          >
            <img
              alt="Team"
              className="object-cover"
              src="https://andresricaurte.com/wp-content/uploads/2025/09/Fondos-para-web_20250920_150953_0000.png"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
