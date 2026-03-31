export default function TimelineSection() {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico",
      description: "Analizamos tu estado actual y detectamos las fugas de dinero en tu proceso comercial.",
      isActive: true,
    },
    {
      number: "2",
      title: "Master Class",
      description: "Formación estratégica para entender el potencial de la IA aplicado a tu nicho específico.",
      isActive: false,
    },
    {
      number: "3",
      title: "Consultoría AR",
      description: "Manos a la obra. Implementamos juntos las herramientas y automatizaciones clave.",
      isActive: false,
    },
    {
      number: "4",
      title: "Transformación",
      description: "Negocio escalable, ventas predecibles y una marca que trabaja 24/7 de forma autónoma.",
      isActive: false,
    },
  ];

  return (
    <section className="py-24 bg-inverse-surface text-inverse-on-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">
              Tu Ruta hacia la Transformación
            </h2>
            <p className="text-slate-400 text-lg max-w-md">
              Un proceso de 4 pasos diseñado para implementar el marketing con IA de forma fluida.
            </p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/20">
            Quiero mi ruta
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black mb-8 group-hover:scale-110 transition-transform ${
                  step.isActive
                    ? "bg-primary shadow-[0_0_30px_rgba(255,1,1,0.3)] text-on-primary"
                    : "bg-white/10 border border-white/5"
                }`}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-extrabold mb-3 tracking-tight">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
