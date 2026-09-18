import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-primary">
      <div className="relative min-h-[calc(100vh-84px)] md:min-h-[720px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2400&q=80"
          alt="Executive Search Beratungsgespräch"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Editorial vertical labels */}
        <div className="hidden md:flex absolute top-0 bottom-0 left-6 items-center pointer-events-none">
          <div className="rotate-180 [writing-mode:vertical-rl] text-[11px] font-semibold uppercase tracking-eyebrow text-white/70 flex items-center gap-6">
            <span>Zurück</span>
            <span className="w-8 h-px bg-white/40 rotate-90" />
            <span>Executive Search</span>
          </div>
        </div>
        <div className="hidden md:flex absolute top-0 bottom-0 right-6 items-center pointer-events-none">
          <div className="[writing-mode:vertical-rl] text-[11px] font-semibold uppercase tracking-eyebrow text-white/70 flex items-center gap-6">
            <span>Leadership Advisory</span>
            <span className="w-8 h-px bg-white/40 rotate-90" />
            <span>Weiter</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative container-bp w-full pb-24 md:pb-28">
          <div className="max-w-4xl">
            <div className="eyebrow eyebrow--onblue mb-6">
              Executive Search und Leadership Advisory
            </div>
            <h1 className="text-white text-[42px] md:text-[68px] lg:text-[80px] leading-[1.02] font-bold tracking-[-0.015em]">
              Führung für <span className="highlight-yellow">Beteiligungs­unternehmen</span>
            </h1>
            <p className="mt-8 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              Mittelstand verstehen. Führung wirksam auswählen. Wachstum personell absichern.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#kontakt" className="btn-primary !bg-white !text-brand-blue hover:!bg-brand-yellow hover:!text-ink-primary">
                Beteiligung vertraulich besprechen
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#leistungen" className="text-white/90 font-semibold text-[15px] inline-flex items-center gap-2 hover:text-white transition-colors">
                Leistungen ansehen
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Slider index */}
          <div className="mt-16 flex items-end justify-between border-t border-white/20 pt-6">
            <div className="text-white/70 text-[13px] font-semibold tracking-eyebrow uppercase">
              b+p · Ein Partner. Unterschiedliche Beteiligungen.
            </div>
            <div className="flex items-center gap-4 text-white">
              <span className="text-2xl font-bold">01</span>
              <span className="w-14 h-px bg-white/40" />
              <span className="text-sm text-white/60 font-semibold">02</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
