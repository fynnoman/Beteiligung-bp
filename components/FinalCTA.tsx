import Image from "next/image";

export default function FinalCTA() {
  return (
    <section id="kontakt" className="section bg-surface-soft">
      <div className="container-bp">
        <div className="relative rounded-panel overflow-hidden bg-brand-blue">
          {/* soft photo overlay */}
          <div className="absolute inset-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=2200&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/95 to-brand-blue/70" />

          <div className="relative p-10 md:p-14 lg:p-20 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow eyebrow--onblue mb-6">Zusammenarbeit</div>
              <h2 className="text-white text-[32px] md:text-[48px] leading-[1.08] tracking-[-0.01em]">
                Ein Executive-Search-Partner
                <br />
                für Ihr <span className="highlight-yellow">Beteiligungsportfolio</span>.
              </h2>
              <p className="mt-8 text-white/85 text-[17px] md:text-[18px] leading-[1.7] max-w-2xl">
                Mittelstandserfahrung, strukturierte Auswahl und Leadership
                Assessment. Über Branchen, Funktionen und Länder hinweg.
              </p>
              <p className="mt-5 text-white/75 text-[16px] leading-[1.7] max-w-2xl">
                Jede Beteiligung ist anders. Dennoch brauchen Investoren einen
                Partner, der Geschäftsmodelle schnell versteht, Führung
                belastbar beurteilt und Schlüsselpositionen zuverlässig besetzt.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              {/* Dual-action bar */}
              <div className="bg-white rounded-panel card-shadow overflow-hidden">
                <a
                  href="mailto:kontakt@b-p.de"
                  className="flex items-center gap-4 p-6 hover:bg-surface-soft transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-eyebrow text-ink-muted mb-1">
                      Kennenlernen vereinbaren
                    </div>
                    <div className="text-ink-primary font-bold text-[16px] group-hover:text-brand-blue transition-colors">
                      kontakt@b-p.de
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-brand-blue group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="h-px bg-ink-line" />
                <a
                  href="tel:+49"
                  className="flex items-center gap-4 p-6 hover:bg-surface-soft transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-yellow/15 text-brand-yellow-warm flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-eyebrow text-ink-muted mb-1">
                      Vertraulicher Direktkontakt
                    </div>
                    <div className="text-ink-primary font-bold text-[16px] group-hover:text-brand-blue transition-colors">
                      +49 (0) 000 000 000
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-brand-blue group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
