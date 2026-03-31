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
          <FadeIn delay={0.2} direction="up" className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125 transition-opacity hover:opacity-100">
            <span className="text-2xl font-black text-on-surface">Eurosalud</span>
            <span className="text-2xl font-black text-on-surface tracking-tighter">SALVATOR</span>
            <span className="text-2xl font-black text-on-surface italic">Terranova</span>
            <span className="text-2xl font-black text-on-surface uppercase tracking-widest">URBANIA</span>
          </FadeIn>
          <FadeIn delay={0.3} direction="up" className="max-w-4xl mx-auto w-full h-64 rounded-2xl overflow-hidden grayscale opacity-40 hover:opacity-80 transition-all soft-shadow relative">
            <Image
              alt="Team"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugz4elHzG2eX7YsXZoCId6NufBdn6gjbFvXGpkMAjnUkqr3mVrZhO9Iv4FKrEVo4Rof043p2DHjQbjR3RX8TE1tF9jfI-BVOxDxjtGuxR7gBsV2ipIC3pz2kIJ3uaxBkjdlLcWMjGz5TmOqt9fDrdKRZdgy4iBiLzUJ150wLur21PYaCZ0Tfgc2Iz5NzzlHRIBZtjrhOIO8hJFLCkPxij9ateNbbQRGE7X-fJU8qCNjaM1u7k7amZZO7LsE-z6W2_7m3fdCrBfinQ"
              fill
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
