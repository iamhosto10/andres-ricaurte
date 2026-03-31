import { FadeIn } from "@/components/animations/FadeIn";

export default function FooterCTA() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="bg-slate-950 rounded-[2.5rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left shadow-soft-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-headline tracking-tighter">
                Trabajemos juntos
              </h2>
              <p className="text-slate-400 text-xl max-w-md leading-relaxed">
                Es momento de llevar tu negocio al futuro. Agendemos una sesión
                estratégica hoy mismo.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <button className="w-full md:w-auto bg-primary text-white text-2xl font-black px-16 py-8 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,1,1,0.3)] border-b-4 border-red-800">
                CONTACTAME
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
