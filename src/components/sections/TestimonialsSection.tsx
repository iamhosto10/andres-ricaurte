import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
}

function TestimonialCard({ quote, name, role, imageSrc }: TestimonialProps) {
  return (
    <div className="bg-white p-10 rounded-3xl soft-shadow border border-slate-100 flex flex-col h-full">
      <div className="flex gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-primary fill-primary" />
        ))}
      </div>
      <p className="text-on-surface mb-10 text-lg leading-relaxed italic flex-grow">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden grayscale relative">
          <Image alt={name} src={imageSrc} fill className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-sm tracking-tight">{name}</p>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Implementar la IA en nuestra captación cambió las reglas del juego. Ahora los leads llegan filtrados y listos para comprar.",
      name: "Yasmina Galeano",
      role: "CEO Sector Inmobiliario",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOf6CejiE-609mfmLEIBqPVwir92mbQJYh9sQO04B-O1Xyanm9fvqYe4-xNnQpia835Zs6ufpVWIz09BDofjwhQxCfB4-GHrWviqVZcTBTYpsHHt9gIQ9M-mOSp6TVV_nlqRRQPQPYAcruOMc1I7SCHf5u1P1WsvzgluquzkQUBbaLLUzoO87itcrGNOMzbzl02o2JD1AzFw_QiXm2h0rFsGYS6m_fnQfuFlAzTJNXxNYvVp2UIn_DwPE_nTAobYzebLZxkSTXcTlc",
    },
    {
      quote:
        "Andrés no solo sabe de marketing, entiende de negocios. Su Método CRACS es la pieza que le faltaba a mi clínica.",
      name: "Dr. Davidson Osorio",
      role: "Especialista Médico",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPUo9wLBC8DB1VSlKJwUpuJWEu9tffOZYvR4lkUNdbedON4pucz1yLxKXVRRpU1VXVrlmwPiXD4zLNV6btFVXMosnsgodnHgjQuOZiH9tQRbNeUFuoZORXhwbclAQwTgkjY27n2K_IH5Rt2zNawGMF4gvcaFkei38hdAmCi4LONlRkHLDVthx98r_0HCCs6VLAasTFXn4JTuiabNFaw1H_dlknic5kYoWBxbhc6KLZBMDjz_ucnLn1xYvt3l26EYrxrGRyxK8twB-b",
    },
    {
      quote:
        "El posicionamiento en ChatGPT nos trajo clientes internacionales que antes ni nos veían. Totalmente recomendado.",
      name: "Silvia Lopera",
      role: "Fundadora Tech Startup",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2PSyiIOgYeosGRAS9Hj4CkFkq4LRAmWXtJEdzhLQ2uvgizPSWa2lUCBbtPKdUOgvFO_dgfLlmznnGPqvzm7HQ2Efq8TNvyqbyUuUKoirQCelmilQLAbpNsDba-7qY51ai9PdRPJcp3vjD1myQ3bxR6bwXQcKlkZZJpeuU0HKbP0-Ks2Q8ezVXsSSqf37y4AABuRlUlj_qHbnI95L_rF8xYnwVfHxFTwsKkEJ5TxGHfWncd-Tdeye8KWs-1mMGuUkRx-YyHqCyGf0O",
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 font-headline tracking-tight">
          Casos de Éxito Reales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
