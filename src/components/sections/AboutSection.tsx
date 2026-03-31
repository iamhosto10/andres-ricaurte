import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export default function AboutSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <FadeIn direction="right" className="relative rounded-3xl overflow-hidden soft-shadow h-[550px] border border-slate-100">
            <Image
              alt="Andrés speaking on stage"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujhqsrQLgSlUx-6F8l_tqUY6lqZtrCfyw7HUXF-Vpxv7VMVbXu2BcuW1sg7i8UY3o4nZDDH1D0G7eJhkxIP191A260pvc3H6h52zguhnyaVnbBMXfILIAuNk-2951L0B5mi1G6xSpiHeGyW-3dy8Wr2KFjdIB1Rft1tO3S_C6DoW8EB4IgPpExnIN3a0-a_2nkANHoArCZ8IpdcSrkrahyREiXRDTOz9CFSg12NVK9CC78s2rgMJiDKId04VIivnRyKXu-NgUhU4A"
              fill
            />
          </FadeIn>
        </div>
        <div className="order-1 md:order-2">
          <FadeIn delay={0.1} direction="left">
            <h2 className="text-4xl font-extrabold text-on-surface mb-8 font-headline tracking-tight">
              ¿Quién está detrás del <span className="text-primary">Método CRACS</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="left" className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Hola, soy <strong>Andrés Alfonso Ricaurte</strong>. Mi misión es transformar la forma en que las empresas conectan con sus clientes en la era de la Inteligencia Artificial.
            </p>
            <p>
              Mi trayectoria incluye el desarrollo de un exitoso <strong>blog financiero</strong> y mi invaluable experiencia en <strong>Seeed</strong>, donde aprendí de primera mano qué funciona y qué no en entornos digitales de alto crecimiento.
            </p>
            <p>
              He visto a cientos de empresarios frustrados por invertir en publicidad que no retorna, o por procesos manuales que consumen su tiempo y el de sus equipos. Por eso diseñé un sistema que automatiza lo tedioso y potencia lo humano.
            </p>
            <p>
              A través del Método CRACS, no solo vendes más; construyes una reputación digital imbatible que te posiciona como el líder de tu industria.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} direction="up" className="mt-10 pt-10 border-t border-slate-100">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-on-surface text-lg">Estrategia Validada</p>
                <p className="text-sm text-slate-500 font-medium tracking-tight">
                  Más de 10 años en el ecosistema digital.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
