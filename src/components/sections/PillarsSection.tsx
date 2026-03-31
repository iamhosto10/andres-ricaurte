import { Rss, SearchCode, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function PillarCard({ icon, title, description, delay = 0 }: PillarCardProps) {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white p-8 rounded-2xl soft-shadow border border-slate-100/50 hover:scale-[1.03] transition-all duration-300 flex flex-col h-full group/card">
        <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-8 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-extrabold mb-4 text-on-surface">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <button className="text-primary font-bold text-sm flex items-center gap-2 group tracking-tight">
        Saber más <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </FadeIn>
  );
}

export default function PillarsSection() {
  const pillars = [
    {
      icon: <Rss className="w-8 h-8" />,
      title: "Sistema de Ventas",
      description: "Automatizamos tu embudo desde la captación hasta el cierre con agentes de IA inteligentes.",
    },
    {
      icon: <SearchCode className="w-8 h-8" />,
      title: "Consultoría 1:1",
      description: "Acompañamiento directo para ajustar las tuercas de tu modelo de negocio y escalar rápido.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Reputación Digital",
      description: "Domina Google y ChatGPT. Haz que hablen bien de ti donde tus clientes están buscando.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Marketing",
      description: "Convierte chats en contratos. Estrategias de persuasión masiva para apps de mensajería.",
    },
  ];

  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up" className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-on-surface mb-4 font-headline tracking-tight">
            Nuestros Pilares de Crecimiento
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Cuatro soluciones diseñadas para llevar tu facturación al siguiente nivel utilizando tecnología de punta.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} delay={0.1 * index} />
          ))}
        </div>
      </div>
    </section>
  );
}
