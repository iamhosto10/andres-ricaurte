import { Flame, BrainCircuit, Calendar } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

interface CourseCardProps {
  title: string;
  badgeIcon: React.ReactNode;
  badgeText: string;
  description: string;
  headerStyle: string;
  image: string;
  delay?: number;
}

function CourseCard({
  title,
  badgeIcon,
  badgeText,
  description,
  headerStyle,
  image,
  delay = 0,
}: CourseCardProps) {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white rounded-3xl overflow-hidden soft-shadow hover:-translate-y-2 transition-all border border-slate-100 flex flex-col h-full">
        <div
          className={`h-56 flex items-center justify-center  ${headerStyle}`}
        >
          <img
            src={image}
            alt={title}
            className="object-cover object-top rounded-2xl h-full w-full"
          />
        </div>
        <div className="p-10 flex-grow flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-primary">{badgeIcon}</div>
            <span className="text-xs font-extrabold text-primary uppercase tracking-[0.15em]">
              {badgeText}
            </span>
          </div>
          <p className="text-slate-500 text-base mb-8 leading-relaxed flex-grow">
            {description}
          </p>
          <button className="w-full py-4 bg-slate-50 text-slate-900 font-extrabold rounded-xl hover:bg-slate-100 transition-colors tracking-tight mt-auto">
            Ver Detalles
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export default function CoursesSection() {
  const courses = [
    {
      title: "Marketing Político 6.0",
      badgeIcon: <Flame className="w-5 h-5 fill-primary" />,
      badgeText: "Bestseller",
      description:
        "Domina las campañas electorales con segmentación psicográfica y herramientas de IA.",
      headerStyle: "bg-slate-900",
      image:
        "https://andresricaurte.com/wp-content/uploads/2025/09/Cursos-Web-Andres-Ricaurte-COMO-GANAR-ELECCIONES-CON-INTELIGENCIA-ARTIFICIAL-1.png",
    },
    {
      title: "Posicionamiento (ChatGPT)",
      badgeIcon: <BrainCircuit className="w-5 h-5" />,
      badgeText: "Nuevo",
      description:
        "Haz que la IA recomiende tu marca. SEO para buscadores conversacionales.",
      headerStyle: "bg-slate-800",
      image:
        "https://andresricaurte.com/wp-content/uploads/2025/09/Cursos-Web-Andres-Ricaurte-COMO-APARECER-EN-CHATGPT.png",
    },
    {
      title: "Vende Más en Navidad",
      badgeIcon: <Calendar className="w-5 h-5" />,
      badgeText: "Temporal",
      description:
        "Estrategias de alto impacto para maximizar las ventas en la temporada más importante.",
      headerStyle: "primary-gradient",
      image:
        "https://andresricaurte.com/wp-content/uploads/2025/09/Cursos-Web-Andres-Ricaurte-VENDE-MAS-CON-INTELIGENCIA-ARTIFICIAL-EN-NAVIDAD.png",
    },
  ];

  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <h2 className="text-4xl font-extrabold mb-16 font-headline text-center tracking-tight">
            Aprende a tu ritmo
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
